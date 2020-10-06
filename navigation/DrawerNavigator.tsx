import { createStackNavigator, StackHeaderLeftButtonProps } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Feather } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import DatabaseScreen from '../screens/DatabaseScreen';
import FileSystemScreen from '../screens/FileSystemScreen';
import ClientsScreen from '../screens/ClientsScreen';
import MenuIcon from '../components/MenuIcon';
import { DrawerParamList, DatabaseParamList, FileSystemParamList, ClientsParamList } from '../types';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Database"
        component={DatabaseNavigator}/>
      <Drawer.Screen
        name="FileSystem"
        component={FileSystemNavigator}
      />
      <Drawer.Screen
        name="Clients"
        component={ClientsNavigator}
      />
    </Drawer.Navigator>
  );
}

const DatabaseStack = createStackNavigator<DatabaseParamList>();

function DatabaseNavigator() {
  return (
    <DatabaseStack.Navigator>
      <DatabaseStack.Screen
        name="DatabaseScreen"
        component={DatabaseScreen}
      />
    </DatabaseStack.Navigator>
  )
}

const FileSystemStack = createStackNavigator<FileSystemParamList>();

function FileSystemNavigator() {
  return (
    <FileSystemStack.Navigator>
      <FileSystemStack.Screen
        name="FileSystemScreen"
        component={FileSystemScreen}
      />
    </FileSystemStack.Navigator>
  )
}

const ClientsStack = createStackNavigator<ClientsParamList>();

function ClientsNavigator() {
  return (
    <ClientsStack.Navigator>
      <ClientsStack.Screen
        name="ClientsScreen"
        component={ClientsScreen}
      />
    </ClientsStack.Navigator>
  )
}
