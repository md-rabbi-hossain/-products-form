
import React from 'react';
export default function Productrow({ product, Ondelete }) {
    const { name, id, price, quantity, description, color } = product
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{id}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>{color}</td>
                <td onClick={() => { Ondelete(id) }}> Delete</td>
            </tr>
        </>
    );
}
