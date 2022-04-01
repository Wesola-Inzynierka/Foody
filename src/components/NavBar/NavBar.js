import './NavBar.css';

function NavBar({children}) {
  var style = {
    backgroundColor: window.themePackage[localStorage.getItem('theme')]["navbarBackgroundColor"],
    color: window.themePackage[localStorage.getItem('theme')]["navbarTextColor"]
  }
  return (
    <div className="NavBar" style={style}>
      <div className="NavBar_inner">
        {children}
      </div>
    </div>
  );
}

export default NavBar;
