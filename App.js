import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import SearchBar from './APP/component/SearchBar';
// import Screnn from './APP/component/Screnn';
// import BlockCard from './APP/component/BlockCard';
// import FeaturedNews from './APP/component/FeaturedNews';
// import SmallCard from './APP/component/SmallCard';
// import BreakingNews from './APP/component/BreakingNews';
// import data from './dataAPI';
// import TechNews from './APP/component/TechNews';
import Navigater from './APP/component/Navigater';
import {AuthProvider} from './APP/context/AuthContext'
export default function App() {
  // const breaking = data.filter(item=>item.category === "breaking-news")
  // const tech = data.filter(item=>item.category === "tech")
  return (
    <AuthProvider>
      <Navigater/>
    </AuthProvider>
    
  );
}


