import './Dashboard.css';
import TopBar from '../TopBar/TopBar';

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className='Dashboard_inner'>
        <div className='Dashboard_column' id='WIDTH_70'>
          <div className='Dashboard_section'>
            <TopBar/>
          </div>
        </div>
        <div className='Dashboard_column' id='WIDTH_30'>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
