
$(document).ready(function(){
	
  // set up tabbing
	$('#tabs').tabs({
		fx: {opacity: 'toggle'}
	}); 
	
	// prevent section scrolling
	if(location.hash == '#about' ||
	   location.hash == '#resume' ||
	   location.hash == '#portfolio' ||
	   location.hash == '#links') {
           //use setTimeout 0 to catch hash scrolling
            setTimeout(function() {
                scrollTo(0,0);
            }, 0);
	}
  
});
