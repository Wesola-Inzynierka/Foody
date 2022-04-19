import './StartBarSection.css';

function StartBarSection({children, innerStyle, showInMobile}) {
  var style = {}
  if(showInMobile == 'only' && window.innerWidth > 768) {
    style.display = 'none';
  } else if(window.innerWidth < 768 && showInMobile == false) {
    style.display = 'none';
  }

  return (
    <section className="StartBarSection" style={style}>
        <div className="StartBarSection_inner" style={innerStyle}>
            {children}
        </div>
    </section>
  );
}

export default StartBarSection;
