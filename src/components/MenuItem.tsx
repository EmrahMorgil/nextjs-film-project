import Link from 'next/link'
import React from 'react'

const MenuItem = ({mn}: {mn: any}) => {
  return (
    <Link href={mn.url}>{mn.name}</Link>
  )
}

export default MenuItem