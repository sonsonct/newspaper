import React, { Component, useContext } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import Navigater from './Navigater'
import Tabs from './Tabs'
const Appnav =()=> {
    const {isLoading, userToken} = useContext(AuthContext);
    if(isLoading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }
    return (
        <>
        {userToken !== null ? <Tabs/> : <Navigater/>}
        </>
    );
  
}

const styles = StyleSheet.create({})
export default Appnav;
