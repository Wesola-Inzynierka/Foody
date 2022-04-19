import './StartBar.css';

function StartBar({children}) {
  var style = {
    backgroundColor: window.themePackage[localStorage.getItem('theme')]["appbarBackgroundColor"],
    color: window.themePackage[localStorage.getItem('theme')]["appbarTextColor"]
  }
  return (
    <div className="StartBar" style={style}>
      <div className="StartBar_inner">
        {children}
      </div>
    </div>
  );
}

export default StartBar;
