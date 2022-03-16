import './NavBarSection.css';

function NavBarSection({children, innerStyle}) {
  return (
    <div className="NavBarSection">
        <div className="NavBarSection_inner" style={innerStyle}>
            {children}
        </div>
    </div>
  );
}

export default NavBarSection;
