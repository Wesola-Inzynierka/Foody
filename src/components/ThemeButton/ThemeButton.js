import './ThemeButton.css';
import LightIcon from '../../icons/Light.svg';
import DarkIcon from '../../icons/Dark.svg';

import IconButton from '../IconButton/IconButton';

function ThemeButton({onClick}) {
    if(localStorage.getItem('theme') == "light") {
        return (
            <a className='ThemeButton'>
                <div className='ThemeButton_inner'>
                    <IconButton backgroundImage={LightIcon} onClick={onClick}/>
                </div>
            </a>
          );
    } else if(localStorage.getItem('theme') == "dark") {
        return (
            <a className='ThemeButton'>
                <div className='ThemeButton_inner'>
                    <IconButton backgroundImage={DarkIcon} onClick={onClick}/>
                </div>
            </a>
          );
    }
}

export default ThemeButton;
