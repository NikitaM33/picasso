// /**
//  * Модуль инициализации env-переменных
//  * @remark Если не найдено значение хоть одной переменной,
//  * Приложение сразу выбросит ошибку, при инициализации модуля
//  * @module
//  */

// /**
//  * Получение env-переменной
//  * @throwable
//  */

// const getEnvVar = (key) => {
//   if (process.env[key] === undefined) {
//     throw new Error(`Env variable ${key} is required!`);
//   }

//   return process.env[key] || '';
// };

// export const MAIN_URL = getEnvVar('MAIN_API');

// URLs
export const MAIN_URL = 'https://jsonplaceholder.typicode.com';
export const GET_COMMETNS = '/posts';

// Types
export const FETCH_POSTS = 'FETCH_POSTS';
