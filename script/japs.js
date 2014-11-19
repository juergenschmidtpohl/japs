(function (global, undefined) {




// Was zu tun ist, wenn this.ratio sich ändert

// pivate Methode !ausserhalb! des Constructors definiert.
// Vorteil: EINE funktion für alle Instanzen des Objektes
// Zugriff auf properties durch Parameter simuliert
        function calcRatio(orient, ratio, container) {
            var v,  // rechenspeicher der ratio
                r,  // seitenverhältnis in %
                t,  // containerobject picture KONSTANT Vorberechnen
                p;  // css-string
            /* portrait Darstellung */
            if ( orient === 'portrait') {
                v = ratio.split(':');
                r = parseInt(v[1])/parseInt(v[0])*100+'';
                t = $('#'+container+' .slider-mainpicture');
                p = '0 0 '+r.toString()+'%'+' 0';
                t.css('padding',p);
            } else {   // landscape
                // Bildbreite reduzieren

            } // portrait
        } // calcRatio


//
// JAPS
//
    function slider( container, ratio, proz_thumbs ) {

        ///////////////////////////////////////////////////////////
        //
        // private properties
        //
        /////////////////////////////////////////////////////////////
        var container = container;     // umgebendes Element, liefert die Breite
        var ratio = ratio;             // Seitenverhältnis der Bilddarstellung breite:höhe
        var proz_thumbs = proz_thumbs; // Anteil in % der containerBreite
        var height_thumbs = 72;        // absolute Höhe des Sliders unter dem Bild ( portrait )

        // Die Buchführung
        var actualOrientation = 'portrait'; // Orientierung des Viewports!!
        var aktIndex = 0;                   // angezeigtes Bild

        // Was kann man vorberechnen?
        var mainpictureWidthLandscape = ''; // Breiten des Bildfensters, orientierung, proz_thumbs
        var mainpictureWidthPortrait = '100%';

        var that = this;    // ermöglicht Zugriff für private Methoden

        ///////////////////////////////////////////////////////////
        //
        // private methods
        //
        ///////////////////////////////////////////////////////////
        function privateMethod() {

        }; // privateMethod

        // Hilfsroutinen



        function calcWindowWidths() {
            var b,  // neue breite
                p   // stringrepresentation
            b = 100-proz_thumbs;
            p = b.toString()+'%'
            mainpictureWidthLandscape = p;
            // short
            mainpictureWidthLandscape = (100-proz_thumbs)+'%';
        }

        // Was zu tun ist, wenn this.proz_thumbs sich ändert
        function calcThumbList() {
            /* portrait Darstellung */
            var t = $('#'+container+' .slider-thumbsarea img');
            var p = height_thumbs.toString()+'px';    // bis mir etwas besseres einfällt
            t.css('height',p);
            /* landscape */

        };

        ///////////////////////////////////////////////////////////
        //
        // privileged methods
        // Haben Zugriff auf private variablen und sind öffentlich.
        //
        ///////////////////////////////////////////////////////////
        this.privilegedMethod = function() {

        } // privilegedMethod


        // Setter
        this.setRatio = function(wert) {
            ratio = wert;
            calcRatio(actualOrientation, ratio, container);
        } // setRatio

        this.setProz_thumbs = function(wert) {
            if ( true ) {
                proz_thumbs = wert;
                calcThumbList();
            }
        } // setProz_thumbs

        this.setActualOrientation = function(wert) {
            var t;  // containerObject
            if ( wert == 'portrait') {
                actualOrientation = wert;
                t = $('#'+container+' .slider-mainpicture');
                t.css('width',mainpictureWidthPortrait);

                t = $('#'+container+' .slider-thumbsarea');
                t.css('width','100%');
                t.css('float','none');

                /* images passend machen */
                t = $('#'+container+' .slider-thumbsarea img');
                t.css('width','100%');
                t.css('height','auto');
            }
            if ( wert == 'landscape') {
                actualOrientation = wert;
                // Breite des Bildfensters reduzieren

                t = $('#'+container+' .slider-mainpicture');
                t.css('width',mainpictureWidthLandscape);


                // breite des Sliders
                var bs = proz_thumbs.toString()+'%';
                t = $('#'+container+' .slider-thumbsarea');
                t.css('width',bs);
                t.css('float','right');
            }
        } // setActualOrientation

        // starter
        this.startUp = function() {
            // Bildbereich und Sliderbereich setzen
            // portrait einfach untereinander
            var bild,       // containerobject picture
                slider;     // container thumbnail
            bild = '<div class="slider-mainpicture"></div>';
            slider = '<div class="slider-thumbsarea"><img src="http://placehold.it/150x50" /></div><div class="clear"></div>';
            $('#'+container).html(bild+slider);
            calcWindowWidths();
            calcRatio();
            calcThumbList();
        } // startUp

    } // end slider

    global.slider = slider;

})(this, void 0);




