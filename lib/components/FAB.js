const FloatingActions = () => {
  return (
    <div id="fabActions" className="fixed-action-btn hide-on-load">
      <a className="btn-floating btn-large purple">
        {/* <i className='large material-icons'>help_outline</i> */}
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <ul>
        <li>
          <a
            href="#"
            data-target="mobile-menu"
            className="sidenav-trigger pink btn-floating"
          >
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li>
          <a className="btn-floating orange darken-1" href="#project-steps">
            <i className="fas fa-tasks"></i>
          </a>
        </li>
        <li>
          <a className="btn-floating green" href="/#contact-us">
            <i className="material-icons">help_outline</i>
          </a>
        </li>
        <li>
          <a className="btn-floating blue" href="#">
            <i className="material-icons">home</i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default FloatingActions;
