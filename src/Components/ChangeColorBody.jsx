import React, { useEffect, useState } from "react";
import annyang from "annyang";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

function ChangeColorBody() {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    annyang.start();
  };

  const stopRecording = () => {
    setIsRecording(false);
    annyang.abort();
  };

  const handleIconClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  useEffect(() => {
    const commands = {
      black: () => {
        document.body.style.backgroundColor = "black";
      },
      white: () => {
        document.body.style.backgroundColor = "white";
      },
      green: () => {
        document.body.style.backgroundColor = "green";
      },
    };

    annyang.addCommands(commands);

    document
      .getElementById("voiceIcon")
      .addEventListener("dblclick", stopRecording);

    return () => {
      annyang.removeCommands(Object.keys(commands));
      document
        .getElementById("voiceIcon")
        .removeEventListener("dblclick", stopRecording);
    };
  }, []);

  return (
    <div className="App">
      <MdOutlineRecordVoiceOver id="voiceIcon" onClick={handleIconClick} />
    </div>
  );
}

export default ChangeColorBody;
