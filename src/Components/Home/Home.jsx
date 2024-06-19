import React from 'react'
import User from '../User/User'

const Home = () => {
  return (
    <div className='home'>
        <div className="homeLeft"></div>
        <div className="homeRight">
            <User
            userId={User.id}
            name={User.name}
            avatar={User.avatar}
            />
        </div>

    </div>
  )
}

export default Home