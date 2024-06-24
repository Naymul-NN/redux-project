import { useState } from "react"

interface User {
    name: string;
    age: string;
    hobbis: string[];
}

const UserInfoWithUseState = () => {
    const [user, setUser] = useState <User>({ name: '', age: '0', hobbis: [] })

    console.log(user)

    return <form className=" flex p-20 gap-10">
        <input
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border border-purple-600"
            type="text"
            name="name"
            id="name"
            placeholder="name"
        />
        <input
            onChange={(e) => setUser({ ...user, age: e.target.value })}

            className="border border-purple-600"
            type="text"
            name="age"
            id="age"
            placeholder="age"
        />
        <input
            onBlur={(e) => setUser({ ...user, hobbis:[...user.hobbis, e.target.value]  })}

            className="border border-purple-600"
            type="text"
            name="hobbis"
            id="hobbis"
            placeholder="hobby"
        />
        <button className="btn btn-primary">submit</button>
    </form>
}

export default UserInfoWithUseState;