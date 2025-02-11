import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div>NotFound</div>
      <p>Page you are looking for doesn't exist</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound