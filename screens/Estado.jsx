import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import styles from '../styles/styles'


const Estado = () => {

    const [n, setN] = useState(0)

    function somar() {
        setN(n + 1)
    }
    function subtrair() {
        setN(n - 1)
    }

    return (
        <>
            <View style={styles.linha}>
                <Button style={styles.botao} mode='contained' onPress={somar}>+</Button>
                <Text>Você clicou {n} vezes</Text>
                <Button style={styles.botao} mode='contained' onPress={subtrair}>-</Button>
            </View>
        </>
    )
}

export default Estado

