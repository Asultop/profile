import React from 'react';
import { Text } from '@fluentui/react-components';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="p-4 bg-red-50 rounded-lg">
    <Text className="text-red-600">{message}</Text>
  </div>
);