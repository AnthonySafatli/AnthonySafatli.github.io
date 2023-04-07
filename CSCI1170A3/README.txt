navbar.js:
- toggleMobileView(event):
	Is called whenever the hamburger icon is pressed. It should either add or remove the invisible class from the nav section. This is so the user can show or hide the nav section when in mobile view.
	Example: navButton.addEventListener("click", toggleMobileNav);
	Input: event object with event info
- resize(event):
	Is called whenever the user changes the window size. It will determine if the user is in mobile view or not. If not it will give the nav section the invisible class which will make it default to being invisible when resized to mobile.
	Example: window.onresize = resize;
	Input: event object with event info

confirmEmail.js:
- confirmSubmition(event):
	Is called whenever the user submits the contact form. It will prompt the user if they are sure to submit the form. If not the form will not submit.
	Example: submitbutton.addEventListener("submit", confirmSubmition);
	Input: event object with event info

projectGallery.js:
- openInfo(event):
	Is called whenever an image in the gallery is clicked. It finds the info container and changes its class from info-container-invisible to info-container, which makes the info about the class visible
	Example: image.addEventListen("click", openInfo);
	Input: event object with event info
- closeInfo(event):
	Is run whenever an info-container div is click (because to close you can click anywhere). It goes through any elements with class info-container and sets them to info-container-invisible
	Example: infoContainer.addEventListener("click", closeInfo);
	Input: event object with event info

colourChanger.js:
- setTheme(navBackground, navText, navSpecial, bodyBackground, bodyText, bodySpecial):
	Is called to change the theme for a page. It goes to teh css page and changes all the variables to the specified colours.
	Example: setTheme('#03111a', '#ffffff', '#c7e9ff', '#13212d', '#e6e6e6', '#d3ddf5');
	Input: 6 strings, each being a colour for the theme
- setHeroImage(image):
	Is called to change the hero image for index.html. It tries to finds the hero img element and changed=s it based on input
	Example: setHeroImage("hero_black.svg");
	Input: a string for the name of the hero image
- setDarkTheme(event), setLightTheme(event), setNeonTheme(event):
	Are called when one of the buttons for changing the theme is pressed. It will change the colours of the css variables using setTheme() and change the hero image using setHeroImage()
	Input: event object with event info

References:
[1] Rina Wehbe. 2023. Lab 5 (April 2023). Retrieved April 6, 2023 from https://dal.brightspace.com/d2l/le/content/248856/Home
[2] Rina Wehbe. 2023. Lecture 18 (March 2023). Retrieved April 6, 2023 from https://dal.brightspace.com/d2l/le/content/248856/Home
[3] w3schools. JavaScript String lastIndexOf(). Retrieved April 6, 2023 from https://www.w3schools.com/jsref/jsref_lastindexof.asp#:~:text=The%20lastIndexOf()%20method%20returns,the%20beginning%20(position%200
[4] w3schools. JavaScript String indexOf(). Retrieved April 6, 2023 from https://www.w3schools.com/jsref/jsref_indexof.asp#:~:text=The%20indexOf()%20method%20returns,()%20method%20is%20case%20sensitive
[5] w3schools. JavaScript HTML DOM Elements. Retrieved April 6, 2023 from https://www.w3schools.com/js/js_htmldom_nodes.asp
[6] w3schools. target Event Property. Retrieved April 6, 2023 from https://www.w3schools.com/jsref/event_target.asp
[7] A Goodman. 2022. CSS: How to Center an Element with Fixed Position (June 2022). Retrieved April 6 2022 from https://www.kindacode.com/snippet/css-how-to-center-an-element-with-fixed-position/
[8] IconScout. Retrieved April 6, 2023 from https://iconscout.com/icons/code
[9] DEEditor. Retrieved April 6, 2023 from https://deeditor.com/
[10] MDM Contributors. 2023. Window: resize event (February 2023). Retrieved April 7, 2023 from https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event

Used [1] and [2] as reference for Code Review section. 
Used [3], [4], [5] to learn about some javascript methods. 
Used [6] to learn about event.target. 
Used [7] to see how to center div when 'position: fixed;'
Used [8] to get icon for hero section and [9] to colour the icon.
Used [10] to learn about resize event

Asset List:
- github logo.png
- insta logo.png
- mail icon.png
- hero_white.svg
- hero_black.svg
- logo.png
- pacman logo.png
- rootscape player.png
- null logo.png
- mnist number.png

File Structure:
- Assets:
	- Images: 
		- github logo.png 
		- insta logo.png
		- mail icon.png
		- hero_white.svg
		- hero_black.svg
		- logo.png
		- pacman logo.png
		- rootscape player.png
		- null logo.png
		- mnist number.png
- Code Review:
	- Code Review.docx
	- Code Review.pdf
- Design:
	- Design.drawio
	- Design.pdf
- JavaScript:
	- colourChanger.js
	- confirmEmail.js
	- navbar.js
	- projectGallery.js
- contactme.html
- index.html
- projects.html
- README.txt
- style.css

Note: I have reused a little but of code (such as the table and some text for paragraphs) from A1 and A2, however most of the code is original. 
	Although a lot of the idea still come from those two assignments

Github Pages: https://AnthonySafatli.github.io/CSCI1170A3/index.html
Note: I have already set up a github pages website, so I made a folder for A3 and put the project inside, so index is located at AnthonySafatli.github.io/CSCI1170A3/ not the root directory. 