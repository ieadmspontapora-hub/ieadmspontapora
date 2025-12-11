const BackgroundImage = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1]"
      style={{
        backgroundColor: 'red', // Teste com cor sólida primeiro
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/background Papel.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Adicionando um indicador visual para verificar se o background está carregando */}
      <div className="absolute top-4 right-4 bg-white text-red-500 px-2 py-1 rounded text-xs">
        Background Teste - Você deve ver este texto!
      </div>
    </div>
  );
};