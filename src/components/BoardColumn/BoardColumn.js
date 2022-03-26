import './BoardColumn.css';

function BoardColumn({children, widthSize}) {
  var style = {
    width: "50%"
  }

  if(widthSize == "small") {
    style.width = "33%";
} else if(widthSize == "medium") {
    style.width = "47%";
} else if(widthSize == "large") {
    style.width = "61%";
}

  return (
    <div className="BoardColumn" style={style}>
        <div className="BoardColumn_inner">
            {children}
        </div>
    </div>
  );
}
  
export default BoardColumn;
  