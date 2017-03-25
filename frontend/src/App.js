import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('api/v1/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
  }

  render() {
    const { users } = this.state

    if (!users.length) { return <div>No users.</div> }

    return (
      <div className="container">
        <h1>"It's Working!!!"</h1>
        <ul>
          {users.length && users.map((user) => (
            <li key={user.id}>{user.id}) {user.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
