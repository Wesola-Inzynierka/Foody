import StartBar from '../../components/StartBar/StartBar/StartBar';
import AppBoard from '../../components/AppBoard/AppBoard/AppBoard';
import AppBoardColumn from '../../components/AppBoard/AppBoardColumn/AppBoardColumn';
import AppBoardSection from '../../components/AppBoard/AppBoardSection/AppBoardSection';

import StartBarSection from '../../components/StartBar/StartBarSection/StartBarSection';
import StartBarItem from '../../components/StartBar/StartBarItem//StartBarItem';
import IconButton from '../../components/IconButton/IconButton';
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
import TextButton from '../../components/TextButton/TextButton';

function Start() {
  const {themeValue, changeTheme} = useTheme()
  return (
    <div className="Start">
      <StartBar>
        <StartBarSection innerStyle={{gap: '80px'}}>
          <StartBarSection>
            <StartBarItem active={false}>
              <Logo/>
            </StartBarItem>
          </StartBarSection>
          <StartBarSection>
            <StartBarItem active={false}>
              <ThemeButton onClick={changeTheme}></ThemeButton>
            </StartBarItem>
          </StartBarSection>
        </StartBarSection>
        <StartBarSection>
          <StartBarItem active={false}>
              <TextButton value={"Sign on"} backgroundColor={"#CF113F"} textColor={"#FFFFFF"}></TextButton>
          </StartBarItem>
          <StartBarItem active={false}>
              <TextButton value={"Sign in"} backgroundColor={"#349951"} textColor={"#FFFFFF"}></TextButton>
          </StartBarItem>
        </StartBarSection>
      </StartBar>
      <AppBoard>
        <AppBoardColumn widthSize={"large"}>
          <AppBoardSection>
            aaa
          </AppBoardSection>
        </AppBoardColumn>
        <AppBoardColumn widthSize={"small"}>
          <AppBoardSection title={"Sign in"} backgroundColor={window.themePackage[localStorage.getItem('theme')]["appBoardSectionBackgroundColor"]}>
          </AppBoardSection>
        </AppBoardColumn>
      </AppBoard>
    </div>
  );
}

export default Start;
