/* DOM Manipulation */

//(1) Selecting Elements :- pehle ham elements ko select karenge HTML se.
//ways of selcting :- getElementByID() , getElementsByClassName() , querySelector() , querySelectorAll().

//getElementByID :- returns the matching node with requried ID given.
//getElementsByClassName :- Returns htmlCollection of all the matching Element's by required className given.
//querySelector :- Returns the first matching Element node within the node's subtree. If no matching node is found, null is returned.
//querySelectorAll :- Returns a NodeList containing all matching Element nodes within the node's subtree, or an empty NodeList if no matches are found.


//(2) Text/Content Access :- ab ham Elements ke andar ke text/content ko manipulate karenge.
//ways of doing :- innerText , textContent , innerHTML. 

//innerHTML :- used to get/set the HTML part of an element.
//textContent :- used to get/set all the text part inside the required selected content.
//innerText :- used to get/set the only text part that are rendering on UI.


//(3) Attribute Manipulation :- 
//ways of doing :- getAttribute , setAttribute , removeAttribute.


//(4) Dynamic DOM Manipulation :-
//ways of doing :- createElement,appendChild,removeChild,prepend.