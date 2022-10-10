import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SmallCard from './SmallCard'
import FlatCard from './FlatCard'
import Title from './Title'
const VelticalList=({title, data}) =>{
    return (
      <>
        <Title size={20}>{title}</Title>
        <View style={styles.container}>
            {data.map(item=><FlatCard item={item} key={item.id}/>)}
        </View>
        
      </>
    )
  
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
    }
})
export default  VelticalList;