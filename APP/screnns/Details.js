import React, { Component, useContext, useState , useEffect } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import Tabs from '../tab/Tabs';
import axios from 'axios';
const Details = (props) => {
    const navigation = useNavigation();
    const { idUser } = useContext(AuthContext);
    const [Info, setInfo] = useState({});
    const [checkbb, setCheckbb] = useState({});
    const [follow, setFollow] = useState('');
    console.log(idUser);
    const theodoi = (id_user, id_baibao) => {
        axios
        .post("http://192.168.1.8/API_BaoCao-main/api/theodoi/theodoi.php", {
            id_user,
            id_baibao
        })
        .then(res => {
            let Info = res.data;
            setInfo(Info)
            console.log(Info);
            console.log(Info.mess);
            if (Info.mess === 'thanhcong') {
                setFollow('đã theo dõi');
                Alert.alert(
                    "Thông báo",
                    "Thêm thành công",
                    [
                        {
                            text: "Đã hiểu",
                        },
                    ],
                );
                return;
            } else if (Info.mess === 'thatbai') {
                Alert.alert(
                    "Thông báo",
                    "Them that bai",
                    [
                        {
                            text: "Đã hiểu",
                        },
                    ],
                );
                return;
            }
        })
        .catch(e => {
            console.log(`loi: ${e}`);
        })
    }
    const botheodoi = (id_user, id_baibao) => {
        axios
        .post("http://192.168.1.8/API_BaoCao-main/api/theodoi/botheodoi.php", {
            id_user,
            id_baibao
        })
        .then(res => {
            let Info = res.data;
            setInfo(Info)
            console.log(Info);
            console.log(Info.mess);
            if (Info.mess === 'thanhcong') {
                setFollow('theo dõi ngay');
                Alert.alert(
                    "Thông báo",
                    "thành công",
                    [
                        {
                            text: "Đã hiểu",
                        },
                    ],
                );
                return;
            } else if (Info.mess === 'thatbai') {
                Alert.alert(
                    "Thông báo",
                    "That bai",
                    [
                        {
                            text: "Đã hiểu",
                        },
                    ],
                );
                return;
            }
        })
        .catch(e => {
            console.log(`loi: ${e}`);
        })
    }
    const checkTontai=(id_user, id_baibao)=>{
        axios
        .get("http://192.168.1.8/API_BaoCao-main/api/theodoi/check.php", {
            params: {
                id_user,
                id_baibao
            }
        })
        .then(res => {
            let Check = res.data;
            setCheckbb(Check)
            console.log(Check);
            console.log(Check.mess);
            if (Check.mess === 'datontai') {
                setFollow('đã theo dõi');
                return;
            } else if (Check.mess === 'chuatontai') {
                setFollow('theo dõi ngay')
                return;
            }
        })
        .catch(e => {
            console.log(`loi: ${e}`);
        })
    }
    useEffect(()=>{
        checkTontai(idUser, props.route.params.item.id);
     }, [])
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    follow==='đã theo dõi' ? botheodoi(idUser, props.route.params.item.id) : theodoi(idUser, props.route.params.item.id) 
                }}
            >
                <Text>{follow}</Text>
            </TouchableOpacity>
            <View style={{ left: -10, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <Image source={require('../img/backicon.png')} style={{ width: 35, height: 35, top: 1 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text_tieu_de}>{props.route.params.item.tieu_de}</Text>
                <View style={styles.imgs}>
                    <Image
                        source={{ uri: props.route.params.item.anh }}
                        style={styles.img}
                    />
                </View>
                <Text style={styles.text_noi_dung}>{props.route.params.item.noi_dung}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 15,

    },
    text_tieu_de: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'justify'
    },
    text_noi_dung: {
        fontSize: 20,
        textAlign: 'justify',
    },
    imgs: {
        marginVertical: 30
    },
    img: {
        width: '100%',
        height: 250,
        borderRadius: 3
    }


})
export default Details;
