

function confirm ()
{
var fname=document.getElementById('n1').value ;
    var lname=document.getElementById('n2').value ; 
    var email=document.getElementById('em').value; 
    var cemail=document.getElementById('em2').value; 
    var pass=document.getElementById('pw').value ; 	
    if (email!=cemail)
	{
		window.alert("Please confirm the right e-mail ! ");
	}
	else{
	window.alert("Hello "+fname);
	}
	
}