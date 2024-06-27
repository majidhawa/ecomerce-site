
export const UseProducts = async () => {
    const apiUrl = process.env.REACT_APP_FAKE_STORE_API;
  
    try {
      const response = await fetch(`${apiUrl}/products`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to load products');
    }
  };
  