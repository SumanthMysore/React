import React, { ReactElement } from "react";
import './App.css';

interface User {
    id:number;
    name:String;
}
var user1:User = {
    id:10,
    name:'Sumanth',
};
var user2:User = {
    id:11,
    name:'Ramesh',
};

const Table = () : ReactElement => {

    return (
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
            </tr>
            <tr>
                <td>{user1.id}</td>
                <td>{user1.name}</td>
            </tr>
            <tr>
                <td>{user2.id}</td>
                <td>{user2.name}</td>
            </tr>
        </table>
    );
}

export default Table;