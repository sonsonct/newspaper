import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const Nong24h = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    getList();
    return () => {

    }
  }, []);
  const getList = () => {
    return fetch('https://637cbd7916c1b892ebbd8eaf.mockapi.io/Nong24h')
      .then((response) => response.json())
      .then((responseJson) => {
        setdata(responseJson);
      }
      ).catch((erro) => {
        console.log('Erro', erro);
      }).finally(() => { setisLoading(false) })
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
          resizeMode="contain"
          style={styles.img} />
        <View style={styles.contentContainer}>
          <Text style={styles.text_tieu_de}>{item.tieu_de}</Text>
          <Text numberOfLines={1} style={styles.text_noi_dung}>{item.noi_dung}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image
            source={{ uri: item.logo }}
            resizeMode="contain"
            style={styles.imglogo} />
          
        </View>
      </View>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          renderItem={renderItem}
          //horizontal
          listKey={item => `key-${item.id}`}
          keyExtractor={item => `key-${item.id}`}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bai_bao: {
    width: '100%',
    marginTop: 10,
    padding: 20
  },
  contentContainer: {
    fontWeight: 'bold',
    fontSize: 17,
    flex: 0.65,
  },
  text_tieu_de: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify'
  },
  img: {
    flex: 0.35,
    width: '100%',
    height: 180,
    borderRadius: 8
  },
  imglogo: {
    width: 55,
    height: 25
  }
})
export default Nong24h;