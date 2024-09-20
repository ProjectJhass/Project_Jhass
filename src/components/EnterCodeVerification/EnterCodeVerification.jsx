import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/Context';
import VerificationInput from 'react-verification-input';

export const EnterCodeVerification = () => {
  const [formData, setFormData] = useState({ verificationCode: "" });
  const [error, setError] = useState("");
  const { Verification } = useContext(AppContext);
  const navigate = useNavigate();
  const verificationRef = useRef();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleResendCodeClick = () => {
    if (verificationRef.current) {
      verificationRef.current.sendVerificationCode();
    }
  };

  const handleVerify = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.verificationCode) {
      setError("Por favor, ingresa el código de verificación.");
      return;
    }

    if (Verification === formData.verificationCode) {
      navigate("/PreEmpresa");
    } else {
      setError('Código de verificación incorrecto.');
    }
  };

  useEffect(() => {
    if (verificationRef.current) {
      verificationRef.current.sendVerificationCode();
    }
  }, []);

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('https://res.cloudinary.com/dnweqtuch/image/upload/v1724450240/ContentImagesJhass/qwnv6tsgjmwyfkvizzoq.jpg')]">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-0"></div>
      <div className="relative bg-black bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-md w-full z-10">
        <button
          className="absolute top-4 left-4 text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
          onClick={handleBackClick}
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-3xl font-bold text-center text-white mb-8">Verificación de Dos Pasos</h2>
        <form onSubmit={handleVerify} className="space-y-6">
          <div > 
            <VerificationInput
              length={6}
              value={formData.verificationCode}
              onChange={(value) => setFormData({ verificationCode: value })}
              classNames={{
                container: "flex justify-center gap-2 mb-4 ml-10" ,
                character: "w-12 h-12 bg-gray-700 border-2 border-gray-600 rounded-md text-center text-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200",
                characterSelected: "border-blue-500",
              }}
            />
            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
          >
            Verificar Código
          </button>
          <p className="text-center text-white text-sm">
            ¿No recibiste el código?{' '}
            <button
              type="button"
              className="text-blue-300 hover:underline focus:outline-none"
              onClick={handleResendCodeClick}
            >
              Reenviar código
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};
