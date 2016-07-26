function styleRightNavbar() {
  var container = document.getElementsByClassName("container")[0];
  var containerHeight = container.clientHeight;
  var containerBottom = container.offsetTop + containerHeight;
  var nav = document.getElementsByTagName("nav")[0];
  var navbar = document.getElementsByClassName("right-navbar")[0];
  var navbarList = navbar.firstElementChild;
  var footer = document.getElementsByTagName("footer")[0];

  var navbarStartingTop = navbar.offsetTop - window.pageYOffset;
  var top = navbarList.offsetTop + window.pageYOffset;
  var listHeight = navbarList.scrollHeight;
  var height = containerHeight - navbarStartingTop - 5;

  if (height > (window.innerHeight || document.documentElement.clientHeight) - navbarStartingTop - footer.clientHeight - 5) {
    height = (window.innerHeight || document.documentElement.clientHeight) - navbarStartingTop - footer.clientHeight - 5;
  }

  if (height > (window.innerHeight || document.documentElement.clientHeight) - nav.clientHeight - footer.clientHeight - 10) {
    height = window.innerHeight - nav.clientHeight - footer.clientHeight - 10;
  }

  if (top + height > containerBottom) {
    height = containerBottom - top - 5;
  }

  navbarList.style.height = (listHeight > height) ? height + "px" : listHeight + "px";
}

window.onload = function() {
  var i = 0;

  function generateListItems(list, anchors, level) {
    while (i < anchors.length) {
      var current = anchors[i].parentNode;
      var currentTag = current.tagName;
      var currentLevel = parseInt(currentTag.replace("H", ""));

      if (currentLevel == level) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#" + anchors[i].id);
        link.appendChild(document.createTextNode(current.textContent));
        item.appendChild(link);
        list.appendChild(item);
        i++;
      }
      else if (currentLevel < level) {
        return list;
      }
      else {
        var item = list.lastElementChild || document.createElement("li");
        var sublist = document.createElement("ul");
        sublist.className = "nav";
        item.appendChild(generateListItems(sublist, anchors, level + 1));
        list.appendChild(item);
      }
    }

    return list;
  }

  var navbar =  document.getElementsByClassName("right-navbar")[0];
  var list = navbar.firstElementChild;
  var anchors = document.getElementsByClassName("anchor-bookmark");
  navbar.appendChild(generateListItems(list, anchors, 1));
  $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh');
  });
  styleRightNavbar();
}

$(window).scroll(function () {
  styleRightNavbar();
}).resize(function () {
  styleRightNavbar();
});
