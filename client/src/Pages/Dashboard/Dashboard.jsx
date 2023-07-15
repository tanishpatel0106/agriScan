import React,{useEffect} from 'react'
import "./Dashboard.css"
import {data} from './data'
import { Link } from 'react-router-dom';

const handleSubmit = async (e) => {
  useEffect(() => {
    window.location.reload();
  }, []);
  e.preventDefault();
  const name = e.target[0].value;
  const image = e.target[1].value;

  try {
    await fetch("/api/auth/getdisease", {
      method: "POST",
      body: JSON.stringify({
        name,
        image,
      }),
    });
    mutate();
    e.target.reset()
  } catch (err) {
    console.log(err);
  }
};

const Dashboard = () => {
  const ItemExist = localStorage.getItem('token') !== null
  if(ItemExist){
    return (
      <div className="dash-container">
          <div className="content">
            <h1 className="Title">Past Disease Information</h1>
            <div className="posts">
              {data.map((post)=>(
                <div className="post" key={post.id}>
                  <div className="imgContainer">
                    <img src={data.img} alt="" className='img' />
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
          <input type="name" className="input" placeholder='Name of Plant' />
          <input type="name" className="input" placeholder='Image' />
          <button className='btn'>Submit</button>
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