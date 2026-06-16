import { useState , useEffect}  from "react";
import { useAuth } from "../context/AuthContext";
import axios from "../api/axios";
import LinkCard from '../components/LinkCard';
import AddLinkModal from '../components/AddLinkModal';
import Navbar from '../components/Navbar';
import { useAsyncValue } from "react-router-dom";

const Home=()=>{
    const {user}=usueAuth();
    const [links,setLinks] = useState([]);
    const [showModal, setShowModal]= useState(false);

    const fetchLinks= async ()=>{
        try{
            const res=await axios.get('/links');
            setLinks(res.data);
        } catch (err){
            console.log(err);
        }
    };

    useEffect(()=>{
        fetchLinks();
    }, []);

    const handleDelete = async (id)=>{
        try{
            await axios.delete(`/links/${id}`);
            setLinks(links.filter((link)=> link._id !==id));
        } catch (err){
            console.loff(err);
        }
    };


  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-white">
            Hey, {user?.username} 👋
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            + Add Link
          </button>
        </div>

        {links.length === 0 ? (
          <p className="text-gray-500 text-center mt-20">No links yet. Add your first one.</p>
        ) : (
          <div className="grid gap-4">
            {links.map((link) => (
              <LinkCard key={link._id} link={link} onDelete={handleDelete} onUpdate={fetchLinks} />
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <AddLinkModal
          onClose={() => setShowModal(false)}
          onAdd={fetchLinks}
        />
      )}
    </div>
  );
};

export default Home;
