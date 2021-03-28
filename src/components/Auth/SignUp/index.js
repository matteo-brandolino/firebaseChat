import React, { useState } from 'react';
import { Alert , Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';

import { firebaseService } from '../../../services'

import { COLORS } from '../../../styles'
import styles from '../Layout/styles'
import Layout from '../Layout';

const Signup =({ navigation })=>{
 
  const [username,setUsername]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye,setEye]=useState("visibility-off")
  const [showpsswd,setshowpsswd]=useState(true)

  const EmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onDone=async ()=>{
    navigation.navigate('Login')
  }

  const onSignUp = async(email,password)=>{
    Keyboard.dismiss()
    if(!email) {
      Alert.alert("Email can't be empty");
    }
    else if(!EmailRegex.test(email)) {
      Alert.alert("Email is not in the right format")
    }
    else if (!password || password.length<5) {
      Alert.alert("Password is too weak and required min 6 characters")
    }
    else{
      try{
          const Email= await firebaseService.signUp(email,password)
          Email.updateProfile({displayName:username})
          Email.reload()
          
          setUsername("")
          setEmail("")
          setPassword("")
          navigation.navigate('Login')
      }
      catch(error)
      {
        console.log("error",error.message,error.code)
        switch (error.code) {
          case "auth/weak-password":
            Alert.alert("Password is invalid,requires min 6 char")
            break;
          case "auth/email-already-in-use":
            Alert.alert("Email is already registered")
            break;
          default:
            Alert.alert("Error")
        }
      }
    }
  }
  const ChangePwdType=()=>{
    let EyeNew;
    if (showpsswd) {
        EyeNew = {
            eye: 'visibility',
            showpsswd: false,
            password: password
        }
    } else {
        EyeNew = {
            eye: 'visibility-off',
            showpsswd: true,
            password: password
        }
    }
    // set new state value
    setPassword(EyeNew.password)
    setEye(EyeNew.eye)
    setshowpsswd(EyeNew.showpsswd)
  }

  return (
    <Layout
      title={'SignUp'}
      subTitle={'Enter your credentials to continue the SignUp'}
      email={email}
      password={password}
      username={username}
      textLink1={'Already have an account?'}
      textLink2={'Log In'}
      onSign={onSignUp}
      onDone={onDone}
    >
      <Input
        placeholder='Your Name'
        placeholderTextColor={COLORS.WHITE}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        value={username}
        onChangeText={(text)=>setUsername(text)}
      />
      <Input
        placeholder='Your Email'
        placeholderTextColor={COLORS.WHITE}
        keyboardType="email-address"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        value={email}
        onChangeText={(text)=>setEmail(text)}
      />
      <Input
        placeholder='Password'
        placeholderTextColor={COLORS.WHITE}
        rightIcon={
          <Icon 
          style={styles.icon}
          name={eye}
          size={30}
          color={COLORS.WHITE}
          onPress={ChangePwdType}
          />
        }
        rightIconContainerStyle={styles.rightContainer}
        secureTextEntry={showpsswd}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        value={password}
        onChangeText={(text)=>setPassword(text)}
      />
    </Layout>
  );
}
export default Signup