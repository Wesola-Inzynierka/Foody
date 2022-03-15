import './TopBar.css';
import Button from '../standard/Button/Button';
import ChatIcon from '../../icons/Chat.svg';
import SearchIcon from '../../icons/Search.svg';
import Word from '../standard/Word/Word';

function TopBar() {
  return (
    <div className="TopBar">
        <div className='TopBar_inner'>
            <div className='TopBar_search'>
                <div className='TopBar_search_inner'>
                    <div> <Word word='search'/></div>
                    <Button href='/search' backgroundColor='#00000000' backgroundImage={SearchIcon}/>
                </div>
            </div>
            
            <Button href='/chat' backgroundColor='#00000000' backgroundImage={ChatIcon}/>
        </div>
    </div>
  );
}

export default TopBar;
