import { useState } from "react";
import axios from "axios";

export default function Form({setTodo}){

    const [input,setInput] = useState('');

    const handleSubmitForm = e => {
        e.preventDefault();
        axios.post(
            'http://localhost:8000/todo',{title: input},
            {headers :
                {Authorization :`Bearer ${localStorage.getItem('accessToken')}`
            }}
        )
        .then((res)=> {
            console.log('sucess')
           
            setInput('');
            // axios.get(
            //     'http://localhost:8000/todo',{
            //     headers :{Authorization :`Bearer ${localStorage.getItem('accessToken')}`}
            //     })
            //     .then( (res) =>{
            //         setTodo(res.data.todos)
            //     })
            //     .catch( (err) =>{
            //         console.log(err)
            //     })

            //new Todo Obj => อยู่ใน res.data.todo  from server
            setTodo(prev => [...prev,res.data.todo])
        })
        .catch(err=>console.log(err))
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