const baseUrl = "http://localhost:3030";

export const getAll = () => {
  return fetch(`${baseUrl}/data/event`)
    .then((res) => res.json());
};

export const getOne = (id) => {
  return fetch(`${baseUrl}/data/event/${id}`)
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

export const register = async (email, password, username) => {
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

export const logout = async (token) => {

  const response = await fetch(`${baseUrl}/users/logout`, {
    method: 'GET',
    headers: {
      'X-Authorization': token,
    },
  });
  return response;
};

export const create = async (eventData, token) => {
  try {
    const response = await fetch(`${baseUrl}/data/event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token,
      },
      body: JSON.stringify(eventData),
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

export const remove = async (id, token) => {
  try {
    const response = await fetch(`${baseUrl}/data/event/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const edit = async (id, token, data) => {
  try {
    const response = await fetch(`${baseUrl}/data/event/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
};

export const getComments = () => {
  return fetch(`${baseUrl}/data/comments`)
    .then((res) => res.json());
};

export const addComment = async (creatorEvent, token, comment) => {
  try {
    const response = await fetch(`${baseUrl}/data/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': token,
      },
      body: JSON.stringify({ text: comment, eventCreator: creatorEvent }),
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