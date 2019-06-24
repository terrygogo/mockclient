import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: {},
    peoples: {}
  }

 getUser = async () => {
  
     await 
   axios.post(`http://localhost:8080/api/v1/setjsonfil`, { firstname: 'Mjon', lastname: 'Bern만두ddrdes' }).then(res => {
   // axios.get(`http://localhost:8080/api/v1/getjsonfil/12c34`).then(res => {
     
       const persons = res.data;
        this.setState({ persons });
       
      });
    
   
    axios.get(`http://localhost:8080/api/v1/getjsonfil/12c34`).then(res => {
     
      const peoples = res.data;
        this.setState({ peoples });
       
      });
}

  componentDidMount() {
     this.getUser()
  }

  render() {
    return (
      <div>
         { this.state.persons.title  }
      </div>
    )
  }
}