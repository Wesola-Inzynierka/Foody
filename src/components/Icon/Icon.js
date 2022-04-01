import './Icon.css';

function Icon({backgroundImage, invertable}) {
    var innerStyle = {
        backgroundImage: `url(${backgroundImage})`
    }

    if(invertable == true) {
        innerStyle.filter = window.themePackage[localStorage.getItem('theme')]["iconInvert"]
    }

  return (
    <div className='Icon'>
        <div className='Icon_inner' style={innerStyle}>
        
        </div>
    </div>
  );
}

export default Icon;
