/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  // TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Oinkvelope} from './src/components/Oinkvelope';
import {Envelope} from './deleteThisClass';
import {EditTopicModal} from './src/components/EditTopicModal';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedEnvelope, setSelectedEnvelope] = useState<
    Envelope | undefined
  >();
  const [showedittotal, setedittotal] = useState<boolean>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const firstOne = new Envelope();
  const notFirst = new Envelope('gas', 400, 13);
  const [thearray, setArray] = useState<Envelope[]>([
    firstOne,
    notFirst,
    notFirst,
  ]);

  return (
    <SafeAreaView style={[backgroundStyle, styles.body]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {selectedEnvelope ? (
        <EditTopicModal
          envelope={selectedEnvelope}
          ondismiss={() => {
            setSelectedEnvelope(undefined);
          }}
        />
      ) : null}
      <TouchableOpacity style={{width: '100%'}} onPress={() => {}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>$1120</Text>
          <Image
            source={require('./src/assets/piggy-bank.png')}
            style={{tintColor: 'white'}}
          />
          <View style={{alignItems: 'center'}}>
            <Text style={styles.headerText}>$230</Text>
            <Text style={[styles.headerText, {fontSize: 10}]}>
              {' '}
              unallocated for
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <FlatList
        data={thearray}
        style={styles.FlatList}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        renderItem={({item}) => (
          <Oinkvelope
            envelope={item}
            onpress={() => {
              setSelectedEnvelope(item);
            }}
          />
        )}
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
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {color: 'white'},
  FlatList: {
    width: '90%',
    alignContent: 'center',
  },
});

export default App;
