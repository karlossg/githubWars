const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api')
const Link =require('react-router-dom').Link;

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null 
    }
  }

  componentDidMount () {
    const players = queryString.parse(this.props.location.search);

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function(results) {
      if (results === null) {
        return this.setState(function () {
          return {
            error: 'Looks like there was error. Check if both users have accounts on github',
            loading: false
          }
        });
      }
    this.setState(function () {
      return {
        error: null,
        winner: results[0],
        loser: results[1]
      }
    })
    }.bind(this));
  }
  
  render() {
    const error = this.state.error;
    const winner = this.state.winner;
    const loser = this.state.looser;
    const loading = this.state.loading;

    if (loading === true) {
      return <p>Loading</p>      
    }

    if (error === true) {
      return (
        <div>
          <p>{error}</p> 
          <Link to='/battle'>Reset</Link>
        </div>
             
      )
    }

    return (
      <div className='row'>
      <Player
        label='Winner'
        score={winner.score}
        profile={winner.profile}
      />
      <Player
        label='Loser'
        score={loser.score}
        profile={loser.profile}
      />
    </div>
    )
  }
}

module.exports = Results;