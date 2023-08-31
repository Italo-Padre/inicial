import React from 'react'
import { Button } from 'react-native'
import { Avatar, Card } from 'react-native-paper'

const Pag3 = ({navigation}) => {

    const LeftContent = props => <Avatar.Icon {...props} icon="camera" />

    const nomes = [{ nome: 'flamengo' },
    { nome: 'vasco' }]

    return (
        <>
        <Button title='Pagina 1' onPress={()=>navigation.navigate('Pagina1')}></Button>
        <Button title='Pagina 2' onPress={()=>navigation.navigate('Pagina2')}></Button>
            {nomes.map(item => (
                <Card style={{ marginBottom: 20 }}>
                    <Card.Title title={item.nome} subtitle="Card Subtitle" left={LeftContent} />
                </Card>
            ))}
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
        </>
    )
}

export default Pag3