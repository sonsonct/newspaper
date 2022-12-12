import React, { Component } from 'react'
import { View, StatusBar, Image, StyleSheet } from 'react-native'
import SearchBar from '../component/SearchBar';
import Tinmoi from '../component/Tinmoi';
import Tonghop from '../component/Tonghop';
import Noibat from '../component/Noibat';
import { ScrollView } from 'react-native-virtualized-view';
import CalendarStrip from 'react-native-calendar-strip';

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
                <View style={styles.container}>
                    <CalendarStrip
                        scrollable
                        style={{ height: 80, paddingTop: 10, paddingBottom: 10, borderRadius: 50 }}
                        calendarColor={'#015f71'}
                        calendarHeaderStyle={{ color: 'white',fontSize:11,marginBottom:5 }}
                        dateNumberStyle={{ color: 'white',fontSize:11 }}
                        dateNameStyle={{ color: 'white',fontSize:11 }}
                        iconContainer={{ flex: 0.1 }}
                    />
                </View>
           
            <Tinmoi></Tinmoi>
            <Tonghop></Tonghop>
            <Noibat></Noibat>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1 }
});
export default HomeScreen;