GET	/	Home page
<br>
GET	/places	Places index page
<br>
POST	/places	Create new place
<br>
GET	/places/new	Form page for creating a new place
<br>
GET	/places/:id	Details about a particular place
<br>
PUT	/places/:id	Update a particular place
<br>
GET	/places/:id/edit	Form page for editing an existing place
<br>
DELETE	/places/:id	Delete a particular place
<br>
POST	/places/:id/rant	Create a rant (comment) about a particular place
<br>
DELETE	/places/:id/rant/:rantId	Delete a rant (comment) about a particular place
<br>
GET	*	404 page (matches any route not defined above)