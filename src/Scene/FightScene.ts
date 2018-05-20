// TypeScript file
class FightScene extends BaseScene {

    private _numX = 5;
    private _numY = 3;
    private _spaceX = 2;
    private _spaceY = 2;
    private _boderUp = 10;
    private _boderDown = 10;
    private _boderRight = 10;
    private _boderLeft = 10;

    private _stageW: number = 1080;
    private _stageH: number = 1920;
    private _stageRect: egret.Rectangle;

    private _usingObjs: Array<UsingObj>;
    private _ballObjs: Array<BallObj>;
    private _blockObjs: Array<Array<BlockObj>>;

    public constructor() {
        super();
    }
    public Init() {
        this._blockObjs = new Array(this._numY);
        for (var i: number = 0; i < this._numY; ++i) {
            this._blockObjs[i] = new Array(this._numX);
        }

        this._stageRect = new egret.Rectangle(this._boderRight, +this._boderUp, this._stageW - this._boderRight - this._boderLeft, this._stageH - this._boderUp - this._boderDown);
        var bWidth = (this._stageRect.width - this._spaceX * (this._numX - 1)) / this._numX;
        var bHeight = 100;

        for (var i: number = 0; i < this._numY; ++i) {
            for (var j = 0; j < this._numX; ++j) {
                var block = new BlockObj();
                block.width = bWidth;
                block.height = bHeight;
                block.x = this._stageRect.x + bWidth * (j + 0.5) + this._spaceX * j;
                block.y = this._stageRect.y + bHeight * (i + 0.5) + this._spaceY * i;
                this.addChild(block);
                block.Init(bWidth,bHeight);
                this._blockObjs[i][j] = block;
                
            }
        }
    }
    public Start() {

    }

}