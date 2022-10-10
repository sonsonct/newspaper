import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

const SearchBar =()=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder='Nhập Thông Tin...'/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center'
    },
    searchInput:{
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        borderWidth: 2,
        borderRadius: 10,
    }
})
export default SearchBar;

