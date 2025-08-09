import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Dashboard } from './components/Dashboard'
import { WalletConnect } from './components/WalletConnect'

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const handleWalletConnect = (address: string) => {
    setWalletAddress(address)
    setIsConnected(true)
    setShowDashboard(true)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setShowDashboard(false)
    setWalletAddress('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 font-inter">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-5"></div>
      
      <Header 
        isConnected={isConnected} 
        walletAddress={walletAddress}
        onDisconnect={handleDisconnect}
        onShowDashboard={() => setShowDashboard(!showDashboard)}
      />
      
      {!isConnected ? (
        <>
          <Hero />
          <WalletConnect onConnect={handleWalletConnect} />
        </>
      ) : showDashboard ? (
        <Dashboard walletAddress={walletAddress} />
      ) : (
        <Hero />
      )}
    </div>
  )
}

export default App
