import NavBar from '../components/NavBar/NavBar';
import Board from '../components/Board/Board';
import BoardColumn from '../components/BoardColumn/BoardColumn';
import BoardSection from '../components/BoardSection/BoardSection';
import BoardItem from '../components/BoardItem/BoardItem';
import TopBar from '../components/TopBar/TopBar';

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

function Home() {
  return (
    <div className="Home">
      <NavBar>
        <NavBarSection innerStyle={{gap: '70px'}}>
              <NavBarSection>
                <Logo/>
              </NavBarSection>
              <NavBarSection>
                <NavBarItem active={true}>
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
            <NavBarItem active={false}>
              <Button href='/settings' backgroundColor='#00000000' backgroundImage={SettingsIcon}/>
            </NavBarItem>
            <NavBarItem active={false}>
              <Button href='/about' backgroundColor='#00000000' backgroundImage={AboutIcon}/>
            </NavBarItem>
            <NavBarItem active={false}>
              <Button href='/me' backgroundColor='#CCCCCC' backgroundImage={AvatarIcon}/>
            </NavBarItem>
          </NavBarSection>
        </NavBarSection>
      </NavBar>
      <Board>
        <BoardColumn widthSize={"large"}>
          <BoardSection>
            <TopBar/>
          </BoardSection>
          <BoardSection title={"Recipes for you"}>
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
          <BoardSection title={"Today summary"}>
            <BoardItem heightSize={"small"} backgroundColor={"#314A6E"}></BoardItem>
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
    </div>
  );
}

export default Home;
