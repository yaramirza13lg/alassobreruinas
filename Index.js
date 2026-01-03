(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Index_atlas_1", frames: [[0,1806,1214,169],[0,0,960,600],[962,0,960,600],[0,602,960,600],[962,602,960,600],[0,1204,960,600]]},
		{name:"Index_atlas_2", frames: [[0,0,1214,169],[0,171,1214,169],[0,342,1214,169],[1216,0,20,35],[1216,37,20,35],[1216,74,20,35],[1216,111,20,35],[1216,148,20,35]]}
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



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._14 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._24 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._32 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._41 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._51 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BTNJUGAR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// texto
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(28.45,30.75,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(32.85,30.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(32.85,30.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(32.85,30.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// fondo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg0FALUIAA2oMBoLAAAIAAWog");
	this.shape.setTransform(333.35,72.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6666CC").s().p("Eg0FALUIAA2oMBoLAAAIAAWog");
	this.shape_1.setTransform(333.35,72.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,666.7,144.9);


(lib.btnatras = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjYAGIGqj9IAHHvg");
	this.shape.setTransform(21.675,24.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.4,49.7);


(lib.botonsiguiente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjYj3IGxDyImqD9g");
	this.shape.setTransform(21.675,24.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.4,49.7);


// stage content:
(lib.Interactivojuego = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		this.siguiente1.addEventListener("click", ira1.bind(this));
		
		function ira1()
		{
			this.gotoAndStop(1);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras.addEventListener("click", fl_ClickToGoToAndStopAtFrame_13.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_13()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_1 = function() {
		this.siguiente1.addEventListener("click", ira2.bind(this));
		
		function ira2()
		{
			this.gotoAndStop(2);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras.addEventListener("click", atras1.bind(this));
		
		function atras1()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_2 = function() {
		this.siguiente1.addEventListener("click", ira3.bind(this));
		
		function ira3()
		{
			this.gotoAndStop(3);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras.addEventListener("click", atras2.bind(this));
		
		function atras2()
		{
			this.gotoAndStop(1);
		}
	}
	this.frame_3 = function() {
		this.siguiente1.addEventListener("click", ira4.bind(this));
		
		function ira4()
		{
			this.gotoAndStop(4);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras.addEventListener("click", atras3.bind(this));
		
		function atras3()
		{
			this.gotoAndStop(2);
		}
	}
	this.frame_4 = function() {
		this.siguiente1.addEventListener("click", ira5.bind(this));
		
		function ira5()
		{
			this.gotoAndStop(5);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras.addEventListener("click", atras3.bind(this));
		
		function atras3()
		{
			this.gotoAndStop(3);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras.addEventListener("click", atras5.bind(this));
		
		function atras5()
		{
			this.gotoAndStop(3);
		}
		
		
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.siguiente1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_12.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_12()
		{
			this.gotoAndStop(4);
		}
		
		
		
		this.siguiente1.addEventListener("click", siguiente5.bind(this));
		
		function siguiente5()
		{
			this.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		/* Hacer clic para ir al fotograma y detener
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y detiene la película.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		
		this.atras.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop(5);
		}
		
		
		
		
		this.atras.addEventListener("click", atras4.bind(this));
		
		function atras4()
		{
			this.gotoAndStop(4);
		}
		
		
		/* Hacer clic para ir a página Web
		Al hacer clic en la instancia del símbolo especificado, la dirección URL se carga en una nueva ventana del navegador.
		
		Instrucciones:
		1. Reemplace http://www.adobe.com por la dirección URL que desee.
		      Conserve las comillas ("").
		*/
		
		this.btnJuego.addEventListener("click", iraljuego);
		
		function iraljuego() {
			window.open("juego.html", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// BTN
	this.atras = new lib.btnatras();
	this.atras.name = "atras";
	this.atras.setTransform(864.8,551.9,1,1,0,0,0,21.7,24.8);
	new cjs.ButtonHelper(this.atras, 0, 1, 1);

	this.siguiente1 = new lib.botonsiguiente();
	this.siguiente1.name = "siguiente1";
	this.siguiente1.setTransform(920.3,551.95,1,1,0,0,0,21.7,24.8);
	new cjs.ButtonHelper(this.siguiente1, 0, 1, 1);

	this.btnJuego = new lib.BTNJUGAR();
	this.btnJuego.name = "btnJuego";
	this.btnJuego.setTransform(473.55,288.45,1,1,0,0,0,333.4,72.5);
	new cjs.ButtonHelper(this.btnJuego, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.siguiente1},{t:this.atras}]}).to({state:[{t:this.atras},{t:this.btnJuego}]},5).wait(1));

	// NumeroDePagina
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(899,44.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(899,44.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_8();
	this.instance_2.setTransform(899,44.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_9();
	this.instance_3.setTransform(899,44.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_10();
	this.instance_4.setTransform(899,44.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(1));

	// Ilustraciones
	this.instance_5 = new lib._14();

	this.instance_6 = new lib._24();

	this.instance_7 = new lib._32();

	this.instance_8 = new lib._41();

	this.instance_9 = new lib._51();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,300,480,300);
// library properties:
lib.properties = {
	id: '90F6F0A551CB7249979E5FA6C863304D',
	width: 960,
	height: 600,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Index_atlas_1.png?1767404157932", id:"Index_atlas_1"},
		{src:"images/Index_atlas_2.png?1767404157933", id:"Index_atlas_2"}
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
an.compositions['90F6F0A551CB7249979E5FA6C863304D'] = {
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