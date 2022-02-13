/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle:{
        fontWeight: 'bold'
      },
    }}>
      {/* home chat screen */}
      <Stack.Screen name="Root" 
        component={MainTabNavigator} 
        options={{ 
          title: 'HeyHow!',
          headerRight:() => (
            <View style={{flexDirection: 'row',width: 60, justifyContent:'space-between', marginRight:5}}>
              <AntDesign name="search1" size={22} color="white" />
              <Entypo name="dots-three-vertical" size={22} color="white" />
            </View>
          )
        }}/>
        {/* chat room screen */}
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({route}) => ({
        title: route.params.name, //get name passed from route
        headerRight: () => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between',width:100}}>
              <Ionicons name="call" size={24} color= {Colors.light.background} />
              <FontAwesome name="video-camera" size={24} color={Colors.light.background} />
              <Avatar
                size={24}
                rounded
                source={{ uri: route.params.imageUri }}
                title="Profile"
                // containerStyle= {styles.avatar}
              ></Avatar>
          </View>
        )
      })} />
      <Stack.Screen name="Contacts" component={ContactScreen} />

      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarIndicatorStyle:{
          backgroundColor: Colors[colorScheme].tint,
          shadowOpacity: 0, //ios
          elevation:0  //android
        },
        tabBarLabelStyle:{
          fontWeight: 'bold'
        }
      }}
      >
      
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
        title: 'Chats',
        // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}

        options={{
          title: 'Calls',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabOneScreen}
        options={{
        title: 'Status',
        // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="camera" size={24} color={Colors.light.tint} />,
          tabBarLabel: () => null,
          
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
