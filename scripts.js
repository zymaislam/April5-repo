for (var i=0; i<data.length; i++) {//openbrace1

	var rowData = data[i];

	var $template = $('<div class="quoteContainer">'+
	'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
	'<div class="readMore">Read More</div>'+
	'<div class="moreInfo">'+
	'<div class="wholeQuote">'+rowData.wholeQuote +'</div>'+
	'<div class="source">'+rowData.source+'				</div>'+
	'<div class="yearsClean">'+rowData.yearsClean+'			</div>'+
	'<div class="location">'+rowData.location+ '</div>'+
	'</div>'); //changed variable from template to $template to notify myself that I wrapped it

	$template.find(".readMore").on("click", toggleContent);

	function toggleContent(e) {//openbrace2
		$quoteContainer = $(e.target).parent(); 
		console.log ($quoteContainer)
		if ($quoteContainer.hasClass("expanded")) {//openbrace3//you can see content!
			$quoteContainer.removeClass("expanded") //this command removes content
		}//closebrace3
		 else {//openbrace4
			$quoteContainer.addClass("expanded"); //since you cannot see content, this adds content!
		}//openbrace4
	}//closera


	$('#dataContainer').append($template);

	}

