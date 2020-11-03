import Req from './request';

export const getHandsHistory = (data: any) => Req.POST({ url: '/history', data });
