import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Combo = () => {
    const [search, setsearch] = useState('');
    const [data1, setdata1] = useState([]);
    const [isLoading1, setisLoading1] = useState(true);
    const [data2, setdata2] = useState([]);
    const [isLoading2, setisLoading2] = useState(true);
    const [data3, setdata3] = useState([]);
    const [isLoading3, setisLoading3] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        getList1();
        getList2();
        getList3();
        return () => {

        }
    }, []);
    const getList1 = () => {
        return fetch('http://192.168.0.106/api_newspaper-main/api/baibao/Tinmoi.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setdata1(responseJson);
            }
            ).catch((erro) => {
                console.log('Erro', erro);
            }).finally(() => { setisLoading1(false) })
    }
    const getList2 = () => {
        return fetch('http://192.168.0.106/api_newspaper-main/api/baibao/Tonghop.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setdata2(responseJson);
            }
            ).catch((erro) => {
                console.log('Erro', erro);
            }).finally(() => { setisLoading2(false) })
    }
    const getList3 = () => {
        return fetch('http://192.168.0.106/api_newspaper-main/api/baibao/Noibat.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setdata3(responseJson);
            }
            ).catch((erro) => {
                console.log('Erro', erro);
            }).finally(() => { setisLoading3(false) })
    }
    const renderItem1 = ({ item, index }) => (
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
    const renderItem2 = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Detail', { item2 })
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
    const renderItem3 = ({ item, index }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Detail', { item })
                console.log(item.id)
            }
            }
        >
            <View style={styles.bai_bao_}>
                <Image
                    source={{ uri: item.anh }}
                    style={styles.img_} />
                <View style={styles.contentContainer_}>
                    <Text style={styles.text_tieu_de_}>{item.tieu_de}</Text>
                    <Text numberOfLines={1} style={styles.text_noi_dung_}>{item.noi_dung}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Image
                        source={{ uri: item.logo }}
                        resizeMode="contain"
                        style={styles.imglogo_} />
                    <TouchableOpacity>
                        <Image source={require('../img/yeuthich.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                marginLeft: 230
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput style={styles.searchInput}
                    onChangeText={(text) => {
                        setsearch(text);
                    }}
                    placeholder='Nhập Thông Tin...' />
                <Image
                    style={{ height: 30, width: 30, margin: 5 }}
                    source={require('../img/timkiem.png')}
                />
            </View>
            <Text style={{ fontSize: 16, color: '#00ab90', fontWeight: 'bold' }}>TIN MỚI</Text>
            {isLoading1 ? <ActivityIndicator /> : (
                <FlatList
                    data={data1.filter(eachBao => eachBao.tieu_de.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
                    renderItem={renderItem1}
                    horizontal
                    keyExtractor={item => `key-${item.id}`}
                />
            )}
            <Text style={{ fontSize: 16, color: '#00ab90', fontWeight: 'bold' }}>TỔNG HỢP</Text>
            {isLoading2 ? <ActivityIndicator /> : (
                <FlatList
                    data={data2.filter(eachBao => eachBao.tieu_de.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
                    renderItem={renderItem2}
                    horizontal
                    keyExtractor={item => `key-${item.id}`}
                />
            )}
            <Text style={{ fontSize: 16, color: '#00ab90', fontWeight: 'bold' }}>NỔI BẬT</Text>
            {isLoading3 ? <ActivityIndicator /> : (
                <FlatList
                    data={data3.filter(eachBao => eachBao.tieu_de.toLocaleLowerCase().includes(search.toLocaleLowerCase()))}
                    renderItem={renderItem3}
                    //horizontal
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
    },
    bai_bao_: {
        width: '100%',
        marginRight: 10,
        marginTop: 20,
    },
    contentContainer_: {
        fontWeight: 'bold',
        fontSize: 17,
        flex: 0.65,
        paddingHorizontal: 5,
    },
    text_tieu_de_: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    img_: {
        flex: 0.35,
        width: '100%',
        height: 200,
        borderRadius: 8
    },
    imglogo_: {
        width: 55,
        height: 25,
        marginLeft: 4
    }
})
export default Combo;