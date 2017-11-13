const React = require('react');
const PropTypes = require('prop-types');
let api = require('../utils/api');

function SelectLang (props) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', 'C#'];

  return (
    <ul className='languages'>
      {languages.map(function(lang) { 
        return (
          <li 
            style={lang === props.selectedLang ? { color: '#d0021b'} : null}
            key={lang} 
            onClick={props.onSelect.bind(null, lang)}>
              {lang}
          </li>
        )
      })}
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
      repos: null
    };

    this.updateLang = this.updateLang.bind(this);
  }
  componentDidMount() {
    this.updateLang(this.state.selectedLang);
  }

  updateLang(lang) {
    this.setState(function () {
      return {
        selectedLang: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang)
    .then(function (repos) {
      this.setState(function () {
        return {
          repos: repos
        }
      })
    }.bind(this));
  }
  render() {
    return (
      <div>
        <SelectLang
          selectedLang={this.state.selectedLang} 
          onSelect={this.updateLang}
        />
        {JSON.stringify(this.state.repos, null, 2)}
      </div>
    )
  }
}

module.exports = Popular;