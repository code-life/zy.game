/**
 * 示例 进度条控件 zyGame.cls.bar
 */

//参数设置
zyGame.config={
    title:      //游戏标题
        '快乐地鼠',
    width:      //游戏区域宽(若全屏显示,则为最小宽度)
        500,
    height:     //游戏区域高(若全屏显示,则为最小高度)
        500,
    fullscreen: //0为非全屏，1为全屏
        0,
    fpslimit:   //最高刷新上限(建议使用默认值)
        60,
    src:
        /*
           需预先加载的资源文件
           图片文件支持jpg,png格式,放在目录img下
           声音文件支持mp3格式,放在目录aud下
           视频文件支持mp4格式,放在目录vid下
           如果有子目录,写上相对路径即可
         */
        ['bar_bg.jpg','bar_fore.jpg','button_normal.jpg','button_down.jpg','button_disabled.jpg'],
    start:      //引擎加载完成,调用该函数开始游戏
        gameStart
};
//设置按钮文字
zyGame.cls.button.prototype.setText = function(s) {
        this.text.setText(s);
};
function gameStart(){
    
    var barFarmHP=new zyGame.cls.bar(100,100,120,20);//创建进度条
    barFarmHP.setSrc('bar_bg.jpg','bar_fore.jpg');//设置进度条背景图片
    barFarmHP.ceil=100;//设置总进度
    barFarmHP.value=60;//设置目前进度
    
    var layTest=new zyGame.cls.layer(10,10,300,300);//创建图层
    barFarmHP.setParent(layTest);//设置进度条图层
    
    var btn2=new zyGame.cls.button(100,20,50,30);//创建按钮
    btn2.setSrc('button_normal.jpg','button_down.jpg','button_disabled.jpg');//设置按钮图片地址
    btn2.setText('设置进度条');//设置按钮文字　
    btn2.setParent(layTest);//设置按钮图层
    btn2.show();//显示按钮
    
    btn2.onClick=function(){
        barFarmHP.ceil=100;//设置总进度
        barFarmHP.value=90;//设置目前进度
        barFarmHP.setPadding(6);//设置进度条内边距       
    };
        
    layTest.show();//显示图层
    barFarmHP.show();//显示进度条
    
}