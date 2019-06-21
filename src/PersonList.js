import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: {}
  }

 getUser = async () => {
  
     await 
   axios.post(`http://localhost:8080/api/v1/setjsonfil`, { firstname: 'Mlj7jhon', lastname: 'Bernardes' }).then(res => {
   // axios.get(`http://localhost:8080/api/v1/getjsonfil/12c34`).then(res => {
      const persons = res.data;
        this.setState({ persons });
       // axios.put(`http://localhost:8080/api/v1/setjsonfil`, { firstName: 'Marlon', lastName: 'Bernardes' })
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