import { useState, useEffect } from 'react';
import { BilibiliUserInfo } from '../types/bilibili';
import { fetchUserInfo } from '../api/bilibili';

export const useBilibiliUser = (uid: number) => {
  const [userInfo, setUserInfo] = useState<BilibiliUserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadUserInfo = async () => {
      try {
        const info = await fetchUserInfo(uid);
        if (mounted) {
          setUserInfo(info);
          setIsLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('获取数据失败，请稍后重试');
          setIsLoading(false);
        }
      }
    };

    loadUserInfo();

    return () => {
      mounted = false;
    };
  }, [uid]);

  return { userInfo, isLoading, error };
};