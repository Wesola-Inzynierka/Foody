import AppBar from '../../components/AppBar/AppBar/AppBar';
import AppBoard from '../../components/AppBoard/AppBoard/AppBoard';
import AppBoardColumn from '../../components/AppBoard/AppBoardColumn/AppBoardColumn';
import AppBoardSection from '../../components/AppBoard/AppBoardSection/AppBoardSection';

import AppBarSection from '../../components/AppBar/AppBarSection/AppBarSection';
import AppBarItem from '../../components/AppBar/AppBarItem//AppBarItem';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import HomeIcon from '../../icons/Home.svg';
import MealsIcon from '../../icons/Meals.svg';
import DiscoverIcon from '../../icons/Discover.svg';
import DietIcon from '../../icons/Diet.svg';
import SettingsIcon from '../../icons/Settings.svg';
import AboutIcon from '../../icons/About.svg';
import AvatarIcon from '../../icons/avatar.png';
import MenuIcon from '../../icons/Menu.svg';

import ThemeButton from '../../components/ThemeButton/ThemeButton';
import useTheme from '../../hooks/useTheme';

function Start() {
  const {themeValue, changeTheme} = useTheme()
  return (
    <div className="Start">
      <AppBar>
        <AppBarSection innerStyle={{gap: '70px'}}>
            <AppBarSection>
                <Logo/>
            </AppBarSection>
            <AppBarSection>
                <AppBarItem active={true}>
                    <Button href='/' backgroundColor='#212121' backgroundImage={HomeIcon}/>
                </AppBarItem>
                <AppBarItem active={false}>
                    <Button href='/meals' backgroundColor='#7C99DB' backgroundImage={MealsIcon}/>
                </AppBarItem>
                <AppBarItem active={false}>
                    <Button href='/discover' backgroundColor='#6D9EE6' backgroundImage={DiscoverIcon}/>
                </AppBarItem>
                <AppBarItem active={false}>
                    <Button href='/diet' backgroundColor='#6464BB' backgroundImage={DietIcon}/>
                </AppBarItem>
            </AppBarSection>
        </AppBarSection>
        <AppBarSection>
          <AppBarSection>
            <AppBarItem active={false}>
              <ThemeButton onClick={changeTheme}></ThemeButton>
            </AppBarItem>
            <AppBarItem active={false}>
              <Button href='/settings' backgroundImage={SettingsIcon}/>
            </AppBarItem>

            <AppBarItem active={false}>
              <Button href='/me' backgroundColor='#CCCCCC' backgroundImage={AvatarIcon}/>
            </AppBarItem>
          </AppBarSection>
          <AppBarSection showInMobile={"only"}>
            <AppBarItem active={false}>
              <Button backgroundColor='#CCCCCC' backgroundImage={MenuIcon}/>
            </AppBarItem>
          </AppBarSection>
        </AppBarSection>
      </AppBar>
      <AppBoard>
        <AppBoardColumn>
          <AppBoardSection>
          </AppBoardSection>
        </AppBoardColumn>
        <AppBoardColumn>
          <AppBoardSection>
          </AppBoardSection>
        </AppBoardColumn>
      </AppBoard>
    </div>
  );
}

export default Start;
