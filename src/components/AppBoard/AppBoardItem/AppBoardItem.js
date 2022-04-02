import './AppBoardItem.css';

function AppBoardItem({children, backgroundColor, widthSize, heightSize}) {
    var style = {
        backgroundColor: window.themePackage[localStorage.getItem('theme')]["appBoardItemBackgroundColor"],
        color: window.themePackage[localStorage.getItem('theme')]["appBoardItemTextColor"]
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
      <div className="AppBoardItem" style={style}>
          <div className="AppBoardItem_inner">
              {children}
          </div>
      </div>
    );
  }
  
  export default AppBoardItem;
  