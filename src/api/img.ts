
import hmacsha1 from 'hmacsha1';
import base64url from 'base64url';

export const imgUrl = (url: string) => {
  const time = Math.floor(new Date().getTime() / 1000);
  const timeUrl = 'http://www.anlan.xyz/' + url + '?e=' + time;
  const key = 'CVQi-S3HHM3oLell3Rs_LYXmrGjOyZCdK9Tu1Wic';
  const sign = hmacsha1(timeUrl, key);
  const encodedSign = base64url(sign);
  const token = key + ':' + encodedSign;
  return timeUrl + '&token=' + token;
};
