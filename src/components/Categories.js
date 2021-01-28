import React from "react"

import Category from './Category'

import "../App.css"

function Categories() {
return (

    <div className="categories_1">

        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                        <Category/>
                </div>
            </div>
        </div>

    </div>
)}

export default Categories