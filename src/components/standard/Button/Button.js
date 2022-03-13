import './Button.css';

function Button(props) {
    const backgroundStyle = {
        backgroundColor: props.backgroundColor
    }
    const iconStyle = {
        backgroundImage: `url(${props.backgroundImage})`
    }
  return (
    <a className='Button' href={props.href}>
        <div className='Button_background' style={backgroundStyle}>
            <div className='Button_icon' style={iconStyle}>
            
            </div>
        </div>
    </a>
  );
}

export default Button;
