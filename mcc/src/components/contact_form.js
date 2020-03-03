import React, {StyleSheet} from 'react';

function ComponentContactForm() {
  return (
    
<form action="https://formspree.io/{{ site.formspree_email }}" method="POST">
  <div class="form-group">
    <label for="contact_form_name">Your Name :</label>
    <input type="text" class="form-control" name="name" id="contact_form_name" placeholder="Enter Your Name">
  </div>
  <div class="form-group">
    <label for="contact_form_email">Your Email :</label>
    <input type="email" class="form-control" name="_replyto" id="contact_form_email" placeholder="Enter Your Email">
  </div>
  <div class="form-group">
    <label for="contact_form_message"> Your Message :</label>
    <textarea name="_message" class="form-control" id="contact_form_message"
      placeholder="Enter Your Message"></textarea>
  </div>
  <input type="submit" value="Send">
</form>
  );
}

const styles = StyleSheet.create({
});

export default ComponentContactForm;