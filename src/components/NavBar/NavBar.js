import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar_inner">
        <div className="NavBar_box">
          <div className="NavBar_box">
            <div className="NavBar_logo" id="LOGO">
              <div className="NavBar_logo_inner"></div>
            </div>
          </div>
          <div className="NavBar_box">
            <a className="NavBar_button" id="HOME" href='/'>
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
              <div className='NavBar_active'/>
            </a>
            <a className="NavBar_button" id="MEALS" href='/meals'>
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </a>
            <a className="NavBar_button" id="DISCOVER" href='/discover'>
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </a>
            <a className="NavBar_button" id="DIET" href='/diet'>
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </a>
          </div>
        </div>
        <div className="NavBar_box">
          <div className="NavBar_box">
            <a className="NavBar_button" id="SETTINGS" href='/settings'>
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </a>
            <a className="NavBar_button" id="ABOUT" href='/about'>
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </a>
            <a className="NavBar_button" id="AVATAR" href='/me'>
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
