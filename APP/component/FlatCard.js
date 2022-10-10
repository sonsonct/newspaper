import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Title from './Title'
import SubTitle from './SubTitle'
const FlatCard = ({style, imageStyle, item})=>{
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10
    },
    image:{
        flex: 0.35,
        height: '100%',
    },
    contentContainer:{
        flex: 0.65,
        paddingHorizontal: 5
    }
})
export default FlatCard;