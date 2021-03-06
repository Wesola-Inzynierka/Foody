import AppBar from '../components/AppBar/AppBar/AppBar';
import AppBoard from '../components/AppBoard/AppBoard/AppBoard';
import AppBoardColumn from '../components/AppBoard/AppBoardColumn/AppBoardColumn';
import AppBoardSection from '../components/AppBoard/AppBoardSection/AppBoardSection';
import AppBoardItem from '../components/AppBoard/AppBoardItem/AppBoardItem';
import TopBar from '../components/TopBar/TopBar';

import AppBarSection from '../components/AppBar/AppBarSection/AppBarSection';
import AppBarItem from '../components/AppBar/AppBarItem//AppBarItem';
import IconButton from '../components/IconButton/IconButton';
import Logo from '../components/Logo/Logo';
import HomeIcon from '../icons/Home.svg';
import MealsIcon from '../icons/Meals.svg';
import DiscoverIcon from '../icons/Discover.svg';
import DietIcon from '../icons/Diet.svg';
import SettingsIcon from '../icons/Settings.svg';
import AboutIcon from '../icons/About.svg';
import AvatarIcon from '../icons/avatar.png';
import MenuIcon from '../icons/Menu.svg';

import ChatIcon from '../icons/Chat.svg';
import SearchBar from '../components/SearchBar/SearchBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tools from '../components/Tools';
import AddIcon from '../icons/Add.svg';

import ThemeButton from '../components/ThemeButton/ThemeButton';
import useTheme from '../hooks/useTheme';

function Meals() {
  const {themeValue, changeTheme} = useTheme()

  const notify = () => toast.success('Meal added successfull!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
    });

  return (
    <div className="Meals">
      <AppBar>
        <AppBarSection innerStyle={{gap: '70px'}}>
              <AppBarSection showInMobile={false}>
                <Logo/>
              </AppBarSection>
              <AppBarSection>
                <AppBarItem active={false}>
                  <IconButton href='/' backgroundColor='#212121' backgroundImage={HomeIcon}/>
                </AppBarItem>
                <AppBarItem active={true}>
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
        <AppBoardColumn widthSize={"medium"}>
          
          <AppBoardSection title={"Breakfast"} backgroundColor={window.themePackage[localStorage.getItem('theme')]["appBoardSectionBackgroundColor"]}>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
          </AppBoardSection>
          <AppBoardSection title={"Snack I"} backgroundColor={window.themePackage[localStorage.getItem('theme')]["appBoardSectionBackgroundColor"]}>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
          </AppBoardSection>
          <AppBoardSection title={"Lunch"} backgroundColor={window.themePackage[localStorage.getItem('theme')]["appBoardSectionBackgroundColor"]}>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
          </AppBoardSection>
        </AppBoardColumn>
        <AppBoardColumn widthSize={"medium"}>
          <AppBoardSection title={"Snack II"} backgroundColor={window.themePackage[localStorage.getItem('theme')]["appBoardSectionBackgroundColor"]}>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
          </AppBoardSection>
          <AppBoardSection title={"Dinner"} backgroundColor={window.themePackage[localStorage.getItem('theme')]["appBoardSectionBackgroundColor"]}>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
          </AppBoardSection>
          <AppBoardSection title={"Snack III"} backgroundColor={window.themePackage[localStorage.getItem('theme')]["appBoardSectionBackgroundColor"]}>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
            <AppBoardItem></AppBoardItem>
          </AppBoardSection>
        </AppBoardColumn>
        {/* <AppBoardColumn widthSize={"small"}>
          <AppBoardSection>
          </AppBoardSection>
        </AppBoardColumn> */}
      </AppBoard>
      <Tools.ToolsBoard>
        <Tools.ToolsFace>
          <IconButton size={"large"} href='/discover' backgroundColor='#6D9EE6' backgroundImage={AddIcon}/>
        </Tools.ToolsFace>
        <Tools.ToolsBar>
          <IconButton onClick={notify} backgroundColor='#7C99DB' backgroundImage={AddIcon}/>
        </Tools.ToolsBar>
      </Tools.ToolsBoard>

      <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
    </div>
  );
}

export default Meals;
