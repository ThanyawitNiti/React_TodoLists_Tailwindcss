import Joi from "joi";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
  username: Joi.string().max(30).min(3).required(),
  password: Joi.string().min(6).alphanum().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  console.log(error);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const { value, error } = schema.validate(
      { username, password, confirmPassword },
      { abortEarly: false }
      // { abortEarly: false } true เจอ error จะหยุดเลย false เช็คทุกตัว
    );
    if (error) {
      // console.dir(error);
      // error.details;
      const nextError = { username: "", password: "", confirmPassword: "" };
      for (let item of error.details) {
        // console.log(item.path[0])
        nextError[item.path[0]] = item.message;
        // nextError['username']=item.message
      }
      return setError(nextError);
    }

    setError({
      username: "",
      password: "",
      confirmPassword: "",
    });

    setIsLoading(true);

    axios
      .post("http://localhost:8000/auth/register", {
        username,
        password,
        confirmPassword,
      }) // value จาก schema.validate มาใส่ได้
      .then((res) => {
        window.alert("success registration");
        // Front
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // สำเร็จหรือไม่สำเร็จ
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

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
          className={`w-full border outline-none px-3 py-1 rounded-md
          focus:ring-2 ${
            error.username ? "border-red-500" : "focus:ring-blue-500"
          }`}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {error.username && (
          <span className="text-red-600 text-xs"> {error.username} </span>
        )}
      </div>
      <div>
        <label htmlFor="" className="block md-1 font-semibold">
          Password
        </label>
        <input
          type="text"
          className={`w-full border outline-none px-3 py-1 rounded-md
          focus:ring-2 ${
            error.password ? "border-red-500" : "focus:ring-blue-500"
          }`}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error.password && (
          <span className="text-red-600 text-xs"> {error.password} </span>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block md-1 font-semibold">
          Confirm Password
        </label>
        <input
          type="text"
          className={`w-full border outline-none px-3 py-1 rounded-md
          focus:ring-2 ${
            error.confirmPassword ? "border-red-500" : "focus:ring-blue-500"
          }`}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {error.confirmPassword && (
          <span className="text-red-600 text-xs">
            {" "}
            {error.confirmPassword}{" "}
          </span>
        )}
      </div>
      <button className="bg-green-300 px-3 py-1.5 rounded-md" type="submit">
        Sign Up
      </button>
    </form>
  );
}
