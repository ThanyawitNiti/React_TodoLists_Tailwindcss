import { Link } from "react-router-dom";
import { AuthConText } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const ctx = useContext(AuthConText);
  const navigate = useNavigate();
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-blue-200">
        <h1 className="font-bold text-2xl">Todo List App</h1>
        <ul className="flex gap-5">
          {ctx.user ? (
            <>
              <li className="hover:cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:cursor-pointer" 
              onClick={()=>{
                ctx.setUser(false)
                navigate('/login')
                localStorage.removeItem('accessToken');
              }}> 
              Log out
              </li>
            </>
          ) : (
            <>
              <li className="hover:cursor-pointer">
                <Link to="/login">Log in</Link>
              </li>
              <li className="hover:cursor-pointer">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}
