import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Screen from '../component/Screnn'
import SearchBar from '../component/SearchBar';
import BreakingNews from '../component/BreakingNews'
import TechNews from '../component/TechNews'
import FeaturedNews from '../component/FeaturedNews'
import data from '../../dataAPI'
import FlatCard from '../component/FlatCard';
import VelticalList from '../component/VelticalList';
const HomeScreen =()=>{
    const breaking = data.filter(item=>item.category === "breaking-news")
    const tech = data.filter(item=>item.category === "tech")
    const political = data.filter(item=>item.category === "political")
    return(
        
        <Screen>
            <Text>abc</Text>
            <SearchBar/>
            <BreakingNews data={breaking}/>
            <TechNews data={tech}/>
            <FeaturedNews
                item={{
                    
                    id: "8",
                    title: "This is the title no eight.",
                    desc:
                            "Desc is the short form of description and this format is the actual same as our real database.",
                    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuJff_DKk6VWg1yHLxixGS1KXfGo8VMcH0PPklZwR&s",
                    category: "tech"
                }}
            />
            <FlatCard item={{
                    
                    id: "8",
                    title: "This is the title no eight.",
                    desc:
                            "Desc is the short form of description and this format is the actual same as our real database.",
                    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuJff_DKk6VWg1yHLxixGS1KXfGo8VMcH0PPklZwR&s",
                    category: "tech"
                }}/>
            <VelticalList data={political}/>
            
        </Screen>
    )
}

const styles = StyleSheet.create({})
export default HomeScreen;