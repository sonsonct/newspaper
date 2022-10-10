import React, { Component, useContext, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const LoginScreen =({navigation})=>{
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const val = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} 
                    placeholder='User Name'
                    onChangeText={text=> setUserName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='Password' 
                    secureTextEntry
                    onChangeText={text=> setPassword(text)}
                />
                <Button title='Login'/>
                <View style={{flexDirection: 'row'}}>
                    <Text>Bạn chưa có Tài khoản?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Regiter')}
                    >
                        <Text style={{color: 'blue'}}>Đăng Ký</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper:{
        width: '80%'
    },
    input:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        height: 50,
    }
})
export default LoginScreen;