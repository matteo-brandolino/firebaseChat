import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles'

export default StyleSheet.create({
    messagesContainer: {
      height: '100%',
      paddingBottom: 90,
    },
    inputContainer: {
      width: '100%',
      height: 90,
      position: 'absolute',
      bottom: 0,
      paddingVertical: 20,
      paddingLeft: 20,
  
      borderWidth: 1,
      borderTopColor: COLORS.GREY
    }
})