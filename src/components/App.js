
import React, {Component} from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends Component {
  state = { 
    pageHeader: 'Naming Contests 2',
    contests: []
  }
  componentDidMount(){
    axios.get('/api/contests')
      .then(res => {
        this.setState({
          contests: res.data.contests
        });
      })
      .catch(console.error);
  }
  componentWillMount(){

  }
  render() {
    return (
      <div>
        <Header message={ this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest => 
            <ContestPreview key={contest.id} {...contest} />
          )}
            
          </div>
      </div>
    );
  }
}

export default App;