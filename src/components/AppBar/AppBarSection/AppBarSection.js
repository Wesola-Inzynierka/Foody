import './AppBarSection.css';

function AppBarSection({children, innerStyle, showInMobile}) {
  var style = {}
  if(showInMobile == 'only' && window.innerWidth > 768) {
    style.display = 'none';
  } else if(window.innerWidth < 768 && showInMobile == false) {
    style.display = 'none';
  }

  return (
    <section className="AppBarSection" style={style}>
        <div className="AppBarSection_inner" style={innerStyle}>
            {children}
        </div>
    </section>
  );
}

export default AppBarSection;
