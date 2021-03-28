import React, { useState, useContext } from 'react';
import { Alert ,Keyboard} from 'react-native';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';
import Layout from '../Layout';

import { firebaseService } from '../../../services'
import { GlobalContext } from '../../../contextAPI/GlobalState';

import { COLORS } from '../../../styles'
import styles from '../Layout/styles'

const Login =({ navigation })=>{
  const { setUser } = useContext(GlobalContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye,setEye]=useState("visibility-off")
  const [showpsswd,setShowpsswd]=useState(true)
  
  const EmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  const onDone = () =>{
      navigation.navigate('SignUp')
      setEmail("")
      setPassword("")
  }

  const ChangePwdType = ()=>{
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
    setPassword(EyeNew.password)
    setEye(EyeNew.eye)
    setShowpsswd(EyeNew.showpsswd)
  }

  const OnLogin = async(email,password) => {
    Keyboard.dismiss()
    if(!email) {
      Alert.alert("Email cannot be empty")
    } else if(!EmailRegex.test(email)) {
      Alert.alert("Email is not in correct form")
    } else if(!password && password.length<6) {
      Alert.alert("Enter password with min 6 characters")
    } else {
        try {
          const AuthUser= await firebaseService.signIn(email,password)
          setUser(AuthUser)
        
          navigation.navigate('Chatroom')
          setEmail("")
          setPassword("")
        } catch(error) {
          console.log("error",error)
          switch(error.code) {
            case "auth/user-not-found":
              Alert.alert("User not found!!")
          }
      }
    }
  }
   
  return (
    <Layout
      title={'Login'}
      subTitle={'Enter your email and password'}
      email={email}
      password={password}
      textLink1={"Don't have and account?"}
      textLink2={'Sign Up'}
      onSign={OnLogin}
      onDone={onDone}
    >
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

export default Login