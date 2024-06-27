import React from 'react'
import './Programs.css'
import Program1 from '../../assets/program1.jpg'
import Program2 from '../../assets/program2.jpg'
import Program3 from '../../assets/program3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

function Programs() {
  return (
    <div className='programs'>
      <div className="program">
        <img src={Program1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs

