require("dotenv").config();

const PREDICT_URI = process.env.PREDICT_URI;

async function predict(features, dataId){
    const headers = {
        "Content-Type": "application/json"
    };

    const body = {
        "features": features,
        "meta":{
            "featureCount": features.length,
            "dataId": dataId,
            "source": "orchestrator"
        }
    };

    const prediction = await fetch(PREDICT_URI, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });

    return prediction.json();
}

module.exports = predict;