---
layout: docs
title: Sync Lab
---

**Sync Lab** allows you to ‘sync’ (i.e. copy-paste) only selected properties from one PowerPoint object to another, for example, to sync the text formatting from one object to another. This comes handy when you want to apply a combination properties consistently across multiple objects (even in multiple slides) without affecting other properties of those objects. 

The example below shows how the fill transparency and line style has been applied to all circles without affecting other properties such as fill color.

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_0.png" width="700">

> **Note:** PowerPoint’s built-in formatting feature allows you to select multiple objects on a slide and change their properties together, but you cannot do that if the objects are in different slides. Also, PowerPoint’s *Format Painter* feature allows you to sync styles from one object to another across slides, but it cannot select which properties to sync and which ones to keep intact. 

## <a class="anchor-bookmark" id="syncing-formats"></a> Syncing Formats

Suppose you have the following two slides and you are trying to tweak the formatting of the circles.

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_1.png" width="700">

Now, let’s assume you changed the orange circle as follows: 

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_2.png" width="350">

* Line Width: changed to `4.5 pts`

* Line Dash Type: changed to `Square Dot`

* Fill Transparency: changed to `20%`

To sync this style change to other circles, you must first copy these three attribute. Here are the steps to do that:

1. Open the Sync Lab  pane (if it is not already open) by clicking the `Sync Lab` button in the PowerPointLabs ribbon.

2. Select the orange circle you modified.

3. Click the `Copy` button in the  Sync Lab pane.

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_3.png" width="300">

A new pop-up window will appear. Select the formats you would like to copy in the pop-up window and click `OK`. For this example, let’s check `Transparency` property under the `Fill` category and `Width` and `Dash Type` properties under the `Line` category.

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_4.png" width="700">

Optionally, you can name the format to keep track of the different formats you have. For example, you can change the name to "Circle Style". Once you click `OK`, you should see this on the Sync Lab pane.

To apply the copied properties to other circles, use `ctrl-click` to select those circles on the slide and click the `Sync Format` button of the copied format.

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_5.png" width="350">

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_6.png" width="700">

Notice that only the formats we wanted to sync were copied onto the selected shapes, and other formats such as the `Fill Color` did not change.

> **Note:** Copied formats are only available during the editing session when they were created. They will not be available when you open the file again at a later time.

## <a class="anchor-bookmark" id="editing-a-copied-format"></a> Editing a Copied Format

To modify a copied format, you can click the `Edit Format` button of the copied format shown on the Sync Lab pane. 

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_7.png" width="350">

A pop-up window similar to the pop-up window when copying formats will appear.

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_8.png" width="300">

For example, you can edit the format we copied in the previous section and tick the `Width` and `Height` properties under the `Size/Position` category. Now, when you sync this format to another object, all selected properties will be applied, as shown in the example below (note how the size of the green circle has changed). 

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_9.png" width="700">

> **Note:** When editing a copied format, the properties shown in the pop-up window are the properties of the object the style was originally copied from, as at the point of copying. You can select these properties even when the original object is deleted from the slide.

## <a class="anchor-bookmark" id="deleting-a-copied-format"></a> Deleting a Copied Format

To remove a copied format from the Sync Lab pane, click the `Delete Format` button on the corresponding format. 

<img src="{{ site.baseurl }}/img/docs/sync-lab/image_10.png" width="350">

