import React, { Component } from 'react';


class Contact extends Component {
  constructor() {
    super();

    this.state = {
      from: '',
      message: '',
      email: ''
    };
  }

  render() {
    return (
      <section id='contact'>
        <h1><span>03.</span>Contact</h1>

        <form action="#" method="post">
          <div className='form-container'>
            <input type="text" name="from" placeholder='Name' />
            <input type="email" name="email" placeholder='Email' />
          </div>

          <textarea name="message" cols="30" rows="10" placeholder='Message' />

          <input type="submit" value="Send Message" />
        </form>
      </section>
    );
  }
}

export default Contact;