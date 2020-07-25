// Set up HTTP request
var xhr = new XMLHttpRequest();
var resultObj;
var queryString = '';

if (customConfig.sort_by && customConfig.sort_by.length > 0 ) {
	queryString += '$orderby=' + customConfig.sort_by;
}

if (queryString.length > 0) {
	queryString = '?' + queryString;
}

var requestUri = _spPageContextInfo.siteAbsoluteUrl + 
	'/_api/lists/getbytitle(\'' + customConfig.list_name + '\')' +
	'/items' + queryString;

xhr.open('GET', requestUri);
xhr.setRequestHeader('accept', 'application/json;odata=verbose');
xhr.send();

// Setup listener to process completed requests
xhr.onload = function () {

	// Process return data
	if (xhr.status >= 200 && xhr.status < 300) {

		// the request is successful
		// console.log('Success', xhr.response);
		resultObj = JSON.parse(xhr.response).d.results;

		if (resultObj.length > 0) {
			// Process response data
			populateData();
			registerClicks();
		} else {
			// empty result
			console.info('resultObj is empty');
		}

	} else {
		// the request fails
		console.error('The request failed!');
	}

};

var root = document.getElementById(uniqueId);
var acc = document.getElementsByClassName("accordion");
var generatedElement = '';
var i;

// Generate list view
function populateData() {
	for (var x = 0; x < resultObj.length; x++) {
		generatedElement +=  
			`<button class="accordion">${resultObj[x].Title}<span class="lt-chevron-icon"><svg viewBox="0 0 40 40"><polyline points="27,5.2 12.7,19.5 27,33.7 " stroke-width="2" style="fill: none; stroke: currentcolor;"></polyline></svg></span></button>` +
			`<div class="ctnPanel"><p>${resultObj[x].Content}</p></div>`;
	}

	root.innerHTML = generatedElement;
}

function registerClicks() {
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function(e) {
			e.preventDefault(); 
			this.classList.toggle("active");
			var ctnPanel = this.nextElementSibling;
			if (ctnPanel.style.maxHeight) {
				ctnPanel.style.maxHeight = null;
			} else {
				// adjusted to include padding top 16px and bottom 16px
				ctnPanel.style.maxHeight = (ctnPanel.scrollHeight + 32) + "px";
			} 
		});
	}
}

