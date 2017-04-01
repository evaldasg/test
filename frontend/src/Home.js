
import React from 'react'

export default class Home extends React.Component {
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

    if (!users.length) { return <div>No users</div> }

    return (
      <div className="container">
        <h3 className="pt-4">"It's Working!!!"</h3>
        <div className="list-group">
          {users.length && users.map((user) => (
            <a key={user.id}
              href="#"
              className="list-group-item list-group-item-action">
              {`${user.id}) ${user.first_name} ${user.last_name}`}
            </a>
          ))}
        </div>
      </div>
    )
  }
}
