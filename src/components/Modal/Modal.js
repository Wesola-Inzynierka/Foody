import './Modal.css';

function Modal({children, title, show}) {
    var backgroundStyle = {
        display: "none"
    };
    var style = {
        backgroundColor: window.themePackage[localStorage.getItem('theme')]["modalBackgroundColor"],
        color: window.themePackage[localStorage.getItem('theme')]["modalTextColor"]
    }
  return (
    <div className="Modal_background">
        <div className="Modal" style={style}>
            <div className="Modal_header">
                <div className="Modal_title">{title}</div>
            </div>
            <div className="Modal_inner">
                {children}
            </div>
            <div className="Modal_footer">

            </div>
        </div>
    </div>
    
  );
}

export default Modal;
