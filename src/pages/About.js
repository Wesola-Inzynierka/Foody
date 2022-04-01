import NavBar from '../components/NavBar/NavBar';
import Board from '../components/Board/Board';
import BoardColumn from '../components/BoardColumn/BoardColumn';
import BoardSection from '../components/BoardSection/BoardSection';

import './About.css';
import ReactMarkdown from 'react-markdown'

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
import MenuIcon from '../icons/Menu.svg';

import ChatIcon from '../icons/Chat.svg';
import SearchBar from '../components/SearchBar/SearchBar';
import Tools from '../components/Tools';
import AddIcon from '../icons/Add.svg';

var markdown = `# Foody

## Aplikacja internetowa do zarządzania dietą
Celem projektu jest stworzenie systemu informatycznego, mającego ułatwić planowanie diety, liczenie kalorii i makroskładników, przygotowywanie przykładowych dań na podstawie podanych produktów, a także baza gotowych przepisów
Użytkownik ma wprowadzić swój wzrost, wagę, poziom aktywności oraz wagę docelową, a system sam obliczy ilość kalorii i makroskładników potrzebnych do osiągnięcia celu.

System podzielony został na następujące moduły:
* Jadłospis - miejsce, w którym użytkownik podaje swoje posiłki w przeciągu dnia, a system automatycznie je sumuje i wyświetla postęp. Produkty można wybrać z listy gotowych produktów, albo dodać własny produkt z uwzględnieniem jego zawartości (ilość poszczególnych makroskładników)
* Przepisy - miejsce, w którym są podane przykładowe przepisy. Są one podzielone na kategorie, np. wegetariańskie. Użytkownik może stworzyć swój własny przepis, a także dodać wybrany przepis do ulubionych. Istnieje także możliwość wyszukania gotowego przepisu, na podstawie podanych produktów.
`



function About() {
    fetch("../../README.md")
    .then((md) => {
        console.log(md)
        markdown = md
    });
  return (
    <div className="About">
      <NavBar>
        <NavBarSection innerStyle={{gap: '70px'}}>
              <NavBarSection showInMobile={false}>
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
          <NavBarSection showInMobile={false}>
            <NavBarItem active={false}>
              <Button href='/settings' backgroundImage={SettingsIcon}/>
            </NavBarItem>
            <NavBarItem active={true}>
              <Button href='/about' backgroundImage={AboutIcon}/>
            </NavBarItem>
            <NavBarItem active={false}>
              <Button href='/me' backgroundColor='#CCCCCC' backgroundImage={AvatarIcon}/>
            </NavBarItem>
          </NavBarSection>
          <NavBarSection showInMobile={"only"}>
            <NavBarItem active={false}>
              <Button backgroundColor='#CCCCCC' backgroundImage={MenuIcon}/>
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
        </BoardColumn>
        <BoardColumn widthSize={"small"}>
          <BoardSection>
          </BoardSection>
        </BoardColumn>
      </Board>
      <Board>
        <div>
        <ReactMarkdown children={markdown}></ReactMarkdown>
        </div>
      </Board>
      
    </div>
  );
}

export default About;
