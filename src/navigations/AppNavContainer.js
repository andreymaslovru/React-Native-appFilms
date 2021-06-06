import React from 'react';

import {ScreenHome} from '../screens/ScreenHome'
import {ScreenFilms} from '../screens/ScreenFilms'
import {ScreenLikeFilms} from '../screens/ScreenLikeFilms';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {SvgComponentHome} from '../assest/svg/SvgComponentHome';

export const AppNavContainer = () => {

    const Tab = createBottomTabNavigator();

    return (
      <Tab.Navigator>
        <Tab.Screen   
            name='Home' 
            component={ScreenHome} 
            options={{tabBarLabel: 'Home', tabBarIcon: ({color, size}) => {
                <SvgComponentHome />
            }}}
        />
        <Tab.Screen name='Films' component={ScreenFilms}/>
        <Tab.Screen name='LikeFilms' component={ScreenLikeFilms}/>
      </Tab.Navigator>
    )
};
