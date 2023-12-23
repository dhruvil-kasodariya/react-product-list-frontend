// const baseUrl = "http://localhost:4400";
const baseUrl = 'https://react-product-list-with-login-backend.onrender.com';
export const loginUrl = `${baseUrl}/api/auth/signin`;

export const signUpUrl = `${baseUrl}/api/auth/signup`;

export const getAllProductApi = `${baseUrl}/api/product/getAllProduct`

export const getSingleProductApi =`${baseUrl}/api/product/getProductWithId`

export const changeProductStatusApi =`${baseUrl}/api/product/updateOneField`

export const deleteProductApi =`${baseUrl}/api/product/deleteProduct`
