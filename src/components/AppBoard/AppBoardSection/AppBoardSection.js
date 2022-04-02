import './AppBoardSection.css';

function AppBoardSection({children, title, backgroundColor, justifyContent, flexDirection}) {
  if(backgroundColor != undefined) {
    var style = {
      backgroundColor: backgroundColor,
      padding: "20px",
      width: "calc(100% - 40px)"
    }
  }

  var innerStyle = {
    justifyContent: justifyContent,
    flexDirection: flexDirection
  }
  
  if(title != undefined) {
    return (
      <div className="AppBoardSection" style={style}>
          <div className="AppBoardSection_title">
            {title}
          </div>
          <div className="AppBoardSection_inner" style={innerStyle}>
              {children}
          </div>
      </div>
    );
  } else {
    return (
      <div className="AppBoardSection" style={style}>
          <div className="AppBoardSection_inner" style={innerStyle}>
              {children}
          </div>
      </div>
    );
  }
  }
  
  export default AppBoardSection;
  