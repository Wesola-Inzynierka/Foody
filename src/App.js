
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Start from './pages/Start/Start';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Discover from './pages/Discover';
import Search from './pages/Search';
import Diet from './pages/Diet';
import Me from './pages/Me';
import Settings from './pages/Settings';
import Chat from './pages/Chat';

import themePackage from './assets/themePackage.json'
import languagePackage from './assets/languagePackage.json'

window.languagePackage = languagePackage;
window.themePackage = themePackage;
window.logged = true;


const localTheme = localStorage.getItem('theme');
if(!localTheme) {
  localStorage.setItem('theme', 'light');
}

const localLanguage = localStorage.getItem('language');
if(!localLanguage) {
  localStorage.setItem('language', 'en');
}

function App() {
  if(window.logged == false) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/  " element={<Start />}/>
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/meals" element={<Meals />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/me" element={<Me />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
