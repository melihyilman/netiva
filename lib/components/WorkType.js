const Revolution = () => {
  return (
    <div id="project-steps" className="bg-sections">
      <div className="row white-text card transparent center  ">
        <h1 className="center">Proje Süreçlerimiz</h1>

        <span className="flow-text ">Çalışma Süreçlerimizin Özeti</span>
        <p />
      </div>
      <ul id="about-work" className="collapsible popout white-text">
        <li>
          <div
            className="collapsible-header pink border-bottom-none "
            tabIndex={0}
          >
            <div className="row">
              <i className="fas fa-search"></i>
              İhtiyaç Analizleri Yapılması
            </div>
            <i className="fas fa-question-circle right hide-on-med-and-down"></i>
          </div>
          <div className="collapsible-body border-bottom-none center">
            <img className="fixed-img" src="/svg/01-analyze.svg"></img>
            <div>
              <span className="flow-text center">
                Problemin belirlenmesi, ihtiyaçların listelenmesi ve çözüm
                önerileri analiz edilir.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header pink border-bottom-none"
            tabIndex={0}
          >
            <div className="row">
              <i className="fas fa-layer-group"></i>Uygulamanın Prototipi
              Oluşturulması
            </div>
            <i className="fas fa-question-circle right hide-on-med-and-down"></i>
          </div>
          <div className="collapsible-body border-bottom-none center">
            <img className="fixed-img" src="/svg/02-proto.svg"></img>
            <div>
              <span className="flow-text center">
                Optimum olarak seçilen çözüm önerisi ile ilgili prototip
                oluşturulur. Arayüz tasarımları yapılır. İhtiyaca yönelik web
                veya mobil uygulaması için demo hazırlanır.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header pink border-bottom-none"
            tabIndex={0}
          >
            <div className="row">
              <i className="fas fa-code"></i>Uygulamanın Hazırlanması
            </div>
            <i className="fas fa-question-circle right hide-on-med-and-down"></i>
          </div>
          <div className="collapsible-body border-bottom-none center">
            <img className="fixed-img" src="/svg/03-build.svg"></img>
            <div>
              <span className="flow-text center">
                Prototipi hazırlanan uygulama için ihtiyaçlara yönelik arka plan
                işlemleri, performans düzenlemeleri, gerekli entegrasyonlar,
                hedeflenen işlemlerin yapılması ve prototipte düzenleme
                ihtiyaçları tekrar incelenir. Kullanım kolaylığı sağlayacak
                özellikler bu aşamada dahil edilebilir. Uygulama tanıtımı yine
                bu aşamada yapılır.
              </span>
            </div>
          </div>
        </li>
        <li>
          <div
            className="collapsible-header pink border-bottom-none"
            tabIndex={0}
          >
            <div className="row">
              <i className="fas fa-tasks"></i>Projenin Tamamlanması
            </div>
            <i className="fas fa-question-circle right hide-on-med-and-down"></i>
          </div>
          <div className="collapsible-body border-bottom-none center">
            <img className="fixed-img" src="/svg/04-live-test.svg"></img>
            <div>
              <span className="flow-text center">
                Uygulamananın canlı testleri, eğitimleri tamamlanır. Eğer ek
                geliştirme istenirse lisans bakımları kapsamında gereği yapılır.
                Müşteri uygulamaya hakim olması sağlanır, proje tamamlanır.
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Revolution;
