const { post } = require("../routes/orchestratorRoutes");

require("dotenv").config();

const ACQUIRE_URI = process.env.ACQUIRE_URI;

async function acquire(){
    const headers = {
        "Content-Type": "application/json"
    };

    const response = await fetch(ACQUIRE_URI, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({})
    })

    return await response.json();
}

module.exports = acquire;