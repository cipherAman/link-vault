import { useState } from "react";
import axios from "../api/axios";

const AddLinkModal =({onClose,onAdd})=>{
    const [form,setForm]=useState({title:'',url:'',tags:''})
    const [error,setError] = useState('');

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    };


    const handleSubmit =  async (e)=>{
        e.prevetDefault();
        try{
            await axios.post('/links',{
                title:form.title,
                url:form.url,
                tags:form.tags.spilt(',').map((t)=>t.trim()),
            });
            onAdd();
             onClose();
        } catch(err){
            setError(err.response?.data?.message || 'Something went wrong');        
        }
    }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-lg">Add New Link</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition text-xl"
          >
            ✕
          </button>
        </div>

        {error && (
          <p className="bg-red-500/10 text-red-400 text-sm px-4 py-2 rounded-lg mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
            className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="url"
            placeholder="URL"
            onChange={handleChange}
            required
            className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="tags"
            placeholder="Tags (comma separated)"
            onChange={handleChange}
            className="w-full bg-gray-800 text-white placeholder-gray-500 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Add Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLinkModal;
