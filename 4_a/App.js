import { View,Text, SafeAreaView, StyleSheet,TouchableOpacity, FlatList,Image} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function App() {

  const DATA = [
    { id: 1,
      name:'Ca nấu lẩu, nấu mì mini...',
      shop:'Shop Devang',
      imageURL: require('./assets/ca_nau_lau.png')
    },
    { id: 2,
      name:'1KG KHÔ GÀ BƠ TỎI...',
      shop:'Shop LTD Food',
      imageURL: require('./assets/ga_bo_toi.png')
    },
    { id: 3,
      name:'Xe cần cẩu đa năng',
      shop:'Shop Thế giới đồ chơi',
      imageURL: require('./assets/xa_can_cau.png')
    },
    { id: 4,
      name:'Đồ chơi dạng mô hình',
      shop:'Shop Thế giới đồ chơi',
      imageURL: require('./assets/do_choi_dang_mo_hinh.png')
    },
    { id: 5,
      name:'Lãnh đạo giản đơn',
      shop:'Shop Minh Long Book',
      imageURL: require('./assets/lanh_dao_gian_don.png')
    },
    { id: 6,
      name:'Hiểu lòng con trẻ',
      shop:'Shop Minh Long Book',
      imageURL: require('./assets/hieu_long_con_tre.png')
    },
    { id: 7,
      name:'Donal Trump Thiên tài lãnh đạo',
      shop:'Shop Devang',
      imageURL: require('./assets/trump_1.png')
    },
  ];

  const renderItem = ({item}) =>(
    <View style={styles.itemContainer}>  
      <View>
        <Image source={item.imageURL}
              style={{
                height:74,width:74,
                
              }}/>
      </View>
      <View style={styles.itemDetails}>
        <Text>
          {item.name}
        </Text>
        <Text style={{color:'#E83030'}}>
          {item.shop}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color:'#FFFFFF'}}>CHAT</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.session}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={{color:'white'}}>Chat</Text>
        <AntDesign name="shoppingcart" size={24} color="white" />
      </View>
      <View style={{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:20,backgroundColor:'#BFBFBF'}}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.session}>
        <Ionicons name="menu-outline" size={24} color="black" />
        <Octicons name="home" size={24} color="black" />
        <Fontisto name="arrow-return-left" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
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
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderTopWidth:1,
    borderColor:'grey'
  },
  itemDetails:{
    flex:1,
    gap:10,

  },  
  button:{
    backgroundColor:'#F31111',
    height:38,
    width:88,
    alignItems:'center',
    justifyContent:'center'
  }
});
