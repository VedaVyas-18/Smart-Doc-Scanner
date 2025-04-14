import { View, Button, Text, StyleSheet } from 'react-native';
<View style={styles.container}>
    <Button title="Upload Document"/>
</View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    marginTop: 20,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});