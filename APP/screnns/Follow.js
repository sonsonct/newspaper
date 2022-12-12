import React, { Component, useContext, useState, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, Image, TextInput, FlatList, Alert } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
const Follow = () => {
  const navigation = useNavigation();
  const { idUser } = useContext(AuthContext);
  const [data_bb, setdata_bb] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  
  const getbaibao = (id_user) => {
    setisLoading(true);
    axios.get(`https://phantienhuy.000webhostapp.com/api_newspaper-main/api/theodoi/gettheodoi.php`, {
      params: {
        id_user,
      }
    })
      .then(res => {
        let tt_bb = res.data;
        setdata_bb(tt_bb);
        // console.log(data_bb);
        if (tt_bb.mess) {
          Alert.alert(
            "Thông báo",
            "Không tìm thấy bài báo",
            [
              {
                text: "Đã hiểu",
              },
            ],
          );
          setisLoading(false);
        }
        setisLoading(false);
      })
      .catch(e => {
        console.log(`loi: ${e}`);
        setisLoading(false);
      })
  }
  
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', { item })
        console.log(item.id)
      }
      }

    >
      <View style={styles.bai_bao}>
        <Image
          source={{ uri: item.anh }}
          style={styles.img} />
        <View style={styles.contentContainer}>
          <Text style={styles.text_tieu_de}>{item.tieu_de}</Text>
          <Text numberOfLines={1} style={styles.text_noi_dung}>{item.noi_dung}</Text>
        </View>
        <Image
          source={{ uri: item.logo }}
          resizeMode="contain"
          style={styles.imglogo} />

      </View>
    </TouchableOpacity>
  )
  useEffect(() => {
    // console.log(data_bb);
    getbaibao(idUser);
  }, []);
  return (
    <View style={styles.container}
      // onLayout={()=> console.log('a')}
    >
      
      <TouchableOpacity
        onPress={() => { getbaibao(idUser) }}
        style={{width:'100%'}}
      >
        <View style={{width:'100%',height:60,backgroundColor:'#015f71',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',textAlign:'center'}}>Theo dõi</Text>
        </View> 
      </TouchableOpacity>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data_bb}
          renderItem={renderItem}
          keyExtractor={item => `key-${item.id}`}
          // onScrollEndDrag={() => console.log("end")}
        />
      )}
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#61dafb',
    justifyContent: 'space-around'
  },
  imgsearch: {
    width: 30,
    height: 30
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#7ECCE0',
    flexDirection: 'row'
  },
  searchInput: {
    width: '80%',
    height: 50,
    paddingLeft: 8,
    fontSize: 14,
    borderRadius: 10,
    color: '#fff',
  },
  bai_bao: {
    width: '100%',
    marginVertical: 10,
    padding:15,
    borderRadius: 8
  },
  contentContainer: {
    fontWeight: 'bold',
    fontSize: 17,
    flex: 0.65,
    paddingHorizontal: 5,
  },
  text_tieu_de: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  img: {
    flex: 0.35,
    width: '100%',
    height: 120,
    borderRadius: 8,
    height:180
  },
  imglogo: {
    width: 55,
    height: 25,
    marginLeft: 4
  }
})
export default Follow;