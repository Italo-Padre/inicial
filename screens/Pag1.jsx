import React from 'react'
import Botoes from '../components/Botoes'
import Card from '../components/Card'
import { Button, Text } from 'react-native'


const Pag1 = () => {
    return (
        <>
            Pag1
            <Botoes />
            <Card titulo="primeiro" >
                <Text>children</Text>
            </Card>
            <Card titulo="segundo" >
                <Button title='botao' />
            </Card>
            <Card titulo="terceiro" />
        </>
    )
}

export default Pag1