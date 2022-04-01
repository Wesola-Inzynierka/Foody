import './NavBarSection.css';

function NavBarSection({children, innerStyle, showInMobile}) {
  var style = {}
  if(showInMobile == 'only' && window.innerWidth > 768) {
    style.display = 'none';
  } else if(window.innerWidth < 768 && showInMobile == false) {
    style.display = 'none';
  }

  return (
    <section className="NavBarSection" style={style}>
        <div className="NavBarSection_inner" style={innerStyle}>
            {children}
        </div>
    </section>
  );
}

export default NavBarSection;
