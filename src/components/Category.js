import React from "react"

import "../App.css"

function Category() {
    let categories = ["Category 01","Category 02","Category 03","Category 04","Category 05","Category 06"]
return (

    <div className="category">

        {categories.map(category => 
            <div class="col-lg-6 mb-4">
                <div class="card bg-info text-white shadow">
                    <div class="card-body">
                        {category}
                    </div>
                </div>
            </div>
        )}    

    </div>
)}

export default Category