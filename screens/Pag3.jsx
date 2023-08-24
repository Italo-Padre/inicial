import React from 'react'
import { Avatar, Card } from 'react-native-paper'

const Pag3 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="camera" />

    const nomes = [{ nome: 'flamengo' },
    { nome: 'vasco' }]

    return (
        <>
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