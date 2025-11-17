// *************************interface************************
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// class VlcPLayer implements MediaPlayer {
//   play() {
//     console.log("Playing music..");
//   }

//   pause() {
//     console.log("Music stopped");
//   }

//   stop(): void {
//     console.log("music stopped");
//   }
// }

// const VlcPLayer1 = new VlcPLayer();
// VlcPLayer1.stop();

// ****************************abstract class******************************
abstract class MediaPlayer {
  abstract play(): void;
  abstract paused(): void;
  abstract stop(): void;
}

class VlcPLayer extends MediaPlayer {
  play() {
    console.log("playing music....");
  }

  paused(): void {
    console.log("Music paused ....");
  }

  stop(): void {
    console.log("Music stopped");
  }
}

const VlcPLayer1 = new VlcPLayer();
VlcPLayer1.stop();
