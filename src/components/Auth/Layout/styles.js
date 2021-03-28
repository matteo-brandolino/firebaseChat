import { StyleSheet, Dimensions } from 'react-native'

import { COLORS } from '../../../styles'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
    },
    view:{
        paddingHorizontal:30,
        marginTop:120
    },
    bigtext:{
        fontSize:35,
        textAlign:'center',
        color:COLORS.WHITE
    },
    smalltext:{
        fontSize:17,
        textAlign:'center',
        color:COLORS.WHITE

    },
    inputContainer: {
        borderWidth:1,
        borderColor:COLORS.WHITE, 
        borderRadius: 30, 
        paddingLeft:10,
    },
    inputText:{
        color: COLORS.WHITE
    },
    buttonview:{
        alignSelf:'center',
        marginTop:25,
        width:"50%"
    },
    textinputstyle:{
        width:"90%",
        borderBottomWidth:1,
        paddingBottom:0
    },
    iconstyle:{
        backgroundColor: COLORS.PRIMARY,
        borderRadius:50,
        width: 70,
        height: 70,
        margin:5,
    },
    rightContainer: {
        paddingRight:10,
    },
    touchable: {
        backgroundColor: COLORS.PRIMARY,
        borderRadius:30,
        flexDirection:'row',
        justifyContent:'center',
        elevation:8,
        paddingVertical: 10, 
        paddingHorizontal: 12,
    },  
    bottomview:{
        flexDirection:'row',
        justifyContent:'center'
    },
    link : {
        paddingTop:5,
        color:COLORS.SECONDARY,
        marginLeft:6
    }
  })