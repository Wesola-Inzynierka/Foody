import './AppBarItem.css';

function AppBarItem({children, active}) {
    var activeStyle = {
        backgroundColor: window.themePackage[localStorage.getItem('theme')]["appbarActiveColor"],
      }

    if(active == true) {
        return (
            <div className="AppBarItem">
                <div className="AppBarItem_inner">
                    {children}
                    <div className='AppBarItem_active' style={activeStyle}/>
                </div>
            </div>
          );
    } else {
        return (
            <div className="AppBarItem">
                <div className="AppBarItem_inner">
                    {children}
                </div>
            </div>
          );
    }
}

export default AppBarItem;
