import './NavBarItem.css';

function NavBarItem({children, active}) {
    if(active == true) {
        return (
            <div className="NavBarItem">
                <div className="NavBarItem_inner">
                    {children}
                    <div className='NavBarItem_active'/>
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
