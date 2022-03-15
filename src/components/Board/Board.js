import './Board.css';

function Board({children}) {
  return (
    <div className="Board">
        <div className="Board_inner">
            {children}
        </div>
    </div>
  );
}

export default Board;
