import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        GetProductList();
    }, [])

    const GetProductList = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProduct(result)
    }


    const DeleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "delete"
        })
        result = await result.json();
        GetProductList();
    }


    const SearchBar = async (event) => {
        let key = event.target.value
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`)
            result = await result.json();
            if(result){
                setProduct(result)
            }
        }
        else{
            GetProductList();
        }

    }

    return (
        <div className="product-list">
            <h1>List Of Product</h1>
            <input className="search" placeholder="Search Product" onChange={SearchBar} />
            <ul>
                <li>S No</li>
                <li>Name</li>
                <li>Category</li>
                <li>Company</li>
                <li>Price</li>
                <li>Operation</li>
            </ul>
            {product.length > 0 ? product.map((item, index) => {
                return <ul key={index}>
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li>{item.price}</li>
                    <li><button className="btn3" onClick={() => { DeleteProduct(item._id) }}>delete</button>
                        <Link className="btn4" to={"/update/" + item._id}>Update</Link></li>
                </ul>
            })
                : <h1 style={{ margin: "30px" }}>No Result Found!</h1>
            }
        </div >
    )
}

export default GetProduct;