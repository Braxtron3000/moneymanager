import React, {PropsWithChildren} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Envelope} from '../../deleteThisClass';

export const Oinkvelope: React.FC<{
  envelope: Envelope;
  onpress: () => void;
}> = ({envelope, onpress}) => {
  const isFirst = !envelope.topic;

  return (
    <TouchableOpacity
      onPress={() => {
        onpress();
      }}>
      <ImageBackground
        style={styles.ImageBackground}
        imageStyle={{tintColor: 'dodgerblue'}}
        source={
          !isFirst
            ? require('../assets/piggy-bank.png')
            : require('../assets/addcontent.png')
        }
        resizeMode={'cover'}
        resizeMethod={'scale'}>
        {!isFirst ? (
          <View style={styles.contentstats}>
            <Text style={styles.Text}>${envelope.amount}</Text>
            <Text style={styles.Text}>{envelope.percentage}%</Text>
          </View>
        ) : null}
        <Text style={[styles.Text, styles.topictext]}>{envelope.topic}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentstats: {
    height: '90%',
    width: '90%',
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Text: {
    textAlign: 'center',
    color: 'white',
  },
  ImageBackground: {
    tintColor: 'lightcoral',
    width: 150,
    height: 150,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10,
  },
  topictext: {
    position: 'absolute',
    bottom: 1,
    color: 'white',
  },
});
