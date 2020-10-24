import React from "react";
import axios from "axios";
import ChatWidget from "../chatWidget.js";

import "./chatbot.less";
//Services

class Chat extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in qaModal", props);
    this.state = {
      enteredText: "",
      apiResponse: [],
    };
  }
  handleChange = (e) => {
    this.setState({ enteredText: event.target.value });
  };
  anonymize = (inputText) => {
    console.log("input text", inputText);

    let request = {
      documents: [
        {
          language: "en",
          id: "0",
          text: inputText,
        },
      ],
    };
    const headers = {
      "Ocp-Apim-Subscription-Key": "d050029513b74b978ff0d6980d375704",
      "Content-Type": "application/json",
    };
    axios
      .post(
        "https://p9pii.cognitiveservices.azure.com/text/analytics/v3.1-preview.2/entities/recognition/pii",
        request,
        { headers }
      )
      .then((response) => {
        this.setState({ apiResponse: response.data.documents });
        setTimeout(() => {
          console.log("response from api", this.state.apiResponse);
        }, 2000);
      });
  };

  componentDidMount() {}
  render() {
    return (
      <section className=" container luis-models">
        <div className="mt-5 ml-5">
          <textarea
            // type="text"
            placeholder="Enter your text here"
            style={{ width: "100%" }}
            name="enteredText"
            value={this.state.enteredText}
            onChange={(e) => this.handleChange(e)}
          ></textarea>
        </div>
        <button
          className="float-right btn btn-primary"
          onClick={() => this.anonymize(this.state.enteredText)}
        >
          Anonymize
        </button>

        {/* <div className="text-right"></div> */}

        <div class="textAreaColumn mt-5 ml-5">
          <div>
            <span style={{ fontWeight: "700" }}>
              Azure Text Analytics{" "}
              {/* <img
                style={{ width: "30%", height: "30%" }}
                src="https://www.pinclipart.com/picdir/middle/455-4555707_file-microsoft-svg-wikimedia-transparent-background-azure-machine.png"
              ></img> */}
            </span>
            <span
              hidden={!this.state.apiResponse.length != 0}
              style={{ color: "blue" }}
            >
              Confidence Score:
              {this.state.apiResponse.length != 0
                ? this.state.apiResponse[0].entities.length != 0
                  ? this.state.apiResponse[0].entities[0].confidenceScore
                  : 0
                : null}
            </span>
            <textarea
              rows="10"
              // placeholder="Content goes here"
              value={
                this.state.apiResponse.length != 0
                  ? this.state.apiResponse[0]["redactedText"]
                  : null
              }
            ></textarea>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>
              Amazon Comprehend{" "}
              {/* <img
                style={{ width: "15%", height: "15%" }}
                src="https://img.stackshare.io/service/7990/amazon-comprehend.png"
              ></img> */}
            </span>{" "}
            <span
              hidden={!this.state.apiResponse.length != 0}
              style={{ color: "blue" }}
            >
              Confidence Score:
              {this.state.apiResponse.length != 0
                ? this.state.apiResponse[0].entities.length != 0
                  ? this.state.apiResponse[0].entities[0].confidenceScore
                  : 0
                : null}
            </span>
            <textarea
              rows="10"
              // placeholder="Content goes here"
              value={
                this.state.apiResponse.length != 0
                  ? this.state.apiResponse[0]["redactedText"]
                  : null
              }
            ></textarea>
          </div>
          <div>
            <span style={{ fontWeight: "700" }}>Azure+Amazon(Hybrid)</span>
            <span
              hidden={!this.state.apiResponse.length != 0}
              style={{ color: "blue" }}
            >
              Confidence Score:
              {this.state.apiResponse.length != 0
                ? this.state.apiResponse[0].entities.length != 0
                  ? this.state.apiResponse[0].entities[0].confidenceScore
                  : 0
                : null}
            </span>
            <textarea
              rows="10"
              // placeholder="Content goes here"
              value={
                this.state.apiResponse.length != 0
                  ? this.state.apiResponse[0]["redactedText"]
                  : null
              }
            ></textarea>
          </div>
        </div>
      </section>
    );
  }
}

export default Chat;
