import React from "react";
import { useState } from "react";

const Table = () => {

    let data = [
        { id: 1, name: "krish durugkar", address: "nagpur", phone: "9529723422" },
        { id: 2, name: "abhay boss", address: "pune", phone: "8529716622" },
        { id: 3, name: "vedant nikam", address: "mumbai", phone: "7529716622" },
        { id: 4, name: "soham khadse", address: "mumbai", phone: "9529716483" }
    ];

    let [InputValue, SetInputValue] = useState("");

    return (
        <>
            <table border={1}>

                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                    <th>phone</th>
                </tr>

                {
                    data.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    })
                }

            </table>

            <br />

            <input
                className="ring-1 rounded"
                type="text"
                placeholder="enter your name"
                value={InputValue}
                onChange={(e) => {
                    SetInputValue(e.target.value)
                }}
            />
        </>
    )
}

export default Table;