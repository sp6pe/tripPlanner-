
$(".btnAdd").click(function(){
    if($(this).prev().get(0).id === 'restaurant'){
      $('#restaurantList').append(createListItem($(this).prev().val()));
       //restaurantLocations.push(findMapLoc($(this)));

    } else if($(this).prev().get(0).id === 'hotel'){
      $('#hotelList').append(createListItem($(this).prev().val()));
      //hotelLocation.push(findMapLoc($(this)));
    }else{
      $('#activityList').append(createListItem($(this).prev().val()));
     // activityLocations.push(findMapLoc($(this)));
    }
    
})

//console.log(attractionType.val());

function createListItem(element){
  return '<div class="itinerary-item"><span class="title">'+element+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>'
}



$("#itinerary").on('click','.remove',function(){

	$(this).parent().remove();
})


$(".addDay").click(function(){

	$(this).parent().children().removeClass("current-day");

	// }
	$('<button class="btn btn-circle day-btn current-day dayButton">'+($(this).siblings().length +Number(1))+'</button>').insertBefore($(this));
	updateDay($(this).prev());
})


//change the currentday
$(".day-buttons").on('click', '.dayButton', function() {
	changeCurrentDay($(this))
})

function updateDay(element) {
	$("#day-title>span").html('Day ' + element.text());
}

//remove days 
$('.removeDay').click(function(){
	var updatedDay;
	if ($('.current-day').next().hasClass('dayButton') ){
		updatedDay =($('.current-day').next())
	} else{
		updatedDay =($('.current-day').prev())
	}		
	//if($('.current-day').siblings().length === "1") return;
	//console.log($.isEmptyObject($('.current-day').prev()));
	//console.log($('.current-day').next() === true);

	$('.current-day').remove();
	changeCurrentDay(updatedDay);
	

	var i = 1;
	
	$('.dayButton').each( function() {
		//console.log(i);
		$(this).text(i);
		//$(this).addClass('current-day');

		i++;
	})
	
	
})
//put optional param
function changeCurrentDay(element){
	console.log('first param: ', self);
	var self = element || this;
	console.log(self);
	$(".current-day").removeClass('current-day');
	$(self).addClass('current-day');
	updateDay($(self));
}



function findMapLoc(element){

  if(element.prev().get(0).id === 'restaurant'){
    for(var i =0; i<restaurants.length; i++){

      if(element.prev().val() === restaurants[i].name){

        return ( restaurants[i].place[0].location);
      }
    }
  } else if(element.prev().get(0).id === 'hotel'){
    for(var i =0; i<hotels.length; i++){

      if(element.prev().val() === hotels[i].name){

        return ( hotels[i].place[0].location);
      }
    }
  } else{
    for(var i =0; i<activities.length; i++){

      if(element.prev().val() === activities[i].name){

        return ( activities[i].place[0].location);
      }
    }
  }
}