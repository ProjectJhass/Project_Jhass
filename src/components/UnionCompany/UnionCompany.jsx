import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { GETEndpoint, POSTEndpoint } from '../ServicesFectch/ServicesFetch';
import { AppContext } from '../Context/Context';
import { ErrorModal, InfoModal } from '../ModalReusable/ModalReusable';

export const UnionCompany = () => {
  const navigate = useNavigate();
  const [contInformationCom, setContInformationCom] = useState(null);
  const { user, token } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: '',
    companyId:null,
    roleId: 1,
  });

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCreateCompany = () => {
    navigate('/Empresa');
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
  
    try {
      const companyInfo = await GETEndpoint({ URL: `api/v1/companies`, TokenGet: token });
      console.log("Company Info:", companyInfo);
  
      const matchedCompany = companyInfo.find(company => company.email === formData.email);
  
      if (matchedCompany) {
        const updatedFormData = {
          ...formData,
          companyId: matchedCompany.id_company,
          userId: user.id_usuario
        };
  
        console.log("Updated FormData:", updatedFormData);
  
        const response = await POSTEndpoint({ URL: "api/v1/auth/loginCompany", TokenPost: token, Data: updatedFormData });
        setModalMessage('¡Unión a la empresa exitosa! Se ha enviado un correo para confirmar la solicitud.');
        setTimeout(() => navigate('/Cale'), 2000);
  
        // if (response.ok) {
        //   await sendConfirmationEmail(matchedCompany.email, user.nombre);
        //   setShowSuccessModal(true);
        // } else {
        //   const errorResponse = await response.json();
        //   console.log("Error Response:", errorResponse);
        //   setModalMessage('Error al unirse a la empresa: ' + errorResponse.message);
        //   setShowErrorModal(true);
        // }
      } else {
        setModalMessage('No se encontró la empresa con el correo proporcionado o el correo no coincide.');
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error('Error en handleSubmitData:', error);
      setModalMessage('Error al intentar unirse a la empresa. Intente nuevamente.');
      setShowErrorModal(true);
    }
  };
  
  
  const sendConfirmationEmail = async (companyEmail, userName) => {
    const emailData = {
      to: companyEmail,
      subject: `Confirmación de unión de ${userName} a tu empresa`,
      dataTemplate: {
        companyName: contInformationCom?.name,
        employeeName: userName,
        acceptUrl: `https://your-website.com/accept?employee=${encodeURIComponent(userName)}&company=${encodeURIComponent(contInformationCom?.name)}`,
        rejectUrl: `https://your-website.com/reject?employee=${encodeURIComponent(userName)}&company=${encodeURIComponent(contInformationCom?.name)}`
      },
      templateContent: `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmación de unión</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px;">
          <tr>
              <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                      <tr>
                          <td style="background-color: #ffffff; color: #000000; padding: 20px; text-align: center;">
                              <h1 style="margin: 0; color: #333333;">Solicitud de Unión de Empleado</h1>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding: 20px;">
                              <p style="color: #555555; line-height: 1.6;">Hola,</p>
                              <p style="color: #555555; line-height: 1.6;">Se ha solicitado unir a <strong>{{employeeName}}</strong> a tu empresa <strong>{{companyName}}</strong>.</p>
                              <p style="color: #555555; line-height: 1.6;">¿Deseas permitir esta unión?</p>
                              <a href="{{acceptUrl}}" style="display: inline-block; background-color: #28a745; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 20px; text-align: center;">Sí, permitir</a>
                              <a href="{{rejectUrl}}" style="display: inline-block; background-color: #dc3545; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 20px; text-align: center; margin-left: 10px;">No, rechazar</a>
                          </td>
                      </tr>
                      <tr>
                          <td style="background-color: #f4f4f4; color: #555555; padding: 15px; text-align: center; font-size: 14px;">
                              <p>Gracias por tu atención.</p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>
  `
    };
  
    try {
      await POSTEndpoint({ URL: 'api/v1/email/send', Data: emailData });
    } catch (error) {
      console.error('Error al enviar el correo de confirmación:', error);
    }
  };
  

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('https://res.cloudinary.com/dnweqtuch/image/upload/v1724450240/ContentImagesJhass/qwnv6tsgjmwyfkvizzoq.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="relative bg-black bg-opacity-75 p-20 rounded-lg shadow-lg max-w-xl w-full z-10">
        <button
          className="absolute top-4 left-4 text-white text-2xl cursor-pointer"
          onClick={handleBackClick}
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-center text-white mb-8">Unirse a Empresa</h2>
        <form onSubmit={handleSubmitData}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="empresaCorreo">Correo de la Empresa</label>
            <input
              type="email"
              id="empresaCorreo"
              name="empresaCorreo"
              placeholder="Correo de la Empresa"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="personaCorreo">Correo Personal</label>
            <input
              type="email"
              id="personaCorreo"
              name="personaCorreo"
              placeholder="Correo personal"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="rol">Rol</label>
            <input
              type="text"
              id="rol"
              name="rol"
              placeholder="Rol que desempeñará"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.roleId}
              onChange={(e) => setFormData({ ...formData, roleId: e.target.value })}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Unirse a Empresa
          </button>
          <p className="text-center text-white mt-4">
            ¿Ya tienes Empresa?
            <a href="#" className="text-blue-500 hover:underline ml-3" onClick={handleCreateCompany}>
              Crear Empresa
            </a>
          </p>
        </form>
      </div>

      {/* Modales */}
      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        message={modalMessage}
      />
      <InfoModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message={modalMessage}
      />
    </div>
  );
};
