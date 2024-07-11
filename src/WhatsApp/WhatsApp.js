import React from 'react'
import { SiWhatsapp } from "react-icons/si";



const WhatsApp = () => {
    const phoneNumber = "03181934899";

  return (
    <>

<a
      href={`https://wa.me/${phoneNumber}`}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
     <SiWhatsapp className='text-4xl' />

     
    </a>
      
    </>
  )
}

export default WhatsApp