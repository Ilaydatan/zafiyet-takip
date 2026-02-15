import { useState } from 'react';

export default function VulnForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({
      id: Date.now(),
      title,
      severity,
      status: 'Open',
      date: new Date().toLocaleDateString()
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm border flex flex-col md:flex-row gap-3">
      <input 
        className="border p-2 flex-1 rounded focus:outline-blue-500" 
        value={title} 
        onChange={e => setTitle(e.target.value)} 
        placeholder="Zafiyet adı giriniz (Örn: XSS)..." 
      />
      <select 
        className="border p-2 rounded focus:outline-blue-500 bg-white" 
        value={severity} 
        onChange={e => setSeverity(e.target.value)}
      >
        <option>Critical</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold transition">
        Ekle
      </button>
    </form>
  );
}