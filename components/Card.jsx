import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Card = () => {
  return (
    <>
     <View style={styles.card} >
      <Text style={styles.titulo}>Hello Word!!</Text>
      <Text style={styles.tituloSecundario} >Hello Word!!</Text>
      <Text >Hello Word!!</Text>
      <Text style={styles.tituloSecundario} >Hello Word!!</Text>
      <StatusBar style="auto" />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card:{
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor:'red',
      marginBottom:20
    },
    titulo:{
      color: 'white',
      fontSize: 30,
      padding:10,
      marginBottom:20,
      marginBottomColor:'red',
      marginBottomWidht:2,
      textAlign:'center',
      backgroundColor:'red'
  
    },
    tituloSecundario:{
      fontSize:20
    }
  });

export default Card