import axios from "axios";

export async function listCar(name, category, minPrice, maxPrice, status) {
  const response = await axios.get(
    `https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&isRented=${status}`
  );

  return response;
}

export async function detailCar(id, config) {
  const response = await axios.get(
    `https://api-car-rental.binaracademy.org/customer/car/${id}` ,config);
    
  return response;
}

export async function customerOrder( id, config) {
  const response = await axios.get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, config);
  
  return response;
}

export async function paymentSlip(id, formData, config) {
  const response = await axios.put(`https://api-car-rental.binaracademy.org/customer/order/${id}/slip`, formData, config);

  return response;
}

export async function authLogin(form, config) {
  const response = await axios.post(
    `https://api-car-rental.binaracademy.org/admin/auth/login`,
    form,
    config
  );
  return response;
}

export async function register(form) {
  const response = await axios.post(
    `https://api-car-rental.binaracademy.org/admin/auth/register`,
    form
  );
  return response;
}

export async function createOrder(payload, config) {
  const response = await axios.post(
    "https://api-car-rental.binaracademy.org/customer/order/",
    payload,
    config
  );
  return response;
}
