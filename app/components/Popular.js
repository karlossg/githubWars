const React = require('react');
const PropTypes = require('prop-types');

function SelectLang(props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', 'C++'];

  return (
    <ul className='languages'>
      {languages.map(function(lang) { 
        return (
          <li 
            style={lang === this.props.selectedLang ? { color: '#d0021b'} : null}
            key={lang} 
            onClick={this.props.onSelect.bind(null, lang)}>
              {lang}
          </li>
        )
      },this)}
    </ul>
  )
}

SelectLang.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}
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
    return (
      <div>
        <SelectLang
          selectedLang={this.state.selectedLang}
          onSelect={this.updateLang}
        />
      </div>
    )
  }
}

module.exports = Popular;