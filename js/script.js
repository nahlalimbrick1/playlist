var songNames = ["Fkn Around","Use to","BeetleJuice","7Am"] 
var artistNames =["Phony People","JI","Mariah the Scientist"]
songNames.forEach(function(songName){
    $(".songName").append("<p>" + songName + "</p>")
})

artistNames.forEach(function(artistName){
    $(".artistNames").append("<p>" + artistName + "</p>")
})
 