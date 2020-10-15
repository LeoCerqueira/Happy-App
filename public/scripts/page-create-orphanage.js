//create map
const map = L.map('mapid').setView([-27.2196961, -49.6494515], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => {
	const lat = event.latlng.lat;
	const lng = event.latlng.lng;

	document.querySelector('[name=lat]').value = lat;
	document.querySelector('[name=lng]').value = lng;

	// remove icon
	marker && map.removeLayer(marker);

	// add icon layer
	marker = L.marker([lat, lng], { icon }).addTo(map);
});

//  Adding a photo field

function addPhotoField() {
	// get the photos container #images

	const conatiner = document.querySelector('#images');

	// get the container to duplicate .new-images

	const fielsdContainer = document.querySelectorAll('.new-upload');

	// duplicate the last add image

	const newFieldContainer = fielsdContainer[
		fielsdContainer.length - 1
	].cloneNode(true);

	//verify if the field is empty, if yes, do not add it
	const input = newFieldContainer.children[0];

	if (input.value == '') {
		return;
	}

	// cleaning the field before appending

	input.value = '';

	//add the new container to #images

	conatiner.appendChild(newFieldContainer);
}

function deleteField(event) {
	const span = event.currentTarget;

	const fielsdContainer = document.querySelectorAll('.new-upload');

	if (fielsdContainer.length < 2) {
		//clan field value
		span.parentNode.children[0].value = ''
		return;
	}

	// delete the parent

	span.parentNode.remove();
}


// "yes" and "no" buttons, selec
function toggleSelect(event){

    //take off the active class from buttons 
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    });

    //add the class active to the current button

    const button = event.currentTarget
    button.classList.add('active')

    //upload input hdden with the selected value 

    const input = document.querySelector('[name="open_on_weekedns"]')
    
    
   input.value = button.dataset.value

          

}

