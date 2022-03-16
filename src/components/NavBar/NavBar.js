import './NavBar.css';

function NavBar({children}) {
  return (
    <div className="NavBar">
      <div className="NavBar_inner">
        {children}
      </div>
    </div>
  );
}

export default NavBar;
