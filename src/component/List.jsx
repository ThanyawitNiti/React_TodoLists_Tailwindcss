// import Item from "./Item";

// export default function List(props){
//     // props { 
//     //  task : [ {}, {}, {} ] 
//     // }
//     // console.log(props.task)
//     // task =[ {}]
//     return (
//         <ul className=" flex flex-col gap-3">
//          { props.task.map( (item) =>{ 
//            return <Item key={item.id} item = {  item  } /> 
//          }) }
//         </ul>
//     )
// }

import Item from "./Item";
// {/* <List  task = {todo}/> */} props ที่ส่งมาคือ Obj เลย Destructing 
export default function List({task}){
    return (
        <ul className=" flex flex-col gap-3">
         { task.map( (item) =>{ 
           return <Item key={item.id} item = {  item  } /> 
         }) }
        </ul>
    )
}