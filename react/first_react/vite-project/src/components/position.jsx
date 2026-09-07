import React from 'react'

const Position = () => {

  return (
  <div className="static ...">
  {/* <!-- Static parent --> */}
  <div className="static ..."><p>Static child</p></div>
  <div className="inline-block ..."><p>Static sibling</p></div>
  {/* <!-- Static parent --> */}
  <div className="absolute ..."><p>Absolute child</p></div>
  <div className="inline-block ..."><p>Static sibling</p></div>
</div>
  )
}

export default Position