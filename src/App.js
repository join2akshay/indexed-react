import React, {Component}from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Detail from './Details'
import List from './List'
import './App.css';
import { openDB, deleteDB, wrap, unwrap } from 'idb';


export default class App extends Component  {
  state={
    data:[]
  }
  onSubmit=()=>{
    console.log(this.props)

    // this.props.history.push("/list");
  }
  componentDidMount=()=>{
    fetch('https://reqres.in/api/users').then((res)=>res.json()).then((data)=>{
      this.setState({
        data:data.data
      },()=>this.createDB())
    })

  //  this.createDB()
  }
  
  createDB= async()=>{
    const data=this.state.data
    console.log(data)
    const dbName = 'mydbname'
    const storeName = 'store0'
    const version = 1
  
    const db = await openDB(dbName, version,{
      upgrade(db, oldVersion, newVersion, transaction) {
        const store = db.createObjectStore(storeName)
        store.put(data, 'Users')
      }
    })
  }
  render() {
    console.log(this.state.data)
    const data=this.state.data

    return (
      <div>
         <Router>

<div className="App">

  <Switch>

<Route exact path='/' component={Button}/>
 
  <Route exact path='/list' component={List}/>
  <Route exact path='/detail/:id' component={Detail}/>

  </Switch>

</div>
</Router>
</div>

    )
  }
}
  
const Button=(props)=>{
  const onSubmit=()=>{
    

    props.history.push("/list");
  }
  return(

    <button onClick={onSubmit}>List</button>
      

  )
}