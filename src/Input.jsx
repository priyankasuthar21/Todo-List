function Input ({handler}) {


    const keyUpHandler = (e) => {
        if(e.key === "Enter"){
            handler(e.target.value);
            e.target.value = "";

        }
    }
    return (
        <div className="w-[600px] my-10 mx-auto shadow-2xl">
            <input type="text" placeholder="Enter items here...." className=" w-[100%] text-2xl  text-gray-500 p-[10px] focus:outline-none" onKeyUp={keyUpHandler}/>
        </div>
    )
}

export default Input;