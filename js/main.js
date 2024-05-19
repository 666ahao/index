function display_time(){		//计时器 日期显示
		var obj_time = new Date("Feb 29, 2020 00:00:00");
		var now_time = new Date();
		var dist_time = (now_time.getTime()-obj_time.getTime());
		var dist_year = Math.floor(dist_time/(60*60*24*365)/1000);
		var dist_day = Math.floor(dist_time/(1000*60*60*24)%365);
		var dist_hour = Math.floor(dist_time/(1000*60*60)%24);
		var dist_minis = Math.floor(dist_time/(1000*60)%60);
		var dist_secs = Math.floor((dist_time/1000)%60);
		var weekday=new Array(7);
		weekday[0]="周日";weekday[1]="周一";weekday[2]="周二";weekday[3]="周三";weekday[4]="周四";weekday[5]="周五";weekday[6]="周六";
		if(now_time.getMonth()+1>2||(now_time.getMonth()+1==2&&now_time.getDate()==29)){dist_year=now_time.getFullYear()-2020}else{now_time.getFullYear()-2021}
		document.getElementsByClassName("cpr")[0].innerHTML = "&copy;2020-"+now_time.getFullYear()+"沧海一粟";
		document.getElementById("Now").innerHTML = "现在 "+now_time.getFullYear()+"年"+(now_time.getMonth()+1)+"月"+now_time.getDate()+"日  "+weekday[now_time.getDay()];
		document.getElementById("RunTime").innerHTML="运行 "+dist_year+"年"+dist_day+"天"+dist_hour+"小时"+dist_minis+"分钟"+dist_secs+"<a style='color:white' >秒</a>";
}
window.setInterval("display_time()",1000);