import axios from 'axios';
import React, { Component, createContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { BASE_URL } from '../config';
export const AuthContext = createContext();
export const AuthProvider=({children})=>{
      const register = async (fullName, userName, password) =>{
         try{
            const res = await axios.post(`${BASE_URL}/register`,{
               fullName,userName,password
            })
         }catch(e){
            console.log("err", e);
         }
      }
     return(
        <AuthContext.Provider value={{register}}>{children}</AuthContext.Provider>
     )
    
}
    

const styles = StyleSheet.create({})
