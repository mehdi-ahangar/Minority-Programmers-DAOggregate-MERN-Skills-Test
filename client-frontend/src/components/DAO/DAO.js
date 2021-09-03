import Item from "antd/lib/list/Item";
import React from "react";
import {Link} from "react-router-dom";


export function DAO(props){

const data = props.dao;
//console.log( data[1]['name']+"hiii");
return (
 <div className='container'>
              {
                     data.map( (item) => 
                     
                     <div className="col-4" key={item.id}>
                            {item.name}
                     </div>
                     
                     )
              }
               
</div>
)
}