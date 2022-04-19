import './AppBoardColumn.css';

function AppBoardColumn({children, widthSize}) {
  var style = {}

  if(window.innerWidth > 768) {
    if(widthSize == "small") {
      style.width = "33%";
    } else if(widthSize == "medium") {
        style.width = "47%";
    } else if(widthSize == "large") {
        style.width = "61%";
    } else if(widthSize == "full") {
      style.width = "100%";
  }
  }



  return (
    <div className="AppBoardColumn" style={style}>
        <div className="AppBoardColumn_inner">
            {children}
        </div>
    </div>
  );
}
  
export default AppBoardColumn;
  