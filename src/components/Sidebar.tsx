import React from 'react';
import { Plus, Search, MessageSquare, Clock } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNewChat: () => void;
  currentPage?: string;
}

function Sidebar({ isOpen, onToggle, onNewChat }: SidebarProps) {
  const recentChats = [
    { id: 1, title: "Project Status Inquiry", time: "2 hours ago" },
    { id: 2, title: "Financial Reports Q4", time: "1 day ago" },
    { id: 3, title: "Delanna Units Count", time: "2 days ago" },
    { id: 4, title: "RERA Compliance Check", time: "3 days ago" },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 left-0 h-full w-80 bg-white/90 backdrop-blur-sm border-r border-pink-100 shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 space-y-6">
          {/* New Chat Button */}
          <button
            onClick={onNewChat}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Chat
          </button>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
            />
          </div>

          {/* Recent Chats */}
          <div>
            <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recent Chats
            </h3>
            <div className="space-y-2">
              {recentChats.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full text-left p-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-200 border border-transparent hover:border-pink-100 group"
                >
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 truncate group-hover:text-pink-700 transition-colors duration-200">
                        {chat.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{chat.time}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Sidebar;