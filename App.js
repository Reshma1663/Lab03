
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionNavigator from './Components/TransactionNavigator'; 
import TransactionSummaryComponent from './Components/TransactionSummaryComponent'; 
import { TransactionProvider } from './Components/TransactionProvider'; 
import React from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Transactions" component={TransactionNavigator} />
          <Tab.Screen name="Summary" component={TransactionSummaryComponent} />
          
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}