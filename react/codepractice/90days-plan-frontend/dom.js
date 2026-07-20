// DOM - document object model.

//document.loaction --> tells where is website located.

//document.designMode='on' --> this is used to modify or change the document of any website,By deafult it will be in document.designMode='off'.

//document.activeElement --> Used to get present running element in website means here running element is body only.

//doucment.getElementByTag('tagName'); --> used for modify or changeContent of a particullar tag
//To change the content we should assign it a variable var e = doucment.getElementByTag('tagName');
// e.innerText = "anyText";
//innerText,innerHtml --> used for change the text in a tag.
//document.getElementByClassName('className') --> to target a class and get it and change it
//document.getElementByClassName('className')[0] -->[0] this part tell that if we have more than one class name or tags we generally gives this [0] means first class or tag it work by index value.

// setAttribute("id","idValue") --> used set a class or id to tag without pre-declaring it in html tag.

// document.createAttribute('class'or'id'or'tag') --> used to create without help of js

//appendChild(childElementName) --> used to get attach both parent and child means when we want to keep a element in a div we use this.

//document.querySelector('.'or'#')--> just like css we can select id or class with just it selectors

//document.querySelectorAll('.'or'#')--> just like css we can select id or class with just it selectors,but it bring all the classes or tags with same name.

//crt+f --> to open or search a word. 
//crt+h --> to repalce a word.

//anyVariableName.style.anyCssStyle = "value"; -> used to add style to a tag or class or id using js.