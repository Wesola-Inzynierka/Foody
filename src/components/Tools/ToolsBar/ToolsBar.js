import './ToolsBar.css';

function ToolsBar({children}) {
  return (
    <div className="ToolsBar">
        <div className="ToolsBar_inner">
            {children}
        </div>
    </div>
  );
}

export default ToolsBar;
