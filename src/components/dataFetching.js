// import React, { useState, useEffect} from 'react'
// import axios from 'axios'

// function DataFetching () {
//     const [stores, storesStore] = useState([])
//         useEffect (() => {
//                 axios.get ('http://us-central1-test-b7665.cloudfunctions.net/api/stores/')
//                 .then (res =>{
//                     console.log(res)
//                     storesStore(res.data)
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         }, [] )

//         return (
//             <div><ul>
//                 {stores.map(store=>(
//                     <li key={store.id}>{store.data.name}</li>
                    
//                 ))}
                
//                 </ul></div>
//         )
// }

// export default DataFetching