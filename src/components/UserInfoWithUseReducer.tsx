import { useReducer } from "react";

interface State {
    name: string;
    age: string;
    hobbies: string[];
}

type Action =
    | { type: 'addName'; payload: string }
    | { type: 'addAge'; payload: string }
    | { type: 'addHobby'; payload: string };

const initialState: State = {
    name: '',
    age: '',
    hobbies: [],
};

const reducer = (currentState: State, action: Action): State => {
    switch (action.type) {
        case 'addName':
            return { ...currentState, name: action.payload };
        case 'addAge':
            return { ...currentState, age: action.payload };
        case 'addHobby':
            return {
                ...currentState,
                hobbies: [...currentState.hobbies, action.payload],
            };
        default:
            return currentState;
    }
};

const UserInfoWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
   

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(state);
    }

    return (
        <form onSubmit={handleSubmit} className="flex p-20 gap-10">
            <input
                onChange={(e) => dispatch({ type: 'addName', payload: e.target.value })}
                className="border border-purple-600"
                type="text"
                name="name"
                id="name"
                placeholder="name"
            />
            <input
                onChange={(e) => dispatch({ type: 'addAge', payload: e.target.value })}
                className="border border-purple-600"
                type="text"
                name="age"
                id="age"
                placeholder="age"
            />
            <input
                onBlur={(e) => dispatch({ type: 'addHobby', payload: e.target.value })}
                className="border border-purple-600"
                type="text"
                name="hobbies"
                id="hobbies"
                placeholder="hobby"
            />
            <button className="btn btn-primary" type="submit">submit</button>
        </form>
    );
}

export default UserInfoWithUseReducer;
