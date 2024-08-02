import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyLogin from './Pages/LoginPage';
import MyReg from './Pages/RegisterPage';
import MyForPass from './Pages/ForgotPassword';
import MyDashboard from './Pages/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <navigation/>
    // </View>
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Register' component={MyReg}/>
      <Stack.Screen name='Login' component={MyLogin}/>
      <Stack.Screen name='ForgotPassword' component={MyForPass}/>
      <Stack.Screen name='Dashboard' component={MyDashboard}/>
    </Stack.Navigator>
   </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  

  },
});
