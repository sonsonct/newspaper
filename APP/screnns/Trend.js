import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import Quantam from '../component/Quantam';
import { ScrollView } from 'react-native-virtualized-view';
import Nong24h from '../component/Nong24h';
import Gocnhinvaphantich from '../component/Gocnhinvaphantich';
const Trend = () => {
  return (
    <ScrollView>
      <View style={{ width: '100%', height: 60, backgroundColor: '#015f71', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Xu hướng</Text>
      </View>
      <View style={{width:'100%'}}>
      <View style={{flexDirection:'row', marginTop:20,marginLeft:15}}>
        <Image
          source={require('../img/xuhuongcon.png')}
          style={{ width: 25, height: 25, resizeMode: 'contain',tintColor:'#00ab90',marginRight:10 }}
        />
        <Text style={{ fontSize: 16, color: '#00ab90' }}>ĐANG ĐƯỢC QUAN TÂM</Text>
      </View>
      <Quantam></Quantam>
      </View>
      <View style={{width:'100%'}}>
      <View style={{flexDirection:'row', marginTop:20,marginLeft:15}}>
        <Image
          source={require('../img/xuhuongcon.png')}
          style={{ width: 25, height: 25, resizeMode: 'contain',tintColor:'#00ab90',marginRight:10 }}
        />
        <Text style={{ fontSize: 16, color: '#00ab90' }}>NÓNG 24H</Text>
      </View>
      <Nong24h></Nong24h>
      </View>
      <View style={{width:'100%'}}>
      <View style={{flexDirection:'row', marginTop:20,marginLeft:15}}>
        <Image
          source={require('../img/xuhuongcon.png')}
          style={{ width: 25, height: 25, resizeMode: 'contain',tintColor:'#00ab90',marginRight:10 }}
        />
        <Text style={{ fontSize: 16, color: '#00ab90' }}>GÓC NHÌN VÀ PHÂN TÍCH</Text>
      </View>
      <Gocnhinvaphantich></Gocnhinvaphantich>
      </View>
    </ScrollView>
  )
}
export default Trend;