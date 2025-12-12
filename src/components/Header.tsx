import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/images/img-Logo-IEADMS.png" 
            alt="IEADMS Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-white text-xl font-bold">IEADMS</span>
        </Link>
        
        {/* Navigation menu can be added here */}
      </div>
    </header>
  );
};

export default Header;