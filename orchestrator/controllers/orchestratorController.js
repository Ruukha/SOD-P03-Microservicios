const acquire = require("../services/acquireService");
const predict = require("../services/predictService");

function health(req, res){
    res.json({
        status: "ok",
        service: "orchestrator"
    });
}

async function run(req, res){
    const acquisition = await acquire();
    // console.log(acquisition.features)
    const prediction = await predict(acquisition.features, acquisition.acquisitionId);

    res.status(201).json({
        "dataId": acquisition.acquisitionId,
        "predictionId": prediction.predictionId,
        "prediction": prediction.prediction,
        "timestamp": prediction.timestamp
    })
}

module.exports = {health, run};