import YoutubePlayer from "react-native-youtube-iframe";
import { Text, View, ActivityIndicator, FlatList, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'

const VideoYTB = () => {
    const [data, setdata] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getList();
        return () => {

        }
    }, []);
    const getList = () => {
        return fetch('https://637cc0c516c1b892ebbdeffb.mockapi.io/Video_the_thao')
            .then((response) => response.json())
            .then((responseJson) => {
                setdata(responseJson);
            }
            ).catch((erro) => {
                console.log('Erro', erro);
            }).finally(() => { setisLoading(false) })
    }
    const renderItem = ({ item, index }) => (
        <View style={{ height: 700, width: 250, marginLeft: 20, marginTop: 20 }}>
            <View style={styles.video}>
                <YoutubePlayer
                    height={700}
                    videoId={item.thumb}
                />
            </View>
            <View style={styles.contentContainer}>
                <Text style={{
                    fontWeight: '600',
                    fontSize: 15,
                    textAlign:'justify',
                }}  numberOfLines={2}>{item.title}</Text>
            </View>

        </View>
    )
    return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f47c59', paddingLeft: 20 }}>THỂ THAO</Text>
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
        flex: 1,
        marginTop: 30
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5,
    },
    video: {
        flex: 0.35,
        marginBottom:-150
    }
})
export default VideoYTB;