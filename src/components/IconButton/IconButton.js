import './IconButton.css';
import Icon from '../Icon/Icon';

function IconButton({size, backgroundColor, href, backgroundImage, onClick}) {
    var style = {
        backgroundColor: backgroundColor
    }

    if(size == "small") {
        style.width = "30px";
        style.height = "30px";
    } else if(size == "medium") {
        style.width = "40px";
        style.height = "40px";
    } else if(size == "large") {
        style.width = "50px";
        style.height = "50px";
    }

    var iconInvertable = false;
    if(backgroundColor == undefined) {
        iconInvertable = true;
    }

  return (
    <a className='IconButton' href={href} style={style} onClick={onClick}>
        <div className='IconButton_inner'>
            <Icon backgroundImage={backgroundImage} invertable={iconInvertable}></Icon>
        </div>
    </a>
  );
}

export default IconButton;
