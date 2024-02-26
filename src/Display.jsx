import { useState } from "react";

    export default function Display ({item, removeHandler}) {
        
        let listItems;
        if(item.length > 0){
            listItems = item.map(
                (d, i) => {
                    return <Items task ={d} key ={i} remove={() => removeHandler(i)} />
                }
                )
        }else{
            listItems = <h2 className="text-center text-2xl">Start Write Here.....</h2> 
        }
       
        return (
        <ul className="mx-auto">
            {listItems}
        </ul>
        )

    }



    function Items ({task, remove}) {

        const[toggle, setToggle] = useState(false);
        return(
        <li className= {`relative ${toggle===true ? 'line-through' : ''} cursor-pointer bg-amber-600 rounded-md w-[600px] text-white text-xl my-3 p-[10px]`} 
        onClick={() =>setToggle(!toggle)}>
                {task}
                <span onClick={remove} className= "absolute right-[15px] top-[5px] bg-yellow-950 rounded text-xl p-[5px] pointer-cursor" >
                    X
                </span>
        </li>  
        )
    }

  