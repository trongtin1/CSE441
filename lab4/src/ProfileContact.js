import React from 'react';
import {StyleSheet, View, Text, Alert, Button} from 'react-native';
import ContactThum from './ContactThum';
import {List, Divider, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import ContactThum from './ContactThum';
// import DetailListIt from './DetailListItem';
// import { IconButton } from 'react-native-paper';

const DetailListItem = ({title, description, icon}) => {
  return (
    <View>
      <List.Item
        style={{padding: 16}}
        title={title}
        titleStyle={{color: 'black', fontSize: 20}}
        description={description}
        descriptionStyle={{color: 'black', fontSize: 16}}
        left={props => <Icon name={icon} size={30} color="#900" />}
      />
      <Divider />
    </View>
  );
};

const ProfileContact = ({route}) => {
  const {contact} = route.params;
  const {id, avatar, name, email, phone, cell, favorite} = contact;

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThum avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem title={'Email'} description={email} icon={'mail'} />
        <DetailListItem title={'Work'} description={phone} icon={'phone'} />
        <DetailListItem
          title={'Personal'}
          description={cell}
          icon={'smartphone'}
        />
        <View style={{alignItems: 'center'}}>
          <IconButton
            icon={favorite == true ? 'star-check' : 'star-check-outline'}
            iconColor="#663399"
            size={20}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});
