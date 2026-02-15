export default function VulnList({ vulns, onDelete, onUpdate }) {
  const getSeverityColor = (sev) => {
    switch(sev) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  return (
    <div className="space-y-3">
      {vulns.length === 0 && <p className="text-center text-gray-500 py-4">Kayıtlı zafiyet bulunamadı.</p>}
      {vulns.map(v => (
        <div key={v.id} className={`border p-4 rounded-lg flex flex-col md:flex-row justify-between items-center bg-white shadow-sm transition ${v.status === 'Fixed' ? 'opacity-60' : ''}`}>
          <div className="flex-1 mb-2 md:mb-0">
            <div className="flex items-center gap-3">
              <h3 className={`font-bold text-lg ${v.status === 'Fixed' ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {v.title}
              </h3>
              <span className={`text-xs px-2 py-0.5 rounded border ${getSeverityColor(v.severity)}`}>
                {v.severity}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Tarih: {v.date} | Durum: {v.status}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onUpdate(v.id)} className={`text-sm px-3 py-1 rounded border transition ${v.status === 'Open' ? 'text-green-600 border-green-600 hover:bg-green-50' : 'text-yellow-600 border-yellow-600 hover:bg-yellow-50'}`}>
              {v.status === 'Open' ? 'Çözüldü' : 'Geri Al'}
            </button>
            <button onClick={() => onDelete(v.id)} className="text-red-600 text-sm border border-red-600 px-3 py-1 rounded hover:bg-red-50 transition">
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}