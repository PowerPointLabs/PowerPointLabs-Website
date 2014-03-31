---
layout: post
title: Auto Animate
category: documentation
date: 2014-03-31 13:45:02
sample: "./samples/auto-animate%20sample.pptx"
bookmark: auto-animate
---

<p>
  <strong>Auto Animate</strong>
  makes creating slick animations as easy as specifying the start and end positions. The animation in the following video was created using Auto Animate.
</p>
<iframe style="display: block; margin-left: auto; margin-right: auto;" width="420" height="315" src="//www.youtube-nocookie.com/embed/tX381vX8D6M?rel=0" frameborder="0" allowfullscreen></iframe>
<p>
  <br/>First, create a slide that will serve as the starting position of the animation: the
  <strong>start slide</strong>.
</p>
<p>For the animation above, our start slide looks like this. Each of the items here is a separate shape, created using PowerPoint's shape tools.</p>
<img class="box-shadow" src="./img/docs/auto-animate-1.png" />
<p>
  <br/>Next, create the slide that will serve as the ending position of the animation - our
  <strong>end slide</strong>
  - by duplicating the start slide. This can be done either by right-clicking the slide in the slide list and selecting
  <code>Duplicate Slide</code>, or by clicking on it and pressing
  <code>Ctrl+D</code>
  on the keyboard.
</p>
<p>Once the end slide has been created, modify the shapes on it so they resemble the state they should be in at the end of the animation.</p>
<p>In our example, the end slide looks like this (with the changes magnified in detail on the right):</p>
<img class="box-shadow" src="./img/docs/auto-animate-2.png" />
<p>
  <br />To create the actual animation, select the start slide, go to the
  <code>PowerPointLabs</code>
  tab in the Office Ribbon, and click
  <code>Add Animation Slide</code>.
</p>
<p>
  <img src="./img/docs/auto-animate-3.png" />
</p>
<p>PowerPointLabs will create a new slide in between the start and end slides: the
  <strong>animation slide</strong>. These slides contain the actual animation effects, and can be identified by the PowerPointLabs logo in the top right corner.</p>
<blockquote>
  <p>Don't worry: the PowerPointLabs logo is invisible during the actual slide show.</p>
</blockquote>
<p>
  <img src="./img/docs/auto-animate-4.png" />
</p>
<p>That's all there is to it! You can play the slides to see how the animation turned out.</p>
<p>
  <strong>You can download the slides used in this example <a href="./samples/auto-animate%20sample.pptx">here.</a>
  </strong>
</p>
<h3>Adjusting Animations</h3>
<p>
  The easiest way to tweak the animations is to adjust the shapes in the start and/or end slides, then select the animation slide and click
  <code>Recreate Animation</code>
  in the
  <code>PowerPointLabs</code>
  tab in the Office Ribbon.
</p>
<p>
  <img src="./img/docs/auto-animate-5.png" />
</p>
<p>
  You can also adjust the length of the animation, or enable a smoother (but slightly more resource-intensive) animation method from the settings dialog:
</p>
<p>
  <img class="box-shadow" src="./img/docs/auto-animate-10.png" />
</p>
<p>
  <img class="box-shadow" src="./img/docs/auto-animate-11.png" />
</p>
<p>If you'd like a more hands-on approach, you can manually tweak the animations using the <a href="http://presentationsoft.about.com/od/powerpointanimations/ss/120711-change-speed-powerpoint-animation_2.htm">PowerPoint animations pane.</a>
</p>
<h3>Animation Tips and Tricks</h3>
<h4>Wrong Shapes being Animated?</h4>
<p>This can happen when PowerPointLabs can't figure out which shapes in the end slide correspond to those in the start slide. You can fix this by ensuring matching shapes have the same name on both slides, using the <a href="http://www.ellenfinkelstein.com/pptblog/the-wonderful-selection-pane-lets-you-easily-hide-objects-select-them-and-even-rename-them/">selection pane.</a>
</p>
<p>For example, notice how we have named the four green circles here
  <code>c1</code>,
  <code>c2</code>,
  <code>c3</code>, and
  <code>c4</code>on both the start and end slides.</p>
<p>
  <img src="./img/docs/auto-animate-6.png" />
</p>
<p>To rename a shape, either right-click on it and select
  <code>Edit name</code>, or click on it in the selection pane.</p>
<blockquote>
  <p>
    <strong>Note:</strong>
    if multiple shapes on the same slide share a single name, the wrong shapes may be animated.
  </p>
</blockquote>
<h4>Moving Shapes Together</h4>
<p>
  The easiest way to have many shapes moving together as one is to group them first. This can be done by selecting the shapes (either through the selection pane or by
  <code>Ctrl+click</code>
  ing them), right-clicking, and selecting
  <code>Group</code>.
</p>


<h3><a class="anchor-bookmark" id="animate-in-slide"></a>Animate In Slide</h3>
<p>
  <img src="./img/docs/auto-animate-9.png" />
</p>
<p>
  <strong>Animate In Slide</strong>
  can be used to create slick animations within a slide, just like those shown below:</p>
<p>
  <img class="box-shadow slide" src="./img/docs/auto-animate-7.gif" />
</p>
<p>To use Animate In Slide, place a copy of the shape to be animated at each &quot;stop&quot; along the desired animation path. Next, select the shapes in the order to be animated (by
  <code>Ctrl+click</code>ing them), then click the
  <code>Animate In Slide</code>
  button.</p>
<p>
  <img class="box-shadow slide" src="./img/docs/auto-animate-8.png" />
</p>
<p>To modify the animation, just move the shapes as necessary, select them, and click the
  <code>Animate In Slide</code>
  button again.</p>
