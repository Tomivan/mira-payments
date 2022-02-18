import React, { useEffect, useState} from "react";
import './task-1.css';

const Task1 = () => {
    const [state, setState] = useState(null);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users', {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
            .then(
                json => {
                    console.log(json);
                    setState(json)
                },
                err => { 
                    console.log(err)
                }
            )
    },[])

    const deleteUser = () => {
        fetch('http://jsonplaceholder.typicode.com/users', {
            method: "delete",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
    }
    return(
        <div className="task-1">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Company</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{state.name}</td>
                        <td>{state.address}</td>
                        <td>{state.phone}</td>
                        <td>{state.company}</td>
                        <td>{state.address}</td>
                        <td>{state.email}</td>
                        <td>{state.webiste}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Task1;