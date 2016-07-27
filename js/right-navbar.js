function styleRightNavbar() {
  var container = document.getElementsByClassName("container")[0];
  var containerHeight = container.clientHeight;
  var containerBottom = container.offsetTop + containerHeight;
  var nav = document.getElementsByTagName("nav")[0];
  var navbar = document.getElementsByClassName("right-navbar")[0];
  var navbarList = navbar.firstElementChild;
  var footer = document.getElementsByTagName("footer")[0];

  var navbarTop = navbar.offsetTop;
  var navbarInitialTop = navbarTop - window.pageYOffset;
  var top = navbarList.offsetTop + window.pageYOffset;
  var listHeight = navbarList.scrollHeight;
  var height = containerBottom - navbarTop - 15;

  if (height > (window.innerHeight || document.documentElement.clientHeight) - navbarInitialTop - footer.clientHeight - 5) {
    height = (window.innerHeight || document.documentElement.clientHeight) - navbarInitialTop - footer.clientHeight - 5;
  }

  if (height > (window.innerHeight || document.documentElement.clientHeight) - nav.clientHeight - footer.clientHeight - 20) {
    height = window.innerHeight - nav.clientHeight - footer.clientHeight - 20;
  }

  if (top + height > containerBottom) {
    height = containerBottom - top - 15;
  }

  navbarList.style.height = (listHeight > height) ? height + "px" : listHeight + "px";
}

window.onload = function() {
  var i = 1;

  function addCurrentSubSection(list, anchors, level) {
    while (i < anchors.length) {
      var current = anchors[i].parentNode;
      var currentTag = current.tagName;
      var currentLevel = parseInt(currentTag.replace("H", ""));

      if (currentLevel == level) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.setAttribute("href", "#" + anchors[i++].id);
        link.appendChild(document.createTextNode(current.textContent));
        item.appendChild(link);
        list.appendChild(item);
      }
      else if (currentLevel < level) {
        return list;
      }
      else {
        var item = list.lastElementChild || document.createElement("li");
        var sublist = document.createElement("ul");
        sublist.className = "nav nav-" + (level + 1);
        item.appendChild(addCurrentSubSection(sublist, anchors, level + 1));
        list.appendChild(item);
      }
    }

    return list;
  }

  var anchors = document.getElementsByClassName("anchor-bookmark");
  var navbarList =  document.getElementsByClassName("right-navbar")[0].firstElementChild;
  var currentPageItem = navbarList.firstElementChild.getElementsByClassName("active");

  if (currentPageItem.length > 0) {
    var currentPageItem = currentPageItem[0];
    var list = document.createElement("ul");
    list.className = "nav nav-2";
    currentPageItem.appendChild(addCurrentSubSection(list, anchors, 2));
  }
  
  $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh');
  });
  
  styleRightNavbar();

  navbarList.scrollTop = currentPageItem.offsetTop;
}

$(window).scroll(function () {
  styleRightNavbar();
}).resize(function () {
  styleRightNavbar();
});
