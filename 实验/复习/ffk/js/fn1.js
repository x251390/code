




window.onload = function(){


// 获取到开始游戏按钮
var startBtn = document.querySelector("#startImg");
// 制作图片集合
var img = ['./img/1.png','./img/2.png','./img/3.png','./img/4.png','./img/5.png','./img/6.png'];
// 定义一个倒计时的最大时间
var time = 5;
// 获取到装定时器的标签
var tip = document.querySelector("#tip")
// 定义一个空的图片集合
 var imgs = [];
console.log(img.length)
// 点击时隐藏按钮与背景图片；
  var aboutImg = document.querySelector("#aboutImg");
addEvent(startBtn,"click",hidden2);
// 添加事件监听
function hidden2(){
    aboutImg.style.display = "none";
    startBtn.style.display = "none";
    document.body.style.backgroundImage = "url('./img/bg02.png')";
    //  随机抽出一个图片
   for(var c=0;c<6;c++){
    var index = parseInt(Math.random()*6);
 //    从所有的图片中获取到一部分
     var zimg = img[index];
      imgs.push(zimg);
      imgs.push(zimg);
    
}



    // 创建表格
// 获取表格table
var table = document.querySelector("#gameContent")
// 创建表格行
 for(var row=0;row<3;row++){
     var tr = document.createElement("tr");
    
    // 创建表格列
    for(var col=0;col<4;col++){
        var td = tr.insertCell(col);
        tr.appendChild(td);
        var img1 = document.createElement("img");
        // 设置img的样式item；
        img1.className="item"
        td.appendChild(img1);
        var index = imgs.splice(number(imgs.length),1);
        console.log(index);
        img1.tag = index;
        img1.name = "in";
        console.log(index);
        img1.src=index;
      
    } 
    table.appendChild(tr);

 }

 // 获取随机数
 function number(max){
    return parseInt(Math.random()*max);
 }
// 定时器控制倒计时
   var timer = null;
//    制作标杆   是否是第一次点击
   var flag = null;
   tip.style.display="block"  
   timer = setInterval(function(){
       time--;
if(time==0){
        clearInterval(timer);
        tip.style.display="none";
         var img = document.querySelectorAll(".item");
         console.log(img)
         var names =  document.getElementsByName("in");
             for(var a=0;a<img.length;a++){
             img[a].src="./img/q.png";
             img[a].onclick = function(){
               
                if(flag != null&&flag!=this){

                    var a = flag.tag;
                    
                    var b = this.tag;
                    if(a[0]===b[0]){
                       console.log(b);
                        this.parentNode.removeChild(this);
                        flag.parentNode.removeChild(flag);
                        flag=null;
                       
                        
                    }
                    else{
                        alert("从新选择");
                        flag.src="./img/q.png";
                        
                        flag=null;
                    }
                     
  }else{
                   
                    this.src = this.tag;
                     
                     flag=this;
                     console.log(typeof this)



                }
                var f = document.getElementsByClassName("item");

               if(f.length==0){
                    alert("恭喜你，完全成功了")

                }
               
               

               
               }
            



         }
       
       
       }
    else{
        tip.style.display="block";
        tip.src = "./img/0"+time+".png"
    }


   },1000)
}










}










