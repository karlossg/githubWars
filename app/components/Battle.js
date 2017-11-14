const React = require('react');

class PlayerInput extends React.Component {
  render() {
    return (
      
    )
  }
}
class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: '',
      playerTwoImage: ''
    }
  
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(id, username) {
    this.setState(function () {
      let newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    })
  }

  render() {
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;
    return (
      <div>
        <div className='row'>
          {!playerOneName && 
            <PlayerInput 
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit}/>}
          
          {!playerTwoName && 
            <PlayerInput id='playerTwo'
            label='Player Two'
            onSubmit={this.handleSubmit}/>}
        </div>
      </div> 
    )
  }
}

module.exports = Battle;