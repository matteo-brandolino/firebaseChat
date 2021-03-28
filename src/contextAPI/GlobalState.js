import React , { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    user: {},
    messages: []
}

//create context
export const GlobalContext = createContext(initialState);

//Provide component
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions //describe what we happened //dispatch is kind of setState

    async function setUser( value ) {
        try {
            dispatch({
                type:'SET_USER',
                payload: value
            })
        } catch (err) {
            console.log(err);
        }
    }

    async function setMessages( value ) {
        try {
            dispatch({
                type:'SET_MESSAGES',
                payload: value
            })
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <GlobalContext.Provider 
            value={{
                user: state.user,
                messages : state.messages,
                setUser,
                setMessages
            }}
        >
            {children}
        </GlobalContext.Provider>

    )
}