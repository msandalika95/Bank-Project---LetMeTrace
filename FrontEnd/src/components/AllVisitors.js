import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllVisitors(){
    const [visitors, setVisitors] = useState([]);
    useEffect(() => {
        function getVisitors(){
            axios.get("http://localhost:8070/bank/").then((res) => {
                //setVisitors(res.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getVisitors();
    }, [])

    return(
        <div><h1>All Visitors</h1></div>
    )
}