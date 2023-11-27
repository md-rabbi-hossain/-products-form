import React, { useEffect, useState } from 'react';
import './Form.css';
import Productrow from '../Product-row/Productrow';
import getproducts from '../../utility/getproduct'
function RegistrationForm() {
    const [products, setProducts] = useState(getproducts());
    const [color, setColour] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const clearinput = () => {
        setColour('')
        setName('')
        setId('')
        setPrice('')
        setQuantity('')
        setDescription('')
    }

    useEffect(() => {
        const set = localStorage.setItem('product', JSON.stringify(products))
    }, [products]);


    const ColorSelect = (select) => {
        setColour(select)
    }

    const submit = () => {
        const productlist = {
            name,
            id,
            price,
            quantity,
            description,
            color,
        }
        setProducts([...products, productlist])
        clearinput()
    }

    const Ondelete = (id) => {
        const filterd = products.filter((product, index) => product.id !== id)
        setProducts(filterd)
    }

    return (
        <div className='main-container'>
            <div className="container">
                <div className="title">Product information</div>
                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Product Name</span>
                                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Enter your product name" value={name} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Product id</span>
                                <input type="text" onChange={(e) => { setId(e.target.value) }} placeholder="Enter Product id" value={id} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Price</span>
                                <input type="text" onChange={(e) => { setPrice(e.target.value) }} placeholder="Enter Product price" value={price} required />
                            </div>
                            <div className="input-box">
                                <span className="details">Quantity</span>
                                <input type="text" onChange={(e) => { setQuantity(e.target.value) }} placeholder="Enter Quantity" value={quantity} required />
                            </div>
                            <span className="description" >Description</span>
                            <textarea className="input-box" onChange={(e) => { setDescription(e.target.value) }} value={description}>

                            </textarea>
                        </div>
                        <div className="Color-details">
                            <input type="radio" name="Color" id="dot-1" />
                            <input type="radio" name="Color" id="dot-2" />
                            <input type="radio" name="Color" id="dot-3" />
                            <span className="gender-title">Colour</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one" onClick={() => { ColorSelect("green") }}></span>
                                    <span className="Color">green</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two" onClick={() => { ColorSelect("yellow") }}></span>
                                    <span className="gender">yellow</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three" onClick={() => { ColorSelect("red") }}></span>
                                    <span className="Color">red</span>
                                </label>
                            </div>
                        </div>
                        <button type='submit' onClick={submit}>Submit</button>
                    </form>
                </div>
            </div>
            <div className="table-container">
                <div className="table-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product id</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th>Colour</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => <Productrow product={product} key={
                                index
                            } Ondelete={Ondelete} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    );
}

export default RegistrationForm;
