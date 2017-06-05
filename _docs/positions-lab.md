---
layout: docs
title: Positions Lab
---

**Positions Lab** allows you to reposition objects on a slide with fewer steps than before. With a variety of options in the settings of each function, you can fine tune how objects are positioned on a slide.

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_0.png">

## <a class="anchor-bookmark" id="aligning-objects"></a> Aligning objects

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_1.png">

### Aligning to Edges

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_2.png">

Suppose we want to position the three shapes shown below to make them overlap.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_3.png" width="400">

First, we `click` on the shape with the text "Visuals", which is the reference object we want to align to. Next, we use `ctrl-click` to select the rest of the objects. By clicking `Align Left`, we can align all other objects to the left visual edge of the "Visuals" shape as seen below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_4.png" width="400">

We continue by clicking `Align Bottom` to align all other objects to the bottom of the "Visuals" shape. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_5.png" width="400">

Similarly, the Align functions for Top and Right align the rest of the objects to the Top and Right of the first clicked object (the reference object) respectively.

### Aligning to an Axis

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_6.png">

Suppose now you want to align the component objects by a particular object’s center, instead of its edges, like the one below. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_7.png" width="550">

We can do this by using the **Align to Axis** functions.

Click to select the biggest circle as the reference object. Use `ctrl-click` to select the rest of the objects. Click `Align Horizontal` to horizontally align all other objects to the center of the reference object.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_8.png" width="600">

We then click `Align Vertical` to vertically align all other objects to the center of the reference object.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_9.png" width="450">

Now add in some labels to create our relationship diagram.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_10.png" width="200">

`Align Center` is the combination of both **Align Horizontal** and **Align Vertical**. For the previous example, we could have used `Align Center` to achieve the same result we wanted in just one step.

### Aligning Radially

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_11.png">

`Align Radial` equalizes the distance between each selected objects and the center of the reference object.

`Align Radial` uses the first selected object as the reference object. The center of the reference object is the origin where all distances will be calculated from. `Align Radial` calculates the distance between the center of the second selected object and the origin and aligns other selected objects to the same distance.

For example, we would like to create a radial list by aligning the supporting points at a fixed distance around the main topic. To do this, first select the reference object, which is the main topic. Next, select one of the supporting points to fix the alignment distance. Then, select the objects to be aligned and click `Align Radial`.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_12.png" width="600">

### Align Settings

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_13.png">

`Align` feature comes with several settings. Our previous examples uses the default value for the `Align to` options, which is `First Select Object`. 

Using the `Slide Edge` setting will align all objects with the slide as reference. A guide on how objects will be aligned to a slide is shown below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_14.png" width="700">

`Auto-Detect` setting will align objects similarly to PowerPoint’s default align feature. The auto-detect decides what to align to based on your selected objects.

If only one object or group is selected, it will align to the slide. This is the same as if `Slide Edge` is selected in the settings. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_15.png" width="500">

For `Align to Axis`, it will calculate the middle axis between the corner most objects and align the objects to the calculated middle axis as seen in the example below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_16.png" width="400">

Another difference to note between Positions Lab’s Align and PowerPoint’s default align is that Positions Lab will align objects by their visual edge, whereas PowerPoint will align objects by their bounding box (the white box surrounding each object). This becomes apparent when using objects like arrows that are rotated. Below is an example of the difference when using Align left:

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_17.png" width="500">

> **Note:** `Align Radial` does not use the Align settings.

## <a class="anchor-bookmark" id="adjoining-objects"></a> Adjoining objects

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_18.png">

### Adjoining without Aligning

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_19.png"><img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_20.png">

Suppose, in the example below, we want to move the shapes on the left to form a timeline as shown on the right. Click to select the first object (in this case, the "IMPLEMENTATION" object) as the reference object for all other objects to adjoin to. Use `ctrl-click` to select the rest of the objects. Click `Adjoin Vertical` to get the result below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_21.png" width="700">

The "IMPLEMENTATION" object has not moved, while the rest of the objects moved vertically towards it in the specified direction. The first selected object is always stationary and the rest of the objects are moved such that they are adjoined to each other. For `Adjoin Horizontal`, the objects will only move horizontally.

### Adjoining with Aligning

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_22.png"><img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_23.png">

Suppose we want to create a horizontal timeline like the one below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_24.png" width="700">

We can achieve this with the `Adjoin Horizontal and Align` feature. `Click` on the IMPLEMENTATION object first to make it the reference object. Use `ctrl-click` to select the rest of the objects. Clicking `Adjoin Horizontal and Align` will adjoin and align all selected shapes to the reference object’s center, as illustrated below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_25.png" width="700">

`Adjoin Vertical with Align` adjoins and aligns selected objects to the reference object’s center. This is useful for creating pyramid diagrams like the one below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_26.png" width="700">

Use `Align Right` and `Align Bottom` to overlay `Fruits` on top of `Protein`. Then group them to form a single object.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_27.png" width="700">

Then click on `Adjoin Vertical with Align` to stack the objects on top of each other, aligning them by their centers.

## <a class="anchor-bookmark" id="distributing-objects"></a> Distributing objects

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_28.png">

`Distribute` features take a group of objects and distributes them within a specified range of space. By equalising the gaps between selected objects we can make objects look evenly spread out within the desired space.

### Distribute Settings

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_29.png">

Settings have options that can customize the behaviors of the Distribute features.

Firstly, you can decide what will the selected objects be distributed within. `Distribute Horizontal`, `Distribute Vertical`, `Distribute Center` and `Distribute Grid` use different options from `Distribute Radial` to detect the reference objects. By default, all distribute features except `Distribute Radial` work with the first two selected objects as the reference object. The remaining selected objects will then be distributed within the reference objects.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_30.png">

Alternative options are -- `Within Slide Edges`, which will distribute the selected objects evenly throughout the slide. For this mode, the order of selection is not important. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/setting_image_1.png" width="390">

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_31.png">

> **Note:** "Within Slide Edges" option is not applicable to `Distribute Grid`.

`Within First Selected Object` uses only one object as the reference shape. This object acts like a container, and the remaining selected objects will be evenly distributed within this container.

For example, it might be difficult to know where to position the last object to achieve the effect that was demonstrated with `Within Objects Selected First and Second` selected, or you only know that there is a particular segment of the slide that you want the objects to occupy. You can create a box to indicate that space, select the objects to be distributed within the space, then click on `Distribute Horizontal`. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_32.png">

Lastly, `Within Corner Most Objects`, which allows you to select the objects in any order and auto-detect the most sensible reference objects. Distribute feature will choose the leftmost and rightmost as the reference objects for `Distribute Horizontal`, and topmost and bottommost for `Distribute Vertical`. For `Distribute Center`, both sets of reference objects, which may be different, are used.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_33.png">

> **Note:** "Within Corner Most Objects" option is not applicable to `Distribute Grid`.

For `Distribute Radial`, the first selected object is the reference object. The center of the reference object is the origin where all angle will be calculated from. By default, `Distribute Radial` uses the option `Within Objects Selected Second and Third`.

<img src="{{ site.baseurl }}/img/docs/positions-lab/setting_image_2.png" width="390">

`Within Objects Selected Second and Third` option distributes objects evenly around the reference object within an angle starting from the second selected object to the third selected object in a clockwise manner. If you would like to distribute objects in the opposite direction instead, swap the order of selection for the second and third selected object.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_34.png">

`At Second Selected Object` can be used to distribute objects evenly in a full circle around the reference object starting from the second selected object.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_35.png">

<img src="{{ site.baseurl }}/img/docs/positions-lab/setting_image_4.png" width="390">

`Distribute Radial` moves shapes around the center of the reference object. You can choose whether the orientation of shapes changes when moving them. By default, `Distribute Radial` uses the option `Fixed`, which retains the orientation of shapes moved. Alternatively, you may select the option `Dynamic` to rotate shapes when they move.

### Distributing Horizontally and Vertically

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_37.png">

Suppose you have a number of images to display on your slide and you want them to fill up the space as evenly as possible. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_38.png" width="700">

First, set the boundaries that you’d like the images to take up by placing one image at leftmost position you want your images to fill and another at the rightmost position you want the images to fill. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_39.png" width="500">

Now, `ctrl-click` on the leftmost image, then the rightmost image, followed by the remaining images. After that, click the `Horizontal` button in the `DISTRIBUTE` section.  

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_40.png" width="500">

`Distribute Vertical` also works in a similar fashion, but it only moves the objects vertically instead of only horizontally as shown in the previous example.

Distribute is also not limited to just one direction (horizontal or vertical). For example, instead of arranging the objects horizontally like the picture above, you’d now want to cascade the objects that you have.

Similarly, `Distribute Center` allows you to distribute a bunch of objects along the line from one object to another.  In the example below, we distribute objects along the line between the `Launch` arrow and the `Analysis` arrows 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_41.png" width="500">

### Distributing in a Grid Pattern

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_42.png">

Suppose you want to present a catalogue of objects in a neat and equalised grid like the one below. You want to limit the size of the grid and ensure that each row is of equal length.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_43.png" width="500">

We can use the Distribute Grid function to achieve that. First, decide how large a grid you want it to be by using `ctrl-click` to select two objects to be the top left and bottom right corners of the grid respectively. Next, select the rest of the objects in the order you want it to appear in the row. The result may vary for different order of selections.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_44.png" width="600">

Next, click on the `Distribute Grid` button. A new window will appear with some settings like the one below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_45.png">

Enter the number of rows or columns you wish for the grid to have. When you change the value in one box, the other value in the other box will be automatically adjusted so that the grid will always have the right number or rows and columns with regards to the number of objects selected. For this example, we can ignore the settings for `Grid Margins` and `Grid Alignment`. Once you click the `OK` button, you will see the result below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_46.png" width="700">

### Distribute Grid Settings

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_47.png">
<img src="{{ site.baseurl }}/img/docs/positions-lab/image_48.png">

Distribute Grid uses settings from both the `Distribute Settings` window and `Distribute By Grid` dialog box. 

#### Distribute

`Within First Selected Object` option takes the first selected object as reference object and builds the grid with that reference object as the top left corner of the grid. `Within objects selected First and Second` chooses the first selected object as the top left corner of the grid and the second selected object as the bottom right corner of the grid. The grid built will be contained within the boundaries of the first and second objects.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_49.png" width="500">

#### Equalise Space Between

<img src="{{ site.baseurl }}/img/docs/positions-lab/setting_image_3.png" width="390">

`Shape edges` and `Shape centers` options determine how the rows and columns are created. `Shape edges` will keep the rows (and columns if applicable) to be of the same length. `Shape centers`, on the other hand, align the objects in the columns by their centers.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_50.png" width="500">

#### Grid Margins

Grid Margins specify the distance between each objects. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_51.png" width="350">

#### Grid Alignment

Sometimes, the grid that is generated will have empty spaces on the last row or column. In those cases, Grid Alignment can be used to determine how the objects on the last row or column are aligned, as seen in the example below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_52.png" width="700">

#### Interaction

The table below summarises the result of the interaction of the grid settings with each other. 

<table border="1px solid #000000" width="800">
  <tr>
    <th width="150">Original Shape</td>
    <th width="150">Distribute</td>
    <th>Equalise Space Between</td>
    <th>Result</td>
  </tr>
  <tr>
    <td rowspan="10" align="center"><img src="{{ site.baseurl }}/img/docs/positions-lab/table_image_0.png" width="130"></td>
    <td rowspan="4">Within First Selected Object</td>
    <td rowspan="2">Shape edges</td>
    <td align="center"><img src="{{ site.baseurl }}/img/docs/positions-lab/table_image_1.png" width="130"></td>
  </tr>
  <tr>
    <td>Alignment does not affect result</td>
  </tr>
  <tr>
    <td rowspan="2">Shape centers</td>
    <td align="center"><img src="{{ site.baseurl }}/img/docs/positions-lab/table_image_2.png" width="130"></td>
  </tr>
  <tr>
    <td>Alignment and Margin affect result</td>
  </tr>
  <tr>
    <td rowspan="4">Within objects selected First and Second</td>
    <td rowspan="2">Shape edges</td>
    <td align="center"><img src="{{ site.baseurl }}/img/docs/positions-lab/table_image_3.png" width="130"></td>
  </tr>
  <tr>
    <td>Alignment and Margin does not affect result</td>
  </tr>
  <tr>
    <td rowspan="2">Shape centers</td>
    <td align="center"><img src="{{ site.baseurl }}/img/docs/positions-lab/table_image_4.png" width="130"></td>
  </tr>
  <tr>
    <td>Alignment and Margin does not affect result</td>
  </tr>
  <tr>
    <td>Within Slide Edge</td>
    <td colspan="2">Does not work for `Distribute Grid`</td>
  </tr>
  <tr>
    <td>Within corner most objects</td>
    <td colspan="2">Does not work for `Distribute Grid`</td>
  </tr>
</table>


Now let us demonstrate the effect of one pair of settings. Let’s say we want to create the infographic as shown below. The objects are aligned to each other by their center. In this case we can use the settings of `Shape centers` with either `Within objects selected First and Second` or `Within First Selected Object`. For this case, we will use Within First Selected Object.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_53.png" width="600">

We first use `ctrl-click` to select the objects in the order below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_54.png" width="700">

After clicking `Distribute Grid` and choosing `Rows: 3` and `Columns: 3`, click `OK` to order the objects in a 3x3 grid in the order that you chose. Circle 1 remains unmoved. Add the remaining background and axis to create the infographic.

### Distributing Radially

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_55.png">

`Distribute Radial` feature equalizes the angles between each selected object and the center of the reference object.

Suppose we want to create a radial diagram by distributing the sub-topics around the main topic. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_56.png" width="600">

First select `At Second Selected Object` in the Distribute Settings. Next, select the reference object, which is the main topic. Then, select the boundary objects used to determine the starting and ending points of the angle for the objects to be distributed within. Finally, select the objects to be distributed and click `Distribute Radial`.

If the position of the objects distributed looks slightly deviated, you can create a temporary shape, a small circle is preferred, to act as the center of the reference object and adjust to your needs. You can use `Distribute Radial` together with `Snap Away` (another feature of Positions Lab) to create pointing effects with respect to a reference object. 

> **Note:** When using `Shape edges` to equalize the space between selected objects, the objects must not cross the center of the reference object. Results may differ from expectation if that is not the case.

## <a class="anchor-bookmark" id="reordering-objects"></a> Reordering objects

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_57.png">

### Swap

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_58.png">

Swap allows you to swap the positions of any 2 or more objects. By default, when more than 2 objects are selected, the objects will be swapped in a cyclic order, from left to right. After selecting a group of objects, at each click of the swap button, the objects will be swapped to the right. If there are only two objects, then they will simply swap locations.

Suppose you already have perfectly aligned objects, but you wish to replace just one of them, while maintaining the original visual effects. This would be a chore, as you would have to place the new object directly on top of the old one, and then delete away the old object. With the swap functionality, it becomes a lot simpler. All you have to do is add the new object, and then select the object to be swapped out, and you’re done!

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_59.png" width="550">

Suppose now that you are maintaining some table that keeps track of team scores and sorted in the right order. If a team suddenly overtakes a few others, it may be troublesome to rearrange them to be in the correct order. This is when cyclic swap becomes useful. An example is shown below, where `Team B`, originally last in the ranking, gains some points and is now second. Instead of manually moving down the teams it has overtaken and placing `Team B` in the correct position, you can select `Teams A, C, D`, and `B`, and apply the cyclic swap.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_60.png" width="500">

### Reorder Settings

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_61.png">

#### Swap Order

Swapping can be done either left to right as shown earlier, or in terms of clicking order. By default, swap will occur from left to right. For clicking order, you can simply designate the order of swap by using `ctrl-click` on the objects in the order that you’d like. Then, at every click of the swap button, the selected objects will be swapped in the same order. 

For example, let’s say again you are maintaining the scores of some teams. After a match, their points get updated as shown on the left side of the image below. In order to get them into the correct order again, you can do a swap by clicking order. First you click `Team B`, then `Team C`, then `Team A`, followed by `Team F` and lastly `Team D`. After clicking swap, the result is on the right, where `Team B` takes the place of `Team C`, `Team C` takes the place of `Team A`, `Team A` takes the place of `Team F`, `Team F` takes the place of `Team D`, and lastly `Team D` takes the place of `Team B`.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_62.png" width="500">

#### Anchor Point

Suppose you want to reorder shapes but keep them aligned on a particular side. An example would be when you want to create a histogram like the one below. You have the bars ready but now you want to swap the orange and purple bar while keeping them aligned at the bottom.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_63.png" width="250">

In this case, you can select the purple and orange bar using `ctrl-click` and choose the anchor point to be either bottom left or right. Now click swap to get the result as shown below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_64.png" width="650">

There are 9 anchor points for an object to choose how the swap function swap the shapes by. Choose the one that suits the scenario the best.

## <a class="anchor-bookmark" id="reorienting-objects"></a> Reorienting Objects

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_65.png">

The `Reorient` features ease the changing of the orientation of objects. 

### Rotating objects around another object

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_66.png"><img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_67.png">

Suppose you want to change the position of green arrows as follows i.e. slightly rotate them clockwise around the picture of the Sun. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_68.png" width="500">

First, click the picture of the Sun (because you want to use it as the reference object) and then `ctrl-click` the arrows. After that, click the `Rotate` button. Now you can click on of the green arrow objects and drag the mouse to perform the rotation. To exit the rotate mode, click anywhere else in the slide. 

> **Note:** Instead of using the dragging the mouse to rotate objects, you can press `Up arrow` or `Left arrow` key to rotate anti-clockwise and `Down arrow` or ` Right arrow` key to rotate clockwise. 

You can also press `ctrl-arrow` keys to rotate slightly in the specified direction. Once you’re done rotating the shapes, simply click anywhere that is not within the selected shapes and the rotate mode will come to an end.

`Duplicate and Rotate` works similar to the `Rotate` feature above except that it rotates a duplicate of the objects being rotated i.e. originals remain intact.  

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_69.png" width="500">

### Snap objects to Horizontal/Vertical orientation

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_70.png">

Snap Horizontal and Snap Vertical rotates objects to vertical and horizontal orientation. 

Suppose you had multiple arrows that were pointing at an angle, and you now wish for them to point horizontally, you can then select all these arrows and apply the snap horizontal function. 

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_71.png" width="500">

Snap Vertical works similarly, except that the objects will be vertical, instead of horizontal.

### Snap Away

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_72.png">

Snap to/away allows you to reorient objects to point away from a reference object. 

Suppose you want to reorient the green arrows to point away from the picture of the Sun.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_73.png" width="600">

Select the Sun, then `ctrl-click` to select the green arrows and click the `Snap Away` button. You can click the button multiple times to get different orientations relative to the reference object. For example, the blue arrows and red arrows in the picture below.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_74.png" width="400">

### Moving Objects Strictly Vertically/Horizontally 

<img class="box-shadow" src="{{ site.baseurl }}/img/docs/positions-lab/image_75.png">

Suppose you want to move the shape `B` away from `A` without changing its vertical alignment.

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_76.png" width="500">

Select `B` and click on the `Lock Axis` button.  Now, you can use the mouse to move `B` and it will move only horizontally or only vertically, but not both. That way, you can get it to move horizontally without changing the vertical alignment or vice versa.

To come out of the `lock axis` mode, click on the `Lock Axis` button again or click on some other area on the slide.

### Reorient Settings

<img src="{{ site.baseurl }}/img/docs/positions-lab/image_80.png">

The settings is used for `Rotate` and `Duplicate and Rotate`. They work very similar to those under the `DISTRIBUTE SETTINGS`.  

## <a class="anchor-bookmark" id="previewing-position-lab-features"></a> Previewing Position Lab Features

You can preview Positions Lab features by hovering over the buttons while holding on to the `shift` key. 

> **Note:** Preview is not applicable to Distribute Grid, Rotate and Lock Axis.

