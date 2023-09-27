import axios from "axios";
import { useState ,useContext  } from "react";
import { useNavigate  } from "react-router-dom";
import { AuthConText } from "../context/AuthContext";

export default function LoginPage() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const ctx = useContext(AuthConText); // Obj box which key is {user,setUser}
  
  const handleChangeInput =  (event) => setInput( {...input,[event.target.name]:event.target.value} )

  const navigate = useNavigate();

  const handleSubmitForm = (event) => {
    event.preventDefault(); 
    axios
      .post("http://localhost:8000/auth/login", input) 
      .then( (res) => {
        window.alert("success login");
        // Front
        console.log(res.data.accessToken)
        localStorage.setItem('accessToken',res.data.accessToken)
        ctx.setUser(true)
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert('login fail')
      });
  };


  return (
    <form
      className="flex flex-col gap-5 bg-white p-5 rounded-lg"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label htmlFor="" className="block md-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1 rounded-md
            focus:ring focus:ring-blue-500"
          name="username"
          value={input.username}
          onChange={handleChangeInput }
        />
      </div>
      <div>
        <label htmlFor="" className="block md-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          className="w-full border outline-none px-3 py-1 rounded-md
            focus:ring focus:ring-blue-500"
          name ='password'
          value={input.password}
          onChange={handleChangeInput }
        />
      </div>
      <button className="bg-green-300 px-3 py-1.5 rounded-md">Sign in</button>
    </form>
  );
}


