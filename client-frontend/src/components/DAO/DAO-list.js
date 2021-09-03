import React from 'react';
import {DAO, DaoTable} from './DAO';
import AntTable from './DaoTable';



export function DAOList(props){

    return (

        <div className="container">
            {/*{
                props.DAOs.map((item) => (
                    <div className="col-4" key={item.id}>
                    <DAO data={item} />
                    </div>
                ))
            }*/}
            
            <AntTable DAO_To_Table={props.DAOs} />
            
        </div>
    );

}