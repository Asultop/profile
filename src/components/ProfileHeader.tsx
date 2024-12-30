import React from 'react';
import { Text } from '@fluentui/react-components';

interface ProfileHeaderProps {
  name: string;
  face: string;
  sign: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, face, sign }) => (
  <>
    <div className="w-24 h-24 rounded-full ring-4 ring-[#FB7299] overflow-hidden mb-4">
      <img 
        src={face}
        alt={name}
        className="w-full h-full object-cover"
        onError={(e) => {
          console.error('Image failed to load:', face);
          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23FB7299"/%3E%3Ctext x="50" y="50" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dominant-baseline="middle"%3E%3F%3C/text%3E%3C/svg%3E';
        }}
      />
    </div>
    
    <div className="flex flex-col items-center gap-3 w-full mb-2">
      <Text 
        size={500} 
        weight="semibold" 
        className="text-center text-[#FB7299]"
      >
        {name}
      </Text>
      <Text 
        size={300} 
        className="text-gray-600 text-center whitespace-pre-line max-w-[300px]"
      >
        {sign}
      </Text>
    </div>
  </>
);