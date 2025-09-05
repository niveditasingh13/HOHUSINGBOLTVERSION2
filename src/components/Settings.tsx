import React, { useState } from 'react';
import { Bot, Moon, Sun, User, Lock, Bell, ArrowLeft } from 'lucide-react';
import Sidebar from './Sidebar';
import ProfileDropdown from './ProfileDropdown';
import type { Page } from '../App';

interface SettingsProps {
  onNavigate: (page: Page) => void;
  onSignOut: () => void;
}

function Settings({ onNavigate, onSignOut }: SettingsProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState('HanuShri');
  const [email, setEmail] = useState('hanushri@hoh.com');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onNewChat={() => onNavigate('chat')}
        currentPage="settings"
      />
      
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md"
            >
              <Bot className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('dashboard')}
                className="p-2 rounded-lg hover:bg-pink-50 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Settings
              </h1>
            </div>
          </div>
          <ProfileDropdown onNavigate={onNavigate} onSignOut={onSignOut} />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Settings */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-pink-600" />
              Profile Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-pink-600" />
              Security
            </h2>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium py-3 px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md">
              Change Password
            </button>
          </div>

          {/* Appearance Settings */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Appearance</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? <Moon className="w-6 h-6 text-pink-600" /> : <Sun className="w-6 h-6 text-pink-600" />}
                <div>
                  <p className="font-medium text-gray-800">Dark Mode</p>
                  <p className="text-sm text-gray-600">Toggle dark theme for better night viewing</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-600"></div>
              </label>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-pink-100 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Bell className="w-6 h-6 text-pink-600" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Sound Notifications</p>
                  <p className="text-sm text-gray-600">Play sound when receiving new messages</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-purple-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;