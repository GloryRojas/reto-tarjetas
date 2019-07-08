import axios from 'axios';
import React, { useEffect, useState } from 'react'


// const getListaTrabajadores = () => {
//     const[user, setUser] = useState([]);
//     useEffect(()=>{
//         axios('http://3.92.189.98/tpp_apps/api/list', {
//         method:'POST',
//         headers: {},
//             })
//             .then(resp => {
//                 let arr = [];
//                 for(let i = 0; i<6; i++){
//                     arr.push(resp.data.data[i])
//                 }
//                 setUser(arr);
//             })
//     },[])
//     console.log(user);
// };

// export default getListaTrabajadores;
