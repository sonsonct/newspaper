import React, { Component } from 'react'
import { View, StatusBar, Image } from 'react-native'
import SearchBar from '../component/SearchBar';
import Tinmoi from '../component/Tinmoi';
import Tonghop from '../component/Tonghop';
import Noibat from '../component/Noibat';
import { ScrollView } from 'react-native-virtualized-view';
const HomeScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: '#fff', paddingHorizontal: 15, flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#015f71"
                />
                <Image
                    style={{ height: 50, width: 120, marginTop: 30 }}
                    source={require('../img/logoo.png')}
                />
            </View>
            <SearchBar />
            <Tinmoi></Tinmoi>
            <Tonghop></Tonghop>
            <Noibat></Noibat>
        </ScrollView>
    )
}

export default HomeScreen;