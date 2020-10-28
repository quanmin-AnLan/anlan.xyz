
import hmacsha1 from 'hmacsha1';
import base64url from 'base64url';

export const imgUrl = (url: string) => {
  const time = Math.floor(new Date().getTime() / 1000) + 86400;
  const timeUrl = 'http://www.anlan.xyz/' + url + '.jpeg?e=' + time;
  const key = 'fdW6m_E6B3eMjyrGamfkGUFyE_Ab-8a25cDPN2ji';
  const sign = hmacsha1(timeUrl, key);
  const encodedSign = base64url(sign);
  const token = key + ':' + encodedSign;
  return timeUrl + '&token=' + token;
};
