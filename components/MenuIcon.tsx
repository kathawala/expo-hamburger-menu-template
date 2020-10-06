import * as React from 'react';
import { Feather } from './Themed';
import { TouchableOpacity } from 'react-native';

import { onPressFunc } from '../types';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

// export type MenuIconProps = {
//   onPress: onPressFunc;
// };

export default function MenuIcon() {
  const navigation = useNavigation();

  const openDrawer = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer());
  },[]);

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Feather name="menu" size={24} style={{marginLeft: 25}}/>
    </TouchableOpacity>
  );
};