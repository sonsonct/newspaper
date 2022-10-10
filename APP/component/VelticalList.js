import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SmallCard from './SmallCard'
import FlatCard from './FlatCard'
import Title from './Title'
const VelticalList=({title, data}) =>{
    return (
      <View style={styles.container}>
        <Title>{title}</Title>
        <View>
            {data.map(item=><FlatCard item={item} key={item.id}/>)}
        </View>
        
      </View>
    )
  
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
    }
})
export default  VelticalList;