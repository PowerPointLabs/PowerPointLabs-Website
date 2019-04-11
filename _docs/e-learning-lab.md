---
layout: docs
title: E-Learning Lab
---

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_2.png" width="250">
</p>

**E-Learning Lab** (*eLL* for short) enables you to add *supplementary explanations* (*explanations* for short) to PowerPoint slides. An explanation item can have the following elements:

* A synthesized audio explanation: eLL uses text-to-speech techniques to generate an audio explanation from the text you provide i.e. there is no need to record your own voice.

* A caption: a text explanation that is placed at the bottom of the slide

* A callout: a text explanation that is placed near the element in the slide that being explained

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_0.png">
</p>

Adding such explanations to slides is particularly useful when creating e-Learning resources from slides e.g., self-study slides or e-Learning videos.

* Here is an example self-study slide deck that has such explanations.

* Here is an e-Learning video created from such slides.

## <a class="anchor-bookmark" id="adding-explanations"></a> Adding explanations

To learn how to use eLL, let us walk through a scenario of adding explanations to a slide. Suppose you have a slide like this (see screenshot below) that has a list of bullet points that appear one after the other and you want to add explanations to each bullet point. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_1.png" width="600">
</p>

First, open the eLL by clicking on the `E-Learning` button on PowerPointLabs ribbon.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_2.png" width="250">
</p>

You should see something like this.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_3.png" width="600">
</p>

The items you see in the eLL task pane are animations that already exists in the slide (i.e., those used to animate the three bullet points). The number on each item corresponds to the click number under which the animation should appear e.g., the first bullet point appears after the first click.

To add an explanation to the first bullet point, right click on the first item in the eLL panel and select `Add Explanation Below`

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_4.png" width="600">
</p>

An empty explanation item will be created below the item numbered 1. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_5.png" width="600">
</p>

Type some text into the empty textbox and tick the `Callout`, `Caption` and `Voice` checkboxes.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_6.png" width="600">
</p>

Next, click on the `Sync` button on the top of eLL panel to synchronize the new explanation we added with the slide.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_7.png">
</p>

You will notice that a callout, a caption and an audio has been added to the slide and corresponding animations have been created on PowerPoint’s `Animation Pane`. Note that callout is added to a random location in the slide; you can move/resize it as you wish.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_8.png" width="800">
</p>
Now, try playing the slide in presentation mode and observe how the explanation appears together with the first bullet point.

**Congratulations! You have just added an explanation to your slide!**

You can similarly add explanations to the remaining bullet points, or attach an explanation to any animation step in any slide.

Notes:

* You can add multiple explanations to a slide without ‘syncing’ after each addition. But you should ‘sync’ before moving onto a different slide.

* To change the words of a caption/callout/audio, simply edit the corresponding text in the eLL panel and ‘sync’. If you edit the text in the callout/caption shapes, those changes will be lost when you sync the next time.

## <a class="anchor-bookmark" id="other-features"></a> Other Features

###<a class="anchor-bookmark" id="customize-appearance"></a> Customizing the appearance of explanations

By default, callouts and captions have the following appearances:

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_9.png">
</p>

You are free to customize them in any way (e.g., change font size/color) and eLL will try to preserve those formattings at subsequent updates to the callout/caption.

Not only that, if you customize an existing callout/caption format on a slide, the same format will be automatically copied over to all subsequent callouts/captions you add to that slide.

### <a class="anchor-bookmark" id="add-more-voice-options"></a> Adding more voice options

By default, eLL uses text-to-speech voices that comes with your Windows. However, it is possible to use the following additional voice options in eLL.

* Microsoft Azure Speech services -- refer to the [`Adding Microsoft Azure Speech Services` section] for instructions. 

* IBM Watson Speech Services -- refer to this [`Adding IBM Watson Voice Options` section] for instructions. 

## <a class="anchor-bookmark" id="eLL-ui"></a> User Interface 

### <a class="anchor-bookmark" id="eLL-task-pane"></a> E-Learning Lab Task Pane

The main UI of eLL is shown below. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_10.png" width="600">
</p>

There are two types of items on eLL. Normal item is a group of regular animations that cluster under the same click number on the animation pane. An example custom item has the following UI:

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_11.png" width="600">
</p>

Custom items are shown for reference only. You will not be able to add/edit them using the eLL. They should be managed using the normal PowerPoint features. 

The main job of the eLL panel is to help you manage explanation items. An example is shown below:

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_12.png" width="800">
</p>

a. **Animation trigger**: Use this to control when the explanation will appear. 

* `On Click`: The explanation appears upon a click by the user

* `With Previous`: The explanation item appears together with the item that is above it in the eLL panel.

b. **Callout checkbox**: Tick the callout checkbox to create a callout for this explanation.

c. **Caption checkbox**: Tick the caption checkbox to create a caption for this explanation.

d. **Voice checkbox**: Tick the voice checkbox to create audio for this explanation.

e. **Audio preview button**: Click on this button to open `Audio Preview Window` as shown below which allows you to:

* Preview different voices for the same text

* Select the best voice for the explanation item

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_13.png" width="400">
</p>

To preview the audio for a preferred voice, click the `speak` button next to it. To preview other voices, select the voice (using the radio button and drop-downs) and click on `speak` button at the bottom. Click `OK` to confirm you selection.

f. **Caption textbox**: Type your text for callout/caption here.

g. **Use a different text for the callout**: Tick this checkbox if you want callout to have a different text from the caption/audio. When you tick it, another text box will appear for you to fill in the text for the caption.

h. **Move down button**: Use this button to move the explanation down in the animation order.

i. **Delete button**: Use this button to delete the explanation item.

j. **Move up button**: Use this button to move up the explanation button up in the animation order.

k. **Click number label**: Indicates the click number for the explanation item.

* If an explanation item has trigger type `With Previous`, then it will not have any click number as it will be attached to the click of an item above it. 

* If the explanation item has none of the three types  `Callout`, `Caption` and `Voice` are ticked, the click number will appear as a grey circle (example given below).

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_14.png" width="600">
</p>

### <a class="anchor-bookmark" id="eLL-settings"></a> Settings

To open the eLL `Settings` page, click on the `Settings` button from `E-Learning` dropdown menu on PowerPointLabs ribbon.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_15.png" width="250" >
</p>

The following settings page will be shown to user. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_16.png" width="800">
</p>

**Default Voices:**

Use this section to set the default voice for voice generation.

**Voice Preferences:**

You can also select and rank up to 5 *preferred *voices (reason: preferred voices are easier to preview when trying to select a voice for an explanation). To set preferred voices, click on the `Edit` button in `Voice Preferences` section and rank up to 5 voices as indicated in the diagram above. 

**Other Settings:**

To hear the audio after generating/syncing an audio explanation, tick the `Preview` checkbox.

##<a class="anchor-bookmark" id="create-azure-account"></a> Adding Microsoft Azure Speech Services

### Step 1. Create an Azure Speech Service Instance

To create an Azure text-to-speech (TTS for short) service instance, there are two options available. The first option creates a free Azure trial for 3 months. While this is the simpler, you will have to create a proper Azure account (i.e., option 2) after the trial expires. 

###<a class="anchor-bookmark" id="option-1"></a> Option 1: Azure Free Trial for 3 months

Go to [link](https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/) and click on the green `Try Speech Services` button.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_17.png" width="400">
</p>

Click on the blue `Get Started` button under `7 day trial`

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_18.png" width="600">
</p>

Choose a location and accept terms and conditions. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_19.png" width="600">
</p>

Sign in to Azure cloud services using one of the four options. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_20.png" width="400">
</p>

You will be presented with the following screen. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_21.png" width="800">
</p>

Copy the API key. Use this API key to login to Azure account and select the correct region during login. 

### <a class="anchor-bookmark" id="option-2"></a> Option 2: Register for an Azure Account

Go to this [link](https://azure.microsoft.com/en-us/free/) and select the green button `Start Free`. 

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_22.png" width="600">
</p>

Follow the instructions to create a new Microsoft Account. After you have successfully created your Microsoft account, you will be automatically directed to the page below. Click on the green button `Go to the portal`.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_23.png" width="600">
</p>

You will be presented with a page similar to the one attached below. Type in `Cognitive Services` in the search bar and select the `Cognitive Service` under Services.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_24.png" width="600">
</p>

Create an instance by clicking on the `Add` button under Cognitive Services page.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_25.png" width="600">
</p>

You will be directed to a new page. Type `speech` in the search bar and select the first result that appears.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_26.png" width="600">
</p>

Next you are about to create a new Azure Cloud Services instance. Be sure to choose a location that is near you and select `F0` under pricing tier, F stands for `free`.

<p>
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_27.png" width="400">
  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_28.png" width="400">
</p>

After clicking `Create` and wait for a few seconds, you will receive a notification telling you that instance deployment is successful. Click on `Go to resource` button.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_29.png" width="600">

Alternatively, you can also click on `Dashboard` button and then click on the instance under `All resources` panel. The instance that you just created will appear below. Note that your instance may have a different name than `speech`. If you did not see your newly created instance, be sure to wait for a few minutes and refresh the page again.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_30.png" width="600">

After clicking on the instance, you will be directed to the Azure cloud service main page as shown below.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_31.png" width="600">

Click on the `Keys` link and copy any of the keys below. Use the API key and instance region to login to Azure Cloud Services from e-Learning Lab.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_32.png" width="600">

### Step 2: Add Azure voices to e-Learning Lab

Open `Settings` page from eLL dropdown menu on PowerPointLabs ribbon and click on the  `Click to Log In` button as shown below.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_33.png" width="400">

You will be directed to a login page as shown below.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_34.png" width="400">

Enter your API key copied from step 1 and select the correct endpoint. Click `Confirm` to login. 

##<a class="anchor-bookmark" id="create-ibm-account"></a> Adding IBM Watson Voice Options

### Step 1. Create a Watson Speech Service Instance

We will guide you towards creating a Watson text-to-speech instance under `free` plan. Note that only 10,000 characters can be generated per month under the free plan. To upgrade, please refer to [link to `Note` section].

The following procedures are adapted from Watson cloud documentation at [link](https://console.bluemix.net/docs/services/text-to-speech/getting-started.html#gettingStarted).

Go to [link](https://console.bluemix.net/catalog/services/text-to-speech) 

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_35.png" width="600">

Click on `Log in` if you already have a Watson account. Otherwise, click on `Sign up to Create`.

Follow the steps as suggested by Watson website to complete the account creation process. You will be prompted with the following message upon successfully confirmed your email address.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_36.png" width="400">

Click `Log in` button to log in to IBM cloud. Note that you should select `IBMid` under `ID`. 

Key in your email and password that you used to register for IBM Watson account.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_37.png" width="400">

After clicking `Continue`, you will be directed to the IBM dashboard page. If not directed automatically or some error message showed up despite that you have keyed in your account credentials correctly, you can go to dashboard manually by clicking on this link [https://console.bluemix.net/dashboard/apps](https://console.bluemix.net/dashboard/apps) . You will be presented with a similar page as shown below. 

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_38.png" width="600">

Click on the `Create resource` button on the top right of the page. You will be directed to a new page. Type "Text to Speech" in the search bar and select `Text to Speech` card under `AI` section.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_39.png" width="600">

Select a deploy location that is nearest to your location, and click `Create` button.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_40.png" width="600">

You will be auto-directed to the newly created text-to-speech instance. Click on `Service credentials` on the left menu bar. Then click on your instance under `Service credentials`. 

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_41.png" width="600">

Click on the `View credentials` button to reveal your instance credentials. Your credentials should look similar to the one below.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_42.png" width="600">

Copy the apiKey value. Key in this value when you login to Watson voice. The region refers to the location where you choose your instance to be deployed in.

Note:

If you create your TTS instance under free tier, then you are only allowed to generate 10,000 characters per month. The instance will be automatically deleted after 30 days of inactivity. To upgrade to standard tier, go to your dashboard and click on your instances. Choose `Plan` from the menu bar and select `Standard` tier. Click `Save` to save your changes. 

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_43.png" width="600">

You may need to re-stage or re-start your instance after that. For details, please refer to [link](https://console-tok02-black.cdn.s-bluemix.net/docs/account/change-plan.html#changing) .

### Step 2: Add Watson voices to e-Learning Lab

Open `Settings` page from eLL dropdown menu on PowerPointLabs ribbon and click on the  `Click to Log In` button as shown below.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_44.png" width="400">

You will be directed to a login page as shown below.

  <img src="{{ site.baseurl }}/img/docs/e-learning-lab/image_45.png" width="400">

Enter your API key copied from step 1 and select the correct endpoint. Click `Confirm` to login. 

