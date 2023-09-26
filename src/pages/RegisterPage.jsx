export default function RegisterPage(){
    return (
    <section className="flex flex-col gap-5 bg-white p-5 rounded-lg">
        <div>
            <label htmlFor="" className="block md-1 font-semibold">
            Username
            </label>
            <input type="text" className="w-full border outline-none px-3 py-1 rounded-md
            focus:ring focus:ring-blue-500" />
        </div>
        <div>
        <label htmlFor="" className="block md-1 font-semibold">
            Password
            </label>
            <input type="text" className="w-full border outline-none px-3 py-1 rounded-md
            focus:ring focus:ring-blue-500" />
        </div>
        <div>
        <label htmlFor="" className="block md-1 font-semibold">
            Confirm Password
            </label>
            <input type="text" className="w-full border outline-none px-3 py-1 rounded-md
            focus:ring focus:ring-blue-500" />
        </div>
        <button className="bg-green-300 px-3 py-1.5 rounded-md">Sign Up</button>
    </section>)
}