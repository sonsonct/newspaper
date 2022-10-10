import React, { Component , useContext} from 'react'
import { Text, StyleSheet, View , Button} from 'react-native'
import { AuthContext } from '../context/AuthContext';

const Setting =()=> {
    const {logout} = useContext(AuthContext);
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems:'center'}}>
        <Button title='Log out'
            onPress={()=>{logout()}}
        />
      </View>
    )
  
}

const styles = StyleSheet.create({})
export default Setting;
