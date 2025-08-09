import React, { useState } from 'react'
import { Coins, BookOpen, Users, Bot, Award, AlertTriangle, Plus, Calendar, MessageCircle } from 'lucide-react'

interface DashboardProps {
  walletAddress: string
}

export const Dashboard: React.FC<DashboardProps> = ({ walletAddress }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [tokens, setTokens] = useState(1250)
  const [journalEntries, setJournalEntries] = useState(47)
  const [therapySessions, setTherapySessions] = useState(3)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Award className="w-4 h-4" /> },
    { id: 'journal', label: 'Journal', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'therapy', label: 'Therapy', icon: <Calendar className="w-4 h-4" /> },
    { id: 'forums', label: 'Forums', icon: <Users className="w-4 h-4" /> },
    { id: 'nfa', label: 'AI Assistant', icon: <Bot className="w-4 h-4" /> },
  ]

  return (
    <div className="relative z-10 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Your mental health journey continues</p>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{tokens}</div>
                <div className="text-sm text-gray-600">Tokens</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{journalEntries}</div>
                <div className="text-sm text-gray-600">Entries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{therapySessions}</div>
                <div className="text-sm text-gray-600">Sessions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-2 shadow-xl mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white/30 text-gray-800 shadow-lg'
                    : 'text-gray-600 hover:bg-white/20'
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && <OverviewTab tokens={tokens} />}
          {activeTab === 'journal' && <JournalTab onTokensEarned={(earned) => setTokens(tokens + earned)} />}
          {activeTab === 'therapy' && <TherapyTab tokens={tokens} onTokensSpent={(spent) => setTokens(tokens - spent)} />}
          {activeTab === 'forums' && <ForumsTab tokens={tokens} />}
          {activeTab === 'nfa' && <NFATab />}
        </div>
      </div>
    </div>
  )
}

const OverviewTab: React.FC<{ tokens: number }> = ({ tokens }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Token Balance</h3>
          <Coins className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="text-3xl font-bold text-gray-800 mb-2">{tokens}</div>
        <p className="text-sm text-gray-600">+125 earned this week</p>
      </div>

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
          <BookOpen className="w-6 h-6 text-blue-500" />
        </div>
        <div className="space-y-2">
          <div className="text-sm text-gray-600">Journal entry completed</div>
          <div className="text-sm text-gray-600">AI session with NFA</div>
          <div className="text-sm text-gray-600">Forum post created</div>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Next Session</h3>
          <Calendar className="w-6 h-6 text-green-500" />
        </div>
        <div className="text-lg font-medium text-gray-800 mb-1">Dr. Sarah Chen</div>
        <div className="text-sm text-gray-600">Tomorrow, 2:00 PM</div>
      </div>
    </div>
  )
}

const JournalTab: React.FC<{ onTokensEarned: (tokens: number) => void }> = ({ onTokensEarned }) => {
  const [journalText, setJournalText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (journalText.length < 100) return
    
    setIsSubmitting(true)
    
    // Simulate submission
    setTimeout(() => {
      const wordCount = journalText.split(' ').length
      const tokensEarned = Math.floor(wordCount / 20) // 1 token per 20 words
      onTokensEarned(tokensEarned)
      setJournalText('')
      setIsSubmitting(false)
    }, 2000)
  }

  const wordCount = journalText.split(' ').filter(word => word.length > 0).length
  const tokensToEarn = Math.floor(wordCount / 20)

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Daily Journal</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>{wordCount} words</span>
          <span className="text-yellow-600">{tokensToEarn} tokens to earn</span>
        </div>
      </div>
      
      <textarea
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        placeholder="How are you feeling today? Share your thoughts, experiences, and emotions..."
        className="w-full h-64 p-4 bg-white/20 border border-white/30 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-800 placeholder-gray-500"
      />
      
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Minimum 100 words required. Earn 1 token per 20 words.
        </p>
        <button
          onClick={handleSubmit}
          disabled={wordCount < 100 || isSubmitting}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Entry'}
        </button>
      </div>
    </div>
  )
}

const TherapyTab: React.FC<{ tokens: number; onTokensSpent: (tokens: number) => void }> = ({ tokens, onTokensSpent }) => {
  const therapists = [
    { id: 1, name: 'Dr. Sarah Chen', specialty: 'Anxiety & Depression', rating: 4.9, cost: 150, seniority: 'Senior' },
    { id: 2, name: 'Dr. Michael Rodriguez', specialty: 'Trauma Therapy', rating: 4.8, cost: 200, seniority: 'Expert' },
    { id: 3, name: 'Dr. Emily Johnson', specialty: 'Cognitive Behavioral Therapy', rating: 4.7, cost: 120, seniority: 'Mid-level' },
  ]

  const handleBookSession = (cost: number) => {
    if (tokens >= cost) {
      onTokensSpent(cost)
      alert('Session booked successfully!')
    } else {
      alert('Insufficient tokens')
    }
  }

  return (
    <div className="space-y-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Therapy Session</h2>
        <div className="grid gap-4">
          {therapists.map((therapist) => (
            <div key={therapist.id} className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{therapist.name}</h3>
                  <p className="text-gray-600">{therapist.specialty}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {therapist.seniority}
                    </span>
                    <span className="text-sm text-gray-600">⭐ {therapist.rating}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-800">{therapist.cost} tokens</div>
                  <button
                    onClick={() => handleBookSession(therapist.cost)}
                    className="mt-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <h3 className="text-lg font-semibold text-gray-800">Emergency Support</h3>
        </div>
        <p className="text-gray-600 mb-4">
          If you're experiencing a mental health crisis, our AI will automatically detect concerning language 
          and book you with our most senior available therapist immediately.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200">
          Request Emergency Session
        </button>
      </div>
    </div>
  )
}

const ForumsTab: React.FC<{ tokens: number }> = ({ tokens }) => {
  const [joinCode, setJoinCode] = useState('')

  const forums = [
    { id: 1, name: 'Anxiety Support Group', members: 234, cost: 0, type: 'Free' },
    { id: 2, name: 'Depression Recovery', members: 156, cost: 50, type: 'Premium' },
    { id: 3, name: 'Mindfulness & Meditation', members: 89, cost: 25, type: 'Premium' },
  ]

  return (
    <div className="space-y-6">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Private Forums</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Join Forum</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                placeholder="Enter join code"
                className="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-800 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                Join
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Create Forum</h3>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Create New Forum</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Available Forums</h3>
          {forums.map((forum) => (
            <div key={forum.id} className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-gray-800">{forum.name}</h4>
                  <p className="text-sm text-gray-600">{forum.members} members</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    forum.type === 'Free' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {forum.cost === 0 ? 'Free' : `${forum.cost} tokens`}
                  </span>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const NFATab: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', content: 'Hello! I\'m your Non-Fungible Agent assistant. How are you feeling today?' },
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = { id: Date.now(), type: 'user', content: inputMessage }
    setMessages([...messages, newMessage])
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'I understand how you\'re feeling. Would you like to explore this further through some guided questions, or would you prefer a mindfulness exercise?'
      }
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">NFA AI Assistant</h2>
          <p className="text-gray-600">Your personal mental health companion</p>
        </div>
      </div>

      <div className="h-96 overflow-y-auto mb-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-white/30 border border-white/40 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Share your thoughts with your AI assistant..."
          className="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-800 placeholder-gray-500"
        />
        <button
          onClick={handleSendMessage}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  )
}
