import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Profile({ route }) {
  const { user } = route.params
  return (
    <View style={styles.container}>
      <Title style={styles.title} title={'Profile today is beutiful day'} />
      <Title title={`Name: ${user.name}`} />
      <Title title={`Email: ${user.email}`} />
      <Title title={`Age: ${user.age}`} />



    </View>
  )
}