import axios from 'axios';

const API_BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost/salon/test.php'
    : 'https://elrenonailspa.com/api/php/test.php';

// Fetch all services with their categories
export const getServices = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching services:", error);
      return []; // Return an empty array on failure
    }
  };
  

// Add a new service
export const addService = async (service) => {
  try {
    const response = await axios.post(`${API_BASE_URL}`, {
      method: 'POST',
      ...service,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding service:', error);
    throw error;
  }
};

// Update an existing service
export const updateService = async (service) => {
  try {
    const response = await axios.put(`${API_BASE_URL}`, {
      method: 'PUT',
      ...service,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
};

// Delete a service
export const deleteService = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}`, {
      data: { method: 'DELETE', id },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting service:', error);
    throw error;
  }
};
