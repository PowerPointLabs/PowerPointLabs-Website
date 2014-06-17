---
layout: post
title: Auto Narrate
category: documentation
date: 2014-03-31 13:45:03
bookmark: auto-narrate
---

<p>
  <img class="box-shadow" src="./img/docs/auto-narrate-1.png">
</p>

**Auto Narrate** creates synthesized audio from your speaker notes, and embeds it on each slide. It's great for figuring out exactly what your speech will sound like, or creating pre-packaged presentations that can play automatically.

Auto Narrate uses the text entered in the Speaker Notes pane below each slide to generate audio:

<p>
  <img class="slide" src="./img/docs/auto-narrate-2.png">
</p>

Simply type what you'd like to say for the slide in the Speaker Notes, then click the `Add Audio` button. You can remove audio easily by clicking `Remove Audio`.

To hear what a particular sentence or phrase will sound like without having to add audio for the entire slide, simply select it in the Speaker Notes pane, right-click, and choose `Speak Selected Text`.

<p>
  <img class="box-shadow" src="./img/docs/auto-narrate-3.png">
</p>

>**Note:** if you make changes to your speech, it isn't necessary to remove any audio that's already been embedded; PowerPointLabs will automatically take care of it when you click `Add Audio` again.

The settings dialog allows you to change the default voice used for narration, or to preview audio after it is added:

<p>
  <img class="box-shadow" src="./img/docs/auto-narrate-5.png">
</p>

![](./img/docs/auto-narrate-6.png)

> Older versions of PowerPointLabs offered an "All Slides" checkbox in the settings dialog. Starting with version 1.7, PowerPointLabs will add or remove audio from the slides selected in the lefthand slide selection pane.

> To add or remove audio from all slides at once, simply click in the slide selection pane, press `Ctrl+A` to select all slides, then click the `Add Audio` or `Remove Audio` button. You can also select individual slides by `Ctrl+Click`ing on them.

###Tags

For more fine-grained control over the generated audio, you can use a variety of **tags**
to specify aspects such as speed, pronunciation, and even the type of voice to use.

Tags come in two types: *paired* and *unpaired*.

####Paired Tags

A paired set of tags encloses a particular word or phrase, and is used to inform PowerPointLabs how to vocalise that particular section of text.

#####Speed
Speed tags are used to specify the pace at which the text they enclose should be read.

> **Syntax:** `[Speed: <fast/medium/slow/extra fast/extra slow>]`&lt;Text to say&gt;`[EndSpeed]`

> **Example:** `[Speed: slow]` This point is very important. `[EndSpeed]`
  
#####Voice
Voice tags can be used to change the synthesized voice for a particular section of text. You can see a list of all voices installed on your computer in the `Default Voice` dropdown:

![](./img/docs/auto-narrate-4.png)

>**Note:** there's no need to type the entire name displayed in the dropdown; PowerPointLabs will choose the first voice that contains the portion that you enter.

<p></p>

>**Syntax:** `[Voice: <voice name>]`&lt;Text to say&gt;`[EndVoice]`

>**Example:** `[Voice: David]` Hello there! `[EndVoice]`
 
 
#####Pronounce
Pronounce tags can be used to specify the way a word should be pronounced, using [IPA notation](http://www.langsci.ucl.ac.uk/ipa/fullchart.html). This can be useful in situations where the generated speech uses a particular pronunciation of a word which isn't correct in context.

> **Note:** the [Dictionary.com](http://www.dictionary.com) definition pages include IPA pronunciations that can be used with the Pronounce tag.

<p>
</p>

> **Syntax:** `[Pronounce: <IPA pronunciation>]` &lt;Word to pronounce&gt; `[EndPronounce]`
  
> **Example:** I `[Pronounce: rɛd]` read `[EndPronounce]` that book a while ago.


####Unpaired Tags

An unpaired tag is used to specify information that doesn't relate to a particular word or phrase.

#####Pause
As its name implies, the Pause tag can be used to specify a pause in the narration. This is useful for creating short breaks between sentences or ideas.

> **Syntax:** `[Pause: <duration in seconds>]`

> **Example:** That's an important point. `[Pause: 3]` Let's move on to discuss...


#####AfterClick
The AfterClick tag is used to set portions of narration to be triggered only after the slide is clicked.

> **Note:** this tag is especially useful if you have existing animations on the slide which are triggered by clicks. PowerPointLabs will set narration to play after all animations triggered by the corresponding click have completed.

<p>
</p>

> **Syntax:** `[AfterClick]`


