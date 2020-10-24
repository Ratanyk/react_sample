function testAPICall(testFormURL, dataToPost) {
  // console.log("testAPICall", testFormURL, dataToPost);
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = false;
  var dataBody = JSON.stringify(dataToPost);
  xhttp.onload = function() {
    console.log("--------------->", xhttp.status);
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      return JSON.stringify(this.responseText);
    } else {
      // console.log("error msg", this.responseText);
      return JSON.stringify(this.responseText);
    }
  };
  xhttp.onerror = function(err) {
    // console.log("xhttp request error: ", err);
  };

  xhttp.open("POST", testFormURL, false);
  // console.log("after post");
  xhttp.setRequestHeader("Authorization", "Basic dXNlcjE6UmVzZXRAMTIz");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(dataBody);
}

async function syncFetchAPICallDev(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic dXNlcjE6UmVzZXRAMTIz"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  // console.log("Await Response: ");
  return await response.json(); // parses JSON response into native JavaScript objects
}

async function syncFetchAPICall(url = "", data = {}, dialogCreateValue) {
  // console.log("inside service call", url, data, dialogCreateValue);
  // Default options are marked with *
  if (dialogCreateValue == true) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "omit", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    // console.log("Await Response: ");
    return await response.text();
  } else {
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      credentials: "omit", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    // console.log("Await Response: ");
    return await response.text();
  } // parses JSON response into native JavaScript objects
}

function fetchAPICall(url = "", data = {}) {
  fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic dXNlcjE6UmVzZXRAMTIz"
    },
    body: JSON.stringify(data)
  }).then(res => {
    // console.log("fetchAPICall response:", res);
    return res;
  });
}

async function syncFetchDialogAPICall(url = "") {
  // console.log("inside get api call");
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    } // body data type must match "Content-Type" header
  });

  // console.log("Await Response: ", response);
  return await response.text(); // parses JSON response into native JavaScript objects
}
async function syncFetchIntentsAPICall(url = "") {
  // console.log("inside get api call");
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    credentials: "omit", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": "d0880adc16b444639a06c9af2f25ed10"
    }
  });

  // console.log("Await Response: ", response);
  return await response.text(); // parses JSON response into native JavaScript objects
}

export {syncFetchAPICall, syncFetchAPICallDev, syncFetchDialogAPICall, syncFetchIntentsAPICall};
// export fetchAPICall;
