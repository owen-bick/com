import React from "react";

export default function Form() {
  return (
    <form class="contact__form" name="Contact Form" method="post" data-netlify-recaptcha="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" placeholder="Steve Jobs" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" placeholder="steve@apple.com" required />
      </p>
      <p>
        <label htmlFor="tel">Phone Number</label> <br />
        <input type="tel" id="phone" name="phone" placeholder="123-456-7890" />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" placeholder="Hello, it's Steve. You're now CEO of Apple!"></textarea>
      </p>
      <p>
        <div data-netlify-recaptcha="true"></div>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  );
}