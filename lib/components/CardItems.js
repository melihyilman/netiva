const CardItems = () => {
  return (
    <div id="services-tab" className="container">
      <div className="row">
        <div className="col s12 m4 ">
          <div className="card purple darken-1 ">
            <div className="card-content white-text min-content-heigth-250">
              <span className="card-title">
                <i className="material-icons left">mobile_friendly</i>Mobil &
                Web
              </span>
              <br />
              <p>
                Güncel teknolojileri kullanarak mobile-first yaklaşımımız ile,
                hızlı, güvenli, güvenilir ve kolay kullanılabilir uygulamalar
                geliştiriyoruz.
              </p>
            </div>
            <div className="card-action pink lighten-1 center-align">
              <a className="white-text dp-block" href="/#contact-us">
                BİLGİ AL
              </a>
            </div>
          </div>
        </div>

        <div className="col s12 m4 ">
          <div className="card purple darken-1">
            <div className="card-content white-text min-content-heigth-250">
              <span className="card-title">
                <i className="material-icons left">mobile_friendly</i>Özel
                Yazılım
              </span>

              <br />
              <p>
                İhtiyaçlarınızı analiz ederek çözüm modelleri ve teklifleri
                sunuyoruz.
              </p>
            </div>
            <div className="card-action pink lighten-1 center-align">
              <a className="white-text dp-block" href="/#contact-us">
                BİLGİ AL
              </a>
            </div>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="card purple darken-1">
            <div className="card-content white-text min-content-heigth-250">
              <span className="card-title">
                <i className="material-icons left">legend_toggle</i>Veri Analizi
              </span>
              <br />
              <p>
                Büyük verilerinizin efektif kullanılması amacıyla; veri analizi,
                performans analizleri ve ilgili çözümleri sunuyoruz
              </p>
            </div>
            <div className="card-action pink lighten-1 center-align">
              <a className="white-text dp-block" href="/#contact-us">
                BİLGİ Al
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='row'>
        <div className='col s12 m5 offset-m6 right'>
          <div className='card purple darken-1'>
            <div className='card-content white-text min-content-heigth-250'>
              <span className='card-title'>
                <i className='material-icons left'>bookmarks</i>Danışmanlık
              </span>
              <br />
              <p>
                Problemlerinize sonuç odaklı yaklaşarak, optimum çözüm
                araştırmalarını yapıyoruz.
              </p>
            </div>
            <div className='card-action pink lighten-1 center-align'>
              <a className='white-text dp-block' href='#'>
                Teklif Al
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default CardItems;
