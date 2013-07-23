function successFunction(info) {
 
 	var title = new Array();
  	var desc = new Array();
  	var img = new Array();
  	$('#raz').html('');
  	for (var i=0 ; i<info.objects.length ; ++i) {
  	 		var university = info.objects[i];
			title = university.title;
			desc = university.description;
			image = university.image;
			html = '';
			html = '<tr><td>' + title + '</td><td>' + desc + '</td><td>' + '<img src=' + image + ' width="42" height="42" ' + '>' + '</td></tr>';  	 		
				$('#raz').append(html);				

  	 };
}

function errorFunction() {
alert("error");
}

function one_key() { 

var msg="http://nerdeez-server-dev.herokuapp.com/api/v1/university/?format=jsonp&search=" + $("#t1").val();
	$.ajax({
		type: "GET",
  		url: msg ,
   		dataType: "jsonp",
   		success: successFunction,
   		error: errorFunction
	});
};