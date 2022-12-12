import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProfileCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Jesus Oyervides Jr</Card.Header>
      <Card.Meta>
        <span className='date'>Web Developer since 2021</span>
      </Card.Meta>
      <Card.Description>
        
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='email' />
        <div>Email: oyervidesjesus017@gmail.com</div>
      </a>
    </Card.Content>
  </Card>
)

export default ProfileCard;

