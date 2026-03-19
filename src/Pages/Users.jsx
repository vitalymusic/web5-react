import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function Users() {
    let [usersData, setUsersData] = useState(null); // <-- null sākumā

    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then(res => res.json())
            .then((data) => { setUsersData(data) });
    }, [])

    return (
        <>
            <h1>Users</h1>
            {usersData && usersData.users.map((item, i) => ( // <-- pārbaude + return ar ()
                <>
                <NavLink  className="btn btn-primary d-block m-3" key={i} to={"/user/" + item.id}>
                    {item.firstName} {item.lastName}
                </NavLink>
                </>
            ))}
        </>
    );
}

export default Users;