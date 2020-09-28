import React from 'react'

function UserPhoto(props) {
  return (
    <div className="UserPhoto">
      <img src={props.photo} alt="profile" style={{padding: "20px"}}/>
    </div>
  )
}

export default UserPhoto