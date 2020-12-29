const e=Matter.Engine
const w=Matter.World
const bo=Matter.Bodies

var en, wo

var pi=[]
var pa=[]
var d=[]
var p
var score=0
function setup() {
  createCanvas(800,600);

  en=e.create()
  wo=en.world


g=bo.rectangle(400,590,600,20,{isStatic:true})
w.add(wo,g)

  for(var i=75; i<800; i=i+100){
    pi.push(new plinko(i, 100))
  }

  for(var i=50; i<780; i=i+100){
    pi.push(new plinko(i, 200))
  }

  
  for(var i=75; i<780; i=i+100){
    pi.push(new plinko(i, 300))
  }

  for(var i=10; i<780; i=i+150){
    d.push(new div(i, 530))
  }
}



function draw() {
  background(0); 
  e.update(en) 
  rectMode(CENTER)
rect(g.position.x,g.position.y,800,20)
 for(var i=0; i<pi.length; i++){
   pi[i].display()
 }

//  if(frameCount%60===0){
//   pa.push(new particle(random(50,750),0))
//  }

//  for(var i=0; i<pa.length; i++){
//   pa[i].display()
// }


if(p!=null){
  p.display()

  if(p.ball.position.y>600){
  if(p.ball.position.x<300){
    score=score+100
    p=null
  }
  // if(p.ball.position.x>300){
  //   score=score+500
  //   p=null
  // }

  else if(p.ball.position.x>301 && p.ball.position.x<600){
    score=score+500
    p=null
  }
  else if(p.ball.position.x>600 && p.ball.position.x<800){
    score=score+200
    p=null
  }

  else{
    score=score+50
    p=null
  }
}
}
for(var i=0; i<d.length; i++){
  d[i].display()
}

text("Score: "+score, 200,20)
  drawSprites();
}


function mouseDragged(){
  p=new particle(mouseX, 0)
}