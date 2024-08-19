

const getProfiles = (req, res) => { 
    res.status(200).json([
        { path: 'full_stack_developer', json: {} },
        { path: 'backend_developer', json: {} },
        { path: 'frontend_developer', json: {} },
        { path: 'machine_learning_developer', json: {} },
    ])
}

module.exports = { getProfiles }
