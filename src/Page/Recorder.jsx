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
        <div>
          <div onClick={()=>{
            setSound(
              new Howl({
                src: [recordedBlob],
                html5: true,
                onload: function () {
                  const convolver = Howler.ctx.createConvolver();
                  const request = new XMLHttpRequest();
                  request.open('GET', 'reverb.wav', true);
                  request.responseType = 'arraybuffer';
                  request.onload = function () {
                    Howler.ctx.decodeAudioData(request.response, function (buffer) {
                      convolver.buffer = buffer;
                      this._sounds[0]._node.disconnect();
                      this._sounds[0]._node.connect(convolver);
                      convolver.connect(Howler.ctx.destination);
                    });
                  };
                  request.send();
                }
              })
            )
            sound?.play();
          }}>
            <p>Làm méo tiếng</p>
          </div>
          <div>
            <p>Tạo vang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recorder;
