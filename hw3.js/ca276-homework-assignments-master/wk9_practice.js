// Attach a click event to button

// Inject onto page using the W3C API
document.getElementById('w3cExample').onclick = function() {
	var modal, mask, text, textNode, container;

	text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae, minima, in iure eos dolorum placeat consequatur vero magni eius explicabo magnam delectus laboriosam deleniti quia illo non voluptatibus libero.';
	textNode = document.createTextNode(text);

	// Create mask
	mask = document.createElement('div');
	mask.setAttribute('id', 'mask');
	mask.setAttribute('style', 'display: block;');

	// Append mask node to the page
	document.body.appendChild(mask);

	// Create modal
	modal = document.createElement('div');
	modal.setAttribute('id', 'modal');
	modal.setAttribute('style', 'display: block;');

	// Attach text node to the modal node
	modal.appendChild(textNode);

	// Append node to page
	document.body.appendChild(modal);
};

// Inject onto page using innerHTML
document.getElementById('innerHTMLExample').onclick = function() {
	var modal, mask, text, textNode, container;

	// Create text node
	text = 'Lorem ipsum there is some text here';
	textNode = document.createTextNode(text);

	// Find a parent container to insert into
	container = document.getElementById('container');

	// Change the inner HTML of that container node
	container.innerHTML += '<div id="mask"></div>';
	container.innerHTML += '<div id="modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae, minima, in iure eos dolorum placeat consequatur vero magni eius explicabo magnam delectus laboriosam deleniti quia illo non voluptatibus libero.</div>';
};

//jQuery approach
$('#jQueryExample').on('click', function() {
	// Locate the parent container by way of a CSS selector
	// Afterwards, append each HTML snippet one by one
	$('#container')
		.append('<div id="mask"></div>')
		.append('<div id="modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, repudiandae, minima, in iure eos dolorum placeat consequatur vero magni eius explicabo magnam delectus laboriosam deleniti quia illo non voluptatibus libero.</div>');
})