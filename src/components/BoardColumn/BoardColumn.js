import './BoardColumn.css';

function BoardColumn({children}) {
    return (
      <div className="BoardColumn">
          <div className="BoardColumn_inner">
              {children}
          </div>
      </div>
    );
  }
  
  export default BoardColumn;
  