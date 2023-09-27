export default function Item(props){
    // console.log('23')
    console.log(props)
    return (
        <li className="flex justify-between border-2 border-blue-600 bg-white px-3 py-4 rounded-lg">
            <span>{props.item.title}</span>
            <div className="flex gap-2">
                <button className="bg-green-600 px-3 py-1.5 text-white rounded-md">Edit</button>
                <button className="bg-red-700 px-3 py-1.5 text-white rounded-md">Delete</button>
            </div>
        </li>
    )
}