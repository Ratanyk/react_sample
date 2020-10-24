
export function getScenarioName(sId) {
    console.log("sId",sId);
    var options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
      }
    }  
  return fetch("https://sbx.jnjux.com/api/entity/faqscenariotable?&where=%7B%22id%22%3A%22"+sId+"%22%7D",options);
}

//========================GET Senarios========================================
export function getScenarios(data) {
  var options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    }
  }
  return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/GetAllScenarios?botId="+data.botId+"&search="+data.search+"&pageNumber="+data.page, options);
}

//========================CREATE Senario========================================
export function newScenario(data) {
  //     console.log("newScenario", data);
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
    body: JSON.stringify(data)
  };
  console.log("options", options);
  return fetch("https://sbx.jnjux.com/api/entity/faqscenariotable", options);
}
//==========================Update FAQ Scenario===============================
export function updateScenarios(data) {
  console.log("data.id",data.id);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic cG1vdHVyaTpQbEBuZXQ5="
    },
    body: JSON.stringify(data)
  };
  console.log("options", options);
  return fetch("https://sbx.jnjux.com/api/entity/faqscenariotable?where=%7B%22id%22%3A%22"+data.id+"%22%7D", options);
}


//========================GET FAQ Sets========================================
export function getFaqSets(data) {
  console.log("data inside FAQs",data);
  return fetch("https://sbx.jnjux.com/public/serverscript/faqsetapis/faqSets?&nlpEngine=LUIS&versionId=0.1&scenarioId="+data.sId+"&pageNumber="+data.page+"&search="+data.search+"&botId="+data.botId);
}

//========================CREATE FAQ SET========================================
export function newFAQSet(data) {
  console.log("data", data);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch("https://sbx.jnjux.com/public/serverscript/faqsetapis/faqSets?&nlpEngine=LUIS&versionId=0.1", options);
}

//========================UPDATE FAQ SET========================================
export function updateFAQSet(data) {
  // console.log("before updating", data);
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  return fetch("https://sbx.jnjux.com/public/serverscript/faqsetapis/faqSet?&nlpEngine=LUIS&versionId=0.1", options);
}

//========================DELETE Senario========================================
export function deleteFaqSet(id) {
  // console.log("id to delete", id);
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch(qnaEndpointHostName + "/faqScenarios?id=" + id, options);
}

export function train(botId) {
  let options = {
    method: "POST",
  };
  return fetch("https://sbx.jnjux.com/public/serverscript/nlp_adapters/train?nlpEngine=LUIS&versionId=0.1&botId=" + botId, options);
}

export function getTrainStatus(botId) {
  let options = {
    method: "GET",
  };
  return fetch("https://sbx.jnjux.com/public/serverscript/nlp_adapters/train?nlpEngine=LUIS&versionId=0.1&botId=" + botId, options);
}

export function publish(botId) {
  let options = {
    method: "POST",
    body:
    {
      "versionId": "0.1",
      "isStaging": false,
      "directVersionPublish": false
    }
  };
  return fetch("https://sbx.jnjux.com/public/serverscript/nlp_adapters/publish?nlpEngine=LUIS&versionId=0.1&botId=" + botId, options);
}

export function delExampleApi(exampleId) {
  let options = {
    method: "DELETE"
  };
  return fetch("https://sbx.jnjux.com/public/serverscript/nlp_adapters/examples?&nlpEngine=LUIS&versionId=0.1&exampleId=" + exampleId, options);
}

export function bulkUpload(data, botId){
  // console.log("data", data);
  console.log("data", botId);
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch("https://sbx.jnjux.com/public/serverscript/apiservicewithserverscripts/bulkUpload?nlpEngine=LUIS&versionId=0.1&botId=" + botId, options)
}
