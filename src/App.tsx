import React, { useState } from 'react';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Settings from './components/Settings';

export type Page = 'signin' | 'dashboard' | 'chat' | 'settings';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('signin');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chatKey, setChatKey] = useState(0);

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentPage('signin');
    setChatKey(prev => prev + 1); // Reset chat when signing out
  };

  const navigate = (page: Page) => {
    if (isAuthenticated) {
      if (page === 'chat') {
        setChatKey(prev => prev + 1); // Force new chat instance
      }
      setCurrentPage(page);
    }
  };

  if (!isAuthenticated) {
    return <SignIn onSignIn={handleSignIn} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {currentPage === 'dashboard' && (
        <Dashboard onNavigate={navigate} onSignOut={handleSignOut} />
      )}
      {currentPage === 'chat' && (
        <Chat key={chatKey} onNavigate={navigate} onSignOut={handleSignOut} />
      )}
      {currentPage === 'settings' && (
        <Settings onNavigate={navigate} onSignOut={handleSignOut} />
      )}
    </div>
  );
}

export default App;