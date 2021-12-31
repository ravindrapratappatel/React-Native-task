import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import BottomTab from './BottomTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Collectibles_templates from './Collectibles_templates';

//category
const category=[{ name: 'Trending',icon_name: 'local-fire-department'},
{name: 'Art', icon_name: 'gesture'}, 
{name: 'Music', icon_name: 'audiotrack'}, 
{name: 'Movie', icon_name: 'movie'}];

//collectibles
const collectibles=[
  {
    name: 'Geometry',
    like: 80,
    suffle_runner: 100,
    price: 8.01
  },
  {
    name: 'Cubex',
    like: 70,
    suffle_runner: 110,
    price: 10.01
  }
]

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

        <View style={styles.box1}>
            <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text><Text style={{color: 'black', fontWeight: '600'}}>820.50</Text> ETH</Text>
                <TouchableOpacity>
                <Icon name="notifications" size={25} color="black" />
                 </TouchableOpacity>
            </View>
            <View  style={{flex: 0.5, flexDirection: 'row', justifyContent: 'space-between'}} > 
            <TextInput placeholder='Search items, collections..'></TextInput>
            <Text> <Icon name="link" size={25} color="black" />  </Text>
            </View>
        </View>
      
        <View style={styles.box2}>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
             Category
          </Text>
          <Text style={{color: 'blue'}}> See all </Text>
        </View>
        <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
          {category.map((item, index)=>{
              return <View key={index} style={{marginTop: 10, marginRight: 30}}>
                  <Text> <Icon name={item.icon_name} size={20} color="black" />  {item.name}</Text>
              </View>
          })}
          </ScrollView>
        </View>
      </View>

      <View style={styles.box3}>
      <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
             Trending Collectibles
          </Text>
          <Text style={{color: 'blue'}}> See all </Text>
        </View>
        <View style={{flex: 0.9, flexDirection: 'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
       
         { collectibles.map((item, index)=>{
           return ( 
            <Collectibles_templates
            key={index}
            Name={item.name}
            likes={item.like}
            position={item.suffle_runner}
            price={item.price}
            onPress={()=> navigation.navigate('Place_bid')}
              /> 
           )
         })
         }
         </ScrollView>
        </View>
      </View>

        <View style={styles.box4}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Trending Creator
          </Text>
          <Text style={{color: 'blue'}}> See all </Text>
        </View>
        
        <View style={styles.box5}>
            <BottomTab 
                onPress1={()=>navigation.navigate('Home')}
                onPress2={()=>navigation.navigate('Stats')}
            />
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      margin: 8,
    },
    box1: {
      flex: 0.15,
      paddingTop: 10,
      paddingBottom: 20,
      flexDirection: 'column',
      justifyContent: 'center'
     
    },
    box2: {
      flex: 0.15,
      flexDirection: 'column'
    },
    box3: {
      flex: 0.50,
      flexDirection: 'column'
    },
    box4: {
      flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 25
    },
    box5: {
      flex: 0.1,
    },
  });
  

export default Home;
