import React from 'react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { ProfileCard } from './components/ProfileCard';

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div 
        className="min-h-screen flex items-center justify-center p-4" 
        style={{
          background: 'linear-gradient(135deg, #fef2f5 0%, #ffd1e0 100%)'
        }}
      >
        <ProfileCard />
      </div>
    </FluentProvider>
  );
}

export default App;