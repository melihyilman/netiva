const Revolution = () => {
  return (
    <div>
      <div className="row white-text card transparent center ">
        <h1 className="center">
          {/* <i className='material-icons medium left-align'>autorenew</i> */}
          <i className="fas fa-recycle"></i> Sürekli Gelişim İçindeyiz
          {/* <i className='material-icons medium right-align'>bubble_chart</i> */}
        </h1>
        <p className="flow-text center">
          Mutlu Müşteriler İçin Kullanıcı Deneyimlerini İnceliyoruz
        </p>
        <span className="flow-text ">Takip Ettiğimiz Bazı Teknolojiler</span>
        <p />
      </div>
      <ul className="collapsible popout white-text">
        <li>
          <div
            className="collapsible-header pink border-bottom-none"
            tabIndex={0}
          >
            <div className="row">
              <i className="fas fa-database"></i>
              Veri Analizi
            </div>
            <i className="fas fa-question-circle right hide-on-med-and-down"></i>
          </div>
          <div className="collapsible-body border-bottom-none">
            <span className="flow-text center">
              Kuruluşların her geçen gün artan verilerine karşın, bu verileri
              kuruluş için anlamlı hale getirmek amacıyla işlenip, şirket için
              anlamlı grafikler haline çevirmekteyiz. İşlenemeyen veya işlenmesi
              güç verilerin, kuruluş için faydalı hale getirilmesi için
              önemlidir. Sizde kurumunuzdaki büyük verileri anlamlı hale
              getirmek istiyorsanız, iletişime geçiniz.
            </span>
          </div>
        </li>
        <li className="active">
          <div
            className="collapsible-header pink border-bottom-none"
            tabIndex={0}
          >
            <div className="row">
              <i className="fab fa-android"></i>Makine Öğrenmesi
            </div>
            <i className="fas fa-question-circle right hide-on-med-and-down"></i>
          </div>
          <div className="collapsible-body border-bottom-none">
            <span className="flow-text center">
              Tahminleme her geçen gün rekabet açısından önem kazanmaktadır.
              Pazar alanı tahmini, satış tahmini gibi konuları modelleyerek
              ihtiyaçlarınıza yönelik çözümler sunmaktayız.
            </span>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header pink border-bottom-none"
            tabIndex={0}
          >
            <div className="row">
              <i className="fas fa-palette"></i>UI / UX Tasarımı
            </div>
            <i className="fas fa-question-circle right hide-on-med-and-down"></i>
          </div>
          <div className="collapsible-body border-bottom-none">
            <span className="flow-text center">
              Kullanıcıların özel çözümlere adapte olması zordur. Amatör olarak
              yapılan, kullanıcı yorumlarından uzak bırakılan uygulamalar,
              karmaşık oldukları için terk edilmeye mahkumdur. Mobile-first
              yaklaşımında uygulamalar yapıyoruz. Amacımız tüm cihazlardan
              responsive görünüm sağlamak.Bu konuda basit tasarımlarla ve
              kullanılması kolay arayüzlerin tasarlanmasında bizden destek
              alabilirsiniz.
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Revolution;
