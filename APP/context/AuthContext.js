import axios from 'axios';
import React, { Component, createContext, useState , useEffect} from 'react'
import { Text, StyleSheet, View, Alert } from 'react-native'
import  AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [userInfo, setUserInfo] = useState({});
   const [token, setToken] = useState(null);
   const [userFullName, setUserFullName] = useState(null);
   const [idUser, setIdUser] = useState(null);
   const register=(fullname, username, password)=>{
      if(fullname==null){
         Alert.alert(
             "Thông báo",
             "Xin hãy nhập vào tên của bạn",
             [
               {
                 text: "Đã hiểu",
               },
             ],
         );
         return;
      }
      if(username==null){
         Alert.alert(
             "Thông báo",
             "Xin hãy nhập vào tên tài khoản",
             [
               {
                 text: "Đã hiểu",
               },
             ],
         );
         return;
      }
      if(username.length < 6){
         Alert.alert(
             "Thông báo",
             "Tài khoản phải có ít nhất 6 ký tự",
             [
               {
                 text: "Đã hiểu",
               },
             ],
         );
         return;
      }
      if(password==null){
         Alert.alert(
             "Thông báo",
             "Xin hãy nhập vào mật khẩu",
             [
               {
                 text: "Đã hiểu",
               },
             ],
           );
         return;
      }
      if(password.length < 6){
         Alert.alert(
             "Thông báo",
             "Mật khẩu phải có ít nhất 6 ký tự",
             [
               {
                 text: "Đã hiểu",
               },
             ],
           );
         return;
      }
      setIsLoading(true);

      axios
      .post(`${BASE_URL}/register.php`, {
         fullname,
         username,
         password
      })
      .then(res=>{
         let userInfo = res.data;
         setUserInfo(userInfo)
         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
         setIsLoading(false);
         console.log(userInfo);
         console.log(userInfo.mess);
         if(userInfo.mess==='thanhcong'){
            Alert.alert(
                "Thông báo",
                "Đăng Ký thành công, xin hãy đăng nhập lại",
                [
                  {
                    text: "Đã hiểu",
                    onPress: () => {}
                  },
                ],
              );
            return;
         }else if(userInfo.mess==='datontai'){
            Alert.alert(
               "Thông báo",
               "Tài khoản đã tồn tại",
               [
                 {
                   text: "Đã hiểu",
                 },
               ],
             );
           return;
         }
      })
      .catch(e=>{
         console.log(`loi: ${e}`);
         setIsLoading(false);
      })
   };
   const login=(username, password)=>{

      if(username==null){
         Alert.alert(
             "Thông báo",
             "Xin hãy nhập vào tên tài khoản",
             [
               {
                 text: "Đã hiểu",
               },
             ],
         );
         return;
      }
      if(password==null){
         Alert.alert(
             "Thông báo",
             "Xin hãy nhập vào mật khẩu",
             [
               {
                 text: "Đã hiểu",
               },
             ],
           );
         return;
      }

      setIsLoading(true);
      
      axios.get(`${BASE_URL}/login.php`, {
         params: {
           username,
           password
         }
      })
      .then(res=>{
         let userInfo = res.data;
         setUserInfo(userInfo);
         
         console.log(userInfo);
         if(userInfo.mess){
            Alert.alert(
               "Thông báo",
               "Sai tài khoản hoặc mật khẩu",
               [
                 {
                   text: "Đã hiểu",
                 },
               ],
            );
            setIsLoading(false);
           return;
         }
         
         setToken(userInfo.token);
         setUserFullName(userInfo.fullname);
         setIdUser(userInfo.id);
         console.log(userInfo);
         AsyncStorage.setItem('token', userInfo.token);
         AsyncStorage.setItem('id', userInfo.id);
         setIsLoading(false);
      })
      .catch(e=>{
         console.log(`loi: ${e}`);
         setIsLoading(false);
      })
   }
   const logout=()=>{
      setIsLoading(true);
      setToken(null);
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('id');
      setIsLoading(false);
   }
   const isLogin = async ()=>{
      try{
         setIsLoading(true);
         let token =  await AsyncStorage.getItem('token');
         setToken(token);
         let id =  await AsyncStorage.getItem('id');
         setIdUser(id);
         setIsLoading(false);
      }catch(e){
         console.log('err', e);
      }
      
   }

   useEffect(()=>{
      isLogin();
   }, [])
   return (
      <AuthContext.Provider value={{
         login,
         logout,
         register,
         isLoading,
         userInfo,
         token,
         userFullName,
         idUser,
         
      }}>{children}</AuthContext.Provider>
   )

}


const styles = StyleSheet.create({})