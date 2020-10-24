import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class ChatWidget extends React.Component {
  componentDidMount() {
    // <script>

    $("#bot").initChatBot({
      headerColor: "#fff",
      eventTrigger: true, //turn off/on event trigger
      triggerValue: "sapTM", //value that triggers chatbot window
      secret: "TD4z4aNXlBo.HodNfi24bGSL-IqN6325MubAgnBUYVdR0Qc5w9LhR_A",
      botId: "93be7d59-f2bb-40ad-9e11-bccefaee951c",
      collapsedHeaderText: "<div> QC Key Chatbot</div>",
      headerText:
        "<div style='font-size: 20px; font-weight: bold; margin-bottom: 1px;'>QC Key Chatbot</div>",
      headerSubText: "<span class='small'>Powered by Genie</span>",

      // secret: "mmAY5R_4Qwo.qVrA64VWu1lhBHiHsaa75P1j8Qafxjh71__vFp_TSEg",
      // botId: "3d7b1130-4490-42b7-937c-592b2233de2b"
    });

    //   </script>
  }
  render() {
    return <div id="bot"></div>;
  }
}
export default ChatWidget;
