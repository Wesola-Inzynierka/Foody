import './ToolsFace.css';

function ToolsFace({children}) {
  return (
    <div className="ToolsFace">
        <div className="ToolsFace_inner">
            {children}
        </div>
    </div>
  );
}

export default ToolsFace;
