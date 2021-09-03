import React from "react";
import axios from 'axios';
import { render } from "react-dom";
import { DAO, DAOList, DAOService } from '../components/DAO';
const apiAddress = 'http://localhost:5000/upload';


export class DaoAdd extends React.Component {
    constructor(props){

        super(props);
        this.state.formData = new FormData();
        this.submitDao = (this.submitDao).bind(this);
        
    };   
   componentDidMount(){
    this.state.formData = new FormData();

   }

   componentDidMount(){
    this.state.formData = new FormData();
   }


        state = {
                selectedFile : null,
                selectedFileName : null,
                newDao :{name:"aa", id:200 },
                formData: {},
                socialnetworks: {}
                

        };
    
        onFileChange = event => {
            this.setState(  {selectedFile: event.target.files[0]});
            this.setState(   {selectedFileName : event.target.files[0].name});
        };
        onFileUpload = event =>{
           
            this.setState(  {selectedFile: event.target.files[0]});
            this.setState(   {selectedFileName : event.target.files[0].name});

        };
        
        submitDao =  (event) => {
            event.preventDefault();
        
            let formData1 = new FormData();
            
           //formData1.append("newDao", this.state.newDao);
          // formData1.append("newDao", "300");
         /* formData1.append("newDao", this.state.newDao);
           formData1.append("daoIcon", this.state.selectedFile);
           formData1.append("FileName","300");
           formData1.append("id","000");
            
            this.setState( {formData: formData1}, () => {

                DAOService.addDao(this.state.formData); 
               
            })*/

            this.getnewDao(() => {
          
       
       
         
                //console.log("idddd"+ this.state.data[0].id);
                //formData1.append("id", this.state.data[0].id);
                formData1.append("full_name", this.state.newDao.full_name);
                formData1.append("category", this.state.newDao.category);
                formData1.append("aum", this.state.newDao.aum);
                formData1.append("description", this.state.newDao.description);
                formData1.append("date_founded", this.state.newDao.date_founded);
                formData1.append("date_created", this.state.newDao.date_created);
                formData1.append("governance_token_name", this.state.newDao.governance_token_name);
                formData1.append("governance_token_symbol", this.state.newDao.governance_token_symbol);
                formData1.append("dao_structure", this.state.newDao.dao_structure);
                formData1.append("voting_process", this.state.newDao.voting_process);
                formData1.append("TVL", this.state.newDao.TVL);
                formData1.append("tech_stack", this.state.newDao.tech_stack);
                formData1.append("notes", this.state.newDao.notes);
                formData1.append("blockchain", this.state.newDao.blockchain);
                formData1.append("headquarters", this.state.newDao.headquarters);
        
        
                formData1.append("twitter_handle", this.state.socialnetworks.twitter_handle);
                formData1.append("github_organization_handle", this.state.socialnetworks.github_organization_handle);
                formData1.append("telegram_handle", this.state.socialnetworks.telegram_handle);
                formData1.append("linkedin_company_name", this.state.socialnetworks.linkedin_company_name);
                formData1.append("discord_link", this.state.socialnetworks.discord_link);
        
                if (this.state.selectedFile)
                {
                    formData1.append("daoIcon", this.state.selectedFile);
                    
                }
               
                this.setState( {formData: formData1}, () => {      
                            
                    DAOService.addDao(this.state.formData);           
                 
              });
        
              });  
          
            
        };
 getnewDao(next) {

  
            let dao1 = {}, socialnetworks1 = {}; 
            dao1.full_name = document.getElementById("name").value;
            dao1.category = document.getElementById("category").value;
            dao1.aum = document.getElementById("aum").value;
            dao1.date_founded = document.getElementById("date_founded").value;
            dao1.date_created = document.getElementById("date_created").value;
            dao1.description = document.getElementById("description").value;
            dao1.governance_token_name = document.getElementById("governance_token_name").value;
            dao1.governance_token_symbol = document.getElementById("governance_token_symbol").value;
            dao1.dao_structure = document.getElementById("dao_structure").value;
            dao1.voting_process = document.getElementById("voting_process").value;
            dao1.TVL = document.getElementById("TVL").value;
            dao1.tech_stack = document.getElementById("tech_stack").value;
            dao1.notes = document.getElementById("notes").value;
            dao1.blockchain = document.getElementById("blockchain").value;
            dao1.headquarters = document.getElementById("headquarters").value;
        
            socialnetworks1.twitter_handle = document.getElementById("twitter_handle").value;
            socialnetworks1.github_organization_handle = document.getElementById("github_organization_handle").value;
            socialnetworks1.telegram_handle = document.getElementById("telegram_handle").value;;
            socialnetworks1.linkedin_company_name = document.getElementById("linkedin_company_name").value;
            socialnetworks1.discord_link = document.getElementById("discord_link").value;
            
            
        
            this.setState({ newDao: dao1, socialnetworks: socialnetworks1 }, () => {
              next();    
        
            });

 };
    render() {

        return (

           
        
        <div>
        <form enctype="multipart/form-data" className="mb-5">

          <div>
            <button className=" col-2 btn btn-outline-success  ml-0  btn-sm mt-3"
                            
              style={{ float: 'left' }} onClick={(this.submitDao).bind(this)}> Save </button>
          </div>
        
            <div className="col-8" style={{ fontSize: '13px', textAlign: 'left' }} >



              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }} className=" text-left col-10 mx-auto " >Name:</label>
                <input type="text" className="form-control"  id="name" aria-describedby="emailHelp" placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }} className=" text-left col-10 mx-auto " >Category:</label>
                <input type="text" className="form-control"  id="category" aria-describedby="emailHelp" placeholder="" />

              </div>

              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }} className=" text-left col-10 mx-auto " for="AUM">AUM:</label>
                <input type="text" className="form-control" id="aum" aria-describedby="emailHelp" placeholder="" />

              </div>

              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }} className=" label label-default" >Description:</label>
                <input type="text" className="form-control"  id="description" aria-describedby="emailHelp" placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }} className=" label label-default   " >Date Founded:</label>
                <input type="text" className="form-control"  id="date_founded" aria-describedby="emailHelp" placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }} className=" label label-default   " >Date Created:</label>
                <input type="text" className="form-control"  id="date_created" aria-describedby="emailHelp" placeholder="" />

              </div>

              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }} className=" label label-default   " >Governance Token Name:</label>
                <input type="text" className="form-control"  id="governance_token_name" aria-describedby="emailHelp" placeholder="" />

              </div>

             
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >Governance Token Symbol:</label>
                <input type="text" 
                  className="form-control" 
                  id="governance_token_symbol" aria-describedby="emailHelp"
                  placeholder="" />

              </div>

              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >DAO Structure</label>
                <input type="text" 
                  className="form-control" 
                  id="dao_structure" aria-describedby="emailHelp"
                  placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >Voting Process:</label>
                <input type="text" 
                  className="form-control" 
                  id="voting_process" aria-describedby="emailHelp"
                  placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >TVL:</label>
                <input type="text" 
                  className="form-control" 
                  id="TVL" aria-describedby="emailHelp"
                  placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >Tech Stack:</label>
                <input type="text" 
                  className="form-control" 
                  id="tech_stack" aria-describedby="emailHelp"
                  placeholder="" />

              </div>

              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >Notes:</label>
                <input type="text" 
                  className="form-control" 
                  id="notes" aria-describedby="emailHelp"
                  placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >Blockchain:</label>
                <input type="text" 
                  className="form-control" 
                  id="blockchain" aria-describedby="emailHelp"
                  placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >Headquarters:</label>
                <input type="text"
                  className="form-control"
                  id="headquarters" aria-describedby="emailHelp"
                  placeholder="" />

              </div>
              <div display='inline-block' className="form-group">
                <label style={{ textAlign: 'left' }}
                  className=" label label-default" >Twitter:</label>
                <input type="text" 
                  className="form-control" 
                  id="twitter_handle" aria-describedby="emailHelp"
                  placeholder="" />

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Github:</label>
                  <input type="text" 
                    className="form-control" 
                    id="github_organization_handle" aria-describedby="emailHelp"
                    placeholder="" />

                </div>

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Telegram:</label>
                  <input type="text" 
                    className="form-control" 
                    id="telegram_handle" aria-describedby="emailHelp"
                    placeholder="" />

                </div>

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >LinkedIn:</label>
                  <input type="text" 
                    className="form-control" 
                    id="linkedin_company_name" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Discord:</label>
                  <input type="text" 
                    className="form-control" 
                    id="discord_link" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
               

                <div className="form-group">
                  <label className=" text-left col-10 mx-auto" for="file">Logo</label>
                  <input type="file"  onChange={(this.onFileChange).bind(this)}
                    style={{ SizeContext: "50", fontSize: "25", margin: "10px 7px 70px 3px" }}
                    id="Logo:" name="filename" />

                </div>

                <div>
                  <button 
                    id="Save2" className=" col-2 btn btn-outline-success  ml-0  btn-sm mt-3"
                    onClick={(this.submitDao).bind(this)}
                    style={{ float: 'left' }}>  Save  </button>
                </div>

              </div>



            </div>

         
         

        </form>
     

            </div>
        );
    }
}

{/* <div className ="Container" >
                <form className="mb-5" enctype="multipart/form-data"  >
                    <div className ="form-group">
                        <label className =" label label-default ">Name</label>
                        <input type="text"  className ="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" />
  

                    </div>
                    <div className ="form-group">
                        <label className =" text-left col-10 mx-auto"  for="category">category</label>
                        <input type="text"  className ="form-control" id="category" aria-describedby="emailHelp" placeholder="Enter category" />

                    </div>

                    <div className ="form-group">
                        <label className =" text-left col-10 mx-auto"  for="file">icon</label>
                        <input type ="file" onChange =  {(this.onFileChange).bind(this)} id="icon" name ="filename"/>
                        <button disabled="true" onClick = {(this.onFileUpload).bind(this)} />
                     </div>
                        <button type="submit" onClick ={(this.submitDao).bind(this)} onSubmit=  {(this.submitDao).bind(this)}   className="btn btn-primary ml-2  btn-sm mt-3">Submit</button>
  
                </form>


        </div>*/}

