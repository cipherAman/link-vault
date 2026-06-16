import  {useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Navbar = ()=>{
    const {user,logout} =useAuth()
    const navigate =useNavigate();


const handleLogout = ()=>{
    logout(),
    navigate('/login')
}

 return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <h1 className="text-white font-bold text-xl tracking-tight">
        Link<span className="text-blue-500">Vault</span>
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-400 text-sm">{user?.email}</span>
        <button
          onClick={handleLogout}
          className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;