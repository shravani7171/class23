class Ground{

    constructar(x,y,width,height){
        var options = {
            isStatic : true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        console.log(this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);
    }
}