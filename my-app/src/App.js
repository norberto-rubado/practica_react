import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import PageHeader from './components/PageHeader'
import Summary from './components/Summary'
import LastProduct from './components/LastProduct'
import Categories from './components/Categories'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <div id="wrapper">
          <Sidebar/>
{/*       <!-- Content Wrapper --> */}
          <div id="content-wrapper" class="d-flex flex-column">
{/*           <!-- Main Content --> */}
			        <div id="content">
                <Topbar/>
                <div class="container-fluid">
                  <PageHeader/>
                  <div class="row">
                    <Summary/>
                  </div>
                  <div class="row">
                    <LastProduct/>
                    <Categories/>
                  </div>
                </div>
                <footer class="sticky-footer bg-white">
                  <Footer/>
                </footer>
                
              </div>
          </div>  
        </div>  
      </body>
    </div>
  );
}

export default App;
