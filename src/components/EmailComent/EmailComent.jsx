import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const EmailComent = forwardRef(({ nombre, correo, mensaje }, ref) => {

  const [emailStatus, setEmailStatus] = useState('');
  const [emailData, setEmailData] = useState({
    to: 'hoyosbolivara11@gmail.com', // Correo del receptor estático
    subject: 'Nuevo mensaje de contacto',
    
    dataTemplate: {
      nombre,
      correo,
      mensaje
    },
    
    templateContent: `
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Mensaje de Contacto</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px;">
    <tr>
    <td align="center">
    <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
    <tr>
    <td style="background-color: #ffffff; color: #000000; padding: 20px; text-align: center;">
    <h1 style="margin: 0; color: #333333;">Nuevo mensaje recibido</h1>
    </td>
    </tr>
    <tr>
    <td style="padding: 20px;">
    <h2 style="color: #333333;">De: {{nombre}}</h2>
    <h3 style="color: #333333;">Correo: {{correo}}</h3>
    <h3 style="color: #333333; line-height: 1.6;">Mensaje: {{mensaje}}</h3>
    </td>
    </tr>
    <tr>
    <td style="background-color: #f4f4f4; color: #555555; padding: 15px; text-align: center; font-size: 14px;">
    <p>Equipo de Soporte</p>
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
    console.log(nombre, correo, mensaje);
    setEmailData((prevEmailData) => ({
      ...prevEmailData,
      dataTemplate: { ...prevEmailData.dataTemplate, nombre, mensaje, correo },
    }));
  }, [nombre, correo, mensaje]);

  useImperativeHandle(ref, () => ({
    sendEmail() {
      return sendEmail();
    }
  }));

  const sendEmail = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/email/send`, {
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

  return null;
  
});
