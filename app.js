console.log("coucou")


var cmpt = 1;
var result = "";
var div1 = $("#1");
var div2 = $("#2");
var div3 = $("#3");
var div4 = $("#4");
var div5 = $("#5");
var div6 = $("#6");
var div7 = $("#7");
var div8 = $("#8");
var div9 = $("#9");

$(".click").click(function () {
	cmpt++;
	
	if(cmpt%2 != 0){
		$(this).append('<svg id="svgcircle" viewBox= "0 0 500 500" width="100" height="125" preserveAspectRatio="xMidYMid meet" x="0" y="0"><circle cx="250" cy="250" r="200" fill-opacity="0" stroke-width="15" stroke="black"/></svg>');
		$(this).data("case",1);
		$(this).off("click");
		
		var a = div1.data("case");
		var b = div2.data("case");
		var c = div3.data("case");
		var d = div4.data("case");
		var e = div5.data("case");
		var f = div6.data("case");
		var g = div7.data("case");
		var h = div8.data("case");
		var i = div9.data("case");
		
		if(a+b+c==3){
			$(".click").off("click");
			div1.css("background-color","red");
			div2.css("background-color","red");
			div3.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(d+e+f==3){
			$(".click").off("click");
			div4.css("background-color","red");
			div5.css("background-color","red");
			div6.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(g+h+i==3){
			$(".click").off("click");
			div7.css("background-color","red");
			div8.css("background-color","red");
			div9.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(a+d+g==3){
			$(".click").off("click");
			div1.css("background-color","red");
			div4.css("background-color","red");
			div7.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(b+e+h==3){
			$(".click").off("click");
			div2.css("background-color","red");
			div5.css("background-color","red");
			div8.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(c+f+i==3){
			$(".click").off("click");
			div3.css("background-color","red");
			div6.css("background-color","red");
			div9.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(a+e+i==3){
			$(".click").off("click");
			div1.css("background-color","red");
			div5.css("background-color","red");
			div9.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(c+e+g==3){
			$(".click").off("click");
			div3.css("background-color","red");
			div5.css("background-color","red");
			div7.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};

		console.log(a)
		console.log(b)
		console.log(c)
		console.log(d)
		console.log(e)
		console.log(f)
		console.log(g)
		console.log(h)
		console.log(i)
		
	}
	else{
		$(this).append('<svg id="svgcross" viewBox= "0 0 500 500" width="100" height="125" preserveAspectRatio="xMidYMid meet" x="0" y="0"><line x1="50" y1="50" x2="500" y2="500" stroke-width="15" stroke="black"/><line x1="50" y1="500" x2="500" y2="50" stroke-width="15" stroke="black"/></svg>');
		$(this).data("cell",1);
		$(this).off("click");

		var a2 = div1.data("cell");
		var b2 = div2.data("cell");
		var c2 = div3.data("cell");
		var d2 = div4.data("cell");
		var e2 = div5.data("cell");
		var f2 = div6.data("cell");
		var g2 = div7.data("cell");
		var h2 = div8.data("cell");
		var i2 = div9.data("cell");
		
		if(a2+b2+c2==3){
			$(".click").off("click");
			div1.css("background-color","green");
			div2.css("background-color","green");
			div3.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		if(d2+e2+f2==3){
			$(".click").off("click");
			div4.css("background-color","green");
			div5.css("background-color","green");
			div6.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		if(g2+h2+i2==3){
			$(".click").off("click");
			div7.css("background-color","green");
			div8.css("background-color","green");
			div9.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		if(a2+d2+g2==3){
			$(".click").off("click");
			div1.css("background-color","green");
			div4.css("background-color","green");
			div7.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		if(b2+e2+h2==3){
			$(".click").off("click");
			div2.css("background-color","green");
			div5.css("background-color","green");
			div8.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		if(c2+f2+i2==3){
			$(".click").off("click");
			div3.css("background-color","green");
			div6.css("background-color","green");
			div9.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		if(a2+e2+i2==3){
			$(".click").off("click");
			div1.css("background-color","green");
			div5.css("background-color","green");
			div9.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		if(c2+e2+g2==3){
			$(".click").off("click");
			div3.css("background-color","green");
			div5.css("background-color","green");
			div7.css("background-color","green");
			$("#finish").append("<h1>Player 2 WIN !!!</h1>");
		};
		console.log(a2)
		console.log(b2)
		console.log(c2)
		console.log(d2)
		console.log(e2)
		console.log(f2)
		console.log(g2)
		console.log(h2)
		console.log(i2)
	};
	
	

	

	
});

		






/*
if(a==b==c){
			$(".click").off("click");
			div1.css("background-color","red");
			div2.css("background-color","red");
			div3.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(d==e==f){
			$(".click").off("click");
			div4.css("background-color","red");
			div5.css("background-color","red");
			div6.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(g==h==i){
			$(".click").off("click");
			div7.css("background-color","red");
			div8.css("background-color","red");
			div9.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(a==d==g){
			$(".click").off("click");
			div1.css("background-color","red");
			div4.css("background-color","red");
			div7.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(b==e==h){
			$(".click").off("click");
			div2.css("background-color","red");
			div5.css("background-color","red");
			div8.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(c==f==i){
			$(".click").off("click");
			div3.css("background-color","red");
			div6.css("background-color","red");
			div9.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(a==e==i){
			$(".click").off("click");
			div1.css("background-color","red");
			div5.css("background-color","red");
			div9.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};
		if(c==e==g){
			$(".click").off("click");
			div3.css("background-color","red");
			div5.css("background-color","red");
			div7.css("background-color","red");
			$("#finish").append("<h1>Player 1 WIN !!!</h1>");
		};




*/




	
	/*$("#circle1").append('<canvas id="canvas1" width="150" height="150"></canvas>');
  	var canvas = document.getElementById("canvas1"); 
 	var context = canvas.getContext("2d");
 	context.beginPath();
  	context.lineWidth="2";
  	context.arc(50, 50, 15, 0, 2 * Math.PI);
  	context.stroke();*/