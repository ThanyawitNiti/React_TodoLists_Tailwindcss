import Item from "./Item";

export default function List(props){
    // props { 
    //  task : [ {}, {}, {} ] 
    // }
    // console.log(props.task)
    // task =[ {}]
    return (
        <ul className=" flex flex-col gap-3">
         { props.task.map( (item) =>{ 
           return <Item key={item.id} item = {  item  } /> 
         }) }
        </ul>
    )
}