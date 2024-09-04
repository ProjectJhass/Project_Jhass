import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';

export const EmailSender = forwardRef(({ name, email }, ref) => {

  const [emailStatus, setEmailStatus] = useState('');
  const [emailData, setEmailData] = useState({
    to: email,
    subject: 'Bienvenido a nuestro Servicio',
    dataTemplate: {
      name: name,
      buttonUrl: "https://developer--x3z8q7v5w9-c3p9e4o6j2q1d0z0h5a6s7c8w.netlify.app/IniciarSesion",
      buttonText: 'Iniciar Sesion'
    },
    templateContent: `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a JHASS</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    <tr>
                        <td style="background-color: #ffffff; color: #000000; padding: 20px; text-align: center;">
                            <img src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450502/ContentImagesJhass/ez6egg6salvkg3n6q8xt.png" alt="Logo JHASS" style="max-width: 150px; height: auto;">
                            <h1 style="margin: 0; color: #333333;">¡Bienvenido a JHASS!</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <h1 style="color: #333333; margin-top: 0;">Hola {{name}},</h1>
                            <p style="color: #555555; line-height: 1.6;">Estamos encantados de que te unas a JHASS, tu solución integral para la gestión empresarial. Con nuestra plataforma, tendrás el control total sobre tu equipo, tus recursos y tus proyectos.</p>
                            <p style="color: #555555; line-height: 1.6;">Haz clic en el botón a continuación para comenzar a explorar todas las funcionalidades que JHASS tiene para ofrecerte:</p>
                            <a href="{{buttonUrl}}" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 20px; text-align: center;">{{buttonText}}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #f4f4f4; color: #555555; padding: 15px; text-align: center; font-size: 14px;">
                            <p>Si tienes alguna pregunta, no dudes en <a href="https://project-jhass-git-developer-projectjhass-projects.vercel.app/Contactanos" style="color: #007bff; text-decoration: none;">contactarnos</a>.</p>
                            <p>Gracias por elegir JHASS.</p>
                            <p>El equipo de JHASS</p>
                            <img src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450502/ContentImagesJhass/ez6egg6salvkg3n6q8xt.png" alt="Logo JHASS" style="max-width: 100px; height: auto;">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>



`
  });

  useEffect(() => {
    setEmailData({
      to: email,
      subject: 'Welcome to Our Service',
      dataTemplate: {
        name: name,
      buttonUrl: "https://developer--x3z8q7v5w9-c3p9e4o6j2q1d0z0h5a6s7c8w.netlify.app/IniciarSesion",
        buttonText: 'Iniciar Sesion'
      },
      templateContent: `
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a JHASS</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    <tr>
                        <td style="background-color: #ffffff; color: #000000; padding: 20px; text-align: center;">
                            <img src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450502/ContentImagesJhass/ez6egg6salvkg3n6q8xt.png" alt="Logo JHASS" style="max-width: 150px; height: auto;">
                            <h1 style="margin: 0; color: #333333;">¡Bienvenido a JHASS!</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <h1 style="color: #333333; margin-top: 0;">Hola {{name}},</h1>
                            <p style="color: #555555; line-height: 1.6;">Estamos encantados de que te unas a JHASS, tu solución integral para la gestión empresarial. Con nuestra plataforma, tendrás el control total sobre tu equipo, tus recursos y tus proyectos.</p>
                            <p style="color: #555555; line-height: 1.6;">Haz clic en el botón a continuación para comenzar a explorar todas las funcionalidades que JHASS tiene para ofrecerte:</p>
                            <a href="{{buttonUrl}}" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 15px 25px; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 20px; text-align: center;">{{buttonText}}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #f4f4f4; color: #555555; padding: 15px; text-align: center; font-size: 14px;">
                            <p>Si tienes alguna pregunta, no dudes en <a href="https://project-jhass-git-developer-projectjhass-projects.vercel.app/Contactanos" style="color: #007bff; text-decoration: none;">contactarnos</a>.</p>
                            <p>Gracias por elegir JHASS.</p>
                            <p>El equipo de JHASS</p>
                            <img src="https://res.cloudinary.com/dnweqtuch/image/upload/v1724450502/ContentImagesJhass/ez6egg6salvkg3n6q8xt.png" alt="Logo JHASS" style="max-width: 100px; height: auto;">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>

`
    });
  }, [name, email]);

  useImperativeHandle(ref, () => ({
    sendEmail() {
      return sendEmail();
    }
  }));

  const sendEmail = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setEmailStatus(result.message || 'Email sent successfully');
    } catch (error) {
      setEmailStatus(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      {emailStatus && <p>Status: {emailStatus}</p>}
    </div>
  );
});
