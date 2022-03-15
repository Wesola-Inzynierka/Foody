var language = 'en';
var dictionary = {
  'en': {
    'search': 'Search...',
    'activity_level': 'Activity level'
  },
  'pl': {
    'search': 'Szukaj...',
    'activity_level': 'Poziom aktywności'
  }
}

function Word(props) {
  return (
    dictionary[language][props.word]
  );
}

export default Word;
