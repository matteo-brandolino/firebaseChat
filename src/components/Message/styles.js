import { StyleSheet } from 'react-native'

import { COLORS } from '../../styles'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  lastContainer: {
    paddingVertical: 30
  },  
  textContainer: {
    width: 'auto',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginLeft: 10
  },
  rightContainer: {
    justifyContent: 'flex-end'
  },
  rightTextContainer: {
    backgroundColor: COLORS.PRIMARY,
    marginRight: 10,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
  },
  leftText: {
    textAlign: 'left'
  },
  rightText: {
    textAlign: 'right'
  },
  text: {
    fontSize: 14,
    color: COLORS.WHITE
  }
})

const flattenedStyles = {
  container: StyleSheet.flatten([styles.container, styles.rightContainer]),
  textContainer: StyleSheet.flatten([styles.textContainer, styles.rightTextContainer]),
  leftText: StyleSheet.flatten([styles.leftText, styles.text]),
  rightText: StyleSheet.flatten([styles.rightText, styles.text])
}

export {
  styles,
  flattenedStyles
}
