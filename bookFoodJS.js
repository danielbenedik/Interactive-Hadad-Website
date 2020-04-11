
var numberPage=0;
var totalPage=1;

main();

function button_next_page_click()
{
	
	numberPage = numberPage + 1;
	
	reset_number_page_if_need();
	
	
}

function button_prev_page_click()
{
	numberPage = numberPage - 1;
	reset_number_page_if_need();

	
}

function openTab(temp) {

	  $(".content").hide();

 $("#"+temp).fadeIn("slow"); 
}

function reset_number_page_if_need()
{
	if(numberPage>totalPage)
	{
		numberPage =0;
	}
	else if (numberPage<0)
	{
		numberPage = totalPage;
	}

	load_text_from_note();
}





function main()
{

	load_text_from_note();
}

function load_text_from_note()
{ 
	
	// load text
	$( "#foodName" ).load( "bookFood/"+numberPage + "/name.txt" );
	$( "#ingredients" ).load( "bookFood/"+numberPage + "/ingredients.txt" );
	$( "#action" ).load( "bookFood/"+numberPage + "/action.txt" );

	// load pictures
	var pic1 = document.getElementById("pic1");
	pic1.src = "bookFood/"+numberPage+"/pic1.jpg";
	var pic2 = document.getElementById("pic2");
	pic2.src = "bookFood/"+numberPage+"/pic2.jpg";
	
	// load video
	var video = document.getElementById("video");
	video.src = "bookFood/"+numberPage+"/1.mp4"
	;
	openTab("ingredients");



}


