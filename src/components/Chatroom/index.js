import React, { useEffect, useContext } from 'react'
import { FlatList, SafeAreaView, View, ImageBackground } from 'react-native'

import { firebaseService } from '../../services'

import Input from '../Input'
import Message from '../Message'

import styles from './styles'
import { GlobalContext } from '../../contextAPI/GlobalState'

export default function Chatroom () {
  const { user, messages, setMessages } = useContext(GlobalContext)
  
  const uid = user.uid
  console.log(user);
  const getMessages = () => {
    firebaseService.messageRef
      .orderBy('created_at', 'desc')
      .onSnapshot( snapshot => setMessages(snapshot.docs))
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <SafeAreaView>
        <View style={styles.messagesContainer}>
          <ImageBackground
            style={{flex:1}}
            source={{uri: "https://images.pexels.com/photos/3685207/pexels-photo-3685207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
          >
            <FlatList
              inverted
              data={messages}
              keyExtractor={ item => item.id}
              renderItem={ ({ item, i }) => {
                const data = item.data()
                const side = data.user_id === uid ? 'right' : 'left'
                return (
                  <Message side={side} message={data.message} name={data.by} />
                )
              }}
              ListHeaderComponent={
                <View style={{paddingVertical:10}}></View>
              }
            />
        </ImageBackground>
        </View>

      <View style={styles.inputContainer}>
        <Input />
      </View>
    </SafeAreaView>
  )
}
