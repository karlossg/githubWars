const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api')

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount () {
    const players = queryString.parse(this.props.location.search);

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function(results) {
      console.log(results)
      
    })
  }
  
  render() {
    return (
      <div>Results</div>
    )
  }
}

module.exports = Results;