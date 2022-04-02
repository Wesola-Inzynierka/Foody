import './AppBar.css';

function AppBar({children}) {
  var style = {
    backgroundColor: window.themePackage[localStorage.getItem('theme')]["appbarBackgroundColor"],
    color: window.themePackage[localStorage.getItem('theme')]["appbarTextColor"]
  }
  return (
    <div className="AppBar" style={style}>
      <div className="AppBar_inner">
        {children}
      </div>
    </div>
  );
}

export default AppBar;
