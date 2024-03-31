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
      <p>I've put together a free webinar to show you how to Find & Treat Your PCOS Type so you can take the next steps in reversing PCOS!</p>
      <br/>
      <p>*Your results are not a diagnosis.</p>
      <p>For consultation, please refer to this link</p>
      <button className="consult"><a href="https://calendly.com/prernagoyal/30min">Find & Treat your PCOS Type</a></button>

   </div>
  )
}

export default Results