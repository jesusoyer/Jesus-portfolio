import React from 'react'
import { Button,TextArea, Form } from 'semantic-ui-react'

const ContactForm = () => (
  <Form>
    <label className='contactMeLabel'>Message Me</label>
    <Form.Group  widths={0}>
      <Form.Input  placeholder='Your First Name' />
      
    </Form.Group>
    <Form.Group widths={0}>
    <Form.Input  placeholder='Your Last Name' />
    </Form.Group>
    <Form.Group widths={0}>
      <Form.Input  placeholder='Your Email Address' />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      
      placeholder='Message'
      
    />
   
    <Button type='submit'>Submit</Button>
  </Form>
)

export default ContactForm;