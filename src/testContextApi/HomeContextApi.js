import React from 'react'
import { View } from 'react-native'
import HomePage from './HomePage'
import { UserProvider } from './UserContext'

const HomeContextApi = () => {
    
    const user = { name: 'Fatemeh', loggedIn: true }

  return (
      <View>
        <UserProvider value={user}>
            <HomePage />
        </UserProvider>

      </View>
   
  )
}

export default HomeContextApi;