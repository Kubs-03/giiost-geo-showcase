import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="logo.PNG" alt="Logo" className="h-8 w-8 mr-2" />
        <h1 className="text-xl font-bold">GIIOST</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
