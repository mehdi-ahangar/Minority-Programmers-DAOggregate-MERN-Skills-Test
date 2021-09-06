import axios from 'axios';

//const apiAddress = 'http://localhost:5000/';
const apiAddress = 'https://daoggregation.herokuapp.com/';

export const DAOService = {

    getDaos: (q = '') => {

        return axios.get(apiAddress + q);

    },

    getDaoById: id => {

        return axios.get(apiAddress + id);

    },

    addDao: FormData => {


        const headers = { 'content-type': 'multipart/form-data' };
        console.log('sending...');
      
         axios.post(apiAddress + 'add', FormData, headers)
        .then( ()=>{

            alert('DAO has been added!');
            window.location.replace("/");
        }

        );
    },

    updateDao: FormData  => {

        
        const headers = { 'content-type': 'multipart/form-data' };

              axios.post(apiAddress + 'update', FormData, headers)
              .then(()=> {

                alert('DAO has been updated!');
                window.location.replace("/detail/"+ FormData.get("id"));
              })
          
                
    },
};
