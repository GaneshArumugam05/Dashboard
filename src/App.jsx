// App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardHome from './Pages/DashboardHome';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        {/* Main content area */}
        <div className="flex flex-col flex-1">
          <Navbar />
          {/* Scrollable dashboard content */}
          <main className="flex-1 overflow-auto">
            <DashboardHome />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
