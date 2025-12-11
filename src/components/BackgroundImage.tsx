import React from 'react';

const BackgroundImage = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
          url('/images/background Papel/background Papel.png'),
          url('/images/background Papel/background Papel.jpg'),
          url('/images/background Papel/background-papel.png'),
          url('/images/background-papel.png')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Adicionando um indicador visual para verificar se o background está carregando */}
      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs">
        Background Teste
      </div>
      
      {/* Adicionando um overlay de cor para garantir que algo apareça */}
      <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
    </div>
  );
};

export default BackgroundImage;