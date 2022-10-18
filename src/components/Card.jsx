import React, { useState } from 'react'

const Card = (props) => {


    const [count, setCount] = useState(0)

    const handleInc = () => {
        if(count < 15){
            setCount(count+5)
        }else if(count+5 >= 15){
            setCount(0)
        }
        
    }

    const handleDec = () => {
        if(count > 0 ){
            setCount(count-5)
        }else if(count <= 0){
            setCount(15)
        }
    }

    console.log(count);
    
  return (
    <div className='container text-center text-success my-3'>
        <h1>Employee List</h1>
        <div className="col my-5">
        <button onClick={handleDec} className='btn btn-primary me-5'>Previous</button>
        <button onClick={handleInc} className='btn btn-primary'>Next</button>
        </div>
        {props.data.slice(count,count+5).map((item) => {
            return (
                <>
                <h6>{item.name}</h6>
                <img src={item.image} alt="" />
                </>
                
            )
        })}

      
    </div>
  )
}

export default Card