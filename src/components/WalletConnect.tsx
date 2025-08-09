import React, { useState } from 'react'
import { Wallet, Shield, Zap } from 'lucide-react'

interface WalletConnectProps {
  onConnect: (address: string) => void
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ onConnect }) => {
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnect = async (walletType: string) => {
    setIsConnecting(true)
    
    // Simulate wallet connection
    setTimeout(() => {
      const mockAddress = `0x${Math.random().toString(16).substr(2, 40)}`
      onConnect(mockAddress)
      setIsConnecting(false)
    }, 2000)
  }

  return (
    <section className="relative z-10 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl text-center">
          <div className="mb-8">
            <div className="inline-flex p-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl mb-6">
              <Wallet className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Connect Your Wallet
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect your crypto wallet to start your anonymous mental health journey. 
              Your identity remains completely private while you earn tokens and access premium features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <WalletOption
              name="MetaMask"
              description="Most popular Ethereum wallet"
              icon="🦊"
              onClick={() => handleConnect('metamask')}
              isConnecting={isConnecting}
            />
            <WalletOption
              name="WalletConnect"
              description="Connect any mobile wallet"
              icon="📱"
              onClick={() => handleConnect('walletconnect')}
              isConnecting={isConnecting}
            />
            <WalletOption
              name="Coinbase Wallet"
              description="Secure and user-friendly"
              icon="🔵"
              onClick={() => handleConnect('coinbase')}
              isConnecting={isConnecting}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Fully Decentralized</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wallet className="w-4 h-4 text-blue-500" />
              <span>No Personal Data Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface WalletOptionProps {
  name: string
  description: string
  icon: string
  onClick: () => void
  isConnecting: boolean
}

const WalletOption: React.FC<WalletOptionProps> = ({ 
  name, 
  description, 
  icon, 
  onClick, 
  isConnecting 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isConnecting}
      className="backdrop-blur-lg bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl p-6 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      {isConnecting && (
        <div className="mt-3">
          <div className="animate-spin w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      )}
    </button>
  )
}
