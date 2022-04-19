import AppBar from '../components/AppBar/AppBar/AppBar';
import AppBoard from '../components/AppBoard/AppBoard/AppBoard';
import AppBoardColumn from '../components/AppBoard/AppBoardColumn/AppBoardColumn';
import AppBoardSection from '../components/AppBoard/AppBoardSection/AppBoardSection';
import AppBoardItem from '../components/AppBoard/AppBoardItem/AppBoardItem';

import AppBarSection from '../components/AppBar/AppBarSection/AppBarSection';
import AppBarItem from '../components/AppBar/AppBarItem//AppBarItem';
import IconButton from '../components/IconButton/IconButton';
import Logo from '../components/Logo/Logo';
import HomeIcon from '../icons/Home.svg';
import MealsIcon from '../icons/Meals.svg';
import DiscoverIcon from '../icons/Discover.svg';
import DietIcon from '../icons/Diet.svg';
import SettingsIcon from '../icons/Settings.svg';
import MenuIcon from '../icons/Menu.svg';

import AboutIcon from '../icons/About.svg';
import AvatarIcon from '../icons/avatar.png';

import ChatIcon from '../icons/Chat.svg';
import SearchBar from '../components/SearchBar/SearchBar';
import Tools from '../components/Tools';
import AddIcon from '../icons/Add.svg';
import TopBar from '../components/TopBar/TopBar';

import ThemeButton from '../components/ThemeButton/ThemeButton';
import useTheme from '../hooks/useTheme';
import Modal from '../components/Modal/Modal';

function Home() {
  const {themeValue, changeTheme} = useTheme()
  return (
    <div className="Home">
      <AppBar>
        <AppBarSection innerStyle={{gap: '70px'}}>
              <AppBarSection showInMobile={false}>
                <Logo/>
              </AppBarSection>
              <AppBarSection>
                <AppBarItem active={true}>
                  <IconButton href='/' backgroundColor='#212121' backgroundImage={HomeIcon}/>
                </AppBarItem>
                <AppBarItem active={false}>
                  <IconButton href='/meals' backgroundColor='#7C99DB' backgroundImage={MealsIcon}/>
                </AppBarItem>
                <AppBarItem active={false}>
                  <IconButton href='/discover' backgroundColor='#6D9EE6' backgroundImage={DiscoverIcon}/>
                </AppBarItem>
                <AppBarItem active={false}>
                  <IconButton href='/diet' backgroundColor='#6464BB' backgroundImage={DietIcon}/>
                </AppBarItem>
              </AppBarSection>
            </AppBarSection>
          <AppBarSection>
          <AppBarSection showInMobile={false}>
            <AppBarItem active={false}>
              <ThemeButton onClick={changeTheme}></ThemeButton>
            </AppBarItem>
            <AppBarItem active={false}>
              <IconButton href='/settings' backgroundImage={SettingsIcon}/>
            </AppBarItem>

            <AppBarItem active={false}>
              <IconButton href='/me' backgroundColor='#CCCCCC' backgroundImage={AvatarIcon}/>
            </AppBarItem>
          </AppBarSection>
          <AppBarSection showInMobile={"only"}>
            <AppBarItem active={false}>
              <IconButton backgroundColor='#CCCCCC' backgroundImage={MenuIcon}/>
            </AppBarItem>
          </AppBarSection>
        </AppBarSection>
      </AppBar>
      <TopBar>
        <SearchBar></SearchBar>
        <IconButton href='/chat' backgroundImage={ChatIcon}/>
      </TopBar>
      <AppBoard>
        <AppBoardColumn widthSize={"large"}>
          <AppBoardSection title={window.languagePackage[localStorage.getItem('language')]["recipes_for_you"]}>
            <AppBoardItem widthSize={"large"}></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
          </AppBoardSection>
          <AppBoardSection title={window.languagePackage[localStorage.getItem('language')]["today_summary"]}>
            <AppBoardItem heightSize={"small"} backgroundColor={"#314A6E"}></AppBoardItem>
            <AppBoardItem heightSize={"small"}></AppBoardItem>
            <AppBoardItem heightSize={"small"}></AppBoardItem>
            <AppBoardItem heightSize={"small"}></AppBoardItem>
          </AppBoardSection>
        </AppBoardColumn>
        <AppBoardColumn widthSize={"small"}>
          <AppBoardSection>
          </AppBoardSection>
        </AppBoardColumn>
      </AppBoard>
    </div>
  );
}

export default Home;
