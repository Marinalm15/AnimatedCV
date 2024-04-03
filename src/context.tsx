import { ReactNode, createContext, useState } from "react";

interface ContextType {
    yes: boolean;
    setYes:  React.Dispatch<React.SetStateAction<boolean>>
    no: boolean;
    setNo:  React.Dispatch<React.SetStateAction<boolean>>;
    beginning: boolean;
    setBeginning:  React.Dispatch<React.SetStateAction<boolean>>
    decision: boolean;
    setDecision:  React.Dispatch<React.SetStateAction<boolean>>
    education: boolean;
    setEducation:  React.Dispatch<React.SetStateAction<boolean>>
}

interface ContextProviderProps {
    children: ReactNode
}

export const Context = createContext<ContextType>({} as ContextType)

export function ContextProvider({children,}: ContextProviderProps) {
    const [yes, setYes] = useState(false)
    const [no, setNo] = useState(false)
    const [ beginning, setBeginning] = useState(false)
    const [ decision, setDecision ] = useState(false)
    const [education, setEducation] = useState(false)
    
    return (
        <
        Context.Provider
            value={{
                yes, 
                setYes,
                no, 
                setNo,
                beginning,
                setBeginning,
                decision, 
                setDecision,
                education,
                setEducation
            }}
        >
            {children}
        </
    Context.Provider>
    )
}