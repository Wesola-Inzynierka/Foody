import NavBar from '../components/NavBar/NavBar';
import Board from '../components/Board/Board';
import BoardColumn from '../components/BoardColumn/BoardColumn';
import BoardSection from '../components/BoardSection/BoardSection';
import BoardItem from '../components/BoardItem/BoardItem';

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

import ChatIcon from '../icons/Chat.svg';
import SearchBar from '../components/SearchBar/SearchBar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tools from '../components/Tools';
import AddIcon from '../icons/Add.svg';

function Discover() {
  const recipeSuccess = () => toast.success('Recipe added successfull!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
    });

    const productSuccess = () => toast.success('Product added successfull!', {
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
    <div className="Discover">
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
                <NavBarItem active={true}>
                  <Button href='/discover' backgroundColor='#6D9EE6' backgroundImage={DiscoverIcon}/>
                </NavBarItem>
                <NavBarItem active={false}>
                  <Button href='/diet' backgroundColor='#6464BB' backgroundImage={DietIcon}/>
                </NavBarItem>
              </NavBarSection>
            </NavBarSection>
          <NavBarSection>
          <NavBarSection>
            <NavBarItem active={false}>
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
          <BoardSection title={window.languagePackage[localStorage.getItem('language')]["recipes_for_you"]}>
            <BoardItem widthSize={"large"}></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
            <BoardItem></BoardItem>
          </BoardSection>
          <BoardSection title={window.languagePackage[localStorage.getItem('language')]["discover_products"]}>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
            <BoardItem heightSize={"small"}></BoardItem>
          </BoardSection>
        </BoardColumn>
        <BoardColumn widthSize={"small"}>
          <BoardSection>
          </BoardSection>
        </BoardColumn>
      </Board>
      <Tools.ToolsBoard>
        <Tools.ToolsFace>
          <Button size={"large"} href='/discover' backgroundColor='#6D9EE6' backgroundImage={AddIcon}/>
        </Tools.ToolsFace>
        <Tools.ToolsBar>
          <Button onClick={recipeSuccess} backgroundColor='#7C99DB' backgroundImage={AddIcon}/>
          <Button onClick={productSuccess} backgroundColor='#7C99DB' backgroundImage={AddIcon}/>
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

export default Discover;
