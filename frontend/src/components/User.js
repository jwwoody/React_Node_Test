import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';

function User() {
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://randomuser.me/api/'
        }).then(res => {console.log(res.data)})
    })
    return null

    //"https://randomuser.me/api/?results=2
    // useEffect( () => {
    //     fetchItems();
    // }, []);

    // const [items, setItems] = useState([]);

    // const fetchItems = async () => {
    //     const data = await fetch('/user');
    //     const items = await data.json();
    //     setItems(items);
    // };

    // return(
    //     <section>
    //         {
    //         items.map(item => (
    //             <div>
    //                 <h6 class="card-title">{items}</h6>
    //                 {/* <p class="card-text">{items.msg}</p>
    //                 <p class="card-text"><i>by {items.username}</i></p>   */}
    //             </div>
    //         ))
    //         }
    //     </section>
    // );
}

export default User;