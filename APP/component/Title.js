import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Title =({children, numberOfLines = 2, size= 18})=>{
    return(
        <Text numberOfLines={numberOfLines}
            style={{fontWeight: 'bold', fontSize: size}}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({})
export default Title;