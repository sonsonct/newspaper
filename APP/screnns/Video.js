import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import Videogiaitri from '../component/Videogiaitri'
import Videothoisu from '../component/Videothoisu'
import VideoYTB from '../component/VideoYTB'
const Video =()=> { 
    return (
      <View>
        <View style={{width:'100%',height:60,backgroundColor:'#015f71',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',textAlign:'center'}}>Video</Text>
        </View>
      <ScrollView>
         <VideoYTB></VideoYTB>
         <Videothoisu></Videothoisu>
         <Videogiaitri></Videogiaitri>
      </ScrollView>
      </View>
    )
  
}

const styles = StyleSheet.create({})
export default Video;
