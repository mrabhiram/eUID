$(document).ready(function(){
		
		$.ajax({
			url: 'http://10.0.2.2:8080/UID/mobile.jsp',
			data: {
				'Username' : user,
				'Password' : pass
			},
			dataType: 'json',
			   success : function(data) { 
				   
			          var getObject = eval('(' + JSON.stringify(data) + ')');            
			          
			          if(getObject.firstname != ''){

			 			 // Get the data in local JS variables 
			 			       var firstname = getObject.firstname;
			 			       var lastname = getObject.lastname;
			 			       
			 			       var state = getObject.state ;
			 			       var district = getObject.district;
			 			       var mandal = getObject.mandal;
			 			       var village = getObject.village;
			 			       var address = getObject.address;
			 			       var pincode = getObject.pincode;
			 			       var dob = getObject.dob;
			 			       var fathername = getObject.fathername;
			 			       var uid = getObject.uid;
			 			       var img = getObject.img;
			 			       var src="http://10.0.2.2:8080/UID/img/"+img+".jpg";
			 			     
			 			    document.writeln("<link rel='stylesheet' href='style.css'/><div id='card'><div id='goi'>GOVERNMENT OF INDIA</div><br/>");
			 			    document.writeln("<div id='name'>Name is  : "+firstname + lastname+"</div>");
			 			    document.writeln("<br />Father Name : " + fathername);
			 			    document.writeln("<br/><br />Dob : " + dob);
			 			    document.writeln("<br/><br/> Address :"+address+district+state);
			 			    document.writeln("<br/><br/>Pincode :"+pincode);
			 			    document.writeln("<br/><br/>UID:"+uid);
			 			    document.writeln("<br/><br/><img src='"+src+"' width='70' height='50'></img>");
			 			    document.writeln("</div>");
			 			    
			 			     
			 		  
			          }
			          else {
			        	  alert("Incorrect Login Credentials. Try Again");
			        	  document.writeln("<form action='index.html'>");
						   document.writeln("<input type='submit' value='Back'>");
						   document.writeln("</form>");
			          }
			          	                      
			   },	
		
			error: function(){
			  document.writeln("Sorry! Something went wrong. Give us time to fix and try again.");
				document.writeln("<form action='index.html'>");
			   document.writeln("<input type='submit' value='Back'>");
			   document.writeln("</form>");
			}
		});
	});
