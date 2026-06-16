import { useState } from 'react';
import axios from '../api/axios';

const LinkCard = ({ link, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ title: link.title, url: link.url, tags: link.tags.join(', ') });

  const handleUpdate = async () => {
    try {
      await axios.put(`/links/${link._id}`, {
        title: form.title,
        url: form.url,
        tags: form.tags.split(',').map((t) => t.trim()),
      });
      setEditing(false);
      onUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
      {editing ? (
        <div className="space-y-3">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
          />
          <input
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="URL"
          />
          <input
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full bg-gray-800 text-white px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tags (comma separated)"
          />
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm transition"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-xl text-sm transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-4">
          <div>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold hover:text-blue-400 transition"
            >
              {link.title}
            </a>
            <p className="text-gray-500 text-sm mt-1 truncate">{link.url}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {link.tags.map((tag, i) => (
                <span key={i} className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setEditing(true)}
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs px-3 py-2 rounded-xl transition"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(link._id)}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs px-3 py-2 rounded-xl transition"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkCard;