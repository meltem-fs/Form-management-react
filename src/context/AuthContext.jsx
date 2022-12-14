import React, { createContext, useState } from 'react'


export const AuthContext= createContext()


const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    firstname: '',
    surname: '',
    password: '',
    email: '',
    phonenumber: '',
    country: '',
    login: false
  })

  const values = { user, setUser }
  return (
    <div>
      <AuthContext.Provider value={values} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;