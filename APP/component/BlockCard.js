import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Title from './Title'
import SubTitle from './SubTitle'
const BlockCard = ({style, imageStyle, item})=>{
    const {thumbnail, title, desc} = item
    return(
        <TouchableOpacity>
        <View style={[styles.container, style]}>
            <Image 
                source={{uri: thumbnail}} 
                style={[styles.image, imageStyle]}

            />
            <View style={styles.contentContainer}>
                <Title>{title}</Title>   
                <SubTitle>{desc}</SubTitle>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    image:{
         width: '100%',
         height: 200
    },
    contentContainer:{
        padding: 5
    }
})
export default BlockCard;