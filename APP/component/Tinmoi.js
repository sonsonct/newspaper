import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Tinmoi = () => {
  const [search, setsearch] = useState('');
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getList();
    return () => {

    }
  }, []);
  const getList = () => {
    return fetch('https://637cbd7916c1b892ebbd8eaf.mockapi.io/Tin_moi')
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
          style={styles.img} />
        <View style={styles.contentContainer}>
          <Text numberOfLines={2} style={styles.text_tieu_de}>{item.tieu_de}</Text>
          <Text numberOfLines={1} style={styles.text_noi_dung}>{item.noi_dung}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image
            source={{ uri: item.logo }}
            resizeMode="contain"
            style={styles.imglogo} />
          <TouchableOpacity>
            <Image source={require('../img/yeuthich.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                marginLeft: 100
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00ab90' }}>TIN MỚI</Text>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data.filter(eachBao => eachBao.tieu_de.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
          renderItem={renderItem}
          horizontal
          keyExtractor={item => `key-${item.id}`}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20
  },
  bai_bao: {
    borderRadius: 10,
    width: 200,
    marginRight: 10,
    marginTop: 20
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
    borderRadius: 8
  },
  imglogo: {
    width: 55,
    height: 30,
    marginLeft: 4
  }
})
export default Tinmoi;