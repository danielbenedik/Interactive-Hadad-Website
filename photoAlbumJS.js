var btns = document.getElementsByClassName("myButton");
var numberPage=1;
var totalPage=20;

set_up();
main();


function set_up()
{
	for (var i=0; i<btns.length; i++) // init all btn
    { 
        btns[i].addEventListener('click', clicked);
    }
	
	var nextPic = document.getElementById("nextPic");
	nextPic.addEventListener('click', button_next_page_click);

	var prevPic = document.getElementById("prevPic");
	prevPic.addEventListener('click', button_prev_page_click);	
}

function clicked(btnThatClick)
{
	
	numberPage = btnThatClick.target.id;
	
	load_picters_from_file();
}

function button_prev_page_click()
{
	
	numberPage--;
	reset_number_page_if_need();
}


function button_next_page_click()
{	

	numberPage++;
	reset_number_page_if_need();
}

function reset_number_page_if_need()
{	

	if(numberPage>totalPage)
	{
		numberPage =1;
	}
	else if (numberPage<1)
	{
		numberPage = totalPage;
	}
	
	
	load_picters_from_file();
}


function main()
{
	
	load_picters_from_file();
}

function load_picters_from_file()
{ 
	var pics;
	
	$(".img-thumbnail").hide();
	var num = document.getElementById("pageNumber");
	num.innerText= numberPage.toString();
	for (var i=1; i<=6; i++)
	{
		pics = document.getElementById("pic"+i);
		pics.src = "photoAlbum/"+numberPage +"/pic"+i+"-min.jpg";
	}
	$(".img-thumbnail").fadeToggle(2500);
}