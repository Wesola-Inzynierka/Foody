import './NavBarSection.css';

function NavBarSection({children, innerStyle}) {
  return (
    <section className="NavBarSection">
        <div className="NavBarSection_inner" style={innerStyle}>
            {children}
        </div>
    </section>
  );
}

export default NavBarSection;
