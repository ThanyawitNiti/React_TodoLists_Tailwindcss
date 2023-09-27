import { useEffect,useState } from "react"
import Form from "../component/Form"
import List from "../component/List"
import axios from "axios"

export default function HomePage(){
    const [todo,setTodo] = useState([])
    useEffect(()=>{
        axios
            .get('http://localhost:8000/todo',{
                headers:{
                    Authorization :`Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res)=>{
                // เป็น array แล้ว
                setTodo(res.data.todos)
                // console.log(res.data)
                // console.log(res.data.todos)
            })
            .catch((err) => {
                console.log(err);
              });
          }, []);
            

    return (
        <section className="flex flex-col gap-4">
          <Form />
          <List  task = {todo}/>
          {/* ตัวแปรtaskคือ props ที่กำจะส่งไป จะมีค่าเป็น todo ที่ถูก Set */}
        </section>
      );
    }

