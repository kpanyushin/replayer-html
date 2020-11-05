import Req from './request';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const getHandsHistory = (data: any) => Req.POST({ url: '/history', data, headers });
