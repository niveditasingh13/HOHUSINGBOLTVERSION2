import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import type { Page } from '../App';

interface ProfileDropdownProps {
  onNavigate: (page: Page) => void;
  onSignOut: () => void;
}


function ProfileDropdown({ onNavigate, onSignOut }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-2 rounded-xl hover:bg-pink-50 transition-all duration-200"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-md">
          <User className="w-5 h-5" />
        </div>
        <div className="hidden md:block text-left">
          <p className="font-semibold text-gray-800">HanuShri</p>
          <p className="text-xs text-gray-500">Administrator</p>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-16 right-4 w-56 bg-white/95 backdrop-blur-sm rounded-2xl border border-pink-100 shadow-xl py-2 z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="font-semibold text-gray-800">HanuShri</p>
            <p className="text-sm text-gray-500">hanushri@hoh.com</p>
          </div>
          
          <div className="py-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onNavigate('settings');
              }}
              className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-200 flex items-center gap-3"
            >
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Settings</span>
            </button>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-200 flex items-center gap-3"
            >
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Help & Support</span>
            </button>
          </div>

          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onSignOut();
              }}
              className="w-full text-left px-4 py-3 hover:bg-red-50 transition-all duration-200 flex items-center gap-3 text-red-600"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;