/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const firstOne = {amount: 0, topic: 'add new envelope'};
  const [thearray, setArray] = useState<{amount: number; topic: string}[]>([
    firstOne,
  ]);

  return (
    <SafeAreaView style={[backgroundStyle, styles.body]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>$1120</Text>
        <Image source={require('./src/assets/piggy-bank.png')} />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.headerText}>$230</Text>
          <Text style={{fontSize: 10}}> unallocated for</Text>
        </View>
      </View>
      <FlatList
        data={thearray}
        renderItem={({item}) => <Text>{item.amount}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    alignContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {color: 'black'},
});

export default App;
