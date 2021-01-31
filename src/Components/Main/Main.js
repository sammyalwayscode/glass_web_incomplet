import React from 'react'
import './Main.css'
import avatar from '../Img/sam.jpg'
import AvatarUI from '../AvatarUI/AvatarUI'

function Main() {
  return (
    <div>
      <main className='mainD'>
        <section className='glass'>
          <div className='dashboard'>
            <div className='usersection'>
              {/* <img src={avatar} alt='' /> */}
              <AvatarUI />
              <h3>Olorunda Samuel</h3>
              <p>Pro Member</p>
            </div>
            <div className='links'>
              <img />
              <h2>Streams</h2>
            </div>
            <div className='links'>
              <img />
              <h2>Games</h2>
            </div>
            <div className='links'>
              <img />
              <h2>New</h2>
            </div>
            <div className='links'>
              <img />
              <h2>Libuary</h2>
            </div>
          </div>
        </section>
      </main>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </div>
  )
}

export default Main
