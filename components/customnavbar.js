import { Appbar } from 'react-native-paper';


export default function CustomNavigationBar({ navigation, route, back }) {
    const title = "MD Nav Demo";

    const handleBackAction = () => {
        navigation.goBack(); // palataa edelliseen
    };

    const handleForwardAction = () => {
        if (route.name === 'HomeScreen') {
          navigation.navigate('Secondscreen'); // mennää toisee ruutuu
        }
      };
return (
    <Appbar.Header>
     {back && <Appbar.BackAction onPress={handleBackAction} />}
      <Appbar.Content title={title} />
      {route.name === 'HomeScreen' && ( 
        <Appbar.Action icon="arrow-right" onPress={handleForwardAction} />
      )}
    </Appbar.Header>
  );
}