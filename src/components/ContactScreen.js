import React, { Component } from 'react';

class ContactScreen extends Component {

  constructor() {

    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      feedback: "",
      formEmailSent: false,
      formSubmitted: false,
      senderEmail: "",
    }

  }

  handleSubmit(event) {
    event.preventDefault()

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env

    this.sendFeedback(
      template,
      this.state.senderEmail,
      receiverEmail,
      this.state.feedback)

    this.setState({
      formSubmitted: true
    })
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs.send(
      'mailgun',
      templateId,
      {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        this.setState({ formEmailSent: true })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  render() {
    return (

      <div className="contactScreen">

        <form className="contact" onSubmit={this.handleSubmit}>
          <h1>Contact Graybear</h1>

          <input type="text"
              defaultValue={"Your email"}
              ref={input => this.inputField = input}
              required
              onFocus={() => this.inputField.value = ""}/>

          <textarea
                    defaultValue={"Blah blah blah"}
                    ref={input2 => this.inputField2 = input2}                  
                    required
                    onFocus={() => this.inputField2.value = ""}/>  

          <input type="submit" value="Send" />

        </form>

      </div>

    );
  }
}

export default ContactScreen;
