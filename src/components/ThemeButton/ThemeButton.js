import './ThemeButton.css';
import LightIcon from '../../icons/Light.svg';
import DarkIcon from '../../icons/Dark.svg';

import Button from '../Button/Button';

function ThemeButton({onClick}) {
    if(localStorage.getItem('theme') == "light") {
        return (
            <a className='ThemeButton'>
                <div className='ThemeButton_inner'>
                    <Button backgroundImage={LightIcon} onClick={onClick}/>
                </div>
            </a>
          );
    } else if(localStorage.getItem('theme') == "dark") {
        return (
            <a className='ThemeButton'>
                <div className='ThemeButton_inner'>
                    <Button backgroundImage={DarkIcon} onClick={onClick}/>
                </div>
            </a>
          );
    }
}

export default ThemeButton;
