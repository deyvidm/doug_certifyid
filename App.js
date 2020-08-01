import React, {Component} from 'react';
import {Card, Button, Text, Content} from 'native-base';
import {StyleSheet, View} from 'react-native';
import Untappd from './src/components/untappd';

export default class App extends Component {
  render() {
    return (
      <Content>
        <Untappd />
        <View style={styles.bottom}>
          <Card>
            <Button style={styles.puffy} full primary onPress={this.sendFetch}>
              <Text>Scan</Text>
            </Button>
          </Card>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  puffy: {
    margin: 6,
    height: 80,
    borderRadius: 10,
  },

  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
});
