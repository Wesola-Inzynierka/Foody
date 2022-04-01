import React from 'react'

export default () => {
    const [languageValue, setLanguageValue] = React.useState(localStorage.getItem('language'))
  
    // React.useEffect(() => {
    //     window.addEventListener('mousemove', () => {setlanguageValue(localStorage.getItem('language'))})
    //   })

    const changeLanguage = (language) => {
      localStorage.setItem('language', language);
      setLanguageValue(language);
    };
  
    return {
      languageValue, setLanguageValue, changeLanguage
    }
  }