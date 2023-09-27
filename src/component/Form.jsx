import { useState } from "react";
import axios from "axios";

export default function Form(){

    const [input,setInput] = useState('');

    const handleSubmitForm = e => {
        e.preventDefault();
        //validate
        console.log('yoooooo')
        axios.post(
            'http://localhost:8000/todo',{title: input},
            {headers :
                {Authorization :`Bearer ${localStorage.getItem('accessToken')}`
            }}
        )
        .then((res)=> {
            console.log('sucess')
        })
        .catch(err=>console.log(err))
        
        console.log('lagoi')
    };

    return (
        <form className="flex gap-2" onSubmit={handleSubmitForm}>
            <input type="text" 
            className="outline-none px-3 py-1.5 border rounded-md flex-grow" 
            value={input}
            onChange={(event) =>setInput(event.target.value)}/>
            <button className="bg-blue-400 px-3 py-1.5 text-black rounded-md">
                Create
            </button>
        </form>
    )
}