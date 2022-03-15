import NavBar from '../components/NavBar/NavBar';
import Board from '../components/Board/Board';
import BoardColumn from '../components/BoardColumn/BoardColumn';
import BoardSection from '../components/BoardSection/BoardSection';
import TopBar from '../components/TopBar/TopBar';

import './About.css';
import ReactMarkdown from 'react-markdown'

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
      <NavBar/>
      <Board>
        <BoardColumn>
          <BoardSection>
            <TopBar/>
          </BoardSection>
        </BoardColumn>
        <BoardColumn>
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
