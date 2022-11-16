import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const UpdateProduct = () => {
    const [data, setData] = useState({
        name: "", price: "", category: "", company: ""
    })
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        GetProductDetails();
    }, [])

    const GetProductDetails = async () => {
        let res = await fetch(`http://localhost:5000/product/${params.id}`)
        res = await res.json();
        setData({
            name: res.name,
            price: res.price,
            category: res.category,
            company: res.company
        })
    }


    const OnChangeEvent = (event) => {
        let { name, value } = event.target;
        return setData((preValue) => {
            return { ...preValue, [name]: value }
        })
    }


    const OnClickButton = async () => {
        let { name, price, category, company } = data
        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ name, price, category, company })
        })
        result = await result.json();
        if (result) {
            navigate("/");
        }
        // console.log(result)
    }

    return (
        <div className="add-product">
            <div>
                <h1>Update Product</h1>
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Name"
                    name="name"
                    value={data.name}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Price"
                    name="price"
                    value={data.price}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Category"
                    name="category"
                    value={data.category}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter Product Company"
                    name="company"
                    value={data.company}
                    onChange={OnChangeEvent}
                    autoComplete="off"
                />
                <br />
                <button className="btn2" onClick={OnClickButton}>Update</button>
            </div>
        </div>
    )
}

export default UpdateProduct;