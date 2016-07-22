window.onload = function() {
  var i = 0;
  
  function generateListItems(list, anchors) {
    var sectionTag = anchors[i].parentNode.tagName;
    var sectionLevel = parseInt(sectionTag.replace("H", ""));

    while (i < anchors.length) {
      var current = anchors[i].parentNode;
      var currentTag = current.tagName;
      var currentLevel = parseInt(currentTag.replace("H", ""));

      if (currentLevel == sectionLevel) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#" + anchors[i].id);
        link.appendChild(document.createTextNode(current.textContent));
        item.appendChild(link);
        list.appendChild(item);
        i++;
      }
      else if (currentLevel < sectionLevel) {
        return list;
      }
      else {
        var sublist = document.createElement("ul");
        list.appendChild(generateListItems(sublist, anchors));
      }
    }

    return list;
  }

  var navbars =  document.getElementsByClassName("right-navbar");
  if (navbars.length > 0) {
    var list = navbars[0].firstElementChild;
    var anchors = document.getElementsByClassName("anchor-bookmark");
    navbars[0].appendChild(generateListItems(list, anchors));
  }
}