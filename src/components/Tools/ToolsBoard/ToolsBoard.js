import './ToolsBoard.css';

function ToolsBoard({children}) {
  return (
    <div className="ToolsBoard">
        <div className="ToolsBoard_inner">
            {children}
        </div>
    </div>
  );
}

export default ToolsBoard;
