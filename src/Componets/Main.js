import React, { useEffect } from 'react'

function Main() {
    useEffect(()=>{
        let string='';
        let buttons=document.querySelectorAll('.btn')
        Array.from(buttons).forEach((button)=>{
            button.addEventListener('click',(e)=>{
                if(e.target.innerHTML=='='){
                    string=eval(string);
                    document.querySelector('input').value=string;
                }
                else if(e.target.innerHTML=='C'){
                    string="";
                    document.querySelector('input').value=string;
                }
                else{
                    string+=e.target.innerHTML;
                    document.querySelector('input').value=string;
                }
            })
        })

    },[])
  return (
    <div>
      <h1 className='text-center'>Hare krishna to Calculator</h1>
      <div className="container flex flex-col  mx-auto m-w- items-center ">
        <div className="row">
            <input type="text" className="input" />
        </div>
        <div className="row">
            <button className="btn">C</button>
            <button className="btn">%</button>
            <button className="btn">M+</button>
            <button className="btn">M-</button>
        </div>
        <div className="row">
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn">*</button>
        </div>
        <div className="row">
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">/</button>
        </div>
        <div className="row">
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn">+</button>
        </div>
        <div className="row">
            <button className="btn">0</button>
            <button className="btn">.</button>
            <button className="btn">=</button>
            <button className="btn">-</button>
        </div>
      </div>
    </div>
  )
}

export default Main
