import React from 'react';


export default function ProgressBar(props) {
    const border1 = {border:"3px solid red",height:"20px",width:"100%", paddingTop:"13px"};
    // console.log(progressValue);
    // const border2 = {border: "3px solid blue"};
  return (
    <div className='mainBody'>
        <div className='completeBar' style={border1}>
          <div className='progressBar' style={{ border: "3px solid blue", width:`${props.progressValue}%`}}>
            
            </div>
        </div>
        <label for='progressBar2'>{props.progressValue}%</label>
        <input type='number' id ='progressBar2' value={props.progressValue} onChange={(e)=>{props.setProgressValue(e.target.value)}}/>
    </div>
  )
}
