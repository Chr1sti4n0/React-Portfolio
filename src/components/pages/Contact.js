import React from 'react';
import '../pages/Contact.css';
// import {useState} from 'react';

export default function Contact() {
  // let [error, setError] = useState("");
  // function handleBlur(event) {
  //   console.log(event.target.value)
  //     if (event.target.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/) ) {
  //       setError("")
  //       return
  //     } else {
  //       setError("Invalid email")
  //       console.log(error)
  //     }
  // }
  return (
    <form>
      <div className="form-group">
        {/* <label className='name-text'>Name</label>
        <br />
        <input
          name="name"
          type="text"
          className="form-name"
          placeholder="Full Name"
          id="name"
        />
        <br />
        <label className='name-text'>Email</label>
        <br />
        <input
          onBlur={handleBlur}
          name="email"
          type="text"
          className="form-email"
          placeholder="email@mail.com"
          id="email"
        />
        <br />
        <label className='name-text'>Message</label>
        <br />
        <textarea className='text-area'></textarea>
        <br />
        <span>{error}</span>
        <br />
        {/* Button to Submit Contact Info */}
        {/* <button
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button> */}
        <h1 className='story'>Links to my GitHub and LinkedIn can be found in the footer. Otherwise, feel free to send me an email by 
          clicking on the button below.
        </h1>
        <button className="btn-primary5"><a href="mailto:chrisjimenez8118@gmail.com">Contact Me</a></button>
        
      </div>
    </form>
  );
}

