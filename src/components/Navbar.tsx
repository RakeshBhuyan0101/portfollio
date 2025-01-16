import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold text-white">Rakesh</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink  to="/" className={ ({isActive}) => isActive ? "" : "text-gray-400 hover:text-white" }>Home </NavLink>
            <NavLink to="/about" className={ ({isActive}) => isActive ? "" : "text-gray-400 hover:text-white" }>About</NavLink>
            <NavLink to="/works" className={ ({isActive}) => isActive ? "" : "text-gray-400 hover:text-white" }>Works</NavLink>
            <NavLink to="/contact"className={ ({isActive}) => isActive ? "" : "text-gray-400 hover:text-white" }>Contact</NavLink>
          </div>

          <button
           className="px-6 py-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
           onClick={() => {
            window.location.href = "mailto:rakeshbhuyan0101@gmail.com?subject=Let's Talk&body=Hi, I would like to discuss...";
          }}
           >
            Let's talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;