import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Collectibles_templates = ({Name, price, position, likes, onPress}) => {
    return (
        <View style={styles.main_container} > 
        <View style={styles.thumbnail}>
        <TouchableOpacity onPress={onPress}>
         <ImageBackground source={require('../assets/images/img.jpg')} style={{position: 'relative', width: '100%', height: '100%',}}>
         <View style={{
           flex: 0.20,
            height: '13%',
            width: '45%',
            backgroundColor: '#808080',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
           marginLeft: 110,
           marginTop: 20,
          }}> 
         <Text style={{color: 'white'}}>04h 09m 12s</Text>
         </View>
         <View style={{flex: 0.80, justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative', marginTop: -20}} > 
         <Icon name="play-circle-filled" size={30} color="white" />
         </View>
         </ImageBackground>
         </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <Text>{Name} <Icon name="verified" size={15} color="blue" /> </Text>
        <Text><Icon name="favorite-border" size={15} color="blue" /> {likes}</Text>
        </View>
        <View style={styles.row2}>
        <Text>Shuffle Runner#{position}</Text>
        </View>
        <View style={styles.row3}>
        <Text>Current Price</Text>
        <Text> {price} ETH</Text>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    main_container: {
        flexDirection: 'column',
        height: '100%',
        width: '60%',
        borderRadius: 12,
        padding: 5,
        margin: 5,
    },
    thumbnail: {
      flex: 0.7,
      borderRadius: 15,
    },
    row1: {
   flex: 0.1,
   flexDirection: 'row',
   justifyContent: 'space-between',
   margin: 5
    },
    row2: {
    flex: 0.1,
    margin: 5
    },
    row3: {
  flex: 0.1, 
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 5
    }
})

export default Collectibles_templates;
