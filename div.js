class div{

    constructor(x,y){
        var o={isStatic:true, friction:0.5, restitution:0.8}
        this.ball=bo.rectangle(x,y,15,100,o)
        w.add(wo,this.ball)  
    }

    display(){
        var a=this.ball.position
     rectMode(CENTER)
        fill("red")
      rect(a.x, a.y, 15,100)
    }
}