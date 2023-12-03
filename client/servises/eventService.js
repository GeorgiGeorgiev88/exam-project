const baseUrl = "http://localhost:3030";

export const getAll = () => {
  return fetch(`${baseUrl}/data/games`)
    .then((res) => res.json());
};

export const getOne = (id) => {
  return fetch(`${baseUrl}/data/games/${id}`)
    .then((res) => res.json());
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Response data:', data);
    return data
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const register = async (email, password,username) => {
  try {
    const response = await fetch(`${baseUrl}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, username }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Response data:', data);
    return data
  } catch (error) {
    console.error('Error:', error.message);
  }
};