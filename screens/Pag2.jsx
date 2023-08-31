import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'


const Pag2 = ({navigation}) => {
    
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    
    return (
        <>
        <Button title='Pagina 1' onPress={()=>navigation.navigate('Pagina1')}>Pagina 1</Button>
        <Button title='Pagina 3' onPress={()=>navigation.navigate('Pagina3')}>Pagina 3</Button>
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>

        </>
    )
}

export default Pag2