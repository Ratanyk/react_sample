
export function getApiConnectorData() {
  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    }
  }
  return fetch("https://sbx.jnjux.com/public/serverscript/apiconnectortable/getConnectors", options);
}

export function addTriggerPhrase(phrase, id) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
    body: JSON.stringify(phrase)
  }
  return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/addUtterancesToDialog?nlpEngine=LUIS&versionId=0.1&id=" + id, options);
  // return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/addUtterancesToDialog?cloud=AZURE&project=ULEARN&team=1MD&version=0.1&id=" + id, options);
}

export function getAllTriggerPhrases() {
  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
  }
  return fetch("https://sbx.jnjux.com/api/serverscript/chatbot_apps_yk/examples?nlpEngine=LUIS&versionId=0.1", options);
}

export function deleteTriggerPhrase(phraseId) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    }
  }
  return fetch("https://sbx.jnjux.com/public/serverscript/nlp_adapters/examples?nlpEngine=LUIS&versionId=0.1&exampleId=" + phraseId, options);
  // return fetch("https://sbx.jnjux.com/public/serverscript/chatbot_apps/examples?cloud=AZURE&team=1MD&project=ULEARN&version=0.1&exampleId=" + phraseId, options);
}

export function deleteDialogById(dialogId) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    }
  }
  return fetch("https://sbx.jnjux.com/api/entity/erpchatbotdialogs?&where=%7B%22id%22%3A%22" + dialogId + "%22%7D", options);
}

export function getAllBots(data) {
  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
  }
  return fetch("https://sbx.jnjux.com/api/entity/erpchatbots", options);
  // return fetch("https://sbx.jnjux.com/api/entity/erpchatbots?" + "&search=" + data.search + "&pageNumber=" + data.page, options);
}

export function getBotDetailsById(id) {
  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
  }
  return fetch("https://sbx.jnjux.com/api/entity/erpchatbots?&where=%7B%22id%22%3A%22" + id + "%22%7D", options);
}

export function addDialogSet(dialogSet) {
  // console.log('insideAPICAll :: dialogSet', dialogSet);

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
    body: JSON.stringify(dialogSet)
  }
  return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/createDialogSet?nlpEngine=LUIS&versionId=0.1", options);
  // return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/createDialogSet?cloud=AZURE&project=ULEARN&team=1MD&version=0.1", options);
}

export function addSteps(steps, id) {
  // console.log('insideAPICAll :: addSteps', steps);
  var data = {
    "steps": steps
  }

  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
    body: JSON.stringify(data)
  }
  return fetch("https://sbx.jnjux.com/api/entity/erpchatbotdialogs?&where=%7B%22id%22%3A%22" + id + "%22%7D", options);
}

export function getDialogDetailsById(botId, dialogId) {
  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
  }
  return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/GetDialogSets?&botId=" + botId + "&nlpEngine=LUIS&versionId=0.1&id=" + dialogId, options);
  // return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/GetDialogSets?&botId=" + botId + "&cloud=AZURE&team=1MD&project=ULEARN&version=0.1&id=" + dialogId, options);
}
export function getDialogs(dialogData) {
  // var dialogData = {
  //   search: value,
  //   page: ''
  // }

  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
  }
  return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/GetDialogSets?nlpEngine=LUIS&versionId=0.1&botId=" + dialogData.botId + "&search=" + dialogData.search + "&page=" + dialogData.page, options);
}