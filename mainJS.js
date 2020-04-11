
var mainTitle = document.getElementById("mainTitle");
var str = "הכל התחיל אי שם בטריפולי הרחוקה...";
var split = str.split("");
var count = 0;


$(document).ready(function() {main();});


function main()
{
	var SI = setInterval(function()
	{
	mainTitle.append(split[count]);
	count++;

	if(count == str.length)
	{
		clearInterval(SI);
	}



	},200)

	write_text_effect();
	load_picture();
}


function write_text_effect()
{
	$("#secendTitle").hide();
	var secendTitle = document.getElementById("secendTitle");
	var introductionText = document.getElementById("introductionText");
	introductionText.textContent = "דינה חדד, גדלה בעיר חומץ וטריפולי שבלוב, ובגיל 12 עלתה לבדה לארץ ישראל";
	var t = document.createElement("q");
	t.textContent = "הייתה זו שנת 1949, בה עליתי לארץ ישראל בעליית הנוער...";
	secendTitle.append(t);
	$("#secendTitle").fadeToggle(10000);
}


function load_picture()
{
	$(".picturs").hide();
	var pic1 = document.getElementById("dina");
	pic1.src = "pictureMainPage/dina.jpg";
	var pic2 = document.getElementById("tzuri");
	pic2.src = "pictureMainPage/tzuri.jpg";
 	$(".picturs").fadeToggle(10000);
	
}
