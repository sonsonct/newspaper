import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const SubTitle =({children, numberOfLines = 1, size= 15})=>{
    return(
        <Text numberOfLines={numberOfLines}
            style={{fontSize: size}}
        >
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({})
export default SubTitle;