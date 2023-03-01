import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state={
      bangers: [],
      searchString:''
    }
  }
  
 componentDidMount() {
  fetch('https://63fef55a571200b7b7d2b413.mockapi.io/api/todo/albums')
  .then((res) => res.json())
  .then((res) => this.setState({bangers:res}))
 }

 searchFunction = (e) => {
  this.setState({searchString: e.target.value})
 }
 render()
 {
   const filteredUser = this.state.bangers.filter((bangers)=>
    bangers.name.toLowerCase().includes(this.state.searchString.toLowerCase())
   );
    return(
       <div className='App'>
        <input type='text' placeholder='search' onChange={this.searchFunction}/>
          
        {
          filteredUser.map(bangers => {
            return (
              <div key={bangers.id}>
                <h1>{bangers.name}</h1>
                <p>{bangers.artist}</p>
              </div>
            )
          })
        }

       </div>
    )     
  }
}     
export default App;