import React, { useState } from "react";
import "./style.css"

const AddProduct = () => {
    const [data, setData] = useState({
        name: "", price: "", category: "", company: ""
    })
    const [error, setError] = useState(false);


    const OnChangeEvent = (event) => {
        let { name, value } = event.target;

        setData((preValue) => {
            return { ...preValue, [name]: value }
        })
    }

    const OnClickButton = async () => {
        let userId = JSON.parse(localStorage.getItem("user"))._id;

        const { name, price, category, company } = data
        if (!name || !price || !category || !company) {
            setError(true);
            return false
        }
        let result = await fetch("http://localhost:5000/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, price, category, company, userId })
        })

        result = await result.json();
        console.log(result);
        setData({ name: "", price: "", category: "", company: "" })
    }


    return (
        <div className="add-product">
            <div>
                <h1>Add Product</h1>
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Name"
                    name="name"
                    value={data.name}
                    onChange={OnChangeEvent}
                />
                <div className="error-span">
                    {error && !data.name && <span>Enter valid name</span>}
                </div>

                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Price"
                    name="price"
                    value={data.price}
                    onChange={OnChangeEvent}
                />
                <div className="error-span">
                    {error && !data.price && <span>Enter valid price</span>}
                </div>

                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Category"
                    name="category"
                    value={data.category}
                    onChange={OnChangeEvent}
                />
                <div className="error-span">
                    {error && !data.category && <span>Enter valid category</span>}
                </div>

                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Company"
                    name="company"
                    value={data.company}
                    onChange={OnChangeEvent}
                    autoComplete="off"
                />
                <div className="error-span">
                    {error && !data.company && <span>Enter valid company</span>}
                </div>

                <br />
                <button className="btn2" onClick={OnClickButton}>AddProduct</button>
            </div>
        </div>
    )
}

export default AddProduct;