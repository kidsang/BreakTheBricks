class BlockObj extends egret.Sprite {

    public constructor() {
        super();
    
    }
    public Init(w:number,h:number) {
        var texture = EgretUtil.createBitmapByName(Namedefine.BlockName);
        texture.anchorOffsetX = w * 0.5;
        texture.anchorOffsetY = h * 0.5;
        texture.width =w;
        texture.height =h;
        this.addChild(texture);
    }
}