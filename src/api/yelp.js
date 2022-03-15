import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer 2UrZ7zFKGGdOFrR0eHT5Nk-7W2kqznW070gMNPeBToEXE_VY0zCangHpjsZ3Q22Huz9RRKGyByaktOEFqiD1ZutnHOIqq4B2GhBS6p_17tyfTI6hG8lIXRnStZlgX3Yx'
    }
});