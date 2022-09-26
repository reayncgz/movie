import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { Navigation } from '@/types/index';

function MovieActor(props): React.ReactElement {
  const navigation: Navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.push('ActorDetail', { id: item.id })}
    >
      <View style={styles.item}>
        <Image
          source={{ uri: item.avatar }}
          resizeMode={'stretch'}
          style={[styles.itemImage]}
        />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}>
          {item.name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.labelText}>
          {item?.profession === '导演' ? item?.profession : ''}
          {item?.act ? `饰: ${item?.act}` : ''}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        horizontal
        initialNumToRender={4}
        showsHorizontalScrollIndicator={false}
        data={props.movie}
        renderItem={renderItem}
        keyExtractor={item => item.union_id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 4
  },
  item: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 7,
    marginRight: 8,
    width: 94
  },
  itemImage: {
    height: 130,
    borderRadius: 3
  },
  itemText: {
    marginTop: 5,
    color: '#fff',
    fontSize: 12
  },
  labelText: {
    color: 'hsla(0,0%,96.1%,.75)',
    fontSize: 10
  }
});

export default MovieActor;
