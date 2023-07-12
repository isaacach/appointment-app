import { Component } from 'react'
import './App.css'

export default class App extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:8080/user');
      const body = await response.json();
      this.setState({users: body});
    }
    catch (error) {
      console.log(error);
    }
  }


  render() {
    const {users} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>Users</h2>
              {users.map(user =>
                  <div key={user.id}>
                    {user.name} ({user.email})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}


