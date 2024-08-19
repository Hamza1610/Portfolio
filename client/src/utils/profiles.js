async function getProfiles() {
    return await fetch('http://localhost:3001/api/profile/get-profiles').json();
}

module.exports = { getProfiles }