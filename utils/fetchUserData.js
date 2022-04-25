import {server} from './config';

export const fetchUserData = async () => {
  const response = await fetch(`${server}/data.json`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000, https://shivangsaxena.in',
    },
  });
  return await response.json();
};
