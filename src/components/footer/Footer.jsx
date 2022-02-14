import React from 'react';
import "./footer.scss"

export default function Footer() {

  const d = new Date(); 
  const currentYear = d.getFullYear(); 

  return <div className="footer"> 
      <p>&copy; Copyright { currentYear }</p>
  </div>;
}
