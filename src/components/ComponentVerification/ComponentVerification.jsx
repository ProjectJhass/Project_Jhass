import React, { useState, useImperativeHandle, forwardRef } from 'react';

export const ComponentVerification = forwardRef(({ email, name }, ref) => {
  const [emailStatus, setEmailStatus] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const sendVerificationCode = async () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setVerificationCode(code);
    console.log(`Verification code generated: ${code}`);
    
    const emailData = {
      to: email,
      subject: 'Verification Code',
      dataTemplate: {
        name: name,
        buttonUrl: "https://example.com/verify", // Replace with the actual verification URL
        buttonText: 'Verify Code'
      },
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
                                    <a href="${emailData.buttonUrl}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: #ffffff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-top: 20px;">${emailData.buttonText}</a>
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

    try {
      await POSTEndpoint({ URL: 'api/v1/send-email', Data: emailData }); // Reemplaza con la URL del endpoint de tu API para enviar correos
      setEmailStatus('Código de verificación enviado con éxito.');
    } catch (error) {
      setEmailStatus('Error al enviar el código de verificación.');
    }
  };

  useImperativeHandle(ref, () => ({
    sendVerificationCode,
  }));

  return (
    <div>
      <h1>Verification Component</h1>
      <p>Email: {email}</p>
      <p>Name: {name}</p>
      <button onClick={sendVerificationCode}>Send Verification Code</button>
      <p>{emailStatus}</p>
    </div>
  );
});
