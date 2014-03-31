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
<p>
  <strong>Auto Narrate</strong>
  creates synthesized audio from your speaker notes, and embeds it on each slide. It's great for figuring out exactly what your speech will sound like, or creating pre-packaged presentations that can play automatically.</p>
<p>Auto Narrate uses the text entered in the Speaker Notes pane below each slide to generate audio:</p>
<p>
  <img class="slide" src="./img/docs/auto-narrate-2.png">
</p>
<p>Simply type what you'd like to say for the slide in the Speaker Notes, then click the
  <code>Add Audio</code>
  button. You can remove audio easily by clicking
  <code>Remove Audio</code>.
</p>
<p>To hear what a particular sentence or phrase will sound like without having to add audio for the entire slide, simply select it in the Speaker Notes pane, right-click, and choose
  <code>Speak Selected Text</code>.</p>
<p>
  <img class="box-shadow" src="./img/docs/auto-narrate-3.png">
</p>
<blockquote>
  <p>
    <strong>Note</strong>: if you make changes to your speech, it isn't necessary to remove any audio that's already been embedded; PowerPointLabs will automatically take care of it when you click
    <code>Add Audio</code>
    again.</p>
</blockquote>
<p>
  There are several options that can be adjusted by opening the settings dialog:
</p>
<p>
  <img class="box-shadow" src="./img/docs/auto-narrate-5.png">
</p>
<p>
  <img src="./img/docs/auto-narrate-6.png">
</p>
<p>
  To preview the audio being added to the current slide, just check the <code>Preview</code> option.
</p>
<p>
  If you'd like to add or remove audio on all the slides in your presentation, simply check the
  <code>All Slides</code>
  option. PowerPointLabs will use each slide's speaker notes when generating audio.
</p>

<h3>Tags</h3>
<p>For more fine-grained control over the generated audio, you can use a variety of
  <strong>tags</strong>
  to specify aspects such as speed, pronunciation, and even the type of voice to use.
</p>
<p>Tags come in two types:
  <em>paired</em>
  and
  <em>unpaired</em>.
</p>

<h3>Paired Tags</h3>
<p>A paired set of tags encloses a particular word or phrase, and is used to inform PowerPointLabs how to vocalise that particular section of text.</p>
<h4>Speed</h4>
<p>Speed tags are used to specify the pace at which the text they enclose should be read.</p>
<blockquote>
  <p>
    <strong>Syntax:</strong>
    <code>[Speed: &lt;fast/medium/slow/extra fast/extra slow&gt;]</code>&lt;Text to say&gt;
    <code>[EndSpeed]</code>
  </p>
  <p>
    <strong>Example:</strong>
    <code>[Speed: slow]</code>This point is very important.
    <code>[EndSpeed]</code>
  </p>
</blockquote>
<h4>Voice</h4>
<p>Voice tags can be used to change the synthesized voice for a particular section of text. You can see a list of all voices installed on your computer in the
  <code>Default Voice</code> dropdown:
</p>
<p>
    <img src="./img/docs/auto-narrate-4.png" />
</p>
<blockquote>
  <p>
    <strong>Note:</strong> there's no need to type the entire name displayed in the dropdown; PowerPointLabs will choose the first voice that contains the portion that you enter.</p>
</blockquote>
<p>
  <span></span>
</p>
<blockquote>
  <p>
    <strong>Syntax:</strong>
    <code>[Voice: &lt;voice name\&gt;]</code>&lt;Text to say&gt;
    <code>[EndVoice]</code>
  </p>
  <p>
    <strong>Example:</strong>
    <code>[Voice: David]</code>Hello there!
    <code>[EndVoice]</code>
  </p>
</blockquote>
<h4>Pronounce</h4>
<p>Pronounce tags can be used to specify the way a word should be pronounced, using <a href="http://www.langsci.ucl.ac.uk/ipa/fullchart.html">IPA notation.</a> This can be useful in situations where the generated speech uses a particular pronunciation of a word which isn't correct in context.</p>
<blockquote>
  <p>
    <strong>Note:</strong>the <a href="http://www.dictionary.com">Dictionary.com</a> definition pages include IPA pronunciations that can be used with the Pronounce tag.</p>
</blockquote>
<p>
  <span></span>
</p>
<blockquote>
  <p>
    <strong>Syntax:</strong>
    <code>[Pronounce: &lt;IPA pronunciation\&gt;]</code>&lt;Word to pronounce&gt;
    <code>[EndPronounce]</code>
  </p>
  <p>
    <strong>Example:</strong>I
    <code>[Pronounce: rɛd]</code>read
    <code>[EndPronounce]</code>that book a while ago.</p>
</blockquote>
<h3>Unpaired Tags</h3>
<p>An unpaired tag is used to specify information that doesn't relate to a particular word or phrase.</p>
<h4>Pause</h4>
<p>As its name implies, the Pause tag can be used to specify a pause in the narration. This is useful for creating short breaks between sentences or ideas.</p>
<blockquote>
  <p>
    <strong>Syntax:</strong>
    <code>[Pause: &lt;duration in seconds\&gt;]</code>
  </p>
  <p>
    <strong>Example:</strong>That's an important point.
    <code>[Pause: 3]</code>Let's move on to discuss...</p>
</blockquote>
<h4>AfterClick</h4>
<p>The AfterClick tag is used to set portions of narration to be triggered only after the slide is clicked.</p>
<blockquote>
  <p>
    <strong>Note</strong>: this tag is especially useful if you have existing animations on the slide which are triggered by clicks. PowerPointLabs will set narration to play after all animations triggered by the corresponding click have completed.</p>
</blockquote>
<p>
  <span></span>
</p>
<blockquote>
  <p>
    <strong>Syntax:</strong>
    <code>[AfterClick]</code>
  </p>
</blockquote>

