import { useState } from 'react';
import VulnForm from '../Components/VulnForm';
import VulnList from '../Components/VulnList';
import Stats from '../Components/Stats'; // Yeni eklediğimiz bileşen
import { initialVulnState } from '../Interfaces/IVulnerability';

export default function Dashboard() {
  // State yönetimi: Verilerimizi burada tutuyoruz
  const [vulns, setVulns] = useState(initialVulnState);
  
  // Yeni zafiyet ekleme fonksiyonu
  const addVuln = (v) => setVulns([v, ...vulns]);

  // Zafiyet silme fonksiyonu
  const deleteVuln = (id) => setVulns(vulns.filter(v => v.id !== id));

  // Durum güncelleme (Açık -> Çözüldü) fonksiyonu
  const updateVuln = (id) => setVulns(
    vulns.map(v => v.id === id ? { ...v, status: v.status === 'Open' ? 'Fixed' : 'Open' } : v)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* İstatistikler eklendiği için genişliği max-w-4xl yaparak daha ferah bir görünüm sağladık */}
      <div className="max-w-4xl mx-auto">
        
        {/* Başlık Bölümü */}
        <header className="text-center mb-10">
          <div className="flex justify-center mb-2">
             <span className="text-5xl">🛡️</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            Zafiyet Takip Sistemi
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Güvenlik açıklarını raporlama ve gerçek zamanlı yönetim paneli
          </p>
        </header>

        {/* 1. Bölüm: İstatistik Kartları */}
        {/* Bu kısım toplam, kritik ve çözülen sayılarını anlık gösterir */}
        <Stats vulns={vulns} />

        {/* 2. Bölüm: Yeni Kayıt Formu */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-slate-700 mb-4 ml-1">Yeni Rapor Oluştur</h2>
          <VulnForm onAdd={addVuln} />
        </div>

        {/* 3. Bölüm: Zafiyet Listesi */}
        <div>
          <h2 className="text-xl font-semibold text-slate-700 mb-4 ml-1">Kayıtlı Zafiyetler</h2>
          <VulnList 
            vulns={vulns} 
            onDelete={deleteVuln} 
            onUpdate={updateVuln} 
          />
        </div>

      </div>
    </div>
  );
}