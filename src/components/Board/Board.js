import './Board.css';

function Board({children}) {
  var style = {
    backgroundColor: window.themePackage[localStorage.getItem('theme')]["boardBackgroundColor"],
    color: window.themePackage[localStorage.getItem('theme')]["boardTextColor"]
  }
  document.body.style.backgroundColor = window.themePackage[localStorage.getItem('theme')]["boardBackgroundColor"];
  return (
    <div className="Board" style={style}>
        <div className="Board_inner">
            {children}
        </div>
    </div>
  );
}

export default Board;
