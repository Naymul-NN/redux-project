import React from "react";


type Tprops = {
   count: number,
   setCount: React.Dispatch<React.SetStateAction<number>>
}

const CouterWithFun = ({count , setCount } : Tprops) => {
   

    return (

        <div className="border border-red-500 p-10 m-10">
            <button className="bg-red-300 rounded-xl py-5 px-10" onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </div>

    )
}

export default CouterWithFun;