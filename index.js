(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1133,402,456,70],[0,1312,1650,150],[0,648,1100,400],[1102,648,476,337],[1133,0,400,400],[0,1464,1650,86],[0,1050,1650,260],[0,0,1131,646]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.clouds = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cowboy = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.flower = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.foreground = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.middleground = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.source = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.play_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 文字
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADrC8QgJgHgEgJIAngcIABAGIADAHIADAGQAGAHAIAAQAIAAAIgHQAEgDAEgKIAEgGIAEgMIhjj3IB1AAIAoBwIAuhwIAnAAIhxELQgOAdgPALQgPALgXAAQgaABgQgQgAB/B2QgOgHgIgMIgCADQgTAWgjAAQgQAAgQgEQgwgNAAg0QAAgvAvgSIA5gVQAMgHAHgHQAFgGABgHIACgLQAAgbgdAAQgaAAgIAPIgEAFQgDAHABAGQAAAKAEAPQACABABAEIAAACIg0gKIgBgJIAAgLQgBgeAVgOQAYgRAzABIAWAAIAVAAQAwAFAQANQASAOgBAfIAACHIAGAFQAGAFAGgCIAEgCQAAAAAAAAQABgBAAAAQAAAAAAABQAAAAABAAIAHAXQgMAIgLADQgKADgPACIgYACQgVAAgPgGgABbgLIgLAJQgJAFgDAIQgDAGAAAOIAAAlIABAIIABAEQADAIAHAAQADAAADgCIAEgEIAGgJQAGgPABgZIAAg3IgCAAIgHALgAiiB2IAAk4IAagBIAjgBQAPgBAfgFIAAFAgAliB0IgSAAIgvABIglABIAAk8ICkAAQA0AAAeAaQAdAbAAArQAAAtggAZQghAYhAAAIgeAAIAAB+IgOgCgAlUgtIAOAAQASAAAJgNQAIgOAAggQAAgigIgNQgIgNgVAAIgMAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 背景
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(11,1,1).p("Arul2IXcAAQCcAABtBtQBuBuAACbIAAAAQAACchuBtQhtBuicAAI3cAAQibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA82B").s().p("AruF3QibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAIXdAAQCbAABtBtQBuBuABCbIAAAAQgBCchuBtQhtBuibAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF99CC").s().p("AruF3QibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAIXdAAQCbAABtBtQBuBuABCbIAAAAQgBCchuBtQhtBuibAAg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699FF").s().p("AruF3QibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAIXdAAQCbAABtBtQBuBuABCbIAAAAQgBCchuBtQhtBuibAAg");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-43,236.1,86.1);


(lib.num4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJBWIAAghIhAAAIAAgbIBUhwIAqAAIAABzIAVAAIAAAYIgWAAIAAAhgAgsAdIAjAAIAAgzg");
	this.shape.setTransform(15.95,16.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhxBxQguguAAhDQAAhCAuguQAwgvBBAAQBCAAAvAvQAvAuAABCQAABDgvAuQgvAvhCAAQhBAAgwgvgAhJAaIAAAbIBAAAIAAAiIA9AAIAAgiIAVAAIAAgYIgUAAIAAhyIgrAAgAgtAdIAkgyIAAAyg");
	this.shape_1.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num4, new cjs.Rectangle(0,0,32,32), null);


(lib.num3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBaIgMgDQgVgDgMgMQgLgMAAgOQAAgKAEgHIAcgCIgCAGIAAAFIAAADQAAAOAHAHQAHAIANAAQAKAAAGgGQAHgGACgKIABgGIAAgGQAAgPgLgHQgJgGgYAAIgCAAIAAgYIAEABQAXgBAIgGQAJgGAAgPQAAgKgFgHQgEgHgKgBIgGgBQgLAAgHAHQgHAGAAALIAAADQAAADADAFIgcgGIgBgIQAAgSAPgLQARgMAdAAQALAAALACQAZAEANAKQAHAGAEAIQAEAIAAAJQAAAUgTAMQgIAFgKABQAKACAKAEQAKAGAGAKQAFAJAAAMQAAATgNANQgKAKgOAEQgOAFgXAAIgPAAg");
	this.shape.setTransform(15.925,16.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhxBxQguguAAhDQAAhCAuguQAwgvBBAAQBCAAAvAvQAvAuAABCQAABDgvAuQgvAvhCAAQhBAAgwgvgAhFAdQgEAIAAAJQAAAPALALQANAMAUAEIAMACIAPAAQAXABAOgFQAOgEAKgLQANgNAAgSQAAgMgFgKQgFgKgLgGQgKgEgKgBQAKgCAJgFQASgLAAgVQAAgJgEgHQgDgJgHgGQgNgKgZgEQgMgCgLAAQgdABgRAMQgPAKAAATIABAIIAcAFQgDgEAAgEIAAgDQABgKAGgHQAIgHAKAAIAHABQAJACAEAGQAFAHABAKQAAAPgJAHQgJAGgXAAIgEgBIAAAYIACAAQAYABAKAGQAKAHAAAOIAAAHIgBAGQgCAKgHAFQgGAHgKgBQgMABgIgJQgHgHAAgNIAAgDIAAgFIACgHg");
	this.shape_1.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num3, new cjs.Rectangle(0,0,32,32), null);


(lib.num2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIBYIAAgcIA+g5QALgMAGgLQAGgLAAgKQAAgIgDgHQgGgMgNAAQgFAAgEACQgEACgEADQgGAGgCAHQgDAHAAAKQAAAJACAMIACAFIghgHIgBgEQgCgJAAgHQAAgYASgQQASgPAgAAIAIAAIAHABQASACANAGQANAGAIALQAHAMAAANQAAATgOAOIgKAIIgRAMIgXAOIgFADIgEACIBGAAIAAA0g");
	this.shape.setTransform(15.925,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhwBxQgkgkgIgvQgDgPAAgPQAAgOADgPQAIgvAkgkQAugvBCAAQA+AAAsAoIAHAHQAvAuAABCQAABDgvAuIgHAGQgsApg+AAQhCAAgugvgAAJg5QAEAHAAAIQgBAKgFALQgHALgLAMIg+A5IAAAcICPAAIAAg0IhGAAIADgCIAFgDIAXgOIARgMIAKgIQAOgOAAgTQAAgNgHgMQgIgLgNgGQgNgGgSgCIgGgBIgJAAQgfAAgTAPQgSAQAAAYQAAAHACAJIABAEIAhAHIgCgFQgCgMAAgJQAAgKADgHQACgHAGgGQAEgDAEgCQAFgCAEAAQANAAAGAMg");
	this.shape_1.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num2, new cjs.Rectangle(0,0,32,32), null);


(lib.num1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBWIAAh5IgFABQgQAGgPAAIAAgdIAGAAQATgCANgHQALgHAIgNIAoAAIAACsg");
	this.shape.setTransform(14.225,16.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhwBxQgvguAAhDQAAhCAvguQAugvBCAAQBDAAAuAvQAvAuAABCQAABDgvAuQguAvhDAAQhCAAgugvgAgeBXIA9AAIAAisIgnAAQgIAMgMAIQgNAHgTACIgFAAIAAAcQAOAAAQgFIAFgCg");
	this.shape_1.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.num1, new cjs.Rectangle(0,0,32,32), null);


(lib.info_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 文字
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEhDHQgogcAAg1IAAiEQAAgwAugYQAkgTA2AAQBOAAAmAcQAfAWAAAqIAACDQAABBg2AZQghAPg7AAQg7AAgmgYgAFxgiQgGAGAAAIIAACgQgBAIAHAFQAHAGAKAAQAIAAAIgGQAJgFAAgIIAAigQgBgJgHgFQgIgFgJAAQgJAAgIAFgAArDaIAAhHQAHgDADgEQAEgEAAgKIAAgGIAAh4IAAgIQAAgJgDgFQgCgGgJgGIAAg/QAFAAADgDQADgDABgEQACgEAAgGIAAgQQAAgoATgWQAXgbAwAAIAOAAIAQAAQAOAAAJACQAJABALAFIAABAIgKgBQgGAAgHACQgFACgGAFQgLAIAAARIAAAHQAAADAEAFQACAFAMAAIASAAIAABGIgSAAQgKAAgEAEQgDAEAAAFIgBAJIABB+QAAALAFAGQAEAIAJACIAABGgAiBDaIAAi1IAAgNIAAgLIgBgNQgBgFgFgGQgFgIgIAAIgRAAQgGAAgBAEQgCAEAAAMIAAB2IABAIIAEAJQAFAHAJADIAABIIiRAAIAAhKQAFgCADgGQAEgFAAgMIAAh6QAAgGgCgEIgGgLQgEgGgHgEIAAhEICBAAIAAANQABAEAFAAQAEAAAFgDQAfgRAiAAQAmAAAWAUQAaAYABAuIAACLQAAAKACAGQAEAFAGABIAABIgAoPDaIAAhIQAEgDAEgFQAEgGAAgCQACgFAAgEIAAjxQAAgGgCgEQAAgEgFgGQgFgGgGgFIAAhDICyAAIAABDQgHAFgDAFIgGAKQgCAGAAAFIAADxIABAIQACAEADAFIAJAIIAABIg");
	this.shape.setTransform(-0.2,-0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 背景
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(11,1,1).p("Arul2IXcAAQCcAABtBtQBuBuAACbIAAAAQAACchuBtQhtBuicAAI3cAAQibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFA82B").s().p("AruF3QibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAIXdAAQCbAABtBtQBuBuABCbIAAAAQgBCchuBtQhtBuibAAg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF99CC").s().p("AruF3QibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAIXdAAQCbAABtBtQBuBuABCbIAAAAQgBCchuBtQhtBuibAAg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6699FF").s().p("AruF3QibAAhuhuQhuhtAAicIAAAAQAAibBuhuQBuhtCbAAIXdAAQCbAABtBtQBuBuABCbIAAAAQgBCchuBtQhtBuibAAg");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-43,236.1,86.1);


(lib.外框 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("EglygajMBLlAAAMAAAA1HMhLlAAAg");
	this.shape.setTransform(241.85,170);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.外框, new cjs.Rectangle(-2.5,-2.5,488.7,345), null);


(lib.info_source = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.source();
	this.instance.setTransform(-386.9,-221,0.6842,0.6842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.info_source, new cjs.Rectangle(-386.9,-221,773.9,442), null);


(lib.GRAPHICsky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clouds();
	this.instance.setTransform(-550,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550,-200,1100,400);


(lib.GRAPHICmiddle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.middleground();
	this.instance.setTransform(-825,-130);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-825,-130,1650,260);


(lib.GRAPHICfore = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.foreground();
	this.instance.setTransform(-825,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-825,-43,1650,86);


(lib.GRAPHICback = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.background();
	this.instance.setTransform(-825,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-825,-75,1650,150);


(lib.cowboy_gr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.cowboy();
	this.instance.setTransform(-238,-168.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238,-168.5,476,337);


(lib.toe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEF2F").s().p("Ag7BmQgNgHgNgNQgUgWgHgdQgCgKgBgNQgDgjAUghQAEgKAJgKIAFgGQBegsA2AWQAgAOANA0QAMAvgZAtQgZAsgvAPQgTAHgRAAQgaAAgZgOg");
	this.shape.setTransform(-2.8055,-1.2954);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhKCJQgagOgPgUQgSgWgIghQgHgbADgaQABAMADAKQAGAdAUAWQANANAOAHQApAXAvgQQAugPAZgsQAYgsgLgwQgNg0gggOQg1gWhgAsQAHgMAcgRQAWgOAIgCQA+gVA6AhIARALQAmAdAMAxQAPA7ggA5QgeA4g8ATQgXAHgWAAQghAAgfgRg");
	this.shape_1.setTransform(0.1196,0.1372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-15.3,29.3,30.9);


(lib.tail = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEF2F").s().p("AhgAOQhghyALg+QCkgEBeBhQBLBMAfBmIgwA3QiHgkhghyg");
	this.shape.setTransform(-18.3031,-17.6079);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjHhMQg4iICBARQFLAqAMEcQgghnhKhMQhghhiiAEQgLA/BgByQBeByCJAjQgIANgHAAQj0gFhtkNg");
	this.shape_1.setTransform(-21.6854,-19.7896);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,-39.6,43.3,39.6);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A38901").s().p("AjtAnQgkhZAYhiQEGB7D3gKQglBxiXA6QguANgpAAQh+AAhghug");
	this.shape.setTransform(-0.6117,2.6311);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkGgdQgSgeASgXQFBB+DVggQAAAngZAfIgnABQjjAAjzhwg");
	this.shape_1.setTransform(0.6457,-9.2095);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-17.5,54.5,35);


(lib.leg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEF2F").s().p("AiqghQgfgqATgjQASgkAdgaQDoiRBHBmQA6BVhaEXIgXBFIhqAoQAglQjRAtg");
	this.shape.setTransform(-4.1012,3.6729);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhUEiQADjGiMhZQDTgtghFRgABVC5QBbkWg7hVQhGhnjpCRQAqgrAogiIATgQIABgBIAXgQQCdhnBcB3QBWBuiEExIgXAyIg5AUIAXhGg");
	this.shape_1.setTransform(0.952,0.0238);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-29.4,46.3,58.9);


(lib.dog1_eyeball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANDAQhVgfhBhNQg+hKgJhMQgIhLAxgmQAygoBSAVQBVAWBHBKQBLBNAMBVQANBXg8AnQgfAUgpAAQgjAAgpgOg");
	this.shape.setTransform(-0.4696,-1.1256);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALDgQhlghhNhYQhJhVgJhZQgIhYA8gvQA8gvBiAVQBmAXBVBVQBYBZAMBiQAOBmhIAwQgpAbg0AAQgnAAgvgQgAisi/QgxAnAIBLQAJBNA+BJQBBBNBVAeQBaAhA6gnQA8gngNhXQgMhUhLhOQhHhKhVgWQgcgHgYAAQgvAAghAag");
	this.shape_1.setTransform(0.0073,0.0058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-23.9,50.1,47.9);


(lib.dog_pupil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAiQgOgDgHgNQgHgMAEgNQAEgPAMgHQAMgIANAEQAPAEAGAMQAHANgEANQgEAOgMAIQgIAFgJAAIgIgCg");
	this.shape.setTransform(3.165,-3.1611,0.6586,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtA9QgSgZAAgkQAAgjASgaQAUgZAZAAQAaAAATAZQATAaAAAjQAAAkgTAZQgTAagaAAQgZAAgUgag");
	this.shape_1.setTransform(-0.0022,-0.0033,1.21,1.21);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-10.6,15.5,21.2);


(lib.dog_nose1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADADA").s().p("ABBA7QjzgUjkhXIATgQQC7AFDJAZQDLAaDLArIgCAMQhsAShtAAQg+AAg9gGg");
	this.shape.setTransform(101.125,-45.4206);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("AlwC3Qjhi+gVlDQJyAhJaCCQAHAEgXAxQgXAxgvA7QgvA7idBjQicBklbBPQhshGhRhOgAnyjyQDlBYDzAUQCqAQCqgcIACgMQjMgsjJgaQjLgZi7gFg");
	this.shape_1.setTransform(110.2832,-26.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEF2F").s().p("ARbFvQi8ACi4gmQjUgujNhJQjUhNjag1Qjeg2jjgbQjrgYjwAGQjwAGiGAnIAAhCQMFjlFDgjQFBgkEEgUQEEgUIoAXQgGDhBCChQAsBsBMBPIABABQBVBcAyAoQh6ARiBAAIglgBg");
	this.shape_2.setTransform(-68.575,-23.9982);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACRGsQi+gpi4hHQjMhOjOhGQjChAi6goQi6gokMgUQkMgSkZA5IAAgVQCGgoDwgGQDvgGDsAZQDjAbDeA2QDbA1DUBMQDNBKDSAtQC5AmC8gBQCUACCMgSQgzgphUhcIgBgBQhMhOgthtQhBihAGjgQongXkEAUQkEAUlCAjQlDAjsFDmIAAgYQLsk1P0hHQP0hHT5D/QgGArgfBAQg8CBh8BtQmKFgthAfIgIAAIgzABQirAAioglgAMgCcQBRBOBrBGQFchPCdhkQCchjAvg7QAvg7AXgxQAXgxgHgEQpaiCpzghQAVFDDiC+g");
	this.shape_3.setTransform(-6.55,-23.3146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.8,-69.7,404.6,92.9);


(lib.dog_ear_flapping = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A1tG3QhsgQhUhUIgCgNQAcgZAlAJQBZATBWgUQBWgVBIg3QCDhkCVhMQA1gaA7gJQCJgVCIASQCeAUCFhnQBCg1BWgGQE4AJBhhOQByhNDCASQDCASErhAQCsglDShpIBFBfQiCA2i6AxQi6AwkQgWQkQgXhcBEQhdBFkBAaQkAAaiTBlQiTBmj+gtQj9guigDEQiUC1hnAAIgRgBg");
	this.shape.setTransform(-6.375,1.0235);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({scaleX:1.058,scaleY:0.8688,rotation:0.7739,x:-15.8559,y:-7.0019},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.8,-43.1,335.9,88.2);


(lib.dog_collar1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C01801").s().p("Aj/AlIH/hlIgJBHInxA6g");
	this.shape.setTransform(2.9375,5.2375,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlYi2IKxAsIgUD5IpdBIgAjpBYIAFAcIHyg6IAJhHIAIhIIosgjg");
	this.shape_1.setTransform(5.175,0.175,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC4BB").s().p("AjXghIGvAPIAAAbImqAZg");
	this.shape_2.setTransform(6.575,-5.875,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3300").s().p("AkWhnIItAjIgJBGIn/BmgAjpgJIGrgZIAAgcImwgPg");
	this.shape_3.setTransform(4.325,-1.475,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-18.1,69,36.6);


(lib.dog_brow1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADQAAQhWhWh6AAQh5AAhWBWQhIBHgMBgQgCgTAAgVQAAh6BWhVQBWhWB5AAQB6AABWBWQBWBVAAB6QAAAVgCATQgMhghIhHg");
	this.shape.setTransform(-0.0051,-1.5658,0.6371,0.6707,0,0,10.7916);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-13.1,36.8,26.2);


(lib.dog_bod2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBC502").s().p("Aj+NUIAAAAIgCAHgAEAtaIAAAAIABAAg");
	this.shape.setTransform(5.575,7.3625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6D300").s().p("AgIgCIASAEIgTABg");
	this.shape_1.setTransform(-11,96.8625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEF2F").s().p("Ak0OxIgBAAQiVhRgxiqQgwipA5imQA4ilBkiGQBkiGBaiPIAzhSQAmg/AphHQCWkGAsk4IBjAAQAFBUANBSIAAAAIAQBdIAAABQAcCJAxCFQBfEBAsE3QAsE4iqEtQiqEtlLACIgTgFIgBAGQhkgKhSg1gAjPPJIACgGIAAAAg");
	this.shape_2.setTransform(0.6952,-3.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhfQLQhwgCg2gYQkMh4gri4Qgqi5A8i5QA1ihBeiNIAvhFQB+jDB8jJQCwkeAak6IBDgCQgsE4iXEGQgoBHgnA/IgzBSQhZCPhkCGQhkCGg5ClQg4CmAwCpQAxCqCVBRIAAAAQBTA1BkALIAUgCQFKgCCrktQCqktgsk4Qgsk3hfkBQgxiFgciJIAAAAIAAgBIgQhdIAAAAQgNhSgFhUIAxAAQAWEjBxEbQBwEbAfFDQAgFEi5EYQi8EdlCAAIgRAAg");
	this.shape_3.setTransform(2.002,-0.9526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-104.5,118,207.1);


(lib.arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEF2F").s().p("ACFDVQgLmXj9CcQg3gggHgaIgGgXIBTgvQAxgaAmgMQBbgdBIBSQA6BEAHBgQAGBhgTAzQgSAzAaABg");
	this.shape.setTransform(-8.1383,4.1229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACtDlQgbAAATgzQATg0gHhhQgGhgg6hDQhIhThbAdQgmANgxAaIhUAvIgEgIQACgMALgIIBAgxQBghJBtAjQBUAcAqBQQAvBYgEBiQgDBUgyBEgABPDlQABlNjoBSQD8icAMGXg");
	this.shape_1.setTransform(-6.0092,2.4692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-20.4,45.2,45.8);


(lib.blur = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.682)").s().p("AGDj3QGHisGHiBQq2ILs3EjQleB8nWCfQLqm5Mpljg");
	this.shape.setTransform(844.025,-470.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.682)").s().p("AGCj4QGHisGIiBQq2ILs3EkQldB9nXCfQLqm6Molkg");
	this.shape_1.setTransform(610.775,-390.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.682)").s().p("AGCj4QGHisGHiCQq1IMs3EkQldB+nWCfQLpm6Mollg");
	this.shape_2.setTransform(377.525,-309.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.682)").s().p("AGCj4QGHitGHiCQq1IMs3ElQldB+nWCgQLpm7Mollg");
	this.shape_3.setTransform(144.275,-228.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.682)").s().p("AGCj5QGGisGHiDQq0IOs2ElQldB+nWChQLom8Molng");
	this.shape_4.setTransform(-89.025,-148.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.682)").s().p("AGCj5QGGitGHiDQq0IOs2EmQldB+nWChQLom8Molng");
	this.shape_5.setTransform(-322.275,-67.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.682)").s().p("AGBj5QGGitGHiFQqzIQs2EnQldB+nVCiQLnm+Mnlng");
	this.shape_6.setTransform(-555.525,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.682)").s().p("AGBj6QGGiuGHiEQqzIQs2EoQlcB/nWCiQLnm+Mnlpg");
	this.shape_7.setTransform(-788.775,93.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.682)").s().p("AGBj6QGGiuGHiEQqzIQs1EoQldB/nVCiQLmm+Mnlpg");
	this.shape_8.setTransform(-1022.05,174.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.682)").s().p("AGBj6QGFivGHiEQqyIQs1EpQlcCAnWCjQLnnAMmlpg");
	this.shape_9.setTransform(-1255.3,254.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.682)").s().p("AGBj6QGFivGHiFQqyIRs1EqQlcB/nVCjQLlnAMnlpg");
	this.shape_10.setTransform(-1488.55,335.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.682)").s().p("AGBj7QGEivGHiGQqxITs1EqQlcCAnVCkQLmnBMmlrg");
	this.shape_11.setTransform(-1721.85,416.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.682)").s().p("AGAj7QGGivGFiHQqwITs0ErQlcCBnVCkQLlnCMllrg");
	this.shape_12.setTransform(-1955.1,496.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.682)").s().p("AGAj7QGFiwGGiHQqwIUs0EsQldCBnUCjQLlnBMllsg");
	this.shape_13.setTransform(-2188.35,577.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.682)").s().p("AGAj7QGEixGGiHQqvIUs0EtQlcCBnUClQLknDMllsg");
	this.shape_14.setTransform(-2421.6,657.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2537.8,-525.8,3498.8,1240.1);


(lib.wing_flat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DD470C","#F8DA0A"],[0,1],73.4,-8.7,-73.4,8.7).s().p("AllH8QjVmrinm2QgGgPAUAAQBnBiBNCLQC6FRDAFIQAXApgnANQgeALgbAAQhMAAgrhXgAggIzQhehDgrhYQgdgjgZgmQjjlTjSlfQgmhABGgRQDrCHCGCRQCGCRASBJQASBKA3AvQA1AvAXAnQBTBuhJCGIgEAHQgKARgMARQgOATgQAAQgNAAgPgKgACAF2QhAiHgXhBQgXhBg/g5QhAg4gVg7QEqAlBvDbQBuDbhjAxQgaANgXAAQhDAAguhkgAFADNQg7h7hKhgQgKgMAYgBQApgBAmgEQECAaAaDiQADAZgYAWQg2AxguAAQhGAAg1hvgAH0AcQgyhIhXgaQifgtAlh4QExAQC2DiQAbAhgjAfQgyArguAAQhBAAg7hWgABbgtQiwhAiWhgQhDgrhshWQhshXhDgsQhCgtAegoQAdgoATgEQECAHDWB7QAhATASAjQAxBcBmA1QC5BehzBuQgXAWgcAAQgOAAgPgGgAIuinQhthCjbgnQjcgngFiOQI5BRA6A+QA5A9gLBKQgGAnghAAQgeAAgzgfgAF1mvQjkgeiMgnQiLgnABgMQgBgHAFgEQAEgEAEgCIAIgCIAMgBICVgFQCRgECeAEQCdAEAvBVQAiA/h1AAQgpAAg6gHg");
	this.shape.setTransform(-34.7226,72.3224);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DE07C9","#DD470C","#F8DA0A"],[0,0.616,1],-124.6,66.3,82,-104.7).s().p("AqELoQnKgEE1iwQE1ixCMgDQCLgEDlAiQDmAhCsAHQCrAGgVBqQgWBqiSAlQiSAljhABIhiABQjZAAlugEgAvzJSQAghvD3jKQD2jLBmhUQBlhVB8gHQB7gGAzANQAzANjfDGQjgDGjzB1Qj0B1hYBNQgkAfgQAAQgXAAAUhCgAIHGhQh/gHhvgQQhvgRjBgFQjDgGg+gVQg+gWCLhqQCKhrDZAaQDZAbB+AAQB+gBAMCDQALB8hyAAIgLAAgAJ6CNQgbgGhCgHQhCgIAlgfQAkggAdgTQAdgUAfgFQAfgEAfAIQAfAJAAAaQAAAagiAjQgeAdgYAAIgIgBgAAAATQBUhiA2gZQA3gYCSgFQCRgGAoAeQAoAegOAzQgPAxhNAmQhNAmhbgPQhcgPiOAZQgdAFgTAAQhNAABFhOgAKGg3QgNgNAAgRQAAgSANgMQAMgNAagDQAagDAzgBQAzgCgMAjQgLAigkANQgjAMgeAAQgeAAgMgMgAAPiHQgVgYA0goQA0gnAagOQAagNAXgBQAXgCAhAHQAhAHgWAXQgVAXgnAeQgmAfg1ASQgXAIgRAAQgWAAgMgOgAiciTQgmgRBFg/QBFg/AgggQAegfAYgBQAYAAASAXQASAXgGAVQgGAWgWAMQgWAMhLA3Qg7ArgkAAQgLAAgJgEgAGci6Qg1gWAKgtQALgtBPgHICJgOQA5gGATASQATASgPAlQgPAkgiATQghAThAAGQgPACgPAAQgvAAgpgQgAEdizQgLgGAAgJQAAgJALgHQAMgGARAAQAQAAAMAGQAMAHAAAJQAAAJgMAGQgMAGgQAAQgRAAgMgGgAKyi6QgYgFAegdQAegdAOgcQAOgcAOAHIArAUQAdAOgEAaQgEAagVALQgWALgmAEQgTADgQAAQgPAAgLgDgAEak3QhMgChHgWQhHgVBRgrQBRgsAugLIBegYQAvgMAcAdQAbAcgBAVQgBAUg1ApQg1AohJAAIgFAAgALWliQhagSg8gCQg8gCgFgjQgFgiApghQApggBfAGQBfAGAugQQAtgRAWBPQAVBPgwASQgYAKgjAAQgjAAgsgJgAOlm8IgZgpQgKgRAOgUQAOgTAKgKQAJgJAOAAQANAAASAJQARAKgGANQgFAOgYAwQgQAfgMAAQgGAAgFgJgAHXnmQgIgVADgWQADgXAQgMQAQgMAZgMQAZgMAZARQAZARACATQACASgngBQgogCgYAhQgPAVgIAAQgGAAgCgIgAEYntQgNgLAKgVQAKgUAdgGQAegFAFgFQAGgEApgNQAqgNgdAhQgeAhgbAIQgcAIgRAOQgKAHgIAAQgGAAgFgFgAKyomQglgOgXgXQgXgYAjgPQAjgPBPgHQBPgHAnAFQAnAFgHAoQgHAngdAGIhXAPQgXAEgUAAQgdAAgVgJgAOfqsQgHgiAQgJIAZgOQANgGAGAMQAGALAXASQAXARgTARQgTARgeADIgEABQgaAAgHghgAM9q7QgngEgRADQgRADAGgVQAHgVAOgBQAOgBAKgCQAKgDAOgBQAOAAAKAPQAKAPABAMQABAIgTAAIgTgCg");
	this.shape_1.setTransform(-1.5085,-71.8908);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ApQXbQkiiokcw2IAAj1QJ6xHO1lVQO1lWj8IxQj8Iwh4ICQhIEyj+AVQCHBvAhCoQB3JXn3EqQlBC/jrAAQiEAAhog8gAw9FtQCnG3DVGsQA6B0B3goQAngOgYgoQi/lIi7lSQhNiLhnhjQgTABAFAOgAvvFwQDSFfDiFTQAZAmAdAjQAsBZBeBCQAjAZAYgiQAMgRAJgQIAEgHQBJiGhShvQgYgng2guQg2gvgShKQgThKiFiRQiGiRjsiIQhGASAnBAgAmIMHQBAA5AXBBQAWBBBACIQBACHBjgwQBigxhujcQhvjckrglQAWA7BAA5gAiSK3QgXABAJANQBLBgA6B7QBXC5CIh7QAYgVgDgaQgajikBgbQgnAEgpABgAAPKNQBXAZAzBKQBkCSB3hoQAjgegbgiQi2jjkwgPQglB3CeAugAvJCtQgdAoBCAsQBCAsBsBXQBsBXBDAqQCWBgCxBBQAuAQAighQBzhui4heQhog0gwhdQgSgighgTQjWh8kDgGQgSAEgeAogAh1HDQDbAnBtBBQBsBCALhKQALhJg5g+Qg5g+o4hQQAECODcAngAkrCTIiVAEIgNACIgHACQgFACgEAEQgFAEABAGQAAANCMAnQCLAmDjAeQDkAeguhVQguhViegEQhOgChLAAQhMAAhJACgAlolOQiLAEk1CwQk2CvHKAFQHKAEDggBQDhgBCSgkQCRgmAWhqQAWhqisgGQisgGjmgiQjNgeiFAAIgeAAgAivswQh8AGhlBWQhlBVj3DKQj3DLggBvQggBuBYhMQBYhMDzh1QDzh1DgjHQDfjHgygNQgigJhDAAQghAAgpADgAjbn1QiKBrA+AVQA+AWDCAFQDCAGBvAQQBvARB+AGQB+AHgMiDQgMiCh9AAQh+AAjagaQgrgGgoAAQihAAhvBWgAJurAQggAEgcAUQgdAUglAfQglAgBCAHQBCAIAbAGQAbAGAjgjQAjgjAAgaQAAgagfgIQgVgGgUAAQgLAAgKACgAFDtUQiSAFg2AZQg3AYhUBjQhVBjCOgZQCOgZBbAPQBbAPBOgmQBNgmAOgzQAOgzgngdQgigahtAAIgrABgALptWQgzACgZADQgaADgNAMQgMANAAARQAAASAMAMQANANAeAAQAdAAAkgNQAjgMAMgjQALghgvAAIgEAAgACevZQgXABgaAOQgaANg1AoQgzAnAVAYQAUAYA1gSQA1gSAngeQAmgfAWgXQAVgXgggGQgcgGgUAAIgIAAgAAOwwQgXAAgfAgQgfAfhFBAQhGA/AnARQAmAQBNg3QBLg4AWgMQAWgMAGgVQAGgWgSgXQgTgWgXAAIgBAAgAJEwNIiIANQhQAIgKAtQgLAtA2AVQA1AVBBgGQBAgHAhgSQAhgTAPglQAPglgSgRQgPgOgkAAIgaACgAEOugQgMAGAAAJQAAAJAMAGQAMAHAQAAQARAAALgHQAMgGAAgJQAAgJgMgGQgLgGgRAAQgQAAgMAGgALVvkQgOAcgeAeQgeAdAXAFQAXAEAmgEQAngFAVgKQAVgLAFgaQAEgbgdgNIgsgVIgFgBQgLAAgLAWgAFeysIhdAXQguAMhRArQhRArBHAWQBGAVBNADQBMABA2gpQA2gqABgUQABgUgcgdQgTgUgeAAQgMAAgOAEgAITysQgpAgAGAjQAEAiA9ADQA8ACBaARQBaASAwgSQAwgTgWhOQgVhPguAQQguARhfgGIgegBQhIAAgiAbgAOYz1QgJAJgOAUQgOATAKARIAYAqQAPAZAYgwQAYgwAGgNQAFgOgRgJQgRgKgOAAQgNAAgKAKgAH/0aQgZAMgRAMQgQAMgCAWQgDAWAHAVQAIAVAYghQAYghAnABQAnACgCgTQgCgTgYgRQgPgKgOAAQgLAAgKAGgAF/0QQgqAMgFAFQgGAEgdAGQgeAFgJAVQgKAUAMAMQAMALARgOQARgNAcgIQAcgIAdghQAVgYgQAAQgGAAgLAEgALl1WQhPAHgjAPQgjAPAXAXQAXAXAkAPQAlAOA5gKIBWgPQAdgFAHgoQAHgngmgFQgRgDgYAAQggAAgtAFgAOy2zIgaAOQgQAIAIAjQAHAiAegCQAdgDATgRQATgSgXgRQgXgRgGgMQgEgHgHAAQgDAAgEACgAMt2JQAnAEgBgLQgBgLgKgPQgKgQgOABQgPAAgJADQgKADgOABQgPABgGAVQgHAVASgDQAHgCAMAAQAOAAAWADg");
	this.shape_2.setTransform(0.0427,-0.0129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.6,-155.9,233.39999999999998,311.8);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVNJQgLgUgEgaQgei6AXiyIgOghQgIgZgFgZQgEgTAIgRQAGgNALgLQgFgPgBgTQgDgbgOgaQgJgRAAgUQABgRADgQQgIgIgDgLQgFgQgBgRQAAgUADgSQACgMAFgLQglg6ARhEQAThUgrhIQgbgtAHg4QAFgqAYgnQgEgEgDgHQgEgJAAgKQAAgMAFgLQAEgJAHgJIgDgHIgCgMQgBgHABgHIABgTQAAgGACgGQgRgXgEgeQgFgfAHggQAGgcADgcQADgYAVgOQgJgLgBgPQgBgbAZgKQAlgQAKAmIADABIAGgBIAIgBIAOAAIAEgCIAAgHQAAgGADgFQAEgJAIgFQAKgGALgBQAUACANARQAMARACAUQACAVgKAQIgCAEQAkAcALAtQAIAhABAhQAAArgQAnQgFAMgHALQBeBohBCIQgIARABAUQAFBPACBPQABATgCAWQgeFAgFE5QgCBmgJBhQgDAjgUAhQgTAggTAAQgSABgTgjg");
	this.shape.setTransform(0.0066,0.0001);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-87.5,30.1,175.1);


(lib.monkey_bod1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(72,45,0,0.302)").s().p("AkqBrIFpoHQBtgDB/AdQgSI4lhDnQiEh1hei9g");
	this.shape.setTransform(-36.5,-14.9436);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFDFC8","#FFA360","#CB5234","#482D00"],[0,0.596,0.847,0.988],-16.2,7.4,0,-9.4,-3.5,52.6).s().p("ADXI0Qk4gckVjcQj5jHg9joQg2jRCAiAQB7h5DnAIQDtAHDvCKQEICYCDDhQBDBxAPBjQATB7g9BmQgjA7g3AnQhnBLisAAQgkAAgngDg");
	this.shape_1.setTransform(0.0445,0.0366);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-56.6,140.2,113.4);


(lib.m1tail1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFDFC8","#FFA360","#CB5234","#E1A477"],[0,0.596,0.847,0.988],-46,62.5,0,-46,62.5,66.6).s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(46.3875,-58.3125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFDFC8","#FFA360","#7C2C21"],[0,0.596,1],-2.1,7.1,0,-2.1,7.1,60).s().p("Aj4JHQiGgZg+hqQg8hnAkiGQAchnBQhSIAAgBQBmhoCLg2QB4guB0g5QBqg0BYhQIACgBQBOhIgJhYQgBgSANgRQAOgSAUgGIAAAAQAUgGAQAIIAAAAQAQAIABARQAOCJh6BvQhoBeh9A9IAAAAQh5A8h9AwIgCAAQhuAqhQBSQg5A9gVBLIgBACQgaBkAuBOQAvBRBlASQBWAQBXg5QBeg/AChdIABgCQABhjhlgUQhQgRgtBIQgLASgUAIIgBABQgTAIgRgFIgBAAQgRgGgFgQIAAAAQgEgRAKgSQBaiXCkAhIACABQCcAggDCbQgDCViYBkIAAAAQhlBChkAAQgcAAgcgFg");
	this.shape_1.setTransform(-0.0234,0.0233);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-58.7,96.6,117.5);


(lib.m1nose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFA360","#8F3225"],[0,0.988],-1.1,17.7,0.1,-13.2).s().p("AFIB3QhNgegGgzQgGgyBFgqQBFgqBngIQBogIBNAeQBOAeAGAzQAFAyhFAqQhFAphoAJQgWABgVAAQhMAAg9gXgAn9BhQhqgYhEgxQhFgxAJguQAJgvBRgRQBQgQBqAXQBpAYBFAxQBEAygJAuQgIAvhRAQQghAHgmAAQg1AAg+gOg");
	this.shape.setTransform(-2.2778,37.377);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFDFC8","#FFA360","#CB5234","#E1A477"],[0,0.596,0.847,0.988],-5.1,-12.3,0,-5.1,-12.3,150.6).s().p("AguJHQnLgfk3jBQk3jAATjxQAUjxFSiVQFTiUHKAeQHLAfE3DBQE3DAgTDxQgUDxlSCVQkZB7lrAAQhLAAhOgFg");
	this.shape_1.setTransform(0.0124,-0.0118);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-58.8,221.9,117.6);


(lib.m1leg1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFDFC8","#FFA360","#CB5234","#482D00"],[0,0.596,0.847,0.988],-6.2,2.2,0,-6.2,2.2,45).s().p("AAxGhQgegTAAgsIAAAAQAAgIAFgFQGNm4hsiEIAAAAQh4iEp/CpIAAAAQgGACgHgDIAAAAQgGgDgEgGIAAAAQgDgGACgHIAAAAQAWhtCehOIAAAAIAGgCIABAAQJ1hVBnDVIAAAAQBuDPmkHuQgGAHgIAAIAAAAIgTABQglAAgUgOg");
	this.shape.setTransform(-0.718,-0.6761);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-43.8,94.4,86.3);


(lib.m1jaw = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFD6B9","#E35427"],[0,1],-15.1,-42.4,0,-15.1,-42.4,127.6).s().p("AguJHQnLgfk3jBQk3jAATjxQAUjxFSiVQFTiUHKAeQHLAfE3DBQE3DAgTDxQgUDxlSCVQkZB7lrAAQhLAAhOgFg");
	this.shape.setTransform(0.0124,-0.0118);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.9,-58.8,221.9,117.6);


(lib.m1foot1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFDFC8","#FFA360","#CB5234","#E1A477"],[0,0.596,0.847,0.988],2.7,9.1,0,2.7,9.1,26.5).s().p("AiKFcQg3kagWjGQgLicAuhWQBWh5BqCcIC+HUQAlCPgyA+QgNAfhoAmQhFAZgtAAQhTAAgNhQg");
	this.shape.setTransform(8.0132,-9.6334);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,-52.4,43.5,85.6);


(lib.m1_pupil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BFE7F1","#000000"],[0,0.498],-0.2,-0.6,0,-0.2,-0.6,2.6).s().p("AgEAWQgJgCgFgHQgEgIABgIQACgKAIgFQAHgFAJACQAJACAFAHQAEAIgBAIQgCAKgIAFQgGAEgGAAIgEgBg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.5,4.5);


(lib.m1_mouth_wide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhdDVQh7gUhkgsQhjgshEg8QhEg7gchFQgchGAThHIAWASQAWARAsAbQAsAbBFAdQBEAdBdAYQBdAYB4AMQCUAOBzgBQByAABNgIQBNgIAngHIAogIQgRA4gtAuQgsAvhCAiQhDAjhTATQhTAUhdADIgfAAQhOAAhTgMg");
	mask.setTransform(3.8997,-12.6007);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FC9A68","#FF0000","#FF0000"],[0.004,0.506,0.757],-1.4,-15.5,0,-1.4,-15.5,26.1).s().p("AgxCwQhVgOg9giQg+gjgdguQgdguANgxQAFgRAKgQQALgRARgOQAhgcAwgSQAwgRA7gFQA7gFA+AKQBVAOA+AiQAUAMARANQAiAZATAfQAeAugNAxQgLAkghAcQggAcgxARQgwASg7AFQgUACgUAAQgnAAgqgHg");
	this.shape.setTransform(-11.688,11.5041,0.679,1,0,0,-1.285);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(1,1,1,0)").s().p("Ak7CiQhkgshEg8QhEg7gchFQgchFAUhIIAVASQAWARAsAbQAsAbBFAdQBEAdBdAYQBdAYB4AMQCVANBygBQByAABNgIQBNgGAngIIAogIQgRA4gsAvQgtAuhDAiQgfARgkANQgRgNgUgMQg/gihUgOQg/gKg7AFQg6AFgwARQgwASghAcQgRAOgLARQhSgThFgfg");
	this.shape_1.setTransform(3.8497,-13.9875);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E63A00","#000000"],[0.22,1],-29.7,29.5,0,-29.7,29.5,108.5).s().p("AhdDXQh8gUhjgsQhjgrhEg8QhEg7gchGQgchFAThIQAEgLAbAOQAbAOAwAdQAxAdBFAhQBFAiBYAbQBYAcBqALQBpAJBegDQBegCBMgJQBNgJA3gIQA3gIAcAAQAdgBgEAMQgQA4gtAvQgsAuhDAjQhCAihTAUQhTATheADIgiABQhMAAhRgNg");
	this.shape_2.setTransform(3.8689,-12.8771);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCC0A7").s().p("AhdDXQh8gUhjgsQhjgrhEg8QhEg7gchGQgchFAThIQADgLAOAMQANANAiAcQAiAbA/AhQA+AhBmAdQBlAdCVAPQCUANBrgBQBrgCBGgJQBHgJAogJQAogKAPgCQAPgCgEAMQgQA4gtAvQgsAvhDAiQhCAihTAUQhTATheAEIgeAAQhOAAhTgNg");
	this.shape_3.setTransform(3.7918,-11.4762);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-35.1,119.5,46.5);


(lib.m1_head_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FED3AB","#FE9156","#333333"],[0,0.596,1],-6.6,0.7,0,-6.6,0.7,84.2).s().p("AAyKKQm1gCjaitQjaitAIkvQAIk0EVisQEPipFOAKQHhlABcJSQB6BkAgCQQBEE5j8FiQiUDQiqAAQh3AAiDhng");
	this.shape.setTransform(-7.7069,-0.9127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-76.2,163.2,150.60000000000002);


(lib.m1_hair = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","#FF6600"],[0.478,1],0.4,49.9,0,0.4,49.9,91.5).s().p("AslHXQgSh4BygSQg1iqhVB2QASjdCYAdQgJhchjgRQBYhwBGACQgyh9BWhuQBDCSAwgJQg1iFCUh8QA0CNBLhKQBLhJhhhBQByiACCCuQBci5CQBSQhiBjBMBAQBNBAAzjUQC0BLhKDDQByg6Aeg6QCnCBiBCgQCeAHAXCtQhugTAVCMQAVCMBxhsQA2DpiGgKQAKBtBehLQAHDdkTgYIzuAHQArjgimA4g");
	this.shape.setTransform(0.0344,0.2494);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-63.6,169.5,127.80000000000001);


(lib.m1_eyebrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#482D00").s().p("AEMBFQhRhciAgnQiAgmhuA8QhjA1ggBqIAFgbQAbh7Bug9QBvg8B/AmQCBAnBHByQAcAtANAuQgPgdgcggg");
	this.shape.setTransform(11.8187,3.6187,0.4309,0.4309);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.9,26.8,11.1);


(lib.m1_eyeball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#CBD5E8","#D9E5F0"],[0.447,0.898,1],-1.9,-3.2,0,-1.9,-3.2,14.1).s().p("AgXB0QgfgHgXgVQgWgUgKgeQgKgdAHgfQAHggAUgXQAVgXAcgLQAdgKAfAGQAfAHAXAVQAWAUAKAeQAJAdgGAfQgHAhgUAXQgVAXgdAKQgRAGgTAAQgLAAgMgCg");
	this.shape.setTransform(0.0131,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-11.8,23.1,23.6);


(lib.m1_eyeshadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#964D25","#FE8849","#FFDFC8"],[0,0.482,1],1.3,-31.8,-1.2,31.8).s().p("AClEOQhDgIgzgpQgbgWgUgcQgTAcgbAWQgzAphDAIQhEAHg6geQg5gfgng5Qglg6gIhLQgIhLAbhAQAahBAzgpQAzgqBDgJQBDgGA6AfQA4AcAkA2QAlg2A4gcQA6gfBDAGQBDAJAzAqQAzApAaBBQAbBAgHBLQgJBLglA6QgnA5g5AfQgvAZg2AAIgZgCg");
	this.shape.setTransform(0,0.0414);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-27.1,86.8,54.400000000000006);


(lib.m1_ear1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#964D25","#FE8849","#FFDFC8"],[0,0.482,1],-38,-0.6,0,-38,-0.6,50).s().p("AkNEZQgogVggglIg3hAQAKikBfiGQCAi0DegIQAqgDArAEQCjAPBECLQAeA9gLBGQgWCJhmBgQhsBniSAbQgrAIgqAAQhqAAhegxg");
	this.shape.setTransform(2.3226,-1.3556);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC8AB").s().p("AmpDYQAIg7ARg6QASg+Aig2QAjg2AxgsQArgnAzgcQA0gdA5gQQA/gRBCgCQA+gCA9AHQA+ALAyAVQAxAVAcApQAdApAVA8QAVA8m3ByQj3BBh0AoIhPAOIAFgfg");
	this.shape_1.setTransform(-2.7396,-10.3462);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.8,-35,87.9,66.6);


(lib.info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 資料來源圖片
	this.instance = new lib.info_source();
	this.instance.setTransform(500,375,0.7923,0.7923);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 背景
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.478)").s().p("EhOHA6mMAAAh1LMCcPAAAMAAAB1Lg");
	this.shape.setTransform(500,375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.info, new cjs.Rectangle(0,0,1000,750), null);


(lib.sky_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.instance = new lib.GRAPHICsky("synched",0);
	this.instance.setTransform(275,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-0.9},150).to({_off:true},1).wait(149));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550.9,-200,1375.9,400);


(lib.middle_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// middleground
	this.instance = new lib.GRAPHICmiddle("synched",0);
	this.instance.setTransform(550,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-550},147).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1375,-60,2750,260);


(lib.fore_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// foreground
	this.instance = new lib.GRAPHICfore("synched",0);
	this.instance.setTransform(550,157);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-550},89).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1375,114,2750,86);


(lib.cowboy_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cowboy
	this.instance = new lib.cowboy_gr("synched",0);
	this.instance.setTransform(-84,87.05,0.7448,0.7448);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:80.85},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.2,-44.6,354.5,257.2);


(lib.back_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.GRAPHICback("synched",0);
	this.instance.setTransform(550,18.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-70.3},150).to({_off:true},1).wait(116));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-895.3,-56.9,2270.3,150);


(lib.dog_leg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.toe("synched",0);
	this.instance.setTransform(-13.65,19.2,0.9019,0.8982,0,-11.2538,157.6114);

	this.instance_1 = new lib.toe("synched",0);
	this.instance_1.setTransform(5.6,18.05,0.9716,1.0046,0,14.7262,0);

	this.instance_2 = new lib.toe("synched",0);
	this.instance_2.setTransform(17.05,14.15,0.9111,0.6898,0,-8.6745,-20.53);

	this.instance_3 = new lib.leg("synched",0);
	this.instance_3.setTransform(-1.2,-9.35,0.9716,1.0046,0,14.7262,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-38,56,71.6);


(lib.dog_arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.toe("synched",0);
	this.instance.setTransform(10.2,3.95,0.7687,0.5512,0,-14.1147,146.456,-11.2,-10.5);

	this.instance_1 = new lib.toe("synched",0);
	this.instance_1.setTransform(12.65,12.1,0.7509,0.799,0,-126.1867,62.0263,-3.6,-14.1);

	this.instance_2 = new lib.arm("synched",0);
	this.instance_2.setTransform(-7.7,-3.9,0.8902,1.1882,0,-50.2487,-55.0729);

	this.instance_3 = new lib.toe("synched",0);
	this.instance_3.setTransform(16.95,6.45,0.8872,0.5702,0,-90.667,-91.1688,-13.2,-13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-20.6,66.9,45.1);


(lib.dog_hero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.dog_brow1("synched",0);
	this.instance.setTransform(68,-118.7,1.27,0.6766,-153.5534);

	this.instance_1 = new lib.dog_pupil("synched",0);
	this.instance_1.setTransform(77.95,-81.45,1.2305,0.9163,-16.278);

	this.instance_2 = new lib.dog1_eyeball("synched",0);
	this.instance_2.setTransform(65.25,-78.05,1.3384,1.3384,24.0545);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

	// Layer_1
	this.instance_3 = new lib.dog_collar1("synched",0);
	this.instance_3.setTransform(20.85,-26.35,0.5499,0.5901,74.9432);

	this.instance_4 = new lib.dog_nose1("synched",0);
	this.instance_4.setTransform(67.3,13.5,0.9399,0.94,-5.3023,0,0,-168.5,21.6);

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(110.45,-70.85,1.0546,0.6636,0,16.1184,174.6982);

	this.instance_6 = new lib.dog_pupil("synched",0);
	this.instance_6.setTransform(97.1,-74.95,1.2778,0.6033,0,-1.9973,-6.6829);

	this.instance_7 = new lib.dog1_eyeball("synched",0);
	this.instance_7.setTransform(111.05,-76.35,1.4852,1.1203,0,35.0597,-5.3019);

	this.instance_8 = new lib.dog_brow1("synched",0);
	this.instance_8.setTransform(88.25,-95.2,0.7646,0.4078,0,129.8569,-50.1359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(4));

	// Layer_2
	this.instance_9 = new lib.dog_ear_flapping("synched",0);
	this.instance_9.setTransform(70.3,-51,0.999,0.999,8.4862,0,0,145.6,-33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4));

	// Layer_3
	this.instance_10 = new lib.dog_arm("synched",0);
	this.instance_10.setTransform(-1.95,-24.35,0.4476,0.4477,0,-24.0182,155.9792,-25.4,2.6);

	this.instance_11 = new lib.dog_leg("synched",0);
	this.instance_11.setTransform(-43.4,-4.25,0.4489,0.4489,26.9326,0,0,-14.9,-20.9);

	this.instance_12 = new lib.dog_bod2("synched",0);
	this.instance_12.setTransform(-71.85,-18.05,0.4369,0.4369,74.0618,0,0,-20.9,95.5);

	this.instance_13 = new lib.tail("synched",0);
	this.instance_13.setTransform(-64.4,-17.5,0.3561,0.4595,0,-71.9429,-63.1583);

	this.instance_14 = new lib.dog_arm("synched",0);
	this.instance_14.setTransform(3.65,-7.05,0.4489,0.4489,68.1382,0,0,-1.9,0.1);
	var instance_14Filter_1 = new cjs.ColorFilter(0.78,0.78,0.78,1,0,0,0,0);
	this.instance_14.filters = [instance_14Filter_1];
	this.instance_14.cache(-35,-23,71,49);

	this.instance_15 = new lib.dog_leg("synched",0);
	this.instance_15.setTransform(-69.1,3.05,0.3524,0.4568,73.0676);
	var instance_15Filter_2 = new cjs.ColorFilter(0.78,0.78,0.78,1,0,0,0,0);
	this.instance_15.filters = [instance_15Filter_2];
	this.instance_15.cache(-28,-40,60,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(4));
	this.timeline.addTween(cjs.Tween.get(instance_14Filter_1).wait(4));
	this.timeline.addTween(cjs.Tween.get(instance_15Filter_2).wait(4));

	// Layer_4
	this.instance_16 = new lib.dog_ear_flapping("synched",0);
	this.instance_16.setTransform(62.5,-43.05,1.003,1.3084,0,-13.6039,5.5086,139.2,-31.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.9,-137,664.9,164.4);


(lib.wing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.wing_flat("synched",0);
	this.instance.setTransform(-84.95,-6.95,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:0.1,scaleX:0.5257,x:-29.65},0).wait(2).to({regX:0,scaleX:0.2341,skewY:191.5084,x:4.95,y:-12.35},0).wait(2).to({regY:0.1,scaleX:0.1523,skewY:354.843,x:49.35,y:-8.4},0).wait(1).to({regX:0.2,scaleX:0.478,skewY:359.1458,x:87.5,y:-7.7},0).wait(1).to({regX:0.4,regY:0.2,scaleX:0.8402,skewY:359.1468,x:129.9,y:-8.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.7,-172.8,429.4,321.8);


(lib.butterfly = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wing
	this.instance = new lib.wing("synched",0);
	this.instance.setTransform(-63.75,-72.8,0.8838,1.0288,0,61.2915,51.861,-84.9,-7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// body
	this.instance_1 = new lib.body("synched",0);
	this.instance_1.setTransform(-47.8,32.4,1,1,59.9996);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// wing
	this.instance_2 = new lib.wing("synched",0);
	this.instance_2.setTransform(-93.2,-65.65,1.0067,0.9858,0,58.0295,53.1591,-84.5,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-220.5,-235.9,464.9,432.6);


(lib.m1arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.m1jaw("synched",0);
	this.instance.setTransform(-2.25,-68.5,0.1866,0.1866,-33.755);

	this.instance_1 = new lib.m1jaw("synched",0);
	this.instance_1.setTransform(-0.3,-83,0.1866,0.1866,-92.2545);

	this.instance_2 = new lib.m1jaw("synched",0);
	this.instance_2.setTransform(-13.8,-85,0.1866,0.1866,-92.2545);

	this.instance_3 = new lib.m1jaw("synched",0);
	this.instance_3.setTransform(-27.8,-83,0.1866,0.1866,-92.2545);

	this.instance_4 = new lib.m1jaw("synched",0);
	this.instance_4.setTransform(-11.95,-25.7,0.6111,0.1866,-92.2545,0,0,-0.1,0);

	this.instance_5 = new lib.m1jaw("synched",0);
	this.instance_5.setTransform(7,57.55,0.4438,0.1866,-117.661,0,0,-0.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.7,-105.7,69.9,207.5);


(lib.cowboy_final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cowboy
	this.instance = new lib.cowboy_mc("synched",0);
	this.instance.setTransform(-87.85,82.15,1,1,0,0,0,-84,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150).to({mode:"single"},0).wait(30));

	// foreground
	this.instance_1 = new lib.fore_mc("synched",0);
	this.instance_1.setTransform(0.05,157.55,1,1,0,0,0,0,157);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150).to({mode:"single",startPosition:60},0).wait(30));

	// middleground
	this.instance_2 = new lib.middle_mc("synched",0);
	this.instance_2.setTransform(0.5,70,1,1,0,0,0,0,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150).to({mode:"single",startPosition:2},0).wait(30));

	// background
	this.instance_3 = new lib.back_mc("synched",0);
	this.instance_3.setTransform(0,-19.75,1,1,0,0,0,0,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({mode:"single",startPosition:150},0).wait(30));

	// sky
	this.instance_4 = new lib.sky_mc("synched",0);
	this.instance_4.setTransform(0.35,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({mode:"single",startPosition:150},0).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1374.9,-200,2750.4,410.7);


(lib.dog_hero_final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dog_hero
	this.instance = new lib.dog_hero("synched",0);
	this.instance.setTransform(14.05,32.85,0.4568,0.4568,-18.4731,0,0,78.3,-35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:70.7,regY:-40.6,scaleX:0.4569,scaleY:0.4569,rotation:-18.474,x:9.95,y:31.2,startPosition:1},0).wait(1).to({y:30.2,startPosition:2},0).wait(1).to({y:28.65,startPosition:3},0).wait(1).to({y:26.6,startPosition:0},0).wait(1).to({y:24.2,startPosition:1},0).wait(1).to({y:21.65,startPosition:2},0).wait(1).to({y:19.1,startPosition:3},0).wait(1).to({y:16.75,startPosition:0},0).wait(1).to({y:14.75,startPosition:1},0).wait(1).to({y:13.25,startPosition:2},0).wait(1).to({y:12.3,startPosition:3},0).wait(1).to({y:12.05,startPosition:0},0).wait(1).to({y:12.45,startPosition:1},0).wait(1).to({y:13.5,startPosition:2},0).wait(1).to({y:15.1,startPosition:3},0).wait(1).to({y:17.2,startPosition:0},0).wait(1).to({y:19.6,startPosition:1},0).wait(1).to({y:22.15,startPosition:2},0).wait(1).to({y:24.7,startPosition:3},0).wait(1).to({y:27,startPosition:0},0).wait(1).to({y:29,startPosition:1},0).wait(1).to({y:30.45,startPosition:2},0).wait(1).to({y:31.3,startPosition:3},0).wait(1).to({y:31.5,startPosition:0},0).wait(1).to({y:31.05,startPosition:1},0).wait(1).to({y:29.95,startPosition:2},0).wait(1).to({y:28.25,startPosition:3},0).wait(1).to({y:26.1,startPosition:0},0).wait(1).to({y:23.7,startPosition:1},0).wait(1).to({y:21.15,startPosition:2},0).wait(1).to({y:18.6,startPosition:3},0).wait(1).to({y:16.3,startPosition:0},0).wait(1).to({y:14.4,startPosition:1},0).wait(1).to({y:13,startPosition:2},0).wait(1).to({y:12.2,startPosition:3},0).wait(1).to({y:12.05,startPosition:0},0).wait(1).to({y:12.6,startPosition:1},0).wait(1).to({y:13.75,startPosition:2},0).wait(1).to({y:15.5,startPosition:3},0).wait(1).to({y:17.65,startPosition:0},0).wait(1).to({y:20.1,startPosition:1},0).wait(1).to({y:22.7,startPosition:2},0).wait(1).to({y:25.2,startPosition:3},0).wait(1).to({y:27.45,startPosition:0},0).wait(1).to({y:29.3,startPosition:1},0).wait(1).to({y:30.65,startPosition:2},0).wait(1).to({y:31.4,startPosition:3},0).wait(1).to({y:31.45,startPosition:0},0).wait(1).to({y:30.85,startPosition:1},0).wait(1).to({y:29.65,startPosition:2},0).wait(1).to({y:27.85,startPosition:3},0).wait(1).to({y:25.65,startPosition:0},0).wait(1).to({y:23.2,startPosition:1},0).wait(1).to({y:20.6,startPosition:2},0).wait(1).to({y:18.15,startPosition:3},0).wait(1).to({y:15.9,startPosition:0},0).wait(1).to({y:14.1,startPosition:1},0).wait(1).to({y:12.8,startPosition:2},0).wait(1).to({y:12.1,startPosition:3},0).wait(1).to({startPosition:0},0).wait(1).to({y:12.8,startPosition:1},0).wait(1).to({y:14.1,startPosition:2},0).wait(1).to({y:15.9,startPosition:3},0).wait(1).to({y:18.15,startPosition:0},0).wait(1).to({y:20.6,startPosition:1},0).wait(1).to({y:23.2,startPosition:2},0).wait(1).to({y:25.65,startPosition:3},0).wait(1).to({y:27.85,startPosition:0},0).wait(1).to({y:29.65,startPosition:1},0).wait(1).to({y:30.85,startPosition:2},0).wait(1).to({y:31.45,startPosition:3},0).wait(1).to({y:31.4,startPosition:0},0).wait(1).to({y:30.65,startPosition:1},0).wait(1).to({y:29.3,startPosition:2},0).wait(1).to({y:27.45,startPosition:3},0).wait(1).to({y:25.2,startPosition:0},0).wait(1).to({y:22.7,startPosition:1},0).wait(1).to({y:20.1,startPosition:2},0).wait(1).to({y:17.65,startPosition:3},0).wait(1).to({y:15.5,startPosition:0},0).wait(1).to({y:13.75,startPosition:1},0).wait(1).to({y:12.6,startPosition:2},0).wait(1).to({y:12.05,startPosition:3},0).wait(1).to({y:12.2,startPosition:0},0).wait(1).to({y:13,startPosition:1},0).wait(1).to({y:14.4,startPosition:2},0).wait(1).to({y:16.3,startPosition:3},0).wait(1).to({y:18.6,startPosition:0},0).wait(1).to({y:21.15,startPosition:1},0).wait(1).to({y:23.7,startPosition:2},0).wait(1).to({y:26.1,startPosition:3},0).wait(1).to({y:28.25,startPosition:0},0).wait(1).to({y:29.95,startPosition:1},0).wait(1).to({y:31.05,startPosition:2},0).wait(1).to({y:31.5,startPosition:3},0).wait(1).to({y:31.3,startPosition:0},0).wait(1).to({y:30.45,startPosition:1},0).wait(1).to({y:29,startPosition:2},0).wait(1).to({y:27,startPosition:3},0).wait(1).to({y:24.7,startPosition:0},0).wait(1).to({y:22.15,startPosition:1},0).wait(1).to({y:19.6,startPosition:2},0).wait(1).to({y:17.2,startPosition:3},0).wait(1).to({y:15.1,startPosition:0},0).wait(1).to({y:13.5,startPosition:1},0).wait(1).to({y:12.45,startPosition:2},0).wait(1).to({y:12.05,startPosition:3},0).wait(1).to({y:12.3,startPosition:0},0).wait(1).to({y:13.25,startPosition:1},0).wait(1).to({y:14.75,startPosition:2},0).wait(1).to({y:16.75,startPosition:3},0).wait(1).to({y:19.1,startPosition:0},0).wait(1).to({y:21.65,startPosition:1},0).wait(1).to({y:24.2,startPosition:2},0).wait(1).to({y:26.6,startPosition:3},0).wait(1).to({y:28.65,startPosition:0},0).wait(1).to({y:30.2,startPosition:1},0).wait(1).to({y:31.2,startPosition:2},0).wait(1).to({y:31.55,startPosition:3},0).wait(1).to({regX:79.5,regY:-36,scaleX:0.4568,scaleY:0.4568,rotation:-18.4731,x:14.15,y:32.85,mode:"single",startPosition:0},0).wait(30));
	this.instance.addEventListener("tick", AdobeAn.handleFilterCache);

	// blur
	this.instance_1 = new lib.blur("synched",0);
	this.instance_1.setTransform(139.55,8.75,0.1956,0.1707,0,26.368,-20.7365,1.4,2.6);

	this.instance_2 = new lib.blur("synched",0);
	this.instance_2.setTransform(420,-258.1,0.5266,0.2667,0,-19.8719,-20.6616,0.1,0.9);

	this.instance_3 = new lib.blur("synched",0);
	this.instance_3.setTransform(-420.35,-18.2,0.4671,0.2891,0,-16.6471,-17.4341,0.4,-0.1);

	this.instance_4 = new lib.blur("synched",0);
	this.instance_4.setTransform(285.4,-3,0.2481,0.2129,0,26.9305,-20.2805,0.7,1.6);

	this.instance_5 = new lib.blur("synched",0);
	this.instance_5.setTransform(-123.75,395.6,0.6685,0.3317,-17.0372,0,0,0.1,0.4);

	this.instance_6 = new lib.blur("single",8);
	this.instance_6.setTransform(-119.7,279.5,0.6685,0.3317,-17.0372,0,0,0.1,0.4);

	this.instance_7 = new lib.blur("single",10);
	this.instance_7.setTransform(96.55,237.95,0.3242,0.1966,-17.0357,0,0,0.4,-0.1);

	this.instance_8 = new lib.blur("synched",0);
	this.instance_8.setTransform(9.5,-92.95,0.4617,0.3596,-17.0393,0,0,0.2,0.1);

	this.instance_9 = new lib.blur("single",13);
	this.instance_9.setTransform(103.3,-18.95,0.3996,0.239,-17.0377,0,0,0.1,0.2);

	this.instance_10 = new lib.blur("synched",0);
	this.instance_10.setTransform(227.95,44.5,0.4072,0.2295,-17.0389,0,0,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},120).wait(30));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CC9626","#B92130"],[0,1],1.7,159,2.8,-63.5).s().p("Egq9AfQMAAAg+fMBV7AAAMAAAA+fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1676.4,-568.7,2522.1000000000004,1687.8);


(lib.butterfly_circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// butterfly
	this.instance = new lib.butterfly("synched",0);
	this.instance.setTransform(-68.3,-84.8,0.1462,0.1462,0,0,0,-77,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-66.3,guide:{path:[-68.2,-84.7,-41,-98.5,-10.6,-101.6,21.8,-104.7,51.2,-91.4,77.8,-79.1,103.9,-65.2,127.6,-52.5,153.3,-44.6,177.4,-36.9,180.6,-15.8]}},19).to({regX:-76.6,skewY:180,guide:{path:[180.6,-15.6,181.4,-10.2,180.9,-4,180.7,-2.6,180.6,-1.2]}},1).to({regX:-76.2,guide:{path:[180.5,-1.1,177.1,29.8,159,34,140.2,38.5,113.6,31.5,87,24.5,70.2,-4.6,53.3,-33.8,22.4,-5.6,-8.5,22.5,-65.6,1.9,-123.3,-19.1,-139.6,-3.4,-155.9,12.3,-193.3,6.2,-230.6,0,-254,-1.7,-256,-1.8,-257.6,-2.3]}},34).to({regX:-76,skewY:0,guide:{path:[-257.6,-2.4,-264.9,-4.6,-264.6,-14.1]}},1).to({regX:-77,regY:-66,guide:{path:[-264.6,-14.2,-264.2,-27.5,-249.1,-55,-220.7,-106.7,-174.1,-95.3,-127.6,-84,-107.2,-80.8,-86.7,-77.6,-79.2,-79.6]}},16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.7,-120.4,501.4,178.7);


(lib.monkey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// m1_nose
	this.instance = new lib.m1nose("synched",0);
	this.instance.setTransform(0.25,-24.4,0.0922,0.1138,0,12.6987,9.1941);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// m1_mouth_wide
	this.instance_1 = new lib.m1_mouth_wide("synched",0);
	this.instance_1.setTransform(-6.2,21.3,0.8048,0.8238,0,9.2521,0.063);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// m1_pupil
	this.instance_2 = new lib.m1_pupil("synched",0);
	this.instance_2.setTransform(11.85,-30.75,1.2609,1.457,5.0157);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// m1_pupil
	this.instance_3 = new lib.m1_pupil("synched",0);
	this.instance_3.setTransform(-0.15,-32.7,1.1902,1.4282,5.0156);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// m1_eyebrow
	this.instance_4 = new lib.m1_eyebrow("synched",0);
	this.instance_4.setTransform(31.85,-44.85,0.7509,0.636,0,28.2375,-151.7601);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// m1_eyebrow
	this.instance_5 = new lib.m1_eyebrow("synched",0);
	this.instance_5.setTransform(-10.1,-50.25,0.6151,0.4706,-8.758);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

	// m1_eyeball
	this.instance_6 = new lib.m1_eyeball("synched",0);
	this.instance_6.setTransform(14.55,-30.5,0.7437,0.7437,-2.0143);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20));

	// m1_eyeball
	this.instance_7 = new lib.m1_eyeball("synched",0);
	this.instance_7.setTransform(-2.05,-32.3,0.7435,0.7435,15.5219);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20));

	// m1_jaw
	this.instance_8 = new lib.m1jaw("synched",0);
	this.instance_8.setTransform(2.8,6.1,0.4946,0.497,0,9.5378,6.4384);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20));

	// m1_eye_shadow
	this.instance_9 = new lib.m1_eyeshadow("synched",0);
	this.instance_9.setTransform(8.6,-32.1,0.4651,0.495,0,6.9051,7.5487);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(20));

	// m1_head_1
	this.instance_10 = new lib.m1_head_1("synched",0);
	this.instance_10.setTransform(12,-15.75,0.4898,0.4946,0,95.5572,97.5785);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20));

	// m1_hair
	this.instance_11 = new lib.m1_hair("synched",0);
	this.instance_11.setTransform(18.2,-39.65,0.4564,0.4969,0,9.4782,11.5481);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20));

	// m1_ear1
	this.instance_12 = new lib.m1_ear1("synched",0);
	this.instance_12.setTransform(61.4,-15.7,0.5368,0.5167,0,5.0153,13.2395);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20));

	// m1_ear1
	this.instance_13 = new lib.m1_ear1("synched",0);
	this.instance_13.setTransform(-17.75,-28.1,0.4965,0.4955,0,5.0161,-171.1704);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20));

	// m1_leg1
	this.instance_14 = new lib.m1leg1("synched",0);
	this.instance_14.setTransform(13.15,96.2,0.5773,0.5773,5.0161,0,0,-47,-23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20));

	// m1_foot1
	this.instance_15 = new lib.m1foot1("synched",0);
	this.instance_15.setTransform(41.15,133.4,0.5773,0.5773,5.0161,0,0,3,-47.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(20));

	// monkey_bod1
	this.instance_16 = new lib.monkey_bod1("synched",0);
	this.instance_16.setTransform(9.35,12.05,0.5619,0.5619,57.6486,0,0,-63.4,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(20));

	// m1_leg1
	this.instance_17 = new lib.m1leg1("synched",0);
	this.instance_17.setTransform(-8.05,82.55,0.4929,0.5381,0,26.2112,-137.6358,-39.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20));

	// m1_foot1
	this.instance_18 = new lib.m1foot1("synched",0);
	this.instance_18.setTransform(-42,101.15,0.5773,0.5773,0,65.0152,-114.9848,5.7,-43.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(20));

	// m1_tail1
	this.instance_19 = new lib.m1tail1();
	this.instance_19.setTransform(2.9,96.3,0.8459,0.9591,0,25.7742,22.9972,44.2,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regX:44.1,regY:-49.9,skewX:-55.7125,skewY:-58.4905,y:96.35},9).to({regX:44.2,regY:-50,skewX:25.7742,skewY:22.9972,y:96.3},10).wait(1));

	// m1_arm
	this.instance_20 = new lib.m1arm();
	this.instance_20.setTransform(65.6,-76.45,1,1,0,6.7404,-173.2596);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20));

	// m1_arm
	this.instance_21 = new lib.m1arm();
	this.instance_21.setTransform(-45.9,-79.45,1,1,-6.7404);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-184.3,231.4,406);


(lib.ans4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.parent.info_btn.visible = true;
		this.parent.play_btn.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(179).call(this.frame_179).wait(1));

	// 外框
	this.instance = new lib.外框();
	this.instance.setTransform(307.75,213.5,1,1,0,0,0,241.8,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180));

	// 編號
	this.instance_1 = new lib.num4();
	this.instance_1.setTransform(502.6,339.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgglAeHMAAAg1HMBLkAAAMAAAA1Hg");
	mask.setTransform(275.15,192.725);

	// 影片片段動畫
	this.instance_2 = new lib.cowboy_final("synched",0);
	this.instance_2.setTransform(296.2,217.7,0.8763,0.8763,0,0,0,0.2,5.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.5,41,488.70000000000005,345);


(lib.ans3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.parent.ans4.play()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(1));

	// 外框
	this.instance = new lib.外框();
	this.instance.setTransform(307.75,213.5,1,1,0,0,0,241.8,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// 編號
	this.instance_1 = new lib.num3();
	this.instance_1.setTransform(100.1,355.75,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgglAeHMAAAg1HMBLkAAAMAAAA1Hg");
	mask.setTransform(275.15,192.725);

	// 影片片段動畫
	this.instance_2 = new lib.dog_hero_final("synched",0);
	this.instance_2.setTransform(-117.15,486.1,1.0029,1.0029,0,0,0,-419.3,275.2);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.5,41,488.70000000000005,345);


(lib.butterfly_final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// butterfly_circle
	this.instance = new lib.butterfly("single",0);
	this.instance.setTransform(-7.3,-47.1,0.146,0.1441,0,0,0,-67.8,-84.7);

	this.instance_1 = new lib.butterfly_circle("synched",0);
	this.instance_1.setTransform(-8.7,-44.4,1,1,0,0,0,-68.3,-84.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},23).to({state:[{t:this.instance_1}]},17).to({state:[{t:this.instance}]},73).to({state:[{t:this.instance}]},41).to({state:[]},1).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance}]},45).to({state:[{t:this.instance}]},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({mode:"synched"},0).to({_off:true},17).wait(73).to({_off:false,x:-7.4,y:-47.35},0).to({guide:{path:[-7.3,-47.4,18.9,-57.3,28.6,-57.4,35.9,-57.6,43.3,-57.1,52.4,-56.3,61.7,-55,71.3,-53.4,81,-54.6,83.8,-55.1,86.5,-55.9,95.5,-58,104.3,-60,112.9,-62.2,121.9,-62.6,130,-62.8,138.1,-61.6,146.7,-60.3,155.2,-58.6,164.3,-56.6,173.8,-55.5,182.4,-54.5,191,-54.5,201,-54.6,210.6,-57,218.5,-58.9,226.3,-61.5,235.3,-64.4,244,-68.1,251.4,-71.1,258.8,-74.5,267,-78.4,275,-82.4,282.6,-86.2,301.3,-95.7,311.7,-99.9,326.1,-102.8,343.7,-106.3,356.6,-105.7]},startPosition:1},41).to({_off:true},1).wait(14).to({_off:false,x:-349.35,y:-90.4,startPosition:0},0).to({guide:{path:[-349.3,-90.3,-339,-89.8,-328.7,-91.3,-297.7,-95.9,-270.3,-111.3,-243,-126.8,-213.2,-136.5,-183.5,-146.3,-152.9,-140.5,-121.1,-134.8,-91.8,-129.5,-62.6,-124.2,-44.2,-102.3,-25.8,-80.4,-7.3,-47.1]}},45).wait(1).to({mode:"single"},0).wait(25));

	// bg
	this.instance_2 = new lib.flower();
	this.instance_2.setTransform(-135,-177,0.69,0.69);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371.5,-177,755.3,276);


(lib.monkey_final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// monkey
	this.instance = new lib.monkey("single",0);
	this.instance.setTransform(26.85,-131.25,1,1,7.194,0,0,11,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-4.9449,mode:"independent"},14).to({rotation:7.194},15).wait(1).to({mode:"single",startPosition:0},0).to({rotation:-4.9449,mode:"independent"},14).to({rotation:7.194},15).wait(31));

	// vine
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#336633").ss(8,1,1).p("EhCagMNUBW6Ao4At7gbh");
	this.shape.setTransform(18.425,-194.816);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#336633").ss(8,1,1).p("EhCZgMHUBVOApNAvlgc0");
	this.shape_1.setTransform(18.325,-195.4081);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#336633").ss(8,1,1).p("EhCZgMCUBTiApiAxRgeF");
	this.shape_2.setTransform(18.25,-195.9599);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#336633").ss(8,1,1).p("EhCYgL9UBR1Ap2Ay8gfW");
	this.shape_3.setTransform(18.15,-196.4786);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#336633").ss(8,1,1).p("EhCXgL4UBQJAqLA0mggp");
	this.shape_4.setTransform(18.075,-196.9742);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#336633").ss(8,1,1).p("EhCWgLzUBOcAqfA2Rgh7");
	this.shape_5.setTransform(17.975,-197.4327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#336633").ss(8,1,1).p("EhCVgLvUBMvAq0A38gjN");
	this.shape_6.setTransform(17.9,-197.8639);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#336633").ss(8,1,1).p("EhCUgLrUBLDArIA5mgkf");
	this.shape_7.setTransform(17.8,-198.2695);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#336633").ss(8,1,1).p("EhCTgLpUBI8ArlA7rgl6");
	this.shape_8.setTransform(17.7,-198.4396);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#336633").ss(8,1,1).p("EhCSgLoUBG1AsDA9wgnV");
	this.shape_9.setTransform(17.625,-198.5809);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#336633").ss(8,1,1).p("EhCRgLmUBEvAsfA/0gov");
	this.shape_10.setTransform(17.525,-198.7056);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#336633").ss(8,1,1).p("EhCRgLlUBCpAs8BB6gqK");
	this.shape_11.setTransform(17.45,-198.8098);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#336633").ss(8,1,1).p("EhCQgLlUBAkAtaBD9grl");
	this.shape_12.setTransform(17.35,-198.895);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#336633").ss(8,1,1).p("EhCPgLkUA+cAt3BGDgtA");
	this.shape_13.setTransform(17.275,-198.956);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#336633").ss(8,1,1).p("EhCOgLgUA8WAuUBIHgub");
	this.shape_14.setTransform(17.175,-199.327);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#336633").ss(8,1,1).p("EhCPgLjUA99At1BGigtC");
	this.shape_15.setTransform(17.25,-199.0569);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#336633").ss(8,1,1).p("EhCQgLiUA/lAtVBE8grp");
	this.shape_16.setTransform(17.35,-199.1054);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#336633").ss(8,1,1).p("EhCQgLiUBBMAs2BDVgqQ");
	this.shape_17.setTransform(17.425,-199.1257);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#336633").ss(8,1,1).p("EhCRgLiUBCyAsXBBxgo4");
	this.shape_18.setTransform(17.5,-199.1293);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#336633").ss(8,1,1).p("EhCSgLiUBEaAr4BALgnf");
	this.shape_19.setTransform(17.575,-199.1151);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#336633").ss(8,1,1).p("EhCTgLjUBGBArZA+mgmG");
	this.shape_20.setTransform(17.675,-199.0942);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#336633").ss(8,1,1).p("EhCUgLjUBHpAq6A9Agku");
	this.shape_21.setTransform(17.75,-199.0394);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#336633").ss(8,1,1).p("EhCUgLnUBI3AqmA7ygjg");
	this.shape_22.setTransform(17.825,-198.6921);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#336633").ss(8,1,1).p("EhCVgLqUBKGAqSA6lgiT");
	this.shape_23.setTransform(17.925,-198.3218);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#336633").ss(8,1,1).p("EhCWgLuUBLWAp+A5XghG");
	this.shape_24.setTransform(18,-197.9281);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#336633").ss(8,1,1).p("EhCXgLyUBMlApqA4Kgf4");
	this.shape_25.setTransform(18.1,-197.5095);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#336633").ss(8,1,1).p("EhCYgL3UBNzApWA2+geq");
	this.shape_26.setTransform(18.175,-197.0647);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#336633").ss(8,1,1).p("EhCZgL8UBPDApCA1wgdd");
	this.shape_27.setTransform(18.25,-196.5917);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#336633").ss(8,1,1).p("EhCagMBUBQSAouA0jgcQ");
	this.shape_28.setTransform(18.35,-196.0887);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#336633").ss(8,1,1).p("EhCagMGUBRgAoaAzVgbD");
	this.shape_29.setTransform(18.425,-195.5518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(31));

	// 背景
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFCC").s().p("EhQLA0aMAAAhozMCgXAAAMAAABozg");
	this.shape_30.setTransform(30.275,18.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-482.9,-317,1026.4,670.9);


(lib.ans2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
	}
	this.frame_239 = function() {
		this.parent.ans3.play()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(239).call(this.frame_239).wait(1));

	// 外框
	this.instance = new lib.外框();
	this.instance.setTransform(307.75,213.5,1,1,0,0,0,241.8,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// 編號
	this.instance_1 = new lib.num2();
	this.instance_1.setTransform(518.6,76.75,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(240));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgglAeHMAAAg1HMBLkAAAMAAAA1Hg");
	mask.setTransform(275.15,192.725);

	// 影片片段動畫
	this.instance_2 = new lib.butterfly_final("synched",0);
	this.instance_2.setTransform(305.1,214.15,1.1833,1.1833,0,0,0,3.1,-38.9);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(240));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.5,41,488.70000000000005,345);


(lib.ans1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.parent.ans2.play()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(1));

	// 外框
	this.instance = new lib.外框();
	this.instance.setTransform(307.75,213.5,1,1,0,0,0,241.8,170);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// 編號
	this.instance_1 = new lib.num1();
	this.instance_1.setTransform(100.1,76.75,1,1,0,0,0,16,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	// 遮色片 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgglAeHMAAAg1HMBLkAAAMAAAA1Hg");
	mask.setTransform(275.15,192.725);

	// 影片片段動畫
	this.instance_2 = new lib.monkey_final("synched",0);
	this.instance_2.setTransform(321,216.15,0.5707,0.5707,0,0,0,30.2,18.6);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.5,41,488.70000000000005,345);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* 按一下舞台上 n1 會執行 n1 內影格切換顯示 */
		var _this = this;
		this.info.visible = false;
		
		this.play_btn.addEventListener('click', beginPlay);
		this.info_btn.addEventListener('click', displayInfo);
		this.info.addEventListener('click', turnoffInfo);
		
		function displayInfo() {
			_this.play_btn.visible = false;
			_this.info.visible = true;
		}
		
		function turnoffInfo() {
			_this.play_btn.visible = true;
			_this.info.visible = false;
		};
		
		function beginPlay() {
			_this.play_btn.visible = false;
			_this.info_btn.visible = false;
			_this.ans1.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// info參考資料
	this.info = new lib.info();
	this.info.name = "info";
	this.info.setTransform(512.3,384.1,1.024,1.024,0,0,0,500.3,375.1);
	this.info.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.info).wait(1));

	// 按鈕
	this.info_btn = new lib.info_btn();
	this.info_btn.name = "info_btn";
	this.info_btn.setTransform(942,35.55,0.5202,0.5202,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.info_btn, 0, 1, 2, false, new lib.info_btn(), 3);

	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(512,404);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play_btn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn},{t:this.info_btn}]}).wait(1));

	// 主題
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(397.9,19.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ans1圖層
	this.ans1 = new lib.ans1();
	this.ans1.name = "ans1";
	this.ans1.setTransform(285.85,214.85,1,1,0,0,0,328.7,191.5);

	this.timeline.addTween(cjs.Tween.get(this.ans1).wait(1));

	// ans2圖層
	this.ans2 = new lib.ans2();
	this.ans2.name = "ans2";
	this.ans2.setTransform(762,224.55,1,1,0,0,0,309.9,202.2);

	this.timeline.addTween(cjs.Tween.get(this.ans2).wait(1));

	// ans3圖層
	this.ans3 = new lib.ans3();
	this.ans3.name = "ans3";
	this.ans3.setTransform(285.85,562.7,1,1,0,0,0,328.7,191.5);

	this.timeline.addTween(cjs.Tween.get(this.ans3).wait(1));

	// ans4圖層
	this.ans4 = new lib.ans4();
	this.ans4.name = "ans4";
	this.ans4.setTransform(762,573.4,1,1,0,0,0,309.9,202.2);

	this.timeline.addTween(cjs.Tween.get(this.ans4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-66,384,2019.4,774.3);
// library properties:
lib.properties = {
	id: '860A25E6F1FFB34A980D63BBD25A63A6',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFF3FF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['860A25E6F1FFB34A980D63BBD25A63A6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;