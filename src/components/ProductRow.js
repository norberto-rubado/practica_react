import React from "react"

import "../App.css"

function ProductRow(props) {

return (

    <div className="product_row_1">

        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Categories</th>
                <th>Colors</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Categories</th>
                <th>Colors</th>
                <th>Stock</th>
            </tr>
        </tfoot>
        <tbody>
            {props.products_list.map(function(product,i) { 
                return (
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>
                            <ul>
                                {product.categories.map(function(category,i) { 
                                    return (
                                        <li>{category}</li>
                                    )
                                })}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {product.colors.map(function(color,i) { 
                                    return (
                                        <li><span className={color.clase}>{color.valor}</span></li>
                                    )
                                })}

                            </ul>
                        </td>
                        <td>{product.stock}</td>
                    </tr>
                )
            })}
        </tbody>

    </div>
)}

export default ProductRow