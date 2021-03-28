import React from 'react';
import { Text, View, ImageBackground, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HideKeyboard from '../../Shared/HideKeyboard';
import styles from './styles'

export default function Layout({ title, subTitle, email, password, username, textLink1, textLink2, onSign, onDone, children }) {

    return (
        <ImageBackground
            style={{flex:1}}
            source={{uri: "https://images.pexels.com/photos/1111316/pexels-photo-1111316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}}
        >
            <HideKeyboard>
                <View style={styles.container}>
                <StatusBar
                    hidden={true} 
                />
                    <View style={styles.view}>
                        <Text style={styles.bigtext}>{title}</Text>
                        <Text style={{...styles.smalltext,paddingTop:5, paddingBottom: 30}}>{subTitle}</Text>
                        { children }
                        <View style={styles.buttonview}>
                            <TouchableOpacity  
                                style={styles.touchable}
                                onPress={()=>onSign(email,password, username)}  
                            >
                            <Text style={styles.smalltext}>{title}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomview}>
                            <Text style={{...styles.smalltext,paddingTop:5}}>{textLink1}</Text>
                            <TouchableOpacity onPress={onDone}>
                                <Text style={{...styles.smalltext,...styles.link}}>{textLink2}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </HideKeyboard>
        </ImageBackground>
    )
}
