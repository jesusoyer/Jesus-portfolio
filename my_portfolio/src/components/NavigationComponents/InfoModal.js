import React from 'react'
import "../HeaderComponents/HeaderItem.css";
import email from './navigationImages/emailImage.png';
import { Button, Header,  Modal, Grid} from 'semantic-ui-react'
import ContactForm from './ContactForm';
import ProfileCard from './ProfileCard';
import Proficiencies from './Proficiencies';

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
         <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          X
        </Button>
      </Modal.Actions>
      <Modal.Header>My Info</Modal.Header>
      <Modal.Content >
      <Grid divided columns={3} padded={'vertically'}>
    <Grid.Row  className='gridRow'>
      <Grid.Column width={5} >
      <ProfileCard />
      </Grid.Column>
      <Grid.Column width={5} >
        <Proficiencies />
      </Grid.Column>
      <Grid.Column width={5} >
        <ContactForm />

      </Grid.Column>
    </Grid.Row>
    </Grid>

        
      </Modal.Content>
     
    </Modal>
  )
}

export default InfoModal;