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
            <div className="NavBar_button" id="HOME">
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
              <div className='NavBar_active'/>
            </div>
            <div className="NavBar_button" id="MEALS">
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </div>
            <div className="NavBar_button" id="DISCOVER">
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </div>
            <div className="NavBar_button" id="DIET">
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="NavBar_box">
          <div className="NavBar_box">
            <div className="NavBar_button" id="SETTINGS">
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </div>
            <div className="NavBar_button" id="AVATAR">
              <div className="NavBar_button_background">
                <div className="NavBar_button_icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
