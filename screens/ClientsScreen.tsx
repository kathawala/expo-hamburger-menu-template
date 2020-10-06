import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackHeaderLeftButtonProps } from '@react-navigation/stack';

import { Text, View } from '../components/Themed';
import MenuIcon from '../components/MenuIcon';
import { useEffect } from 'react';

export default function ClientsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props: StackHeaderLeftButtonProps) => (<MenuIcon/>)
    });
  });

  return (
    <View>
      <Text
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        This is Clients Screen
      </Text>
    </View>
  )
};