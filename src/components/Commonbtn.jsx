import React from 'react'

const Commonbtn = (props) => {
  return (
    <div>
      <button className={` ${props.padding} px-5 md:px-12 py-[16px] md:py-[19px] bg-[#BD7D41] text-sm md:text-xl hover:text-[#BD7D41] hover:border hover:border-solid hover:border-[#BD7D41] border border-solid border-transparent hover:bg-white  font-semibold hover:scale-[1.1] duration-300 text-white font-ff-poppins`} onClick={props.fun}> {props.text}</button>

    </div>
  )
}

export default Commonbtn
