


// 50.358639274795, 7.564158520567651

const markers = [
  ["Brown House", 50.36108572986329, 7.588031774020334, './icons/brown-house.png',25,25],
  ["Green Hill", 50.363731520296525, 7.573170742825037, './icons/green-hill.png',25,25],
  ["Red Balloon", 50.35759885635444, 7.5764323089753285, './icons/red-balloon.png',25,25],
  ["Star", 50.360720043266454, 7.599692425468199, './icons/star.png',25,25],
  ["tower", 50.35612032776451, 7.58415707091023, './icons/tower.png',25,25],
  ["Yoshi\'s house", 50.35622984997998, 7.595830044500748, './icons/yoshis-house.png',25,25],
  ["Check point", 50.354039357662344, 7.586646160867032, './icons/checkpoint.png',25,25],
]

// checkpoint
  
  function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "2140dc91625c596",
      zoom: 14.5,
      center: { lat: 50.360888899976456, lng: 7.588155904937035 },
    });
  
    for (let i = 0; i < markers.length; i++) {

      const currentElement = markers[i]

    const marker = new google.maps.Marker({
      position: { lat: currentElement[1], lng: currentElement[2] },
      map,
      title: currentElement[0],
      icon: {
        url: currentElement[3],
        scaledSize: new google.maps.Size(currentElement[4],currentElement[5])
      },
      animation: google.maps.Animation.DROP
    });

    const infowindow = new google.maps.InfoWindow({
      content: currentElement[0]
    });

    marker.addListener("click",() => {
      infowindow.open(map,marker)
    })

  }
  

}


// function initMap() {

//   const map = new google.maps.Map(document.getElementById("map"), {
//     mapId: "2140dc91625c596",
//     zoom: 14,
//     center: { lat: 50.360888899976456, lng: 7.588155904937035 },
//   });

//   new google.maps.Marker({
//     position: { lat: 50.36108572986329, lng: 7.588031774020334 },
//     map,
//     title: "Brown house",
//     icon: {
//       url: './icons/brown-house.png',
//       scaledSize: new google.maps.Size(25,25)
//     },
//     animation: google.maps.Animation.DROP
//   });
// }

// window.initMap = initMap;
 



