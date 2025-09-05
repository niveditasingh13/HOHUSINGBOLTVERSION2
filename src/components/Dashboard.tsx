import React, { useState } from 'react';
import { Bot, MessageCircle } from 'lucide-react';
import Sidebar from './Sidebar';
import ProfileDropdown from './ProfileDropdown';
import type { Page } from '../App';

interface DashboardProps {
  onNavigate: (page: Page) => void;
  onSignOut: () => void;
}

function Dashboard({ onNavigate, onSignOut }: DashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onNewChat={() => onNavigate('chat')}
        currentPage="dashboard"
      />

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-sm border-b border-pink-100 shadow-sm flex items-center justify-between px-6 relative z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md"
            >
              <Bot className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              HOH MIS Assistant
            </h1>
          </div>
          <ProfileDropdown onNavigate={onNavigate} onSignOut={onSignOut} />
        </header>

        {/* Main content */}
        <main className="p-6 flex items-center min-h-[calc(100vh-80px)] -ml-30">
          <div className="max-w-4xl w-full">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-pink-100 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Welcome to HOH MIS Assistant! 👋
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Your intelligent assistant for Housing & Habitat Management Information System. 
                  Get instant insights, generate reports, track project status, and access all your 
                  MIS data through natural conversation.
                </p>
              </div>

              <div className="text-center">
                <button
                  onClick={() => onNavigate('chat')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Start New Chat
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
