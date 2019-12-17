export class WxAPI{
  constructor(){}

  // 播放背景音乐
  playMusic(){
    const music = wx.createInnerAudioContext();
    music.src = './audio/bgm.mp3';
    music.loop = true; // 循环播放
    // music.autoplay = true; // 自动播放
    music.play();
  }

  // 小鸟撞击的音效
  boom(){
    const music = wx.createInnerAudioContext();
    music.src = './audio/boom.mp3';
    // music.autoplay = true; // 自动播放
    music.play();
  }

  // 获取手机基本信息
  getSysInfo(){
    wx.getSystemInfo({
      success(res){
        console.log(res);
      }
    })
  }

}

