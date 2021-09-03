
import { Table, Button, Space } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import moment from 'moment';
import { columns } from '../../dataSource';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { redirect } from 'statuses';
//const {ObjectId} = require('mongodb'); 



const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export class AntTable extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    daolist: [],
  };
  Constructor(props) {
    //super(props);
    // this.state.daolist = props.DAO_To_Table;
    // console.log("hiii"+props.DAO_To_Table[0]);
  }

  componentWillUnmount() {
    //this.setState(daolist,()=> this.state.daolist =this.props.DAO_TO_Table);
    //this.state.daolist = this.props.DAO_TO_Table;
  };

  componentDidMount() {
    //this.fetchData();
  };


  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    console.log("table");
    //const data1={};
    //const data1 = this.state.daolist;
    //console.log(data1[0]);
    const columns1 = [
      {
        title: 'Icon',
        dataIndex: 'img',
        key: 'img',
        width:60,

        render: (imgUrl) => <img style={{ borderRadius:5}} src={imgUrl} width='40' height='40' />

      },

      {
        title: 'name',
        dataIndex: 'full_name',
        key: 'name',
        width:150,

        
        sorter: (a, b) => a.full_name.length - b.full_name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },

      {
        title: 'categoy',
        dataIndex: 'category',
        key: 'category',
        width:150,
        filters: [
          { text: 'Protocol', value: 'Protocol' },
          { text: 'Investment', value: 'Investment' },
          { text: 'Service', value: 'Service' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.category.includes(value),
        
      },
      {
        title: 'More..',
        dataIndex: 'id',
        key: 'id',
        render: (id) => (<Link to={"/detail/" +id}><span className="btn btn-link btn-xs" style={{fontSize:15, textDecorationLine:'none'}} >more...</span></Link>)
       //render: (_id) => (<Link to={"/detail/" + _id}><span className="btn btn-link btn-xs"  >More...</span></Link>)

      },
  
    ];
const data1 = this.state.daolist;
return (
 
  <>
  
      <div style={{paddingBottom:"20px"}}>
      {/*<Button onClick={this.setAgeSort}>Sort age</Button>*/}
      <Button onClick={this.clearFilters}>Clear filters</Button>
      <Button onClick={this.clearAll}>Clear filters and sorters</Button>
      <Link style={{fontSize:20, marginLeft:35, fontFamily:"Tahoma"}} to={"/add"}>Add New DAO</Link>
      </div>
    <Table columns={columns1} dataSource={this.props.DAO_To_Table} onChange={this.handleChange} />
   
    
  </>
);
  }
}


//ReactDOM.render(<daoTable />, document.getElementById('root'));
export default AntTable