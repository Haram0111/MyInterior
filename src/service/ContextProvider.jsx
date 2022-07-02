import { React, useState, createContext } from 'react'

export const Context = createContext({
    loggedUserName : "",
    loggedUser: {
        id: '',
        pw: '',
        type: ''
    },
    loggedIn: false,
    setLoggedUser: () => {},
    setLoggedIn: () => {}
});

const ContextProvider = ({children}) => {

    const setLoggedUser = (data) => {
        setState(prevState => (
            {
                ...prevState,
                loggedUser: data
            }
        ))
    }

    const setLoggedIn = () => {
        setState(prevState => (
            {
                ...prevState, 
                loggedIn: !prevState.loggedIn
            }
        ))
    }

    const setLoggedUserName = (data) => {
        setState(prevState => (
            {
                ...prevState,
                loggedUserName: data
            }
        ))
    }

    const initialState = {
        loggedUserName: "",
        loggedUser: {},
        loggedIn: false,
        setLoggedUser,
        setLoggedIn,
        setLoggedUserName
    }

    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;