import React from 'react'

const OverlayShadow = ({show}) => {
  return (
    <>
        {show == true ? (
            <div style={{position: "absolute", top: 0, left: 0, backgroundColor: "#000", width: "100%", opacity: 0.5, height: "100%", zIndex: 10}}></div>
        ) : (
            <></>
        )}
    </>
  )
}

export default OverlayShadow