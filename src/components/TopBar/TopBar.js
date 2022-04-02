import './TopBar.css';

function TopBar({children}) {
  return (
    <div className="TopBar">
        <div className="TopBar_inner">
            {children}
        </div>
    </div>
  );
}

export default TopBar;
