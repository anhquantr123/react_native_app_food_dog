import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import ChatIcon from '../../assets/icons/chat-icon';
import HomeIcon from '../../assets/icons/home-icon';
import NotificationIcon from '../../assets/icons/notification-icon';
import UserIcon from '../../assets/icons/user-icon';
import { CHAT_SCREEN, HOME_SCREEN, NOTIFICATION_SCREEN, USER_SCREEN } from '../constants/screen-default';
import { COLORS } from '../constants/theme';


const Tab = createBottomTabNavigator();
export default function BottomTabNav() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false , tabBarShowLabel: false}}>
        <Tab.Screen name="Home" component={HOME_SCREEN} 
        options={{tabBarIcon:({focused})=>(
            <HomeIcon size={focused? 26 : 20} colorFill={focused? COLORS.primaryColor : COLORS.grayColor }  />
        )}} />
        <Tab.Screen name="Chat" component={CHAT_SCREEN}  options={{tabBarIcon:({focused})=>(
            <ChatIcon size={focused? 26 : 20} colorFill={focused? COLORS.primaryColor : COLORS.grayColor }  />
        )}} />
        <Tab.Screen name="Notification" component={NOTIFICATION_SCREEN} options={{tabBarIcon:({focused})=>(
            <NotificationIcon size={focused? 26 : 20} colorFill={focused? COLORS.primaryColor : COLORS.grayColor }  />
        )}} />
        <Tab.Screen name="User" component={USER_SCREEN} options={{tabBarIcon:({focused})=>(
            <UserIcon size={focused? 26 : 20} colorFill={focused? COLORS.primaryColor : COLORS.grayColor }  />
        )}}  />
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
