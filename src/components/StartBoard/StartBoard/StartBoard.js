import './AppBoard.css';

function AppBoard({children}) {
  var style = {
    backgroundColor: window.themePackage[localStorage.getItem('theme')]["appBoardBackgroundColor"],
    color: window.themePackage[localStorage.getItem('theme')]["appBoardTextColor"]
  }
  document.body.style.backgroundColor = window.themePackage[localStorage.getItem('theme')]["appBoardBackgroundColor"];
  return (
    <div className="AppBoard" style={style}>
        <div className="AppBoard_inner">
            {children}
        </div>
    </div>
  );
}

export default AppBoard;
