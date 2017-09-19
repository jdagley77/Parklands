$( document ).ready(function() {
    console.log( "ready!" );


$.ajax({
  url: "https://data.sfgov.org/resource/94uf-amnx.json",
  method: "GET",
  dataType: "json",
  data: {
    "$$app_token": 'gJCXxFtukaot9Ray32k2kuPVv'
  },
  success: function( data, status, jqxhr ){
    console.log( "Request received:", data );
    	for (let value of data) {
			console.log(value.parkname);
			$("#park-content").append('<div class="new-park">' + value.parkname + '</div>')
		}
  },
  error: function( jqxhr, status, error ){
    console.log( "Something went wrong!" );
  }
});


// var myHeaders = new Headers({
// 	"Authorization": "A1225A44-8F39-4BB6-B941-B83645705509",
// 	"Content-Type": "text/plain"
// });


	// fetch('https://developer.nps.gov/api/v0/parks', {
	// 	mode: 'no-cors',
	// 	headers: myHeaders
	// }).then(function(response){
	// 	console.log(response.type)
	// })

});
	