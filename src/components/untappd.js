import React, {Component} from 'react';
import {Card, Button, Content} from 'native-base';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

class Untappd extends Component {
  state = {
    entries: [
        {name: "beer 1", body: "samalamahumanama"},
        {name: "beer deux", body: "bumblera larea"},
        {name: "tres beers", body: "hungaryndalyrings"},
    ],
  };

  render() {
    const Item = ({ beer }) => (
      <View style={styles.item}>
          <Text style={styles.title}>{beer.name}</Text>
          <Text></Text>
          <Text style={styles.body}>beer deets go here</Text>
      </View>
    );
    
    let Entries = this.state.entries.map((beer, i) => {
      return (
        <Item key={i} beer={beer}/>
      );
    });

    return <View styles={styles.container}>{Entries}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  body: {
    fontSize: 16
  }
});


export default Untappd