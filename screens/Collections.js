import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
var bgcolor;
const Collections = ({name, isverified, totalItems, totalETH, bgcolor}) => {
  if(bgcolor)
  {
  bgcolor={bgcolor}
  }else{
    bgcolor='#ffffff'
  }
  return (
    <View style={styles.main_container}>
      <View style={{flex: 0.78, flexDirection: 'row'}}>
        <View style={styles.avtar}>
          <Text>
            {' '}
            <Icon name="person" size={28} color="white" />
          </Text>
        </View>
        {isverified && <View style={{marginTop: 20, marginLeft: -22}}>
          <Text>
            <Icon name="verified" size={20} color="blue" />
          </Text>
        </View> }
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black', fontWeight: '600'}}>{name}</Text>
          <Text>{totalItems} Items</Text>
        </View>
      </View>
      <View style={{flex: 0.22}}>
        <Text style={{color: 'black', fontWeight: '600'}}>{totalETH}</Text>
        { totalETH && <Text>Total ETH</Text>  }
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: bgcolor,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avtar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderColor: 'red',
  },
});
export default Collections;
