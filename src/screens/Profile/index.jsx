import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Profile({ route }) {
  const { user } = route.params
  return (
    <View style={styles.container}>
      <Title title={'Profile today is beutiful day'} />
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Age: {user.age}</Text>

    </View>
  )
}