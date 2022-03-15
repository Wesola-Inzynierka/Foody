import NavBar from '../components/NavBar/NavBar';
import Board from '../components/Board/Board';
import BoardColumn from '../components/BoardColumn/BoardColumn';
import BoardSection from '../components/BoardSection/BoardSection';
import TopBar from '../components/TopBar/TopBar';

function Diet() {
  return (
    <div className="Diet">
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
    </div>
  );
}

export default Diet;
