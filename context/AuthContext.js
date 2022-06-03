import { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (user) => {
        setUser(user)
    }

    const logout = async () => {
        setUser(null)
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('jwt')
        return
    }

    useEffect(() => {
        findUser()
    }, [])


    const findUser = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user'))
        if (user) {
            setUser(user)
        }
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
