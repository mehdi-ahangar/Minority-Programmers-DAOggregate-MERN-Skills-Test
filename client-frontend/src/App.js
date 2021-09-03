
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/navbar';
import { HomePage, DetailPage } from './pages';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DaoTable2 from './components/DAO/DaoTable2';
import { DaoAdd } from './pages/daoAdd';
import { Sidebar } from './components/sidebar';
import { Sidebar3, Sidebar2 } from './components/sidebar';
import './components/sidebar/Sidebar.css';
import './components/sidebar/Sidebar2.scss';
//import './components/sidebar/Sidebar3.css';

function App() {
  return (
    <>

      <BrowserRouter>
     
        <div className="App" >
        <div className="row" >
        
         
        <Navbar/> 
       
         <Sidebar style={{left:0, top:-100}} />
        

        </div>            
          <div className="container">

            
            <Switch>

              <Route exact={true} path="/" component={HomePage} />
              <Route path="/detail/:id" component={DetailPage} />
              <Route path="/add" component={DaoAdd} />


            </Switch>

          </div>
          ّ
        </div>


      </BrowserRouter>
    </>
  );
}

export default App;
