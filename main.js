
var boxWidth = field.viewBox.baseVal.width;
var boxHeight = field.viewBox.baseVal.height;
var princess = {};
var smallBad = {};
var mediumBad = {};
var ball = function(id){
  var e = document.getElementById(id);
  var r = {};
  r.dx = 0;
  r.dy = 0;
  function update(){
  	r.right = r.cx + r.r;
  	r.left = r.cx - r.r;
  	r.top = r.cy - r.r;
  	r.bottom = r.cy + r.r;
  }
  Object.defineProperty(r, 'cx', {
    get: function(){return e.cx.baseVal.value},
    set: function(val){e.cx.baseVal.value = val; update();}
  });
  Object.defineProperty(r, 'cy', {
    get: function(){return e.cy.baseVal.value},
    set: function(val){e.cy.baseVal.value = val; update();}
  });
  Object.defineProperty(r, 'r', {
    get: function(){return e.r.baseVal.value},
    set: function(val){e.r.baseVal.value = val; update();}
  });

  update();

  return r;
};

var elipse = function(id){
  var e = document.getElementById(id);
  var r = {};
  r.dx = 0;
  r.dy = 0;
  function update(){
    r.right = r.cx + r.r;
    r.left = r.cx - r.r;
    r.top = r.cy - r.r;
    r.bottom = r.cy + r.r;
  }
  Object.defineProperty(r, 'cx', {
    get: function(){return e.cx.baseVal.value},
    set: function(val){e.cx.baseVal.value = val; update();}
  });
  Object.defineProperty(r, 'cy', {
    get: function(){return e.cy.baseVal.value},
    set: function(val){e.cy.baseVal.value = val; update();}
  });

  update();

  return r;
};

var tilted = function(id){
  var e = document.getElementById(id);
  var r = {};
  r.dx = 0;
  r.dy = 0;
  Object.defineProperty(r, 'cx', {
    get: function(){return e.transform.baseVal[0].matrix.e},
    set: function(val){e.transform.baseVal[0].matrix.e = val;}
  });
  return r;
};

var rectangle = function(id){
  var e = document.getElementById(id);
  var r = {};
  r.dx = 0;
  r.dy = 0;
  Object.defineProperty(r, 'cx', {
    get: function(){return e.x.baseVal.value},
    set: function(val){e.x.baseVal.value = val;}
  });
  return r;
};
var line = function(id){
  var e = document.getElementById(id);
  var r = {};
  r.dx1 = 0;
  r.dx2 = 0;
  Object.defineProperty(r, 'x1', {
    get: function(){return e.x1.baseVal.value},
    set: function(val){e.x1.baseVal.value = val;}
  });
  Object.defineProperty(r, 'x2', {
    get: function(){return e.x2.baseVal.value},
    set: function(val){e.x2.baseVal.value = val;}
  });
  return r;
};
var surfBoard = rectangle('surfBoard');
var torso1 = rectangle('torso1');
var torso2 = rectangle('torso2');
var leftMouth = tilted('leftMouth');
var rightMouth = tilted('rightMouth');
var leftHair = tilted('leftHair');
var rightHair = tilted('rightHair');
var ball1 = ball('ball1');
var ball2 = ball('ball2');
var face = ball('face');
var leftEye = elipse('leftEye');
var rightEye = elipse('rightEye');
var leftEyeColor = elipse('leftEyeColor');
var rightEyeColor = elipse('rightEyeColor');
princess.eyes = [rightEye,rightEyeColor,leftEye,leftEyeColor];
princess.state = 'alive';

// smallBad start 
var smallBadTorso1 = rectangle('smallBadTorso1');
var smallBadTorso2 = rectangle('smallBadTorso2');
var smallBadFace = ball('smallBadFace');
var smallBadLeftEye = elipse('smallBadLeftEye');
var smallBadRightEye = elipse('smallBadRightEye');
var smallBadLeftEyeColor = elipse('smallBadLeftEyeColor');
var smallBadRightEyeColor = elipse('smallBadRightEyeColor');
var smallBadMouth = elipse('smallBadMouth');
var smallBadLeftEyeBrow = line('smallBadLeftEyeBrow');
var smallBadRightEyeBrow = line('smallBadRightEyeBrow');
smallBad.eyes = [smallBadMouth,smallBadRightEye,smallBadRightEyeColor,smallBadLeftEye,smallBadLeftEyeColor];
smallBad.state = 'alive';
// small bad finish

// medium bad start
var mediumBadFace = ball('mediumBadFace');
var mediumBadLeftEye = elipse('mediumBadLeftEye');
var mediumBadRightEye = elipse('mediumBadRightEye');
var mediumBadLeftEyeColor = elipse('mediumBadLeftEyeColor');
var mediumBadRightEyeColor = elipse('mediumBadRightEyeColor');
var mediumBadMouth = elipse('mediumBadMouth');
var mediumBadLeftEyeBrow = line('mediumBadLeftEyeBrow');
var mediumBadRightEyeBrow = line('mediumBadRightEyeBrow');
var mediumBadTorso1 = rectangle('mediumBadTorso1');
var mediumBadTorso2 = rectangle('mediumBadTorso2');
var mediumBadHair1 = line('mediumBadHair1');
var mediumBadHair2 = line('mediumBadHair2');
var mediumBadHair3 = line('mediumBadHair3');
mediumBad.eyes = [mediumBadMouth,mediumBadRightEye,mediumBadRightEyeColor,mediumBadLeftEye,mediumBadLeftEyeColor];
mediumBad.state = 'alive';




var animateList = [mediumBadHair1,mediumBadHair2,mediumBadHair3,mediumBadTorso1,mediumBadTorso2,mediumBadRightEyeBrow,mediumBadLeftEyeBrow,mediumBadFace,mediumBadMouth,mediumBadRightEye,mediumBadRightEyeColor,mediumBadLeftEye,mediumBadLeftEyeColor,smallBadMouth,smallBadRightEyeColor,smallBadLeftEyeColor,smallBadRightEye,smallBadLeftEye,smallBadFace,smallBadTorso2,smallBadTorso1,surfBoard, torso1, torso2, leftMouth, rightMouth,rightHair,leftHair,face,leftEye,rightEye,rightEyeColor,leftEyeColor];

function startBall1(){
  ball1.dy = -5;
}
function startBall2(){
  ball2.dy = -3.5;
}
var deflectFactor = .1;
function collideBallWith(ball,what,freezeFunc) {
  if(ball.bottom < what.top || ball.top > what.bottom) {
    return;
  }
  var voff = ball.cx - what.cx;
  if(ball.dx > 0) {
    if (ball.right >= what.left && ball.left < what.right) {  
      ball.dx += voff * deflectFactor * 0.5;
      ball.dy *= -1;
      what.dx *= -0.25;
      what.dy += -0.5;
      freezeFunc();
      }
  } else {
      if(ball.left <= what.right && ball.right > what.left) {
        ball.dx += voff * deflectFactor * 0.5;
        ball.dy *= -1;
        what.dx *= -0.25;
        what.dy += -0.5;
        freezeFunc();
      }
  }
}


var dir = 'left';
var animateListLength = animateList.length;

function freezePrincess(){
  for(var i=0;i<princess.pieces.length;i++){
    princess.pieces[i].dx = 0;
    dir = 'stop';
    if(princess.state === 'alive'){
      explodePrincess()
      princess.state = 'dead'
    }
  }
}
function freezeSmallBad(){
  for(var i=0;i<smallBad.pieces.length;i++){
    smallBad.pieces[i].dx = 0;
    if(smallBad.pieces[i].dx1 != null){
      smallBad.pieces[i].dx1 = 0;
      smallBad.pieces[i].dx2 = 0;
    }
    dir = 'stop';
    if(smallBad.state === 'alive'){
      explodeSmallBad()
      smallBad.state = 'dead'
    }
  }
}
function freezeMediumBad(){
  for(var i=0;i<mediumBad.pieces.length;i++){
    mediumBad.pieces[i].dx = 0;
    if(mediumBad.pieces[i].dx1 != null){
      mediumBad.pieces[i].dx1 = 0;
      mediumBad.pieces[i].dx2 = 0;
    }
    dir = 'stop';
    if(mediumBad.state === 'alive'){
      explodeMediumBad()
      mediumBad.state = 'dead'
    }
  }
}

function explodePrincess(){
  for(var i=0;i<princess.eyes.length;i++){
    if(Math.random() > 0.5){
      princess.eyes[i].dx = 10 * Math.random();
      princess.eyes[i].dy = 10 * Math.random();
    }
    else{
      princess.eyes[i].dx = -10 * Math.random();
      princess.eyes[i].dy = -10 * Math.random();
    }
  }
  setTimeout(princessRemove,4000);
}
function explodeSmallBad(){
  for(var i=0;i<smallBad.eyes.length;i++){
    if(Math.random() > 0.5){
      smallBad.eyes[i].dx = 9 * Math.random();
      smallBad.eyes[i].dy = 9 * Math.random();
    }
    else{
      smallBad.eyes[i].dx = -10 * Math.random();
      smallBad.eyes[i].dy = -10 * Math.random();
    }
  }
  setTimeout(smallBadRemove,4000);
}

function explodeMediumBad(){
  for(var i=0;i<mediumBad.eyes.length;i++){
    if(Math.random() > 0.5){
      mediumBad.eyes[i].dx = 9 * Math.random();
      mediumBad.eyes[i].dy = 9 * Math.random();
    }
    else{
      mediumBad.eyes[i].dx = -10 * Math.random();
      mediumBad.eyes[i].dy = -10 * Math.random();
    }
  }
  setTimeout(mediumBadRemove,4000);
}

princess.strings = ['torso1', 'torso2', 'leftMouth', 'rightMouth','rightHair','leftHair','rightEye','leftEye','rightEyeColor','leftEyeColor'];
princess.pieces = [torso1, torso2, leftMouth, rightMouth,rightHair,leftHair,leftEye,rightEye,rightEyeColor,leftEyeColor];
smallBad.strings = ['smallBadLeftEyeBrow','smallBadRightEyeBrow','smallBadMouth','smallBadRightEyeColor','smallBadLeftEyeColor','smallBadRightEye','smallBadLeftEye','smallBadFace','smallBadTorso2','smallBadTorso1'];
smallBad.pieces = [smallBadLeftEyeBrow,smallBadRightEyeBrow,smallBadMouth,smallBadRightEyeColor,smallBadLeftEyeColor,smallBadRightEye,smallBadLeftEye,smallBadFace,smallBadTorso2,smallBadTorso1];
mediumBad.strings = ['mediumBadHair1','mediumBadHair2','mediumBadHair3','mediumBadTorso1','mediumBadTorso2','mediumBadLeftEyeBrow','mediumBadRightEyeBrow','mediumBadFace','mediumBadMouth','mediumBadRightEye','mediumBadRightEyeColor','mediumBadLeftEye','mediumBadLeftEyeColor'];
mediumBad.pieces = [mediumBadHair1,mediumBadHair2,mediumBadHair3,mediumBadTorso1,mediumBadTorso2,mediumBadLeftEyeBrow,mediumBadRightEyeBrow,mediumBadFace,mediumBadMouth,mediumBadRightEye,mediumBadRightEyeColor,mediumBadLeftEye,mediumBadLeftEyeColor];

function princessRemove(){
  for(var i=0;i<princess.strings.length;i++){
    var one = document.getElementById(princess.strings[i]);
    one.remove();
  }
}
function smallBadRemove(){
  for(var i=0;i<smallBad.strings.length;i++){
    var one = document.getElementById(smallBad.strings[i]);
    one.remove();
  }
}
function mediumBadRemove(){
  for(var i=0;i<mediumBad.strings.length;i++){
    var one = document.getElementById(mediumBad.strings[i]);
    one.remove();
  }
}
var lineList = [mediumBadHair1,mediumBadHair2,mediumBadHair3,smallBadRightEyeBrow,smallBadLeftEyeBrow,mediumBadLeftEyeBrow,mediumBadRightEyeBrow];
var lineListLength = lineList.length;
var animate = function(){
  
  
  
  if(surfBoard.cx < -400){
    dir = 'right'
  }
  if(surfBoard.cx > 900){
    dir = 'left'
  }
  ball1.cy += ball1.dy;
  ball2.cy += ball2.dy;
  var i;
  for(i=0;i<animateListLength;i++){
    animateList[i].cx += animateList[i].dx;
    animateList[i].cy += animateList[i].dy;
  }
  if(dir === 'right'){
    for(i=0;i<animateListLength;i++){
      animateList[i].dx = 2.5;
    }
  }
  if(dir === 'left'){
    for(i=0;i<animateListLength;i++){
      animateList[i].dx = -2.5;

    }
  }
  for(i=0;i<lineListLength;i++){
    lineList[i].x1 += lineList[i].dx1;
    lineList[i].x2 += lineList[i].dx2;
  }
  if(dir === 'right'){
    for(i=0;i<lineListLength;i++){
      lineList[i].dx1 = 2.5;
      lineList[i].dx2 = 2.5;
    }
  }
  if(dir === 'left'){
    for(i=0;i<lineListLength;i++){
      lineList[i].dx1 = -2.5;
      lineList[i].dx2 = -2.5;
    }
  }
  collideBallWith(ball1,mediumBadFace,freezeMediumBad);
  collideBallWith(ball2,mediumBadFace,freezeMediumBad);
  collideBallWith(ball1,smallBadFace,freezeSmallBad);
  collideBallWith(ball2,smallBadFace,freezeSmallBad);
  collideBallWith(ball1,face,freezePrincess);
  collideBallWith(ball2,face,freezePrincess);
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);










