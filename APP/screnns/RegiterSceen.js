import React, { Component , useContext, useState} from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import { AuthContext } from '../context/AuthContext';
const RegiterScreen =({navigation})=>{
    const [fullName, setFullName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading,register} = useContext(AuthContext);
    if(isLoading){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={'large'}/>
            </View>
        )
    }
    return(
        
        <View style={styles.container}>
            
            <View style={styles.wrapper}>
                <TextInput style={styles.input} 
                    placeholder='Full Name'
                    onChangeText={text=> setFullName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='User Name'
                    onChangeText={text=> setUserName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='Password' 
                    secureTextEntry
                    onChangeText={text=> setPassword(text)}
                />
                <Button title='Register' 
                    onPress={
                        ()=>{
                            console.log(fullName+' '+userName+' '+password);
                            register(fullName, userName, password);
                        }
                    }
                    
                />
                <View style={{flexDirection: 'row'}}>
                    <Text>Bạn đã có Tài khoản?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={{color: 'blue'}}>Đăng Nhập</Text>
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
export default RegiterScreen;