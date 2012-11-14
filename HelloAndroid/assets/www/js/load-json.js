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
			 			     
			 			    document.writeln("Name :"+firstname + lastname);
			 			    document.writeln("<br />Father Name : " + fathername);
			 			    document.writeln("<br />Date Of Birth : "+dob );
			 			    document.writeln("Permanent Address :" + address + village + mandal + district + state);
			 			    document.writeln("Pincode :" + pincode);
			 			    
			 			     
			 		  
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
