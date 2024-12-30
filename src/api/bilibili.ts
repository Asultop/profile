import axios from 'axios';
import { BilibiliUserInfo } from '../types/bilibili';

// 创建一个axios实例，设置通用配置
const biliClient = axios.create({
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
  }
});

const BILIBILI_API_URL = 'https://api.bilibili.com/x/space/acc/info';
const BILIBILI_STAT_URL = 'https://api.bilibili.com/x/relation/stat';

export async function fetchUserInfo(uid: number): Promise<BilibiliUserInfo> {
  try {
    // 使用 Promise.all 并发请求数据
    const [userInfoResponse, statResponse] = await Promise.all([
      biliClient.get(`${BILIBILI_API_URL}?mid=${uid}`),
      biliClient.get(`${BILIBILI_STAT_URL}?vmid=${uid}`)
    ]);

    const userInfoData = userInfoResponse.data.data;
    const statData = statResponse.data.data;

    return {
      mid: uid,
      name: userInfoData.name,
      face: userInfoData.face,
      sign: userInfoData.sign,
      follower: statData.follower,
      video_count: userInfoData.video_count || 0,
    };
  } catch (error) {
    console.error('Error fetching Bilibili user info:', error);
    throw new Error('获取用户信息失败');
  }
}