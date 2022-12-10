import React, {PropsWithChildren, useState} from 'react';
import {
  Button,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Envelope} from '../../deleteThisClass';

export const EditTopicModal: React.FC<{
  envelope: Envelope;
  ondismiss: (something: boolean) => void;
}> = ({envelope, ondismiss: callback}) => {
  const isNewEnvelope = !envelope.topic;

  return (
    <Modal>
      <View style={styles.body}>
        <TextInput style={styles.textinput} placeholder="Topic Name">
          {isNewEnvelope ? '' : envelope.topic}
        </TextInput>
        <TextInput style={styles.textinput} placeholder="Amount">
          {isNewEnvelope ? '' : '$' + envelope.amount}
        </TextInput>
        <TextInput style={styles.textinput} placeholder="Percentage">
          {isNewEnvelope ? '' : envelope.percentage + '%'}
        </TextInput>
        <Button onPress={() => callback(false)} title={'save'} />
        <Button onPress={() => callback(false)} title={'cancel'} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  textinput: {
    color: 'black',
  },
});
