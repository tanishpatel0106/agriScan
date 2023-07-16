import React,{useEffect} from 'react'
import "./Dashboard.css"
import {data} from './data'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const ItemExist = localStorage.getItem('token') !== null
  const openLocalhostInNewTab = () => {
    const localhostUrl = 'http://localhost:8501'; // Replace with your desired localhost URL
    window.open(localhostUrl, '_blank');
  };
  if(ItemExist){
    return (
      <div className="dash-container">
          <div className="content">
            <h1 className="Title">Some Famous Disease Predicted By Our Model</h1>
            <div className="posts">
              {data.map((post)=>(
                <div className="post" key={post.id}>
                  <div className="imgContainer">
                    <img src={post.img} alt="" className='img' />
                  </div>
                  <div className="dash-content">
                    <h2 className="dashTitle">{post.name}</h2>
                    <p className="text">{post.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        <form className="new">
          <h1 className='form-title'>Check For the New Disease</h1>
          <button className='dash-button' onClick={openLocalhostInNewTab}>Click Me!!</button>
        </form>
      </div>
    )
  }else{
    return(
      <div className='dash-link'>
        <h1 className='link'>Please Login</h1>
        <Link to={'/dashboard/authentication'} className='btn'>Click Me</Link>
      </div>
    )
  }
}

export default Dashboard