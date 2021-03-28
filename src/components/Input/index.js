import React, { useCallback, useState, useContext } from 'react'
import { View, TextInput } from 'react-native'
import { GlobalContext } from '../../contextAPI/GlobalState'

import { firebaseService } from '../../services'

import Button from '../Shared/Button'
import Loader from '../Shared/Loader'

import styles from './styles'

export default function Input () {
  const { user } = useContext(GlobalContext)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const uid = user.uid

  const name = user.displayName

  const handlePress = useCallback(
    function () {
      setIsLoading(true)
      firebaseService
        .createMessage({ message, name, uid })
        .then(function () {
          setIsLoading(false)
          setMessage('')
        })
    },
    [message]
  )

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Write you message" />
      </View>

      <Button text="Send" onPress={handlePress} disabled={isLoading} />

      {isLoading && <Loader />}
    </View>
  )
}
