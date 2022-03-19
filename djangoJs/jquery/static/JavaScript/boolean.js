document.write("guys");
//javascript
var msg = '';
var i = 1;
while(i < 10){
    msg += i + ' x 5  = ' + (i*5) + '</br>';
    i++;
    msg += i + ' x 5 = ' + (i * 5) + '<br />';
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

    $('#switcher-narrow, #switcher-large').click(function() {

	$('#switcher').off('click.collapse');

    });

    $('#switcher-default').click(function() {

	$('#switcher').on('click.collapse', toggleSwitcher);

});

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

