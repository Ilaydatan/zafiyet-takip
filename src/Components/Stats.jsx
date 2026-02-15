export default function Stats({ vulns }) {
  // Hesaplamaları burada yapıyoruz
  const total = vulns.length;
  const critical = vulns.filter(v => v.severity === 'Critical').length;
  const fixed = vulns.filter(v => v.status === 'Fixed').length;
  const open = total - fixed;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {/* Kart 1: Toplam */}
      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
        <p className="text-gray-400 text-xs uppercase font-bold">Toplam Kayıt</p>
        <p className="text-2xl font-bold text-gray-700">{total}</p>
      </div>

      {/* Kart 2: Kritik */}
      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
        <p className="text-gray-400 text-xs uppercase font-bold">Kritik Risk</p>
        <p className="text-2xl font-bold text-red-600">{critical}</p>
      </div>

      {/* Kart 3: Açık */}
      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-400">
        <p className="text-gray-400 text-xs uppercase font-bold">Açık (Devam Eden)</p>
        <p className="text-2xl font-bold text-yellow-600">{open}</p>
      </div>

      {/* Kart 4: Çözülen */}
      <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
        <p className="text-gray-400 text-xs uppercase font-bold">Çözülen</p>
        <p className="text-2xl font-bold text-green-600">{fixed}</p>
      </div>
    </div>
  );
}