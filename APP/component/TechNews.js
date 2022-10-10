import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import HorizotallList from './HorizotallList'
const TechNews =({data}) =>{
  
    return (
      <HorizotallList title='Tech news' data={data}/>
    )
  
}

const styles = StyleSheet.create({})
export default TechNews;
