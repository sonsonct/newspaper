import axios from 'axios';
import React, { Component, createContext, useState , useEffect} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [userToken, setUserToken] = useState(null);
   const login=()=>{
      setIsLoading(true);
      setUserToken('isdnafb');
      AsyncStorage.setItem('userToken', 'isdnafb');
      setIsLoading(false);
   }
   const logout=()=>{
      setIsLoading(true);
      setUserToken(null);
      AsyncStorage.removeItem('useToken');
      setIsLoading(false);
   }
   const isLogin = async ()=>{
      try{
         setIsLoading(true);
         let userToken =  await AsyncStorage.getItem('userToken');
         setUserToken(userToken);
         setIsLoading(false);
      }catch(e){
         console.log('err', e);
      }
      
   }
   useEffect(()=>{
      isLogin();
   }, [])
   return (
      <AuthContext.Provider value={{login, logout, isLoading, userToken}}>{children}</AuthContext.Provider>
   )

}


const styles = StyleSheet.create({})
