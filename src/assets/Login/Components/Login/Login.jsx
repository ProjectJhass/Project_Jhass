import React from 'react';

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-75" style={{ backgroundImage: 'url(/images/1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-8">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="nombre@compañia.com" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="********" className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" />
              Recordarme
            </label>
            <a href="#" className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Iniciar Sesión</button>
          <p className="text-center text-white mt-4">¿No tienes una cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
