import './BoardSection.css';

function BoardSection({children}) {
    return (
      <div className="BoardSection">
          <div className="BoardSection_inner">
              {children}
          </div>
      </div>
    );
  }
  
  export default BoardSection;
  