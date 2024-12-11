$(document).ready(function() {
	  
	// var linkedInURL = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=771dziejse2pk0&redirect_uri=https://larguar.github.io/&scope=r_fullprofile';
	// let token = 'AQWk5_SpR5buulqEghjmBHAVL_ksnR1ebMmxT7G2QFwDepFtOlWZU0NRJLDs9vP1KsqENxzThotjHLlEeg1PQiGAjwJ7aInQsIGsTj3rVR4-Ps_gW2cHCOyoV946SKYmGt7AzXi8hYTe0NVamA5FCbIJoKnVpsFm-wqWIKbLWl1ns_YIwYJoU2O_ChiWIz1O3wHRCao5-QzhRqOVI-9O1jpVtEngOLeHgMRSE4K3o6eN3cTIc6fldKjJQ43v5DXim5eXFDjvb-lXouzUpsreprbLxIY3gKzx5JtbPwlFBb4TqRdTXb-UAekZMAt9aLY9Ef381tV2-rBTKHYNZEMCeebbftLyng';

	// $.ajax({
	// url: 'https://api.linkedin.com/v2/userinfo',
	// method: "GET"
	// }).then(function(response) {
	// 	console.log(response);
	// });

	var settings = {
		"url": "https://api.linkedin.com/v2/userinfo",
		"method": "GET",
		"timeout": 0,
		"headers": {
		  "Authorization": "Bearer AQWk5_SpR5buulqEghjmBHAVL_ksnR1ebMmxT7G2QFwDepFtOlWZU0NRJLDs9vP1KsqENxzThotjHLlEeg1PQiGAjwJ7aInQsIGsTj3rVR4-Ps_gW2cHCOyoV946SKYmGt7AzXi8hYTe0NVamA5FCbIJoKnVpsFm-wqWIKbLWl1ns_YIwYJoU2O_ChiWIz1O3wHRCao5-QzhRqOVI-9O1jpVtEngOLeHgMRSE4K3o6eN3cTIc6fldKjJQ43v5DXim5eXFDjvb-lXouzUpsreprbLxIY3gKzx5JtbPwlFBb4TqRdTXb-UAekZMAt9aLY9Ef381tV2-rBTKHYNZEMCeebbftLyng"
		},
	  };
	  
	  $.ajax(settings).done(function (response) {
		console.log(response);

	  });


	AOS.init();
  
 });