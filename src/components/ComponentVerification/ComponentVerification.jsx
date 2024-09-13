import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import { POSTEndpoint } from '../ServicesFectch/ServicesFetch';
import { AppContext } from '../Context/Context';

export const ComponentVerification = forwardRef(({ email, name }, ref) => {
  const [emailStatus, setEmailStatus] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const { setVerification } = useContext(AppContext);

  const sendVerificationCode = async () => {
    // Generación del código de verificación
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(code);
    console.log(`Código de verificación generado: ${code}`);
    setVerification(code);

    // Datos para la plantilla del correo electrónico
    const dataTemplate = {
      name: name,
      buttonUrl: "https://websitejhass.netlify.app/VerificationCode", // URL real para verificación
      buttonText: 'Verificación'
    };

    const emailData = {
      to: email,
      subject: 'Código de Verificación',
      dataTemplate,
      templateContent: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verification Code</title>
        </head>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px;">
                <tr>
                    <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                            <tr>
                                <td style="padding: 20px; text-align: center;">
                                    <h2 style="color: #333333;">Hola ${name},</h2>
                                    <p style="color: #666666; font-size: 16px;">Tu código de verificación es: <strong>${code}</strong></p>
                                    <a href="${dataTemplate.buttonUrl}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-top: 20px;">${dataTemplate.buttonText}</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
      `,
    };

    // Envío del correo electrónico con el código de verificación
    try {
      await POSTEndpoint({ URL: 'api/v1/email/send', Data: emailData }); // Ajusta la URL del endpoint según tu configuración
      setEmailStatus('Código de verificación enviado con éxito.');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setEmailStatus('Error al enviar el código de verificación.');
    }
  };

  // Exponer la función sendVerificationCode al componente padre mediante useImperativeHandle
  useImperativeHandle(ref, () => ({
    sendVerificationCode,
  }));

  return (
    <div>
      {emailStatus && <p>Status: {emailStatus}</p>}
    </div>
  );
});
