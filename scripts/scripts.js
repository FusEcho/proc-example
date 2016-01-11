(function($) {

    var _options = {};
    var _container = {};
	
	

	jQuery.fn.MyDigitClock = function(options) {
		
		
		var id = $(this).get(0).id;
		
		_options[id] = $.extend({}, $.fn.MyDigitClock.defaults, options);
		
		return this.each(function()
		{
			_container[id] = $(this);
			showClock(id);
			
		});
		
		
		
		function showClock(id)
		
		{
			
			var d = new Date();
			
			if (s_set()){	
			
			
			
			var hho=s_hours();
			var mmin=s_mins();
			if(hho!="HH" && mmin!="MM"){				
			d.setHours(hho);
			d.setMinutes(mmin);
			}
			//alert(new1());
		
			
			}
			
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var dd = d.getDate();
			var day = d.getDay();
			var month = d.getMonth();
			var y = d.getFullYear();
			//alert(month);
			var ampm = "";
			
			
			if(s_set() && s==00 && id=="settime"){
				change_min();	
			}
			
			if(s_set() && m==59 && s==00 && id=="settime"){		
			//alert("vxd")		
				change_hr();				
			}
			
			if(s==0 || s==00){				
				setTimeout(function(){				
				$('.min').addClass("flip");
				},10);
			}
				
			if((m==0 || m==00)&&(s==0 || s==00)){				
				setTimeout(function(){				
				$('.hour').addClass("flip");
				},10);
			}
			
					
			if((h==12)&&(m==0 || m==00)&&(s==0 || s==00)){				
				setTimeout(function(){
								
				$('.ap').addClass("flip");
				},30);
			}
					
				if (_options[id].bAmPm)
			{
				if (h==00)
				{
					h=12;
					
				}
				
				if (h>12)
				{
					h = h-12;
					ampm = " PM";
				}
				else
				{
					ampm = " AM";
				}
			}
			
				var d_names = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
			
			var m_names = new Array("Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");
			
			var digits = _options[id].timeFormat;
			digits = digits.replace("{HH}", getDD(h));
			digits = digits.replace("{MM}", getDD(m));
			digits = digits.replace("{SS}", getDD(s));
			digits = digits.replace("{DD}", dd);
			digits = digits.replace("{month}", m_names[month]);
			digits = digits.replace("{y}", y);
			digits = digits.replace("{day}", d_names[day]);
			digits = digits.replace("{AP}", ampm);
		
			var obj = $("#"+id);
			
			//change reading
			
			
			obj.html(digits)
			
			//toggle hands
			if (1)
			{
				
				obj.find("#ch1").fadeTo(800, 0.1);
				obj.find("#ch2").fadeTo(800, 0.1);
			}
			setTimeout(function(){showClock(id)}, 1000);
			
			
		}
		
		function getDD(num)
		{
			
			
			return (num>=10)?num:"0"+num;
			
		}
		count++;
		
	}
	
	//default values
	jQuery.fn.MyDigitClock.defaults = {
		
		timeFormat: '<div class="time"><span>{HH}</span><span id="ch1">:</span><span>{MM}</span></div><div class="date">{month} {DD}, {day}</div>',
		settime: false
	};
	
	

})(jQuery);// JavaScript Document