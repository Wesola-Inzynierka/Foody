import './BoardSection.css';

function BoardSection({children, title, backgroundColor, justifyContent, flexDirection}) {
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
      <div className="BoardSection" style={style}>
          <div className="BoardSection_title">
            {title}
          </div>
          <div className="BoardSection_inner" style={innerStyle}>
              {children}
          </div>
      </div>
    );
  } else {
    return (
      <div className="BoardSection" style={style}>
          <div className="BoardSection_inner" style={innerStyle}>
              {children}
          </div>
      </div>
    );
  }
  }
  
  export default BoardSection;
  