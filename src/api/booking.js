import http from './index.js';

export const formSubmit = http.definePost('/Form/submit', {
  headers: { 'Content-Type': 'application/json' },
});