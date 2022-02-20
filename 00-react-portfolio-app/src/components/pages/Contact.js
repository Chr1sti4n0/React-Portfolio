import React from 'react';
import '../pages/Contact.css';
import {useState} from 'react';

export default function Contact() {
  let [error, setError] = useState("");
  function handleBlur(event) {
    console.log(event.target.value)
      if (event.target.value.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/) ) {
        setError("")
        return
      } else {
        setError("Invalid email")
        console.log(error)
      }
  }
  return (
    <form>
      <div className="form-group">
        <label className='label'>Name</label>
        <br />
        <input
          name="name"
          type="text"
          className="form-name"
          placeholder="Full Name"
          id="name"
        />
        <br />
        <label className='label'>Email</label>
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
        <label className='label'>Message</label>
        <br />
        <textarea className='text-area'></textarea>
        <br />
        <span>{error}</span>
        {/* Button to Submit Contact Info */}
        <button
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

