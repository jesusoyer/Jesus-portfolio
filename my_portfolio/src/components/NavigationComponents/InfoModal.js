import React from 'react'
import "../HeaderComponents/HeaderItem.css";
import email from './navigationImages/emailImage.png';
import { Button, Header,  Modal, Grid} from 'semantic-ui-react'
import ContactForm from './ContactForm';
import ProfileCard from './ProfileCard';

function InfoModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className='modalButton'><img src={email} className="emailImage"></img></Button>}
      className="mainModal"
    >
      <Modal.Header>Contact Info</Modal.Header>
      <Modal.Content >
      <Grid divided='vertically'>
    <Grid.Row columns={2} >
      <Grid.Column width={8} >
      <ProfileCard />
      </Grid.Column>
      <Grid.Column width={8} >
        <ContactForm />

      </Grid.Column>
    </Grid.Row>
    </Grid>

        
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default InfoModal;