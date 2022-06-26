/**/
class Player {
    /**/
    constructor(context, map, unit, speed, i, j, radius, keepMoving, color){
        /**/
        this.context = context;
        /**/
        this.map = map;
        /**/
        this.unit = unit;
        /**/
        this.speed = speed;
        /**/
        this.i = i;
        /**/
        this.j = j;
        /**/
        this.x = unit * (0.5 + i);
        /**/
        this.y = unit * (0.5 + j);
        /**/
        this.radius = radius;
        /**/
        this.keepMoving = keepMoving;
        /**/
        this.moving = keepMoving;
        /**/
        this.color = color;
        /**/
        this.destination = { i: i, j: j, x: this.x, y: this.y };
        /**/
    }
    /**/
    render(){
        /**/
        this.context.beginPath();
        /**/
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        /**/
        this.context.fillStyle = this.color;
        /**/
        this.context.fill();
        /**/
        this.context.closePath();
        /**/
    }
    /**/
    animationCallback(){
        /**/
        if (this.destination.x !== this.x || this.destination.y !== this.y){
            /**/
            this.x += this.x !== this.destination.x ? this.x < this.destination.x ? +this.speed : -this.speed : 0;
            this.y += this.y !== this.destination.y ? this.y < this.destination.y ? +this.speed : -this.speed : 0;
            /**/
            return;
            /**/
        }
        /**/
        if (this.keepMoving){
            /**/
            this.updatePosition();
            /**/
            this.canGo(this.nextDirection) ? this.updateDirection() : void(0);
            /**/
            this.canGo(this.currentDirection) ? this.goTo(this.currentDirection) : void(0);
            /**/
        }
        else {
            /**/
            this.setMoving(0);
            /**/
            this.updatePosition();
            /**/
        }
    }
    /**/
    canGo(direction){
        /**/
        switch (direction){
            /**/
            case "U": return this.map.boundries.every((x) => x.i !== this.destination.i - 1 || x.j !== this.j);
            case "D": return this.map.boundries.every((x) => x.i !== this.destination.i + 1 || x.j !== this.j);
            case "L": return this.map.boundries.every((x) => x.j !== this.destination.j - 1 || x.i !== this.i);
            case "R": return this.map.boundries.every((x) => x.j !== this.destination.j + 1 || x.i !== this.i);
            /**/
        }
    }
    /**/
    goTo(direction){
        /**/
        switch (direction){
            /**/
            case "U": this.destination.i--; this.destination.y -= this.unit; break;
            case "D": this.destination.i++; this.destination.y += this.unit; break;
            case "L": this.destination.j--; this.destination.x -= this.unit; break;
            case "R": this.destination.j++; this.destination.x += this.unit; break;
            /**/
        }
        /**/
        return true;
        /**/
    }
    /**/
    isMoving(){
        /**/
        return this.moving;
        /**/
    }
    /**/
    setMoving(value){
        /**/
        return this.moving = value;
        /**/
    }
    /**/
    setNextDirection(direction){
        /**/
        this.nextDirection = direction;
        /**/
        this.currentDirection = this.currentDirection ?? this.nextDirection;
        /**/
    }
    /**/
    updateDirection(){
        /**/
        this.currentDirection = this.nextDirection;
        /**/
    }
    /**/
    updatePosition(){
        /**/
        this.i = this.destination.i;
        this.j = this.destination.j;
        this.x = this.destination.x;
        this.y = this.destination.y;
        /**/
    }
}