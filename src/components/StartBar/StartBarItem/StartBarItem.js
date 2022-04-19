import './StartBarItem.css';

function StartBarItem({children, active}) {
    var activeStyle = {
        backgroundColor: window.themePackage[localStorage.getItem('theme')]["appbarActiveColor"],
      }

    if(active == true) {
        return (
            <div className="StartBarItem">
                <div className="StartBarItem_inner">
                    {children}
                    <div className='StartBarItem_active' style={activeStyle}/>
                </div>
            </div>
          );
    } else {
        return (
            <div className="StartBarItem">
                <div className="StartBarItem_inner">
                    {children}
                </div>
            </div>
          );
    }
}

export default StartBarItem;
