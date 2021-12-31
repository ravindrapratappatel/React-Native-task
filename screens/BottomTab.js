import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
function BottomTab({onPress1, onPress2, onPress3, onPress4}) {
    return (
        <View style={styles.main_container}>
        <TouchableOpacity onPress={onPress1} >
          <Text> <Icon name="dashboard" size={28} color="black" /></Text>
          <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress2}>
          <Text> <Icon name="trending-up" size={28} color="black" /> </Text>
          <Text>Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress3} >
          <Text> <Icon name="person" size={28} color="black" /> </Text>
          <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress4} >
          <Text> <Icon name="menu" size={28} color="black" /> </Text>
          <Text>More</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    main_container: {
        backgroundColor: '#ffffff',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }
})
export default BottomTab;
