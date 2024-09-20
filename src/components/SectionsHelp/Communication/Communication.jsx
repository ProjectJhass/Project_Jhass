import React, { useRef, useState } from 'react';
import { EmailComent } from '../../EmailComent/EmailComent';
import { InfoModal } from '../../ModalReusable/ModalReusable';

export const Communication = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({
    correo: ''
  });

  const [touched, setTouched] = useState({
    correo: false
  });

  const emailSenderRef = useRef(null); // Referencia para el componente de EmailSender
  const [openM, setOpenM] = useState(false); // Estado para controlar la visibilidad del modal
  const [modalContent, setModalContent] = useState({ title: '', message: '' }); // Estado para almacenar título y mensaje del modal

  const validateEmail = (email) => {
    if (!email.includes('@') || !email.includes('.com')) {
      return 'El correo electrónico debe contener "@" y ".com"';
    }
    return '';
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validar campos obligatorios
    if (!formData.nombre || !formData.apellido || !formData.correo || !formData.mensaje) {
      setModalContent({ 
        title: 'Error', 
        message: 'Por favor complete todos los campos' 
        
      });
      setOpenM(true);
      
      return;
    }

    // Validar correo
    if (errors.correo) {
      setModalContent({ 
        title: 'Error', 
        message: 'Corrija los errores antes de enviar' 
      });
      setOpenM(true);
      return;
    }

    // Simular envío de datos
    setModalContent({ 
      title: 'Confirmación', 
      message: 'Su correo ha sido enviado correctamente' 
    });
    setOpenM(true);

    // Enviar correo utilizando EmailSender
    if (emailSenderRef.current) {
      emailSenderRef.current.sendEmail();
    }
  };

  const closeModal = () => {
    setOpenM(false); // Cierra el modal
  };

  return (
    <div className="w-full h-full flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center justify-between">
        <div className="w-[90%] md:w-[50%] flex flex-col justify-center">
          <p className="text-4xl lg:text-5xl mb-6 font-bold font-serif text-center lg:text-left">
            Contáctenos
          </p>
          <p className="text-gray-400 text-xl lg:text-2xl mb-7 font-serif text-center lg:text-left">
            Ponte en contacto con nosotros
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
              <div className="flex flex-col w-full lg:w-1/2 mb-6 lg:mb-0">
                <p className="mb-4 text-lg lg:text-xl font-bold font-serif">Nombre</p>
                <input
                  className="border-2 rounded-lg h-10 px-4"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <p className="mb-4 text-lg lg:text-xl font-bold font-serif">Apellidos</p>
                <input
                  className="border-2 rounded-lg h-10 px-4"
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellidos"
                />
              </div>
            </div>

            <div className="mb-4">
              <p className="mb-4 text-lg lg:text-xl font-bold font-serif">Dirección del correo electrónico</p>
              <input
                className="border-2 rounded-lg w-full h-10 px-4"
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="nombre@compañia.com"
                onBlur={() => setTouched({ ...touched, correo: true })}
              />
              {touched.correo && errors.correo && <p className="text-red-500 text-sm">{errors.correo}</p>}
            </div>

            <div className="mb-5">
              <p className="mb-3 text-lg lg:text-xl font-bold font-serif">Su mensaje</p>
              <textarea
                className="border-2 rounded-lg w-full h-52 px-4 py-2"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escriba su pregunta o mensaje"
              ></textarea>
            </div>

            <button className="rounded-lg bg-[#0165FF] w-full h-12 text-white font-serif">
              Enviar
            </button>
          </form>
        </div>

        <div className="w-full h-full ml-[20px] mt-10 lg:mt-0 hidden lg:flex justify-center">
          <img className="rounded-lg" src={"https://res.cloudinary.com/dnweqtuch/image/upload/v1724450504/ContentImagesJhass/ouqu8csneugfjk0xl7oa.png"} alt="Contact us" />
        </div>
      </div>

      {/* Modal para mostrar confirmación o error */}
      {openM && (
        <InfoModal
          isOpen={openM}
          title={modalContent.title}
          // onClose={closeModal}
          message={modalContent.message}
          buttons={[
            {
              label: 'Aceptar',
              onClick: closeModal, // Cierra el modal
              style: 'bg-green-500 text-white p-2 rounded',
            },
          ]}
        />
      )}

      {/* Referencia al componente EmailSender */}
      <EmailComent ref={emailSenderRef} correo={formData.correo} nombre={formData.nombre + " " + formData.apellido} mensaje={formData.mensaje} />
    </div>
  );
};
