var startBtn = document.querySelector(
'#start-btn');

startBtn.addEventListener('click',function(){
    var comchoice =Math.floor( Math.random() * 3);
    var choice = parseInt (prompt ('請問你要出 0:剪刀 1:石頭 2.布',0));

    if(choice === 0) {
      alert('你出剪刀！');
      if(comchoice === 0){
        alert('小淘花也出剪刀！平分秋色');
      } else if (comchoice === 1){
        alert('小淘花出石頭，你輸了!');
      } else if(comchoice === 2){
        alert('小淘花派出布，你贏了！');
      } else { };
    } else if(choice === 1){
      alert('你派出石頭！');
      if(comchoice === 0){
        alert('小淘花出剪刀！你贏了！');
      } else if(comchoice === 1){
        alert('小淘花出石頭，沒輸沒贏!');
      } else if(comchoice === 2){
        alert('小淘花出布，你輸了！');
      } else { };
    } else if(choice === 2){
      alert('你出布！');
      if(comchoice === 0){
        alert('小淘花出剪刀！你輸了');
      } else if(comchoice === 1){
        alert('小淘花出石頭，你贏了!');
     } else if(comchoice === 2){
        alert('小淘花也出布，平分秋色！');
     } else { };
   } else { 
      alert("error,請再重新輸入一次!");
    };
});