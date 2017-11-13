const React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: 'All',
    };
    this.updateLang = this.updateLang.bind(this);
  }
  updateLang(lang) {
    this.setState(function () {
      return {
        selectedLang: lang,
      }
    });
  }
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map(function(lang) { 
          return (
          <li 
            style={lang === this.state.selectedLang ? { color: '#d0021b'} : null}
            key={lang} 
            onClick={this.updateLang.bind(null, lang)}>
              {lang}
          </li>
          )
        },this)}
      
      </ul>
    )
  }
}

module.exports = Popular;