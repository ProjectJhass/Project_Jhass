import React, { useRef, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { POSTEndpoint } from '../ServicesFectch/ServicesFetch';
import {  CustomModal, ErrorModal, WarningModal } from '../ModalReusable/ModalReusable';
import { EmailSender } from '../EmailSender/EmailSender';

export const SectionRegister = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    edad: 0,
    telefono: ""
  });
  const [errors, setErrors] = useState({
    correo: "",
    edad: "",
    telefono: "",
    userExists: "" // Nuevo estado para manejar el error de usuario existente
  });
  const [touched, setTouched] = useState({
    correo: false,
    edad: false,
    telefono: false
  });
  const [userExists, setUserExists] = useState(false); // Nuevo estado para verificar existencia de usuario
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({title: '', message:''})
  const [activeModal, setActiveModal] = useState(null); // null significa que no hay modal activo
 
 
  const emailSenderRef=useRef(null)
 
  const openModal = (modalType) => {
    setActiveModal(modalType); // 'modal1', 'modal2', 'modal3', etc.
  };
  
  const closeModal = () => {
    setActiveModal(null); // Cerrar cualquier modal
  };
  
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLoginClick = () => {
    navigate('/IniciarSesion');
  };

  const validateEmail = (email) => {
    if (!email.includes('@') || !email.includes('.com')) {
      return 'El correo electrónico debe contener "@", y ".com"';
    }
    return '';
  };

  const validateAge = (age) => {
    if (age < 18) {
      return 'No se le permite crear una cuenta si es menor de edad';
    }
    return '';
  };

  const validatePhone = (phone) => {
    if (phone.length < 10) {
      return 'El número telefónico debe tener menos de 10 dígitos';
    }
    return '';
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const isMatch = newPassword === confirmPassword;
    setValidation(isMatch);
    setFormData({
      ...formData,
      contraseña: newPassword
    });
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    const isMatch = password === newConfirmPassword;
    setValidation(isMatch);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setTouched({
      ...touched,
      [name]: true
    });

    if (name === 'correo') {
      setErrors({
        ...errors,
        correo: validateEmail(value)
      });
    }
    if (name === 'edad') {
      setErrors({
        ...errors,
        edad: validateAge(value)
      });
    }
    if (name === 'telefono') {
      setErrors({
        ...errors,
        telefono: validatePhone(value)
      });
    }
  };

  const handleDate = (event) => {
    const contentEvent = event.target.value;
    const now = new Date();
    const nowTwo = new Date(contentEvent);
    const year = now.getFullYear();
    const yearTwo = nowTwo.getFullYear();
    const contentYear = year - yearTwo;
    setFormData({
      ...formData,
      edad: contentYear
    });

    setTouched({
      ...touched,
      edad: true
    });

    setErrors({
      ...errors,
      edad: validateAge(contentYear)
    });
  };
  const validationRequiredFields = () => {
    const requiredFields = ["nombre", "apellido", "correo", "contraseña", "edad", "telefono"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };
  

  
  const handleSubmitData = async (event) => {
    event.preventDefault();
  
    if (!validationRequiredFields()) {
      setModalContent({ title: 'Error', message: 'Por favor complete todos los campos obligatorios' });
      openModal("modal1");
      return;
    }
  
    if (!validation) {
      setModalContent({ title: 'Error', message: 'Las contraseñas no coinciden' });
      openModal("modal1");
      return;
    }
  
    if (errors.correo || errors.edad || errors.telefono) {
      setModalContent({ title: 'Error', message: 'Corrija los errores antes de enviar' });
      openModal("modal2");
      return;
    }
  
    try {
      const response = await POSTEndpoint({ URL: "api/v1/auth/register", Data: formData });
      
      if (response.statusCode === 400) { // Ajusta el código según tu implementación
        setUserExists(true);
        return;
      }
  
      if (response) {
        setModalContent({ title: "Registro Exitoso", message: "Te has registrado con éxito en Jhass, ahora debes iniciar sesión" });
        openModal("modal3");
  
        setTimeout(() => {
          if (emailSenderRef.current) {
            emailSenderRef.current.sendEmail(); // Llama al método sendEmail
          }
        }, 1000);
  
        setTimeout(() => {
          navigate("/IniciarSesion");
        }, 5000);
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };
  


  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center overflow-hidden bg-[url('https://res.cloudinary.com/dnweqtuch/image/upload/v1724450239/ContentImagesJhass/pfjiyjmlngklkvdvlu2q.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      <div className="relative bg-black bg-opacity-75 p-6 sm:p-12 rounded-lg shadow-lg max-w-md sm:max-w-4xl w-full m-[20px] z-10">
        <button
          className="absolute top-4 left-4 text-white text-xl sm:text-2xl cursor-pointer w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] flex justify-center items-center"
          onClick={handleBackClick}
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-6 sm:mb-8">Crear Cuenta</h2>
        <form onSubmit={handleSubmitData}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs md:text-base">
        <div>
        <label className="block text-white mb-2" htmlFor="nombre">
        Nombres
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombres"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
            <label className="block text-white mb-2" htmlFor="apellido">
            Apellidos
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Apellidos"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4 text-xs md:text-base">
          <label className="block text-white mb-2 " htmlFor="correo">
          Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="nombre@compañia.com"
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              onBlur={() => setTouched({ ...touched, correo: true })}
            />
            {touched.correo && errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className='text-xs md:text-base'>
            <label className="block text-white mb-2" htmlFor="password">
            Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="********"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handlePasswordChange}
              />
            </div>
            <div className='text-xs md:text-base'>
            <label className="block text-white mb-2" htmlFor="confirmPassword">
            Confirma tu Contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="********"
                className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${validation ? 'focus:ring-green-500' : 'focus:ring-red-700'}`}
                onChange={handleConfirmPasswordChange}
              />
              {touched.confirmPassword && !validation && <p className="text-red-500 text-sm">Las contraseñas no coinciden</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-xs md:text-base">
            <div>
            <label className="block text-white mb-2" htmlFor="fechaNacimiento">
            Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleDate}
              />
              {touched.edad && errors.edad && <p className="text-red-500 text-sm my-4">{errors.edad}</p>}
            </div>
            <div>
            <label className="block text-white mb-2" htmlFor="telefono">
            Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Número telefónico"
                className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onBlur={() => setTouched({ ...touched, telefono: true })}
              />
              {touched.telefono && errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
            </div>
          </div>
          {userExists && <p className="text-red-500 text-center mb-4">El usuario ya está registrado</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          >
            Crear Cuenta
          </button>
        </form>
        <div className="mt-4 flex justify-center text-xs md:text-base">
        <p className="text-center text-white mt-4">
            ¿Ya tienes una cuenta? <a href="#" className="text-blue-500 hover:underline" onClick={handleLoginClick}>Iniciar Sesion</a>
          </p>
        </div>
      </div>
      {/*Componente modal */}
      {activeModal==="modal1"&&(
      <WarningModal
      isOpen={openModal}
      message={modalContent.message}
      onClose={closeModal}
      />
     )}  
      {activeModal==="modal2"&&(
      <ErrorModal
      isOpen={openModal}
      message={modalContent.message}
      onClose={closeModal}
      />
     )}
      {activeModal==="modal3"&&(
      <CustomModal
      isOpen={openModal}
      title={modalContent.title}
      message={modalContent.message}
      buttons={[{
        label: 'Aceptar',
        onClick: ()=>{
          navigate("/IniciarSesion")
          closeModal();
        }, // Cierra el modal
        style: 'bg-green-500 text-white p-2 rounded', // Clases de Tailwind o estilos personalizados
      }]}
      />
     )}
     {/*Referencia al boton de EmailSender*/}
     <EmailSender  ref={emailSenderRef} email={formData.correo} name={formData.nombre + " "+ formData.apellido } />
    </div>



  );
};