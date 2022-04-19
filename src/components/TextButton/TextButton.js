import './TextButton.css';

function TextButton({size, backgroundColor, textColor, href, value, onClick}) {
    var style = {
        backgroundColor: backgroundColor,
        color: textColor
    }

    if(size == "small") {
        style.height = "30px";
    } else if(size == "medium") {
        style.height = "40px";
    } else if(size == "large") {
        style.height = "50px";
    }

  return (
    <a className='TextButton' href={href} style={style} onClick={onClick}>
        <div className='TextButton_inner'>
            {value}
        </div>
    </a>
  );
}

export default TextButton;
