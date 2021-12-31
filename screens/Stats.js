import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import BottomTab from './BottomTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Collections from './Collections';
import data from './data';
const Stats = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 17, marginBottom: 5}}>Statistics</Text>
          <Text>The Top NFTs on NFTL</Text>
        </View>
        <View>
          <Text>
          <TouchableOpacity>
           <Icon name="search" size={25} color="black" />
           </TouchableOpacity> 
          </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <TouchableOpacity
          style={styles.box2_items}>
          <Text>
            <Icon name="leaderboard" size={20} color="black" />
          </Text>
          <Text>Ranking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box2_items}>
          <Text>
            <Icon name="trending-up" size={28} color="black" />
          </Text>
          <Text>Activity</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box3}>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Top Verified Collections
          </Text>
          <Text style={{color: 'blue'}}> See all </Text>
        </View>
        <View style={{flex: 0.9, borderRadius: 15, marginLeft: 15, marginRight: 15, padding: 5, backgroundColor: '#ffffff'}}>
          {data.map((item, index) => {
            if (item.isverified === true) {
              return (
                <View key={index} style={{flex: 0.3333333, position: 'relative'}}>
                  <Collections
                    isverified={true}
                    totalETH={item.totalETH}
                    totalItems={item.totalItems}
                    name={item.name}
                  />
                </View>
              );
            }
          })}
        </View>
      </View>
      <View style={styles.box4}>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Top Collections
          </Text>
          <Text style={{color: 'blue'}}> See all </Text>
        </View>
        <View style={{flex: 0.85, borderRadius: 15, marginLeft: 15, marginRight: 15, padding: 5, backgroundColor: '#ffffff'}}>
          {data.map((item, index) => {
            if (item.isverified === false) {
              return (
                <View key={index} style={{flex: 0.5}}>
                  <Collections
                    isverified={false}
                    totalETH={item.totalETH}
                    totalItems={item.totalItems}
                    name={item.name}
                  />
                </View>
              );
            }
          })}
        </View>
      </View>
      <View style={styles.box5}>
        <BottomTab
          onPress1={() => navigation.navigate('Home')}
          onPress2={() => navigation.navigate('Stats')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
  },
  box1: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box2: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0ffff',
    borderRadius: 25,
  },
  box2_items: {
    flex: 0.4,
    flexDirection: 'row',
    height: '70%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    flex: 0.4,
    flexDirection: 'column'
  },
  box4: {
    flex: 0.3,
    marginBottom: 15,
  },
  box5: {
    flex: 0.1,
    backgroundColor: 'blue',
    bottom: 0,
  },
});

export default Stats;
