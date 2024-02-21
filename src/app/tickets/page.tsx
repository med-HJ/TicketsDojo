import React, { Suspense } from 'react'
import TikcetList from './TikcetList'
import Loading from '../loading'



export default function Tickets() {
  return (
    <div>
      <h1>tickets List </h1>
      <Suspense fallback={<Loading/>}>
        <TikcetList />
        </Suspense>
    </div>
  )
}
