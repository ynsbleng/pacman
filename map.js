/**/
class Map {
    /**/
    matrix = [
        /**/
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        /**/
    ];
    /**/
    constructor(context, unit, color){
        /**/
        this.context = context;
        /**/
        this.unit = unit;
        /**/
        this.color = color;
        /**/
        this.matrix.forEach((r, i) => r.forEach((c, j) => 2 * this.matrix[i][j]));
        /**/
        this.boundries = this.matrix.map((r, i) => r.map((c, j) => this.matrix[i][j] === 0 ? ({ i, j }) : void(0))).flat().filter((x) => typeof x !== "undefined");
        /**/
    }
    /**/
    render(){
        /**/
        return this.context.fillStyle = this.color, this.matrix.forEach((r, i) => r.forEach((c, j) => this.matrix[i][j] === 0 ? this.context.fillRect(j * this.unit, i * this.unit, this.unit, this.unit) : void(0)));
        /**/
    }
}