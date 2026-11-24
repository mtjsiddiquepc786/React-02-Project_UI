import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {


  return (
    <div id="right" className='h-full overflow-x-auto rounded-4xl p-6 w-2/3 flex flex-nowrap gap-3'> 
   

  {props.user.map(function(val,idx){
  return(<RightCard
    idx={idx+1}
    img={val.img}
    intro={val.intro}
    tag={val.tag}
    color={val.color}
    />

  )})}

    </div>
  )
}

export default RightContent



