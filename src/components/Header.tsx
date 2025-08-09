import React from 'react'
import { Brain, Wallet, LogOut, LayoutDashboard } from 'lucide-react'

interface HeaderProps {
  isConnected: boolean
  walletAddress: string
  onDisconnect: () => void
  onShowDashboard: () => void
}

export const Header: React.FC<HeaderProps> = ({ 
  isConnected, 
  walletAddress, 
  onDisconnect,
  onShowDashboard 
}) => {
  return (
    <header className="relative z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  MindVault
                </h1>
                <p className="text-sm text-gray-600">Web3 Mental Health</p>
              </div>
            </div>

            {isConnected && (
              <div className="flex items-center space-x-4">
                <button
                  onClick={onShowDashboard}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl transition-all duration-200"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-sm font-medium">Dashboard</span>
                </button>
                
                <div className="flex items-center space-x-3 px-4 py-2 bg-white/20 border border-white/30 rounded-xl">
                  <Wallet className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-mono text-gray-700">
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </span>
                  <button
                    onClick={onDisconnect}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
