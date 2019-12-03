import React from "react";

function Contact() {
  return (
    <>
      <h1> Plaid Me</h1>
      <h2>Let's Chat About Your Order!</h2>
      <div className="form-container">
        <div className="sform">
          <form action="" class="contact-page-form">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
              required
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              required
            />

            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <label for="country">Country</label>
            <select id="country" name="country" required className="country-select">
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label for="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Write Something.."
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
