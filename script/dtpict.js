//
// dt-pic
// orientation - abhängiger Picture-Slider
// Konstanten: 
// 		Width: Vom umgebenden Container
//		Ratio: Bildproportionen
//		orientation: von Window
//	Parameter :
//		container: ID
//		Spalten bei horizontalDarstellung:
//		Zeilen bei vertikalDarstellung

var slider={
				container 	: "hierdrin",
				ratio 	  	: "2:3", 
				orientation : "horizontal",
				columns		: 2,
				rows 		: 1,

				init		: function(container, ratio, columns, rows ) {
										this.container = container;
										this.ratio = ratio;
										this.columns = columns;
										this.rows = rows;					
										
										};,
				test		: function(){

				};						
			};

function slider( container, ratio, columns, rows ) {
	console.log('aaasfafbv  '+ container);
	this.container = container;
	this.ratio = ratio;
	this.columns = columns;
	this.rows = rows;
	this.init();
};
