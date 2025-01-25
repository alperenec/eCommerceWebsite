import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-24">
      <div className="container mx-auto py-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:px-16 ">
        {/* Hakkımızda */}
        <div>
          <h4 className="font-bold mb-4">Hakkımızda</h4>
          <ul className="space-y-2">
            <li>Kariyer</li>
            <li>İletişim</li>
            <li>Bilgi Toplumu Hizmetleri</li>
            <li>Science</li>
          </ul>
        </div>
        
        {/* Bizimle Para Kazanın */}
        <div>
          <h4 className="font-bold mb-4">Bizimle Para Kazanın</h4>
          <ul className="space-y-2">
            <li>Markanızı Koruyun ve Oluşturun</li>
            <li>Amazon'da Satış Yapın</li>
            <li>Amazon'a Tedarik</li>
            <li>Ürünlerinizin Reklamını Yapın</li>
          </ul>
        </div>

        {/* Amazon Ödeme Araçları */}
        <div>
          <h4 className="font-bold mb-4">AEC Ödeme Araçları</h4>
          <ul className="space-y-2">
            <li>Kredi Kartı</li>
            <li>Taksitli Ödeme</li>
          </ul>
        </div>

        {/* Size Yardımcı Olalım */}
        <div>
          <h4 className="font-bold mb-4">Size Yardımcı Olalım</h4>
          <ul className="space-y-2">
            <li>COVID-19</li>
            <li>Kargoları Takip Edin veya Siparişleri Görüntüleyin</li>
            <li>İadeler</li>
            <li>Geri Dönüşüm</li>
            <li>Müşteri Hizmetleri</li>
          </ul>
        </div>
      </div>

      {/* En Alt Metin */}
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p className="text-sm text-gray-400 ml-10">
            © {new Date().getFullYear()} Alperen Emre Candan. Tüm Hakları
            Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
