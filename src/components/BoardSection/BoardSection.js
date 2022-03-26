import './BoardSection.css';

function BoardSection({children, title, backgroundColor}) {
  if(backgroundColor != undefined) {
    var style = {
      backgroundColor: backgroundColor,
      padding: "20px",
      width: "calc(100% - 40px)"
    }
  }
  
  if(title != undefined) {
    return (
      <div className="BoardSection" style={style}>
          <div className="BoardSection_title">
            {title}
          </div>
          <div className="BoardSection_inner">
              {children}
          </div>
      </div>
    );
  } else {
    return (
      <div className="BoardSection" style={style}>
          <div className="BoardSection_inner">
              {children}
          </div>
      </div>
    );
  }
  }
  
  export default BoardSection;
  