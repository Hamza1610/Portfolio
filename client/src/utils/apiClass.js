import axios from 'axios';


export class ProfileAPI {

    async getProfile(profileId) {
        try {
            console.log('Recieved id:', profileId)
            const response =  await axios.get(`http://localhost:3002/api/get-profile/${profileId}`);

            if (response.status === 200) {
                return response.data
            }
            else return [];
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getIntroduction(profileId) {
        try {
            const response =  await axios.get(`http://localhost:3002/api/intro/${profileId}`);

            if (response.status === 200) return response.data
            else return [];
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getExperience(profileId) {
        try {
            const response =  await axios.get(`${profileId}`);

            if (response.status === 200) return response.data;
            else return [];
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getProjects(profileId) {
        try {
            const response =  await axios.get(`${profileId}`);

            if (response.status === 200) return response.data;
            else return [];
        }
        catch (error) {
            console.log(error);
            return error;
        }

    }
    async getTechnologies(profileId) {
        try {
            const response =  await axios.get(`${profileId}`);

            if (response.status === 200) return response.data;
            else return [];
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getContact(profileId) {
        try {
            const response =  await axios.get(`${profileId}`);

            if (response.status === 200) return response.data;
            else return [];
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

}
