import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const Tinmoi = () => {
  const navigation = useNavigation();
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  
  useEffect(() => {
    getList();
    return () => {

    }
  }, []);
  const getList = () => {
    return fetch('https://phantienhuy.000webhostapp.com/api_newspaper-main/api/baibao/Tinmoi.php')
      .then((response) => response.json())
      .then((responseJson) => {
        setdata(responseJson);
      }
      ).catch((erro) => {
        console.log('Erro', erro);
      }).finally(() => { setisLoading(false) })
  }
  const renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', { item })
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
        </View>
        <Image
          source={{ uri: item.logo }}
          resizeMode="contain"
          style={styles.imglogo}
        />
      </TouchableOpacity>
      
    </View>
  )
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f47c59' }}>TIN MỚI</Text>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
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
    flex: 1
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
  },
  search: {
    width: '100%',
    height: 38,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20
  },
  searchInput: {
    paddingLeft: 8,
    fontSize: 14,
  }

})
export default Tinmoi;