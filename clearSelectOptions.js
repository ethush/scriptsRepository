// This function clear all the options in an HTML select statement
// Provide the 'id' of the select element
// References to old select will become invalidated
// Returns a reference to the new select object

function clearSelectOptionsFast(id) {
  var select = document.getElementById('idtoClean')
  var selectParentNode = select.parentNode
  var newSelectObj = select.cloneNode(false)
  selectParentNode.replaceChild(newSelectObj, select)
  //Use this line if you don't want use a return reference function 
  //select = newSelectObj
  return newSelectObj
}

// This is an alternative, simpler method.
// It does appear to be a fast method
// Tested in Firefox 
function clearSelectOptionsFastAlt(id) {
  document.getElementById(id).innerHTML = "";
}
