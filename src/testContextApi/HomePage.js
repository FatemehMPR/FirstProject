import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import UserContext from './UserContext'

const HomePage =(Props) => {

  //const contextType = UserContext
  //const user = Props.value

  const user = useContext(UserContext)
  
  console.log(user.name) // { name: 'Tania', loggedIn: true }
  
  return(

    <View>
        <Text>{user.name} </Text>
    </View>
  )

  
}

export default HomePage;