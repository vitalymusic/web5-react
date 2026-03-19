import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function User() {
    let {id} = useParams();
    const [userData,setUserData] = useState([]);
    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then((data)=>{setUserData(data)});
    },[])

    return ( 
    <>
        <h1>user ar id: {id}</h1>
        {console.log(userData)}

    </> );
}

export default User;