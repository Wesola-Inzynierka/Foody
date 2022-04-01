import React from 'react'

import NavBar from '../components/NavBar/NavBar';
import Board from '../components/Board/Board';
import BoardColumn from '../components/BoardColumn/BoardColumn';
import BoardSection from '../components/BoardSection/BoardSection';

import NavBarSection from '../components/NavBarSection/NavBarSection';
import NavBarItem from '../components/NavBarItem/NavBarItem';
import Button from '../components/standard/Button/Button';
import Logo from '../components/Logo/Logo';
import HomeIcon from '../icons/Home.svg';
import MealsIcon from '../icons/Meals.svg';
import DiscoverIcon from '../icons/Discover.svg';
import DietIcon from '../icons/Diet.svg';
import SettingsIcon from '../icons/Settings.svg';
import AboutIcon from '../icons/About.svg';
import AvatarIcon from '../icons/avatar.png';

import BoardItem from '../components/BoardItem/BoardItem';

import ChatIcon from '../icons/Chat.svg';
import SearchBar from '../components/SearchBar/SearchBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tools from '../components/Tools';
import AddIcon from '../icons/Add.svg';

import useTheme from '../hooks/useTheme';
import useLanguage from '../hooks/useLanguage';

function Settings() {
  const {themeValue, changeTheme} = useTheme()
  const {languageValue, setLanguageValue, changeLanguage} = useLanguage()

  const notify = () => toast.success('Recipe added successfull!', {
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
    <div className="Settings">
      <NavBar>
        <NavBarSection innerStyle={{gap: '70px'}}>
              <NavBarSection>
                <Logo/>
              </NavBarSection>
              <NavBarSection>
                <NavBarItem active={false}>
                  <Button href='/' backgroundColor='#212121' backgroundImage={HomeIcon}/>
                </NavBarItem>
                <NavBarItem active={false}>
                  <Button href='/meals' backgroundColor='#7C99DB' backgroundImage={MealsIcon}/>
                </NavBarItem>
                <NavBarItem active={false}>
                  <Button href='/discover' backgroundColor='#6D9EE6' backgroundImage={DiscoverIcon}/>
                </NavBarItem>
                <NavBarItem active={false}>
                  <Button href='/diet' backgroundColor='#6464BB' backgroundImage={DietIcon}/>
                </NavBarItem>
              </NavBarSection>
            </NavBarSection>
          <NavBarSection>
          <NavBarSection>
            <NavBarItem active={true}>
              <Button href='/settings' backgroundImage={SettingsIcon}/>
            </NavBarItem>
            <NavBarItem active={false}>
              <Button href='/about' backgroundImage={AboutIcon}/>
            </NavBarItem>
            <NavBarItem active={false}>
              <Button href='/me' backgroundColor='#CCCCCC' backgroundImage={AvatarIcon}/>
            </NavBarItem>
          </NavBarSection>
        </NavBarSection>
      </NavBar>
      <Board>
        <BoardColumn widthSize={"large"}>
          <BoardSection justifyContent={"space-between"}>
            <SearchBar></SearchBar>
            <Button href='/chat' backgroundImage={ChatIcon}/>
          </BoardSection>
          <BoardSection title={"Display settings"} flexDirection={"column"}>
            <BoardItem heightSize={"small"} backgroundColor={"#00000000"}>
              <button onClick={changeTheme}>{themeValue}</button>
            </BoardItem>
            <BoardItem heightSize={"small"} backgroundColor={"#00000000"}>
              <select onChange={(event) => {changeLanguage(event.target.value)}}>
                <option>None</option>
                <option value={"en"}>English</option>
                <option value={"pl"}>Polish</option>
                <option value={"de"}>German</option>
                <option value={"ru"}>Russian</option>
              </select>
            </BoardItem>
          </BoardSection>
          <BoardSection title={"Account settings"}>
          </BoardSection>
          {/* <BoardSection title={"Test section"}>
            <button onClick={notify}>Notify!</button>
          </BoardSection> */}
        </BoardColumn>
        <BoardColumn widthSize={"small"}>
          <BoardSection>
          </BoardSection>
        </BoardColumn>
      </Board>


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

export default Settings;
