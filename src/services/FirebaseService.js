import firebase from '@react-native-firebase/app' 
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { COLLECTIONS } from '../constants'

export default class FirebaseService {


  messageRef = firestore().collection(COLLECTIONS.MESSAGES);

  async signUp (email, pass) {
    try {
      const response = await auth().createUserWithEmailAndPassword(email,pass)
      return response.user
    } catch (error) {
      return { error }
    }
  }

  async signIn (email, pass) {
    try {
      const response = await auth().signInWithEmailAndPassword(email,pass)
      return response.user 
    } catch (error) {
      return { error }
    }
  }

  async createMessage ({ message, name, uid }) {
    await this.messageRef.add({
      message,
      user_id: uid,
      by: name,
      created_at: new Date()
    })
  }
}
