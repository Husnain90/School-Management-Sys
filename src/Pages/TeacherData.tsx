import React from 'react'
import { useContext } from 'react'
import { TeacherContext } from '../context/Teacher'
import { useNavigate } from 'react-router-dom'
import usePreventBackNavigation from '../customHooks/preventBackNavigation'

type Props = {}

const TeacherData = (props: Props) => {
  const teacherContext = useContext(TeacherContext)
   console.log(window.location.href); 
  //  usePreventBackNavigation()
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div>
        Your first name is <strong>{teacherContext?.state.firstName}</strong>
      </div>
      <div>
        Your last name is <strong>{teacherContext?.state.lastName}</strong>
      </div>
      <div>
        Your Email is <strong>{teacherContext?.state.email}</strong>
      </div>
      <div>
        Your phone number is <strong>{teacherContext?.state.phoneNumber}</strong>
      </div>
      <div>
        You are a <strong>Teacher</strong>
      </div>
    </div>
  );
}

export default TeacherData