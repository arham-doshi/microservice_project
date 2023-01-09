import React, {useState} from "react";
import axios from "axios";


export default () => {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            
        },
        withCredentials: true
    };

    const [title, setTitle] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post("http://localhost:4000/posts", {title}, axiosConfig).catch((err) => {
            console.log(err);
        });
        console.log({title});
        setTitle("");
        
    }

    return <div>    
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label> 
                <input value = {title} onChange = {e => setTitle(e.target.value)} className="form-control" />
            </div>
            <button className="btn btn-primary"> Submit</button>
           
        </form>
    </div>
}