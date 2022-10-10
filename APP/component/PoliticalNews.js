import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import VelticalList from './VelticalList'
const PoliticalNews =({data}) =>{
  
    return (
      <VelticalList title='political news' data={data}/>
    )
  
}

const styles = StyleSheet.create({})
export default PoliticalNews;
