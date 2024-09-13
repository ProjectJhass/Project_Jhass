import React, { useRef, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { POSTEndpoint } from '../ServicesFectch/ServicesFetch';
import { CustomModal, ErrorModal, WarningModal } from '../ModalReusable/ModalReusable';
import { EmailSender } from '../EmailSender/EmailSender';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
export const SectionRegister = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validation, setValidation] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPasswoed, setShowConfirmPasswoed] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    edad: 0,
    telefono: "",
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
      return 'El número telefónico no debe tener menos de 10 dígitos';
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

  const toggleShowPassword=()=>{
    setShowPassword(!showPassword)
  }

  const toggleShowConfirmPassword=()=>{
    setShowConfirmPasswoed(!showConfirmPasswoed)
  }

  

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
  
    // Verifica si todos los campos requeridos están llenos
    if (!validationRequiredFields()) {
      setModalContent({ title: 'Error', message: 'Por favor complete todos los campos obligatorios' });
      openModal("modal1"); // Muestra el modal de advertencia
      return;
    }
  
    // Verifica si las contraseñas coinciden
    if (!validation) {
      setModalContent({ title: 'Error', message: 'Las contraseñas no coinciden' });
      openModal("modal1"); // Muestra el modal de advertencia
      return;
    }
  
    // Verifica si hay errores en los campos
    if (errors.correo || errors.edad || errors.telefono) {
      setModalContent({ title: 'Error', message: 'Corrija los errores antes de enviar' });
      openModal("modal2"); // Muestra el modal de error
      return;
    }
  
    try {
      // Prepara el FormData
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("nombre", formData.nombre);
      formDataToSubmit.append("apellido", formData.apellido);
      formDataToSubmit.append("correo", formData.correo);
      formDataToSubmit.append("contraseña", formData.contraseña);
      formDataToSubmit.append("edad", formData.edad);
      formDataToSubmit.append("telefono", formData.telefono);
      
      // Envía los datos al endpoint
      const response = await POSTEndpoint({ URL: "api/v1/auth/register", Data: formDataToSubmit });
  
      // Verifica la respuesta
      if (response.statusCode === 400) {
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
        }, 9000);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-white mb-2" htmlFor="nombre">Nombres</label>
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
          <label className="block text-white mb-2" htmlFor="apellido">Apellidos</label>
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
        <div>
          <label className="block text-white mb-2" htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="ejemplo@gmail.com"
            className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${
              errors.correo && touched.correo ? 'ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.correo && touched.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
        </div>
        <div>
          <label className="block text-white mb-2" htmlFor="edad">Fecha de Nacimiento</label>
          <input
            type="date"
            id="edad"
            name="edad"
            onChange={handleDate}
            className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${
              errors.edad && touched.edad ? 'ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.edad && touched.edad && <p className="text-red-500 text-sm mt-1">{errors.edad}</p>}
        </div>
        <div>
          <label className="block text-white mb-2" htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Número de Teléfono"
            className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${
              errors.telefono && touched.telefono ? 'ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.telefono && touched.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
        </div>
        {/* Los campos de contraseña en la última fila */}
 <div>
          <label className="block text-white mb-2" htmlFor="contraseña">Contraseña</label>
 <div className="relative">
          <input
            type={showPassword? "text" : "password"}
            id="contraseña"
            name="contraseña"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Contraseña"
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
          type='button'
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword? <FaEyeSlash  className='text-gray-400' />:<FaEye  className='text-gray-400'/>}
          </button>
        </div>
 </div>
<div>
          <label className="block text-white mb-2" htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
<div className="relative">
          <input
            type={showConfirmPasswoed? "text" : "password"}
            id="confirmar-contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirmar Contraseña"
            className={`w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 ${
              !validation && confirmPassword ? 'ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          <button
          type='button'
          onClick={toggleShowConfirmPassword}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
                {showConfirmPasswoed ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
          </button>
        </div>
          {!validation && confirmPassword && <p className="text-red-500 text-sm mt-1">Las contraseñas no coinciden</p>}
</div>
      </div>
      {userExists && (
        <p className="text-red-500 text-sm mt-1">El usuario ya existe, intenta con otro correo.</p>
      )}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-200 ease-in-out"
      >
        Crear cuenta
      </button>
    </form>
    <div className="flex justify-center mt-4">
      <p className="text-white">¿Ya tienes una cuenta?&nbsp;
        <span
          className="text-blue-400 hover:text-blue-600 cursor-pointer hover:underline"
          onClick={handleLoginClick}
        >
          Inicia sesión
        </span>
      </p>
    </div>
  </div>
  {/* Renderización de los modales */}
  {activeModal==="modal1" && (
    <WarningModal
      isOpen={true}
      message={modalContent.message}
      onClose={closeModal}
    />
  )}
  {activeModal==="modal2" && (
    <ErrorModal
      isOpen={true}
      message={modalContent.message}
      onClose={closeModal}
    />
  )}
  {activeModal==="modal3" && (
    <CustomModal
      isOpen={true}
      title={modalContent.title}
      message={modalContent.message}
      onClose={closeModal}
      buttons={[
        {
          label: 'Aceptar',
          onClick: () => {
            navigate("/IniciarSesion");
            closeModal();
          },
          style: 'bg-blue-500 text-white rounded'
        }
      ]}
    />
  )}
  <EmailSender ref={emailSenderRef} email={formData.correo} name={formData.nombre + " " + formData.apellido} />
</div>

  
  );
};

export default SectionRegister;
