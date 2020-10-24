// console.log("======>  Current Env:", process.env.NODE_ENV);

const luisHost = "https://westus.api.cognitive.microsoft.com/luis/api/v2.0";
const luisWebHost = "https://westus.api.cognitive.microsoft.com/luis/webapi/v2.0";
const luisHeader = {
  "Ocp-Apim-Subscription-Key": "d0880adc16b444639a06c9af2f25ed10",
  "Content-Type": "application/json"
};

export function getModels() {
  let options = {
    headers: luisHeader
  };
  return fetch(luisHost + "/apps", options);
}

export function getIntents(model, intentID) {
  let options = {
    headers: luisHeader
  };
  return fetch(luisHost + `/apps/${model.id}/versions/${model.activeVersion}/intents`, options);
}

export function getUtterancesApi(model, intent) {
  let options = {
    headers: luisHeader
  };
  return fetch(luisWebHost + `/apps/${model.id}/versions/${model.activeVersion}/models/${intent.id}/reviewLabels`, options);
}

export function dispatchRefresh() {
  // console.log("Refreshing bot dispatch: ");

  let url = "https://jnjerpbot.azurewebsites.net/dispatch";

  async function api() {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "omit", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      }
    });

    // console.log("Await Response: ");
    let res = await response.text();
    res = JSON.stringify(res, null, 4);
    // console.log("Dispatch refresh await Response: ", res);
  }

  api();
}

export function saveExampleApi(model, data) {
  let options = {
    headers: luisHeader,
    method: "POST",
    body: JSON.stringify(data)
  };

  return fetch(luisHost + `/apps/${model.id}/versions/${model.activeVersion}/example`, options);
}

export function saveExampleBatchApi(model, data) {
  let options = {
    headers: luisHeader,
    method: "POST",
    body: JSON.stringify(data)
  };

  return fetch(luisHost + `/apps/${model.id}/versions/${model.activeVersion}/examples`, options);
}

export function delExampleApi(model, exampleId) {
  let options = {
    headers: luisHeader,
    method: "DELETE"
  };
  return fetch("https://sbx.jnjux.com/public/serverscript/chatbot_apps/examples?cloud=AZURE&team=1MD&project=ULEARN&version=0.1&exampleId=" + exampleId, options);
}
