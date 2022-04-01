import React from 'react'

export default () => {
    const [themeValue, setThemeValue] = React.useState(localStorage.getItem('theme'))
  
    // React.useEffect(() => {
    //     window.addEventListener('mousemove', () => {setThemeValue(localStorage.getItem('theme'))})
    //   })

    const changeTheme = () => {
    if(localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark');
        setThemeValue('dark');
    } else if(localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme', 'light');
        setThemeValue('light');
    }
    };
  
    return {
      themeValue, setThemeValue, changeTheme
    }
  }