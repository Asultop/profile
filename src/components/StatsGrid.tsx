import React from 'react';
import { Text } from '@fluentui/react-components';
import { Users, Video, Heart, Play } from 'lucide-react';

interface StatsGridProps {
  follower: string;
  video_count: number;
  likes: string;
  views: string;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ follower, video_count, likes, views }) => (
  <div className="grid grid-cols-4 gap-4 w-full my-4">
    <StatItem icon={<Users size={16} />} value={follower} label="粉丝" />
    <StatItem icon={<Video size={16} />} value={video_count} label="视频" />
    <StatItem icon={<Heart size={16} />} value={likes} label="获赞" />
    <StatItem icon={<Play size={16} />} value={views} label="播放" />
  </div>
);

const StatItem: React.FC<{ icon: React.ReactNode; value: string | number; label: string }> = ({ 
  icon, 
  value, 
  label 
}) => (
  <div className="text-center">
    <div className="flex items-center justify-center gap-1">
      <span className="text-[#FB7299]">{icon}</span>
      <Text weight="medium">{value}</Text>
    </div>
    <Text size={200} className="text-gray-500">{label}</Text>
  </div>
);