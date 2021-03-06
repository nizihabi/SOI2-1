/**
 * Created by 杜鹏宇 on 2015/9/7
 * Modified by
 */

//声音支持
SoundControl = function () {
    this.tankMove = null;//坦克移动音效
    this.tankFire = null;//坦克开火音效
    this.bomb = null;//炮弹爆炸音效
    this.bgm = null;//背景音乐
}

//加载音效资源
SoundControl.prototype.loadSource = function (scene) {
    this.tankMove = new BABYLON.Sound('tankMove', '../asset/music/sound/tankMove.mp3', scene);
    this.tankFire = new BABYLON.Sound('tankFire', '../asset/music/sound/tankFire.mp3', scene);
    this.bomb = new BABYLON.Sound('bomb', '../asset/music/sound/bomb.mp3', scene, null,
        { loop: false, autoplay: false, spatialSound: true, maxDistance: 300});
    var path = Math.floor(Math.random() * 2 - 0.001);
    this.bgm = new BABYLON.Sound('Fighting', '../asset/music/fight/fight' + path + '.mp3', scene, null, { loop: false, autoplay: true});
}
//坦克行进音效
SoundControl.prototype.tankMoveSound = function (flag) {
    if (flag) {
        if (!this.tankMove.isPlaying) {
            this.tankMove.setVolume(0.2);
            this.tankMove.play();
            this.tankMove.isPlaying = true;
        }
    } else {
        if (this.tankMove.isPlaying) {
            this.tankMove.stop();
            this.tankMove.isPlaying = false;
        }
    }
}
//坦克开火音效
SoundControl.prototype.tankFireSound = function () {
    this.tankFire.play();
}
//炮弹爆炸音效
SoundControl.prototype.bombSound = function (position) {
     this.bomb.setPosition(new BABYLON.Vector3)
     this.bomb.play();
}