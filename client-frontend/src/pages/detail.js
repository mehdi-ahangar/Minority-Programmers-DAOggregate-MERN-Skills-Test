import SizeContext from 'antd/lib/config-provider/SizeContext';
import React, { Component } from 'react';
import { useParams } from 'react-router';
import { DAO, DAOList, DAOService } from '../components/DAO';
import { DaoAdd } from './daoAdd';
import ReactDOM from 'react-dom';
import axios from 'axios';



export class DetailPage extends Component {


  state = {
    data: [],
    editMode: false,
    selectedFile: null,
    selectedFileName: null,
    updateDao: { },
    formData: {},
    socialnetworks: {},
    
  };

  constructor(props) {

    super(props); 
    
    
    this.categoryRef = React.createRef();
    this.nameRef = React.createRef();
    this.aumRef = React.createRef();
   this.date_foundedRef = React.createRef();
   this.date_createdRef = React.createRef();
   this.TVLRef = React.createRef();
   this.descriptionRef = React.createRef();
   this.token_nameRef = React.createRef();
   this.token_symbolRef = React.createRef();
   this.dao_structureRef = React.createRef();
   this.voting_processRef = React.createRef();
   this.tech_stackRef = React.createRef();
   this.notesRef = React.createRef();
   this.blockchainRef = React.createRef();
   this.headquartersRef = React.createRef();
   this.twitterRef = React.createRef();
   this.githubRef = React.createRef();
   this.telegramRef = React.createRef();
   this.linkedinRef = React.createRef();
   this.discordRef = React.createRef();


    this.changeMode = (this.changeMode).bind(this);
    this.changeValue = (this.changeValue).bind(this);
    this.getUpdateDao = (this.getUpdateDao).bind(this);
    //this.getUpdatedDao = (this.getUpdatedDao).bind(this);
    this.state.formData = new FormData();


  }

  componentDidMount() {

    const id = this.props.match.params.id;


    DAOService.getDaoById(id).then( ({ data }) => this.setState({ data }) );
      
     // this.setState({updateDao: this.state.data.DAOs});

  };
  componentDidUpdate() {
  

  };
  componentUnmount(){
    

  };

  setEditAttribute(event) {

  }
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedFileName: event.target.files[0].name });
  };
  onFileUpload = event => {

    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedFileName: event.target.files[0].name });

  };

  changeValue= (event) =>{
    
    
  };

  changeMode= (event) =>{

    event.preventDefault();
    if (this.state.editMode) {
      this.setState({ editMode: false });

      let formData1 = new FormData();
     
   
        
      this.getUpdateDao(() => {
          
       
       
         
        console.log("idddd"+ this.state.data[0].id);
        formData1.append("id", this.state.data[0].id);
        formData1.append("full_name", this.state.updateDao.full_name);
        formData1.append("category", this.state.updateDao.category);
        formData1.append("aum", this.state.updateDao.aum);
        formData1.append("description", this.state.updateDao.description);
        formData1.append("date_founded", this.state.updateDao.date_founded);
        formData1.append("date_created", this.state.updateDao.date_created);
        formData1.append("governance_token_name", this.state.updateDao.governance_token_name);
        formData1.append("governance_token_symbol", this.state.updateDao.governance_token_symbol);
        formData1.append("dao_structure", this.state.updateDao.dao_structure);
        formData1.append("voting_process", this.state.updateDao.voting_process);
        formData1.append("TVL", this.state.updateDao.TVL);
        formData1.append("tech_stack", this.state.updateDao.tech_stack);
        formData1.append("notes", this.state.updateDao.notes);
        formData1.append("blockchain", this.state.updateDao.blockchain);
        formData1.append("headquarters", this.state.updateDao.headquarters);


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

              let res;      
           DAOService.updateDao(this.state.formData);
      });

      });  

    }

    else { this.setState({ editMode: true }); } 


  };

  getUpdateDao(next) {

  
    let dao1 = {}, socialnetworks1 = {}; 
   
      var  str="";
      
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
    
    console.log("from the form... "+document.getElementById("name").value);

    this.setState({ updateDao: dao1, socialnetworks: socialnetworks1 }, () => {

      next();
      console.log("get properties... "+this.state.updateDao.full_name);

    });
  }


  render() {

    const data = this.state.data;
    

    if (!data) {

      return <div className="text-center mt-5">Loading...</div>
    }



    return (
      <>
      <div className="container bottom:50%" >
    {/* <div>  <DaoAdd /></div>
        <DAO dao={data} />  */}

                  
        <div className="container ">
                 
       
          <form enctype="multipart/form-data" className="mb-5">

            <div>
              <button  ref= {this.butRef} onClick={(this.changeMode).bind(this)}
                className=" col-2 btn btn-outline-success  ml-0  btn-sm mt-0"
                style={{ float: 'left' }}> {((this.state.editMode) ? 'Save' : 'Edit')} </button>
            </div>



            {data.map((item) => (
             
                <div >
                              <div  border-radius= "30px" id="logo" className="col-12"  float= "right"  >
                     <img style={{ borderRadius:20}}  width="100"  height="100" src={item.img}/>
                           </div>

              <div float= "letf" className="col-8" style={{ fontSize: '13px', textAlign: 'left' }} key={item.id}>
                    
                 
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }} className=" text-left col-10 mx-auto " >Name:</label>
                  <input type="text"  disabled={!this.state.editMode} className="form-control" defaultValue={item.full_name} id="name" aria-describedby="emailHelp" placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }} className=" text-left col-10 mx-auto " >Category:</label>
                  <input type="text"  ref= {this.categoryRef} disabled={!this.state.editMode} className="form-control" defaultValue={item.category} id="category" aria-describedby="emailHelp" placeholder="" />

                </div>

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }} className=" text-left col-10 mx-auto " for="AUM">AUM:</label>
                  <input type="text" ref={ this.aumRef} className="form-control" id="aum" defaultValue={ item.aum } disabled={!this.state.editMode} aria-describedby="emailHelp" placeholder="" />

                </div>

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }} className=" label label-default   " >Description:</label>
                  <input type="text" onChange={(this.changeValue).bind(this)} ref={ this.descriptionRef} disabled={!this.state.editMode} className="form-control" defaultValue={item.description} id="description" aria-describedby="emailHelp" placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }} className=" label label-default   " >Date Founded:</label>
                  <input type="text" ref={ this.date_foundedRef} disabled={!this.state.editMode} className="form-control" defaultValue={item.date_founded} id="date_founded" aria-describedby="emailHelp" placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }} className=" label label-default   " >Date Created:</label>
                  <input type="text" ref={ this.date_createdRef} disabled={!this.state.editMode} className="form-control" defaultValue={item.date_created} id="date_created" aria-describedby="emailHelp" placeholder="" />

                </div>

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }} className=" label label-default   " >Governance Token Name:</label>
                  <input type="text" ref={ this.token_nameRef} disabled={!this.state.editMode} className="form-control" defaultValue={item.governance_token_name} id="governance_token_name" aria-describedby="emailHelp" placeholder="" />

                </div>

               
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Governance Token Symbol:</label>
                  <input type="text" disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.governance_token_name}
                    id="governance_token_symbol" aria-describedby="emailHelp"
                    placeholder="" />

                </div>

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >DAO Structure</label>
                  <input type="text"  ref={ this.dao_structureRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.dao_structure}
                    id="dao_structure" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Voting Process:</label>
                  <input type="text" ref={ this.voting_processRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.voting_process}
                    id="voting_process" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >TVL:</label>
                  <input type="text" ref={ this.TVLRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.TVL}
                    id="TVL" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Tech Stack:</label>
                  <input type="text" ref={ this.tech_stackRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.tech_stack}
                    id="tech_stack" aria-describedby="emailHelp"
                    placeholder="" />

                </div>

                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Notes:</label>
                  <input type="text" ref={ this.notesRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.notes}
                    id="notes" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Blockchain:</label>
                  <input type="text" ref={ this.blockchainRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.blockchain}
                    id="blockchain" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Headquarters:</label>
                  <input type="text" ref={ this.headquartersRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.headquarters}
                    id="headquarters" aria-describedby="emailHelp"
                    placeholder="" />

                </div>
                <div display='inline-block' className="form-group">
                  <label style={{ textAlign: 'left' }}
                    className=" label label-default" >Twitter:</label>
                  <input type="text" ref={ this.twitterRef} disabled={!this.state.editMode}
                    className="form-control" defaultValue={item.socialnetworks.twitter_handle}
                    id="twitter_handle" aria-describedby="emailHelp"
                    placeholder="" />

                  <div display='inline-block' className="form-group">
                    <label style={{ textAlign: 'left' }}
                      className=" label label-default" >Github:</label>
                    <input type="text" ref={ this.githubRef} disabled={!this.state.editMode}
                      className="form-control" defaultValue={item.socialnetworks.github_organization_handle}
                      id="github_organization_handle" aria-describedby="emailHelp"
                      placeholder="" />

                  </div>

                  <div display='inline-block' className="form-group">
                    <label style={{ textAlign: 'left' }}
                      className=" label label-default" >Telegram:</label>
                    <input type="text" ref={ this.telegramRef} disabled={!this.state.editMode}
                      className="form-control" defaultValue={item.socialnetworks.telegram_handle}
                      id="telegram_handle" aria-describedby="emailHelp"
                      placeholder="" />

                  </div>

                  <div display='inline-block' className="form-group">
                    <label style={{ textAlign: 'left' }}
                      className=" label label-default" >LinkedIn:</label>
                    <input type="text" ref={ this.linkedinRef} disabled={!this.state.editMode}
                      className="form-control" defaultValue={item.socialnetworks.linkedin_company_name}
                      id="linkedin_company_name" aria-describedby="emailHelp"
                      placeholder="" />

                  </div>
                  <div display='inline-block' className="form-group">
                    <label style={{ textAlign: 'left' }}
                      className=" label label-default" >Discord:</label>
                    <input type="text" ref={ this.discordRef} disabled={!this.state.editMode}
                      className="form-control" defaultValue={item.socialnetworks.discord_link}
                      id="discord_link" aria-describedby="emailHelp"
                      placeholder="" />

                  </div>
                 

                  <div className="form-group">
                    <label className=" text-left col-10 mx-auto" for="file">Logo</label>
                    <input type="file" disabled={!this.state.editMode} onChange={(this.onFileChange).bind(this)}
                      style={{ SizeContext: "50", fontSize: "25", margin: "10px 7px 70px 3px" }}
                      id="Logo:" name="filename" />

                  </div>

                  <div>
                    <button onClick={(this.changeMode).bind(this)}
                      id="EditSave2" className=" col-2 btn btn-outline-success  ml-0  btn-sm mt-3"
                      style={{ float: 'left' }}> {((this.state.editMode) ? 'Save' : 'Edit')} </button>
                  </div>

                </div>



              </div>
 </div>
            ))
            }

          </form>
        </div>
      </div>
      </>
    );
  }
}



