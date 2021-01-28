import React from "react"

import "../App.css"

function Category() {
    let categories = ["Category 01","Category 02","Category 03","Category 04","Category 05","Category 06"]
return (

    <div className="category_1">

<div className="row">

        {categories.map((category,i) => 

            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body" /* id={category + i} */>
                        {category}
                    </div>
                </div>
            </div>

        )}    

</div>
    </div>
)}

export default Category