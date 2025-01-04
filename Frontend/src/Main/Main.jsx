import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
import USERBIO from './USERBIO.jsx'
const Main = () => {
  return (
    <>
      <div>
        <nav > 
          <Navbar />
        </nav>
      </div>
      <main>
        <USERBIO/>
        <h1 className="text-3xl">Attendence</h1>
<hr />
<Table/>

      </main>
    </>
  )
}

export default Main