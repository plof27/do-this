import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingTop: (Platform.OS === 'ios') ? 15 : 50,
    paddingBottom: (Platform.OS === 'ios') ? 0 : 25,
  },
});

export default Styles;
