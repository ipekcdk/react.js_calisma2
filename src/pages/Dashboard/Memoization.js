import React, { useMemo } from "react";

function Memoization() {
  const userData = useMemo(() => {
    return {
      id: 1,
      name: "İpek",
    };
  }, []); //bağımlılık arrayi
  return <div>Memoization</div>;
}

export default React.memo(Memoization);

// React.memo ile gereksiz bileşen render süreçlerinin önüne geçilir. önceki propla şimdiki prop karşılaştırılıyor, fark varsa render ediliyor.
//referansı değişmiş olan veri, componente gönderiliyor. burada React.memo, referanslar aynı mı, değil mi diye bakıyor. referansları farklı gördüğü için tekrar render ediyor. (verinin içeriği değişmese dahi bellekte tutulan verinin referansı değiştiği anda da yeniden render ediliyor, bunun önüne geçmemiz gerekiyor:)
//useMemo: OBJELER, ARRAYLER İÇİN KULLANABİLİRİZ. yani referans tipli veri belirten herhangi bir veri türü için
//useCallback: useMemo nun aksine aldığı işlevin sonucunu saklamak yerine işlevin kendisini saklar. deps olarak verilen değerleri değişmediği sürece de sakladığı işlevi döndürür. Çünkü bileşenler işlev olarak aldığı propsların referanslarını karşılaştırarak değişip değişmediğini hesaplar. FONKSİYONLAR İÇİN KULLANABİLİRİZ.
