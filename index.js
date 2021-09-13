array1 = new Array("https://cdn-1.motorsport.com/images/amp/6n9kK8XY/s1000/daniel-ricciardo-mclaren-mcl35.jpg",
    "https://imagens.ebc.com.br/RL44QOnwM9d97_32hU0HQFdWf5E=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2020-08-30t135436z_1336143076_up1eg8u12n031_rtrmadp_3_motor-f1-belgium_0.jpg?itok=DE8J-H1p",
    "https://cdn-1.motorsport.com/images/amp/2jXdOVz6/s1000/charles-leclerc-ferrari-sf21-1.jpg")


$(document).ready(function() {
    teste()
    slide1()

    function teste() {
        console.log('function teste')
    }
});

function slide1() {
    document.getElementById('id').src = array1[0];
    setTimeout("slide2()", 5000)
}

function slide2() {
    document.getElementById('id').src = array1[1];
    setTimeout("slide3()", 5000)
}

function slide3() {
    document.getElementById('id').src = array1[2];
    setTimeout("slide1()", 5000)
}