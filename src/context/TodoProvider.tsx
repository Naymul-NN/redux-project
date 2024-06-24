import { Dispatch, ReactNode, createContext, useReducer } from "react"


interface TodoProviderProps {
    children: ReactNode;
}
const initialState:TTodo[] = [];

type TTodo = {
    id: string;
    title: string;
    isCompleated: boolean;
}

type Taction = {
    type:string;
    payload:TTodo;
 }
 
export const TodoContext = createContext<{ state: TTodo[]; dispatch: Dispatch<Taction>; }>({
    state: initialState,
    dispatch: () => null,
});


const reducer = (currentState: TTodo[] ,action:Taction) => {
    switch (action.type) {
        case 'addTodo':
            return [...currentState,action.payload]
    
        default:
         return currentState
    }
}

const TodoProvider = ({ children }: TodoProviderProps) => {

  const [state , dispatch] = useReducer(reducer, initialState);

    const values = {
        state,
        dispatch
    }

    return <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>

}

export default TodoProvider