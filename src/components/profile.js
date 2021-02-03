import React from 'react'
import {Form,FormControl} from 'react-bootstrap'

const persons = [
  {
    firstName: "Amal",
    lastName:"Mansour",
    age : "age:25",
    adresse:"habib bourguiba st ezzahra " ,
    job:"fullstuck web developper",
    languages: "HTML , CSS  , JAVASCRIPT and JSX" ,
    labrery:"BOOTSTARP and REACT",
  },



]

const profile = () => {
    const style={
        width :"20%"
    };

    const style1={
      width :"40%"
  }


    return (
  
      <div >
        
         
        <div className="list-irems">
          {persons.map((person, i) => (
            <div className="myInfo" key={i}>
              <img src="images2.jpg" alt="profile"  style={style}/>
              <ul className="personelInfo">
              <li className="name">{person.firstName  +" "+  person.lastName}</li>
              <li>{person.age}</li>
              <li>{person.adresse}</li>
              <li>{person.job}</li>
              <hr/>
              </ul>
              
      
                <hr/>
                <br/>
               <div className="selector">
               <Form>
               <p>languages and  library</p>
               <FormControl as="select" multiple className="myList"> 
                       
                      <option>{person.languages}</option>
                          <option> {person.labrery}</option>
                              </FormControl> 
                                   </Form>
                                </div>
              
                 </div>
          ))}
         </div>
         <div className="labrery">
         <img src="images.png" alt="profile"  style={style1}/>
          <img  src="index.png" alt="profile"  style={style1}/>
         </div>
         </div>
         )}
         
         

export default profile 
  
  
