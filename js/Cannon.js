class Cannon 
{
    constructor(x,y,w,h,a)
    {
     this.x=x
     this.y=y
     this.width=w
     this.height=h
     this.angle=a
    }

    display()
    {
      fill("grey")
      push()
      translate(this.x,this.y)
      rotate(this.angle)
      rect(0,0,this.width,this.height)
      pop()
      arc(this.x,this.y+50,150,180,PI,TWO_PI)
    }
}