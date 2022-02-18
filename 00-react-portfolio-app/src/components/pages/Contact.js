import React from 'react';

export default function Contact() {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <br />
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Full Name"
          id="name"
        />
        <br />
        <label>Email</label>
        <br />
        <input
          name="email"
          type="text"
          className="form-control"
          placeholder="email@mail.com"
          id="email"
        />
        <br />
        <label>Message</label>
        <br />
        <textarea></textarea>
        <br />
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