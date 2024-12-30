import React from 'react';
import { Card, Text } from '@fluentui/react-components';
import { ProfileHeader } from './ProfileHeader';
import { StatsGrid } from './StatsGrid';
import { FollowButton } from './FollowButton';
import { userData } from '../data/userData';

export const ProfileCard: React.FC = () => {
  return (
    <Card className="w-[400px] p-6 shadow-lg bg-white/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <ProfileHeader 
          name={userData.name}
          face={userData.face}
          sign={userData.sign}
        />
        
        <StatsGrid 
          follower={userData.follower}
          video_count={userData.video_count}
          likes={userData.likes}
          views={userData.views}
        />

        <FollowButton mid={userData.mid} />

        <Text size={100} className="text-gray-400 mt-4">
          数据更新时间：2024年12月30日
        </Text>
      </div>
    </Card>
  );
};