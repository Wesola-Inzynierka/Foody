import './NavBar.css';
import Button from '../standard/Button/Button';
import HomeIcon from '../../icons/Home.svg';
import MealsIcon from '../../icons/Meals.svg';
import DiscoverIcon from '../../icons/Discover.svg';
import DietIcon from '../../icons/Diet.svg';
import SettingsIcon from '../../icons/Settings.svg';
import AboutIcon from '../../icons/About.svg';
import AvatarIcon from '../../icons/avatar.png';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar_inner">
        <div className="NavBar_box">
          <div className="NavBar_box">
            <div className="NavBar_logo" id="LOGO">
              <div className="NavBar_logo_inner"></div>
            </div>
          </div>
          <div className="NavBar_box">
            <a className="NavBar_button">
              <Button href='/' backgroundColor='#212121' backgroundImage={HomeIcon}/>
              <div className='NavBar_active'/>
            </a>
            <a className="NavBar_button">
            <Button href='/meals' backgroundColor='#7C99DB' backgroundImage={MealsIcon}/>
            </a>
            <a className="NavBar_button">
            <Button href='/discover' backgroundColor='#6D9EE6' backgroundImage={DiscoverIcon}/>
            </a>
            <a className="NavBar_button">
              <Button href='/diet' backgroundColor='#6464BB' backgroundImage={DietIcon}/>
            </a>
          </div>
        </div>
        <div className="NavBar_box">
          <div className="NavBar_box">
            <a className="NavBar_button">
              <Button href='/settings' backgroundColor='#00000000' backgroundImage={SettingsIcon}/>
            </a>
            <a className="NavBar_button">
              <Button href='/about' backgroundColor='#00000000' backgroundImage={AboutIcon}/>
            </a>
            <a className="NavBar_button">
              <Button href='/me' backgroundColor='#CCCCCC' backgroundImage={AvatarIcon}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
