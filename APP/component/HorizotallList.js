import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import SmallCard from './SmallCard'
import Title from './Title'
const HorizotallList =({title, data})=>{
    return(
        <>
        <Title size={20}>{title}</Title>
        <View style={styles.listStyle}>

        
            <FlatList data={data} keyExtractor={item=>item.id} horizontal showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <SmallCard item={item}/>}
            />
        
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    listStyle:{
        marginVertical: 15,
    }
})
export default HorizotallList;
