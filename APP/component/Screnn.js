import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet , StatusBar, ScrollView} from 'react-native'

const Screnn =({children})=>{
    return(
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1,
    },
   
})
export default Screnn;

