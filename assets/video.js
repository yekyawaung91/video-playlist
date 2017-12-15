$(document).ready(function(){

	$('form').on('submit',function(){


		//var item = $('form input');
		//var video = {song:item.val()};
		var song_name = $('#song').val();
		var song_url = $('#url').val();
		var song_artist = $('#artist').val();
		var song_description = $('#description').val();


		var video = {song:song_name,url:song_url,artist:song_artist,description:song_description,date:new Date()};
		console.log(video);


		
		$.ajax({
			type:'POST',
			url:'/upload',
			data:video,
			dataType: 'json',
			success:function(data){
				//
				//console.log(data);
				location.reload();
			}
		});
		return false;
		
	});

	
	$('.delete').on('click',function(){

		var song = $(this).val();
		var item = song.replace(/ /g,"-");
		
		$.ajax({
			type:'DELETE',
			url:'/delete/'+item,
			success:function(data){
				location.reload();
			}
		});
	});
});