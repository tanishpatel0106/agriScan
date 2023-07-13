import React from 'react'
import "./Dashboard.css"
// import data from './data'

const data = [
  {
      id:1,
      img:'https://i.pinimg.com/564x/0a/3c/a6/0a3ca61beb092bd6a5462e79fb422fbf.jpg',
      name:'ABC',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero.'
  },
  {
      id:2,
      img:'https://i.pinimg.com/564x/0a/3c/a6/0a3ca61beb092bd6a5462e79fb422fbf.jpg',
      name:'ABC',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero.'
  },
  {
      id:3,
      img:'https://i.pinimg.com/564x/0a/3c/a6/0a3ca61beb092bd6a5462e79fb422fbf.jpg',
      name:'ABC',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero.'
  },
  {
      id:4,
      img:'https://i.pinimg.com/564x/0a/3c/a6/0a3ca61beb092bd6a5462e79fb422fbf.jpg',
      name:'ABC',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero.'
  },
  {
      id:5,
      img:'https://i.pinimg.com/564x/0a/3c/a6/0a3ca61beb092bd6a5462e79fb422fbf.jpg',
      name:'ABC',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero.'
  },
  {
      id:6,
      img:'https://i.pinimg.com/564x/0a/3c/a6/0a3ca61beb092bd6a5462e79fb422fbf.jpg',
      name:'ABC',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, vero.'
  },
]

const handleSubmit = async (e) => {
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
}

export default Dashboard