---
layout: docs
title: Zoom Lab
---

**Zoom Lab** includes two features to help you emphasise important details: **Zoom to Area**, and **Drill Down**.

## <a class="anchor-bookmark" id="zoom-to-area"></a> Zoom to Area
**Zoom to Area** allows you to draw the audience's attention to a particular section of the slide by zooming in on it.

To use Zoom to Area, draw a rectangular shape to show the area you'd like to zoom in on. The larger the rectangle (relative to the entire slide),
the less the "zoom factor" - conversely, a smaller rectangle allows you to zoom in more into a detailed area.

<p>
  <img class="box-shadow slide" src="{{ site.baseurl }}/img/docs/zoom-to-area-1.png">
</p>

Next, select the rectangle, and click the `Zoom to Area` button. A single animation slide containing a series of animations will be created to zoom in on the area, as well as to zoom back out again.

<p>
  <img class="box-shadow slide" src="{{ site.baseurl }}/img/docs/zoom-to-area-2.png">
</p>

> **Note:** if you'd like, you can have the animations be inserted on separate slides instead. Just open the Zoom Lab settings dialog, and check the `Put all zoom effects on separate slides` option.
> 
> <img class="box-shadow" src="{{ site.baseurl }}/img/docs/zoom-to-area-6.png">  
> <img class="box-shadow" src="{{ site.baseurl }}/img/docs/zoom-to-area-7.png">


### <a class="anchor-bookmark" id="zoom-and-pan"></a> Zoom and Pan
<p>
  <img class="box-shadow slide" src="{{ site.baseurl }}/img/docs/zoom-to-area-5.gif">
</p>

Zoom to Area can also be used to emphasise multiple areas on the same slide. Simply draw a rectangular shape on each of the areas to zoom in on, then `ctrl-click` on each of the shapes in the order they should be displayed in:

<p>
  <img class="box-shadow slide" src="{{ site.baseurl }}/img/docs/zoom-to-area-3.png">
</p>

Next, click the `Zoom to Area` button. PowerPointLabs will create an animation slide with a series of animations on the current slide to zoom into and pan between the shapes, as well as provide an indication of the order in which they'll be displayed in:

<p>
  <img class="box-shadow slide" src="{{ site.baseurl }}/img/docs/zoom-to-area-4.png">
</p>

> **Note:** if `Put all zoom effects on separate slides` in the Zoom Lab settings dialog is checked, these animations will be inserted on separate slides as well.


## <a class="anchor-bookmark" id="drill-down"></a> Drill Down

<p>
  <img class="box-shadow slide" src="{{ site.baseurl }}/img/docs/drill-down-1.gif" />
</p>

**Drill Down** allows you to show your audience the bigger picture and progressively zoom into details without overwhelming them with information.

To use Drill Down, you first need to create two slides: one for the "bigger picture" view, and one with the content to drill down into. Leave an empty area on the "big picture" slide where you want the zoom effect to take place:

![]({{ site.baseurl }}/img/docs/drill-down-2.png)

Next, on the "big picture" slide, draw a rectangle in the empty space - this will be where the content from the "drill down" slide will appear.

![]({{ site.baseurl }}/img/docs/drill-down-3.png)

Select the rectangle, and click the `Drill Down` button.

![]({{ site.baseurl }}/img/docs/drill-down-4.png)

PowerPointLabs will replace the rectangle with an image of the "drill down" slide, and add an animation slide with the zoom effect.

![]({{ site.baseurl }}/img/docs/drill-down-5.png)

If you change the content of the "drill down" slide later, just select the picture and click `Drill Down` again to regenerate the zoom animation.

To create the effect of zooming back out to the "big picture" slide, simply duplicate the "big picture" slide and place it after the "drill down" slide. Next, select the picture of the "drill down" slide and click `Step Back`.

![]({{ site.baseurl }}/img/docs/drill-down-6.png)

**The [Quick Tutorial file]({{ site.baseurl }}/samples/tutorial.pptx) also contains a full walkthrough of this process, including both zooming in and out.**


