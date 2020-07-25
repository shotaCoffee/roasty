import {StyleSheet} from 'react-native';

export const AuthenticationStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16
  },
  formItem: {
    flexDirection: 'row',
    marginTop: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#999',
    padding: 4
  },
  formIcon: {
    padding: 0
  },
  input: {
    paddingLeft: 16,
  },
  buttonWrap: {
    marginTop: 16
  },
  button: {
    color: '#A6CB72'
  },
  description: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 16
  },
  link: {
    color: '#047AFF'
  }
})
