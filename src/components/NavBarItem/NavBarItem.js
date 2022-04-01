import './NavBarItem.css';

function NavBarItem({children, active}) {
    var activeStyle = {
        backgroundColor: window.themePackage[localStorage.getItem('theme')]["navbarActiveColor"],
      }

    if(active == true) {
        return (
            <div className="NavBarItem">
                <div className="NavBarItem_inner">
                    {children}
                    <div className='NavBarItem_active' style={activeStyle}/>
                </div>
            </div>
          );
    } else {
        return (
            <div className="NavBarItem">
                <div className="NavBarItem_inner">
                    {children}
                </div>
            </div>
          );
    }
}

export default NavBarItem;
