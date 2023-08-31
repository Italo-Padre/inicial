import React from 'react'
import Botoes from '../components/Botoes'
import Card from '../components/Card'
import { Button, Text } from 'react-native'

const Pag1 = ({navigation}) => {

    function irPag2(){
        navigation.navigate('Pagina2')
    }

    return (
        <>

        <Button title='Pagina 2' onPress={()=>navigation.navigate('Pagina2')}></Button>
        <Button title='Pagina 3' onPress={()=>navigation.navigate('Pagina3')}></Button>
            Pag1
            <Card titulo="primeiro" >
                <Text>children</Text>
            </Card>
            <Card titulo="segundo" >
                <Button title='botao' />
            </Card>
            <Card titulo="terceiro" />
            <Botoes />
        </>
    )
}

export default Pag1