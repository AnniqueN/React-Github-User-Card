import React from 'react';
import axios from 'axios'
import Card from './components/Card'
import 'semantic-ui-css/semantic.min.css'; 

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      followers: []
    };

  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/AnniqueN`)
      .then(res => this.setState(res))
  }
  render() {

    return (<Card data={this.state.data} />)
    

  }
}

export default App;
