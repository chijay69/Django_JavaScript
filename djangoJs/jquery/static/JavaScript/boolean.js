document.write("guys");
//javascript
var msg = '';
var i = 1;
while(i < 5){
    msg += i + ' x 5  = ' + (i*5) + '</br>';
    i++;
}
document.getElementById('stock').innerHTML = msg;


/* $(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher button').on('click', function() {
	var bodyClass = this.id.split('-')[1];
	$('h3').removeClass().addClass(bodyClass);
	$('#switcher button').removeClass('selected');
	$(this).addClass('selected');
    });
});

$(document).ready(function() {
    $('#switcher h3').click(function() {
	$('#switcher button').toggleClass('hidden');
    });
}); */

// this nextblock of code provides a toggleClass that expands or collapses
//the switcher-buttons if click on the switcher-div container element


$(document).ready(function() {

    $('#switcher').hover(function() {

	$(this).addClass('hover');

    }, function() {

	$(this).removeClass('hover');

    });

});

$(document).ready(function() {

    var toggleSwitcher = function(event) {

	if (!$(event.target).is('button')) {

	    $('#switcher button').toggleClass('hidden');

	}

    };

    $('#switcher').on('click.collapse', toggleSwitcher);
    //simulate a click to start in collapsed state
    $('#switcher').click();

    //setBodyClass func changes page style
    var setBodyClass = function(clsname) {
	$('body').removeClass().addClass(clsname);
	$('#switcher button').removeClass('selected');
	$('#switcher-' + clsname).addClass('selected');
	$('#switcher').off('click', toggleSwitcher);
	if (clsname == 'default') {
	    $('#switcher').on('click', toggleSwitcher);   
	}
    };
    // Begin with switcher-default button selected
    $('#switcher-default').addClass('selected');

    var triggers= {
	D:"default",
	N:"narrow",
	L:"large"
    };
    // call setBodyClass() when key is pressed
    $(document).keyup(function(event){
	var key = String.fromCharCode(event.keyCode);
	if (key in triggers) {
	    $('#switcher-' + triggers[key]).click()
	}
    });

    //trying to use the setBodyClass
    $('#switcher button').click(function(event){
	var clsname = this.id.split('-')[1];
	setBodyClass(clsname);
    });
    
});
    
/*
$(document).ready(function() {
    $('#switcher-default').addClass('selected');
    $('#switcher button').click(function(event) {
	var bodyClass = this.id.split('-')[1];
	$('body').removeClass().addClass(bodyClass);
	$('#switcher button').removeClass('selected');
	$(this).addClass('selected');
	event.stopPropagation();
    });
});

*/

