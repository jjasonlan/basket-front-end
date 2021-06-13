import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Login credentials: ' + this.state.username + '/' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form className='loginForm' onSubmit={this.handleSubmit}>
        <input className='username' type='text' id='username' name='username' required onChange={this.handleChange}/>
        <input className='password' type='password' id='password' name='password' required onChange={this.handleChange}/>
        <input className='button' type='submit' value='Login' />
      </form>
    );
  }
}

export { LoginForm };
