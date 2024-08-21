function getProfiles() {
    const response = async () => {
        return await fetch('http://localhost:3001/api/profile/get-profiles');
    }

    console.log(response());

    return response
    
}

module.exports = { getProfiles }