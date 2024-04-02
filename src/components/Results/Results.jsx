import React from 'react';
import './Results.css'

const Results = (props) => {
  
  let strArray = [];

  for(var str of props.result){
    strArray.push(str);
  }

  var x = strArray.join(" , ")

  console.log(x);

  return (
    <div className="result">
      {strArray.length === 0? <b>You don't have any sympton's as of now</b> : <b>You may have: {x}</b>}
      

  
      <p className="desc">You're not alone! 80% of women have PCOS, but don't worry, it's manageable if you take the right steps!</p>
      <br/>
      <p>If you want to know how to treat your PCOS Type so you can book a free consultation with me</p>
      <br/>
      <p>Book a suitable time and I will contact you for a free consultation</p>
      <button className="consult">
        <a href="https://calendly.com/prernagoyal/30min">Find & Treat your PCOS type</a>
      </button>
   </div>
  )
}

export default Results