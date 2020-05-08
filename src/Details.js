import React, { Component } from 'react'
import { openDB, deleteDB, wrap, unwrap } from 'idb';

export default class Details extends Component {
    state={}
    componentDidMount=async()=>{
        let url=window.location.href;
        let splitParts=url.split('/');
     let id=splitParts.pop();
     const key = 'Users'
        const dbName = 'mydbname'
        const storeName = 'store0'
        const version = 1
     const db = await openDB(dbName, version,{
            
    })
  const item= await db.transaction(storeName).objectStore(storeName).get(key)
  var index = item.findIndex(obj => obj.id === parseInt(id));
 
 const data=item[index]
this.setState({data})
     
    }
    render() {
        const data=this.state.data
        console.log(data)
        return (
            <div>
            {
                data ? (
                    <>
                    <img src={data.avatar}/>

                    <div> first name - {data.first_name}</div>
                    <div> last name - {data.last_name}</div>
                    </>
                ):''
            }
                
            </div>
        )
    }
}
