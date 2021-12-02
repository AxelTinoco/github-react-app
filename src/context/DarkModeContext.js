import { createContext, useState } from "react"

const DarkModeContext = createContext()



const DarkModeContextProvider = ({children}) => {

    const [darkMode, setdarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{darkMode,setdarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContextProvider}
export default DarkModeContext
