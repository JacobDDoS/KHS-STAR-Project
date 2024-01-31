import React, {useEffect, useState} from 'react'
import '../css/pages/Leadership.css'

import Contact1 from '../media/photos/Contact1.png'
import Contact2 from '../media/photos/Contact2.png'

const ContactPage = () => {
  const [data, setData] = useState([
    [Contact1, "Carol Kreutzer", "Email: carkreutzer@kearneycats.com", "Phone: (308) 281-2918"],
    [Contact2, "Kathy Gifford", "Email: katgifford@kearneycats.com", "Phone: (308) 918-4357"]
  ])
  
  return <div className="main-body">
    {
      data.map((contact) => {
        return <div className="flex-middle contact">
          <div>
            <img src={contact[0]} alt={"Photo of " + contact[1]} />
          </div>
          <div>
            <h2>{contact[1]}</h2>
            <h3>{contact[2]}</h3>
            <h3>{contact[3]}</h3>
          </div>
        </div>
      })
    }
    <div>
      <h1 style={{"margin": "15px auto"}}>Other contacts:</h1>
      <h2 style={{"marginBottom": "25px"}}>Kearneyhighfccla@gmail.com</h2>
    </div>
  </div>
}

export default ContactPage