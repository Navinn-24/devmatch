import React from 'react'
import { Shield, Coins, Users, Bot, Heart, Award } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <main className="relative z-10 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Your Mental Health,
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Completely Anonymous
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect your crypto wallet and access a decentralized mental health platform. 
              Earn tokens for journaling, book therapy sessions, and get AI-powered support—all while maintaining complete anonymity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full">
                <Shield className="w-4 h-4" />
                <span>100% Anonymous</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full">
                <Coins className="w-4 h-4" />
                <span>Token Rewards</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full">
                <Bot className="w-4 h-4" />
                <span>AI Assistant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Daily Journaling"
            description="Write daily journals and earn 25 tokens per 500 words. Track your mental health journey with AI-powered insights."
            gradient="from-pink-400 to-rose-500"
          />
          
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Therapy Sessions"
            description="Book sessions with verified psychologists using your earned tokens. Emergency AI detection ensures immediate help when needed."
            gradient="from-blue-400 to-cyan-500"
          />
          
          <FeatureCard
            icon={<Bot className="w-8 h-8" />}
            title="NFA AI Assistant"
            description="Your personal Non-Fungible Agent provides 24/7 emotional support, journaling prompts, and progress tracking."
            gradient="from-purple-400 to-indigo-500"
          />
          
          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Private Forums"
            description="Create or join private group forums with unique codes. Pay with tokens or create free communities for peer support."
            gradient="from-green-400 to-emerald-500"
          />
          
          <FeatureCard
            icon={<Award className="w-8 h-8" />}
            title="Token Economy"
            description="Earn tokens through engagement, purchase up to 1000/month, and unlock premium features with different tier perks."
            gradient="from-yellow-400 to-orange-500"
          />
          
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Emergency System"
            description="AI monitors for harmful language and automatically books urgent therapy with senior therapists. 20% of revenue funds this."
            gradient="from-red-400 to-pink-500"
          />
        </div>

        {/* Stats Section */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">50,000+</div>
              <div className="text-gray-600">Journal Entries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
              <div className="text-gray-600">Verified Therapists</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-800 mb-2">1M+</div>
              <div className="text-gray-600">Tokens Earned</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className={`inline-flex p-3 bg-gradient-to-r ${gradient} rounded-xl mb-4`}>
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
