import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
    return (
        <View style={style.container}>
        <Text>HomeScreen</Text>
       
      </View>
    );
  }
  
  function Secondscreen() {
    return (
      <View style={style.container}>
        <Text>Secondscreen</Text>
      </View>
    );
  }
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export { Secondscreen, HomeScreen}