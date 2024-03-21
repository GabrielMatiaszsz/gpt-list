"use client"
import React from 'react'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

type Props = {
    children:React.ReactNode 
}

const Providers = ({children}: Props) => {
  return (
    <div>Providers</div>
  )
}

export default Providers