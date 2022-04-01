import './BoardItem.css';

function BoardItem({children, backgroundColor, widthSize, heightSize}) {
    var style = {
        backgroundColor: window.themePackage[localStorage.getItem('theme')]["boardItemBackgroundColor"],
        color: window.themePackage[localStorage.getItem('theme')]["boardItemTextColor"]
      }
    
    if(backgroundColor != undefined) {
        style.backgroundColor = backgroundColor;
    }
    
    if(widthSize == "small") {
        style.width = "52.5px";
    } else if(widthSize == "medium") {
        style.width = "155px";
    } else if(widthSize == "large") {
        style.width = "360px";
    }

    if(heightSize == "small") {
        style.height = "52.5px";
    } else if(heightSize == "medium") {
        style.height = "155px";
    } else if(heightSize == "large") {
        style.height = "360px";
    }

    return (
      <div className="BoardItem" style={style}>
          <div className="BoardItem_inner">
              {children}
          </div>
      </div>
    );
  }
  
  export default BoardItem;
  