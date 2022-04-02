import './SearchBar.css';
import Button from '../Button/Button';
import SearchIcon from '../../icons/Search.svg';

function SearchBar() {
  var style = {
    backgroundColor: window.themePackage[localStorage.getItem('theme')]["searchbarBackgroundColor"],
    color: window.themePackage[localStorage.getItem('theme')]["searchbarTextColor"]
  }
  return (
    <div className='SearchBar' style={style}>
        <div className='SearchBar_inner'>
            <div className='SearchBar_field'> {window.languagePackage[localStorage.getItem('language')]['search']}</div>
            <Button href='/search' backgroundImage={SearchIcon}/>
        </div>
    </div>
  );
}

export default SearchBar;
