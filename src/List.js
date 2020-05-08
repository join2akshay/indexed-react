import React from 'react'
import { openDB, deleteDB, wrap, unwrap } from 'idb';


export default class List extends React.Component {

  
        state = {
            
        };
      
    
      componentDidMount=async ()=> {
        const key = 'Users'
        const dbName = 'mydbname'
        const storeName = 'store0'
        const version = 1
        const db = await openDB(dbName, version,{
            
          })
        const item= await db.transaction(storeName).objectStore(storeName).get(key)
        this.setState({
            item
        })
      }
      displayItem=()=>{
          console.log('j')
          return(
              this.state.item.map((item)=>{
                  return(
                      <div key={item.id} id={item.id} onClick={this.onSubmit}>{item.email}
                          
                      <br/>
                      <br/>
                      <br/>
                      </div>
                  )
              })
          )
      }
      onSubmit=(e)=>{
        this.props.history.push(`/detail/${e.target.id}`);

      }
    render() {
       console.log(this.state.item)
        return(
            <div>
                {
                    this.state.item ? 
                    this.displayItem() : ''
                }
            </div>
        )
        }
    
}

