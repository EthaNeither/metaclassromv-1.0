import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import fs from "fs";
import path from "path";

const directory = "path/to/directory"; // 修改為你想要存儲音訊檔案的目錄路徑
const inputFile = "C:\\Users\\acer\\Desktop\\最新ilearn\\metaclassromv-1.0\\src\\azure-tts\\openai-output.txt";

if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

const audioFile = path.join(directory, "azure-tts.mp3");
const speechKey = "dab8c7a631724857a9ab789296e6872d";
const speechRegion = "eastus";

const speechConfig = sdk.SpeechConfig.fromSubscription(speechKey, speechRegion);
const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);

speechConfig.speechSynthesisVoiceName = "zh-TW-YunJheNeural";

const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

fs.readFile(inputFile, "utf8", function (err, text) {
  if (err) {
    console.error("Error reading the input file: " + err);
    return;
  }

  synthesizer.speakSsmlAsync(
    text,
    function (result) {
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("Synthesis finished.");
      } else {
        console.error(
          "Speech synthesis canceled, " +
          result.errorDetails +
          "\nDid you set the speech resource key and region values?"
        );
      }
      synthesizer.close();
    },
    function (err) {
      console.trace("Error - " + err);
      synthesizer.close();
    }
  );
  console.log("Now synthesizing to: " + audioFile);
});
