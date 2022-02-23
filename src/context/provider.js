import { createContext, useState } from "react"

export default ({ children }) => {
    const [ imageURL, setImageURL ] = useState("");
    return(
        <AppContext.Provider value={[ imageURL, setImageURL ]}>
            { children }
        </AppContext.Provider>
    )
}

export const AppContext = createContext()