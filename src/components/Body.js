import React from "react"

import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Summary from './Summary'
import PageHeader from './PageHeader'
import LastProductCategories from './LastProductCategories'
import ProductTable from './ProductTable'
import Footer from './Footer'

import "../App.css"

function Body() {

	 let info_summary = [
		{titulo:"Amount in products",cifra:"135",color:"card border-left-primary shadow h-100 py-2",icono:"fas fa-clipboard-list fa-2x text-gray-300"},
		{titulo:"Products in Data Base",cifra:"$546.456",color:"card border-left-success shadow h-100 py-2",icono:"fas fa-dollar-sign fa-2x text-gray-300"},
		{titulo:"Users quantity",cifra:"39",color:"card border-left-warning shadow h-100 py-2",icono:"fas fa-user-check fa-2x text-gray-300"}
	]
	console.log(info_summary)
	
return (

    <div className="body_1">

		<body>
			<div id="wrapper">

		{/* 		<!-- Sidebar --> */}
					<Sidebar/>
		{/* 		<!-- End of Sidebar --> */}

		{/* 		<!-- Content Wrapper --> */}
					<div id="content-wrapper" className="d-flex flex-column">

		{/* 			<!-- Main Content --> */}
						<div id="content">

		{/* 				<!-- Topbar --> */}
							<Topbar/>
		{/* 				<!-- End of Topbar --> */}

		{/* 				<!-- Begin Page Content --> */}
							<div className="container-fluid">

		{/* 					<!-- Page Heading --> */}
								<PageHeader/>

		{/* 					<!-- Content Row --> */}
								<Summary info_summary={info_summary}/>

		{/* 					<!-- Content Row --> */}
								<LastProductCategories/>

		{/* 					<!-- PRODUCTS LIST --> */}
							
							<ProductTable/>
		{/* 					<!-- DataTales Example --> */}

{/* 							<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
							<div className="card shadow mb-4">
								<div className="card-body">
									<div className="table-responsive">
										<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
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
												<tr>
													<td>Tiger Nixon</td>
													<td>System Architect</td>
													<td>$320,800</td>
													<td>
														<ul>
															<li>Category 01</li>
															<li>Category 02</li>
															<li>Category 03</li>
														</ul>
													</td>
													<td>
														<ul>
															<li><span className="text-danger">Red</span></li>
															<li><span className="text-primary">Blue</span></li>
															<li><span className="text-success">Green</span></li>
														</ul>
													</td>
													<td>245</td>
												</tr>
												<tr>
													<td>Jane Doe</td>
													<td>Fullstack developer</td>
													<td>$320,800</td>
													<td>
														<ul>
															<li>Category 01</li>
															<li>Category 02</li>
															<li>Category 03</li>
														</ul>
													</td>
													<td>
														<ul>
															<li><span className="text-danger">Red</span></li>
															<li><span className="text-primary">Blue</span></li>
															<li><span className="text-success">Green</span></li>
														</ul>
													</td>
													<td>245</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div> */}
						</div>
		{/* 				<!-- /.container-fluid --> */}
					</div>
		{/* 			<!-- End of Main Content --> */}

		{/* 			<!-- Footer --> */}
						<Footer/>
		{/* 			<!-- End of Footer --> */}

				</div>
		{/* 		<!-- End of Content Wrapper --> */}

			</div>
		{/* 	<!-- End of Page Wrapper --> */}

		</body>

    </div>
)}

export default Body