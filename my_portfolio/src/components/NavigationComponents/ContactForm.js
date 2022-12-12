import React from 'react'
import { Button,TextArea, Form } from 'semantic-ui-react'

const ContactForm = () => (
  <Form>
    <label className='contactMeLabel'>Contact Me</label>
    <Form.Group  widths={0}>
      <Form.Input label='Your First Name' placeholder='Your First Name' />
      
    </Form.Group>
    <Form.Group widths={0}>
    <Form.Input label='Your Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Group widths={0}>
      <Form.Input label='Your Email Address' placeholder='Email Address' />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message Me'
      placeholder='message'
      
    />
   
    <Button type='submit'>Submit</Button>
  </Form>
)

export default ContactForm;