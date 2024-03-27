
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './TransactionListScreen';
import TransactionDetailsScreen from './TransactionDetailsScreen';
import TransactionSummaryComponent from './TransactionSummaryComponent';

const Stack = createStackNavigator();

const TransactionNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TransactionsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1e90ff', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionListScreen}
        options={{ title: 'Transactions' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailsScreen}
        options={{ title: 'Transaction Details' }}
      />
      <Stack.Screen
        name="Summary"
        component={TransactionSummaryComponent}
        options={{ 
          title: 'Summary',
          headerStyle: {
            backgroundColor: '#FF5733',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default TransactionNavigator;
