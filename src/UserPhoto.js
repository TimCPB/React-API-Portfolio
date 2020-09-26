import React from 'react'

function UserPhoto(props) {
  return (
    <div className="UserPhoto">
      <img src={props.photo} alt="photo" />
    </div>
  )
}

export default UserPhoto