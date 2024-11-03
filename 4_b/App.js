import {Text,StyleSheet,View,FlatList,Image} from 'react-native';
import { Searchbar } from 'react-native-paper';
import React from 'react';
import {AntDesign,FontAwesome6,Ionicons,Octicons,Fontisto,FontAwesome} from '@expo/vector-icons';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const DATA = [
   { id: '1', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', rating: 4, reviews: 15, image: require('./assets/giacchuyen.png') },
  { id: '2', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', rating: 4, reviews: 15, image: require('./assets/daynguon.png') },
  { id: '3', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', rating: 4, reviews: 15, image: require('./assets/dauchuyendoipsps2.png') },
  { id: '4', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', rating: 4, reviews: 15, image: require('./assets/dauchuyendoi.png') },
  { id: '5', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', rating: 4, reviews: 15, image: require('./assets/carbusbtops2.png') },
  { id: '5', name: 'Cáp chuyển từ Cổng USB sang PS2...', price: '69.900 đ', discount: '-39%', rating: 4, reviews: 15, image: require('./assets/daucam.png') },
  ];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesome 
        key={i} 
        name="star" 
        size={16} 
        color={i < rating ? '#FFD700' : '#ccc'} 
      />
    );
  }
  return stars;
};

const renderItem = ({item}) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.image}/>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.reviews}>
      {renderStars(item.rating)}
      ({item.reviews})
    </Text>
    <View style={styles.priceDetails}>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
    </View>
  </View>
);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Searchbar
          style={styles.searchBar}
          placeholder="Dây cáp USB"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
        <AntDesign name="shoppingcart" size={24} color="white" />
        <FontAwesome6 name="ellipsis" size={24} color="white" />
      </View>
      <View style={styles.content}>
        <FlatList 
        data={DATA}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        numColumns={2}
        />
      </View>
      <View style={styles.session}>
        <Ionicons name="menu-outline" size={30} color="black" />
        <Octicons name="home" size={30} color="black" />
        <Fontisto name="arrow-return-left" size={30} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f5f5f5',
  },
  header:{
    flex:1,
    justifyContent:'space-between',
    backgroundColor:'#1BA9FF',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 20,
    borderRadius:0,
  },
  content:{
    flex:10,
    backgroundColor:'#BFBFBF'
  },
  session:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#1BA9FF',
    paddingHorizontal:15
  },
  itemContainer:{
    flex:1,
    margin:5,
    padding:5,
  },
  image:{
    width:155,
    height:90,
    resizeMode:'contain'
  },
  name:{
    fontSize:14,
  },
  reviews:{
    fontSize:12,
  },  
  price:{
    fontSize:16
  },
  priceDetails:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  discount:{
    color:'gray'
  }
});
