import React from "react"

import ProductRow from './ProductRow'

import "../App.css"

function ProductTable() {

    let products = [{name:"Tiger Nixon",description:"System Architect",price:"$320,800",categories:["Category 01","Category 02","Category 03"],colors:[{valor:"Red",clase:"text-danger"},{valor:"Blue",clase:"text-primary"},{valor:"Green",clase:"text-success"}],stock:245},{name:"Jane Doe",description:"Fullstack developer",price:"$320,800",categories:["Category 01","Category 02","Category 03"],colors:[{valor:"Red",clase:"text-danger"},{valor:"Blue",clase:"text-primary"},{valor:"Green",clase:"text-success"}],stock:245}]
    
return (

    <div className="product_table_1">

        <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>

            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
{/*                         <thead>
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
                            <tbody> */}
                                <ProductRow products_list = {products}/>
{/*                         </tbody> */}
                        </table>
                    </div>
                </div>
            </div>
     
    </div>
)}

export default ProductTable