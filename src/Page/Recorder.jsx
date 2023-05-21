import React, { useState } from "react";
import { BsFillRecordCircleFill, BsFillStopFill, BsFillPlayFill } from "react-icons/bs";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { BiSave } from "react-icons/bi";
import { CiSaveDown1 } from "react-icons/ci";
import { ReactMic } from "react-mic";
import { Howl, Howler } from "howler";

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [sound, setSound] = useState(null);

  const handleRecordingComplete = (recordedBlob) => {
    const url = URL.createObjectURL(recordedBlob.blob);
    setRecordedBlob(url);
    setSound(new Howl({
      src: [url],
      format: ['webm'],
    }));
  };

  const handleTogglePlay = () => {
    if (sound && sound.playing()) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  return (
    <div className="m-h-screen flex item-center justify-center">
      <div className="bg-[#000] px-[20px] py-[10px] rounded-[14px]">
        <div className="flex justify-around text-[24px] mb-[20px]">
          <BsFillRecordCircleFill className={`${isRecording ? "text-[#c23b22]" : "text-white"}`} onClick={() => { setIsRecording(true) }}></BsFillRecordCircleFill>
          <BsFillStopFill onClick={() => { setIsRecording(false); sound?.stop() }}></BsFillStopFill>
          <div onClick={handleTogglePlay}>
            {sound?.playing() ? <TbPlayerPauseFilled></TbPlayerPauseFilled> : <BsFillPlayFill></BsFillPlayFill>}
          </div>
          <BiSave></BiSave>
          <CiSaveDown1></CiSaveDown1>
        </div>
        <ReactMic
          record={isRecording}
          onStop={handleRecordingComplete}
          mimeType="audio/wav"
        />
      </div>
    </div>
  );
};

export default Recorder;
