import Item from "./Item";

export default function List(){
    return (
        <ul className=" flex flex-col gap-3">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </ul>
    )
}