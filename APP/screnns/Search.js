import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ActivityIndicator, FlatList, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const Search = ({ navigation: { goBack } }) => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('');
    const [data_bb, setdata_bb] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const getList = (tieu_de) => {
        if (tieu_de == '') {
            Alert.alert(
                "Thông báo",
                "Xin hãy nhập vào nội dung muốn tìm",
                [
                    {
                        text: "Đã hiểu",
                    },
                ],
            );
            return;
        }
        setisLoading(true);

        axios.get(`http://192.168.0.106/api_newspaper-main/api/baibao/theotieude.php/`, {
            params: {
                tieu_de,
            }
        })
            .then(res => {
                let tt_bb = res.data;
                setdata_bb(tt_bb);
                console.log(tt_bb);
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
                    return;
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
            <View style={styles.header}>
                <View style={styles.search}>
                    <TouchableOpacity
                        onPress={() => getList(search)}
                    >
                        <Image source={require('../img/searchicon.png')} style={styles.imgsearch} />
                    </TouchableOpacity>

                    <TextInput style={styles.searchInput} placeholder='Nhập Thông Tin...'
                        onChangeText={text => setSearch(text)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => goBack()}
                >
                    <Text style={{ color: '#fff' }}>Đóng</Text>
                </TouchableOpacity>
            </View>

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data_bb}
                    renderItem={renderItem}
                    keyExtractor={item => `key-${item.id}`}
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
        backgroundColor: '#015f71',
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
        padding: 15,
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
        height: 180,
        borderRadius: 8
    },
    imglogo: {
        width: 55,
        height: 25,
        marginLeft: 4
    }
})
export default Search;