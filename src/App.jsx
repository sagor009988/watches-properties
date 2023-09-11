import { useEffect, useState } from 'react'

import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
const [watches,setWatch]=useState([])
useEffect(()=>{
  fetch('https://raw.githubusercontent.com/sagor009988/watches-json/main/Watches.json')
  .then(res=>res.json())
  .then(data=>setWatch(data))
},[])

//  const watches=[
//   {id:1,brand:'apple',price:10000 ,color:'red'},
//   {id:1,brand:'samsung',price:4000 ,color:'black'},
//   {id:1,brand:'mi',price:2000 ,color:'pink'},
//   {id:1,brand:'casio',price:1000 ,color:'green'},
//  ]
// const watches = [
//   {
//     id: 1,
//     brandname: 'Rolex',
//     price: 5000,
//     color: 'Silver',
//   },
//   {
//     id: 2,
//     brandname: 'Casio',
//     price: 100,
//     color: 'Black',
//   },
//   {
//     id: 3,
//     brandname: 'Seiko',
//     price: 300,
//     color: 'Gold',
//   },
//   {
//     id: 4,
//     brandname: 'Fossil',
//     price: 150,
//     color: 'Brown',
//   },
//   {
//     id: 5,
//     brandname: 'Tag Heuer',
//     price: 8000,
//     color: 'Blue',
//   },
// ];

// console.log(watches);


  return (
    <>
      
      <h1>Vite + React</h1>
      {
        watches.map(ghori=><Watch key={watches.id} watch={ghori}></Watch>)
      }
     
    </>
  )
}

export default App
