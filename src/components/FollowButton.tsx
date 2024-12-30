import React from 'react';
import { Button } from '@fluentui/react-components';
import { ExternalLink } from 'lucide-react';

interface FollowButtonProps {
  mid: number;
}

export const FollowButton: React.FC<FollowButtonProps> = ({ mid }) => {
  const handleFollow = () => {
    window.open(`https://space.bilibili.com/${mid}`, '_blank');
  };

  return (
    <Button 
      appearance="primary"
      icon={<ExternalLink size={16} />}
      onClick={handleFollow}
      style={{
        backgroundColor: '#FB7299',
        color: 'white',
        width: '100%',
      }}
      className="hover:!bg-[#fc8bab] transition-colors"
    >
      关注 TA
    </Button>
  );
};