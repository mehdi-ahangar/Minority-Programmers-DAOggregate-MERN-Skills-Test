import React, { Fragment } from "react";
import { DaoTable3, DaoTable2, DAOList, DAO } from "../components/DAO";
import { DAOService } from "../components/DAO";
import { columns } from "../dataSource";
import { Link } from "react-router-dom";
import { DaoAdd } from "./daoAdd";







export class HomePage extends React.Component {

  // state = {  DAOs: DAOService.getDaos() };
  state = { DAOs: [] };

  fetchData() {
    DAOService
      .getDaos(this.props.location.search)
      .then(response => this.setState({ DAOs: response.data }));
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }
  render() {

    return (

      <Fragment>



        <div className="container">

          <div className="container col-8 ">
           
                
              <DAOList DAOs={this.state.DAOs} />
            
          </div>
          </div>
      </Fragment>
        )
  }
  
}