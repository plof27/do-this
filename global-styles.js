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
    paddingTop: (Platform.OS === 'ios') ? 15 : 48,
    paddingBottom: (Platform.OS === 'ios') ? 0 : 27,
  },
  body: {
    flex: 10,
    alignItems: 'center',
  },
  left: {
    flex: 4,
  },
  right: {
    flex: 4,
  },
});

export default Styles;
