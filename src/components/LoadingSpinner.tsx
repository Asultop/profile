import React from 'react';
import { Spinner } from '@fluentui/react-components';

export const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center gap-4">
    <Spinner size="large" label="加载中..." />
  </div>
);