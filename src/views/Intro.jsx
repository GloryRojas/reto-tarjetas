import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Intro.css';

const Intro = () => {
    const[user, setUser] = useState([]);
    useEffect(()=>{
        axios('http://3.92.189.98/tpp_apps/api/list', {
        method:'POST',
        headers: {},
            })
            .then(resp => {
                let arr = [];
                for(let i = 0; i<5; i++){
                    arr.push(resp.data.data[i])
                }
                setUser(arr);
            })
    },[])
    console.log(user);

    return (
        <>
            <div>
                {user.map(item => {
                    return(
                        <div key={item.id} className="cards">
                            <p>{item.name}</p>
                            <Link to={{pathname: '/usuario/', state:{info: item}}}>Mas detalles</Link>
                        </div>
                    )
                })}
            </div>
            <Link to={'/usuario/'}>Ir a usuario</Link>
        </>
    )
}

export default Intro;