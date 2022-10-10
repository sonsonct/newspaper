import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import BlockCard from './BlockCard'

const FeaturedNews =({item})=>{
    return(
        <BlockCard item={item} style={{marginVertical: 15}}/>
    )
}

const styles = StyleSheet.create({})
export default FeaturedNews;