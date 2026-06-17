// To store the user login details using 3-things session-storage,local-storage,cookies --> int this cookies are very important all these are in (appliction part in web).
// Local_Storage is used for pramnent storage means in the case of you logout from chrome it will store our detalies.
// Sesion_Storage is for until we close the perticular tab it will delete.it is for more security for payment gateway.
// localStorage.clear() --> it is used to clear our deatils.
//cookie --> it work as same as local storage mean till manual logot it will store our memory but it as only storage limit of 4MB

// STORAGE_MANIPULATION
// we can't write it in js it will be in developer tools
// localStorage --> used to get all the wanted details.
//localStorage.getItem("itemName") --> it is used for to get the item in localStorage get it out 
// To store it in any storage application we should get the value as object and convert it to JSON and use also if we should get it as JSON to Object.
// localStorage.removeItem("itemName") --> to remove any item from localStorage.

//seesionStorage --> same operator and same things in sessionStorage also.
// seesionStorage.setItem('');
// seesionStorage.getItem('');
// seesionStorage.clear();

// To use cookie (document.cookie="key:value") --> can't be modifed but can create a new element.
