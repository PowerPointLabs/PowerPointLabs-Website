# PowerPointLabs' Website

This is the website and documentation for the [PowerPointLabs](http://www.powerpointlabs.info) project.  
[![build-status](https://travis-ci.org/PowerPointLabs/PowerPointLabs-Website.svg?branch=master)](https://travis-ci.org/PowerPointLabs/PowerPointLabs-Website)

### Contributing To PowerPointLabs-Website

Interested to contribute? Please take a moment to review the [guidelines for contributing](https://github.com/PowerPointLabs/PowerPointLabs-Website/blob/master/CONTRIBUTING.md).

### Dev Prerequisites

1. Install SourceTree (recommended), GitHub for Windows, or at least, Git.
2. Install [Vagrant](http://www.vagrantup.com) and [VirtualBox](https://www.virtualbox.org).
3. Install a text editor that supports `using spaces for indentation`, e.g. Sublime Text 2.
4. Install a modern web browser, e.g. Chrome.

### Setup

The website is generated using [Jekyll](http://www.jekyllrb.com). An easy way to get up and running is to just use [Vagrant](http://www.vagrantup.com) (which requires [VirtualBox](https://www.virtualbox.org)).

> This README assumes no existing knowledge of how Vagrant (or Jekyll) works. In a nutshell, Vagrant is a nifty wrapper for a virtual machine (the "guest", running Ubuntu 14.04 in our case) which can be automatically setup with our project's dependencies, while letting us use our own familiar editors/tools on the "host".

> Isn't it overkill to use Vagrant just for a simple Jekyll site? Maybe. It's been tricky to get running on Windows in the past, though, so this is perhaps in a strange way easier.

[Fork](https://help.github.com/articles/fork-a-repo/) and clone the source codes from this repo.
With Vagrant installed, `cd` into the project's root directory and run:

```shell
$ vagrant up
```

This starts up the virtual machine, installs Jekyll, and also installs the site's dependencies.

### Development (with local previewing)

To work on the site in the future (assuming the Vagrant box is still running - if not, run `vagrant up`):

```shell
$ vagrant ssh
$ cd /vagrant
$ jekyll s --host 0.0.0.0 --force_polling
```

> `vagrant ssh` gives us an `ssh` session on the guest machine. `/vagrant` is a shared folder which maps to the project root on the host: this lets us modify the website's files in our editor of choice, and still have them accessible within the guest.

The site should now be accessible on `localhost:4000` on the host, and can be modified with any changes automatically propagating to the guest (and visible after a quick refresh of the browser).

> We need to force polling since Jekyll's normal method of checking for changes doesn't work with VirtualBox's shared folders. We also need to specify the host or the site will be served on the _guest_'s localhost instead, and won't be accessible from the host.

### Building for Deployment

Change the base url in `_config.yml` to `/~pptlabs` for the public release or `/~pptlabs/dev` for the dev release of the website and uncomment the line.

```yml
baseurl: /~pptlabs/dev
```

Nothing special here: `jekyll build` will output the site's files to `_site`. `rake` does two things; inlines JS & CSS and compresses all images in `_site`. 

```shell
$ vagrant ssh
$ cd /vagrant
$ jekyll build; rake
```

If want to run the inline task only, do `rake inline`.

## How to...

### Add a new Team Member

Adding a new team member to the About Us page is fairly simple: save their picture to `img/team`, open `_data/developers.yml`, and add a new object there containing their name, the absolute path to the picture, and an optional URL.

### Add a new Shape

Similar to adding team members, add the shape's picture and file to `shapes`, open `_data/shapes.yml`, and add a new object containing the shape's details. An optional license (`licenseTerms`) and submitter (`submitter`) field can be included as well.

### Adding Documentation Sections

There are two steps to add a new documentation section.

#### 1. Add a new section in the right navigation sidebar.

This is in `_data/docs.yml` - add a new object containing the title of the new section. The order will affect the sequence of the sections.

#### 2. Add the new section.

We're (ab)using Jekyll's blog generation to do this - create a new Markdown file in `_docs/`, and add the following fields to its front-matter at the top (using the Spotlight as an example):

```yml
---
layout: docs
title: Spotlight
sample: "/samples/spotlight%20sample.pptx"
---
```

| Field | Purpose |
| ----- | ------- |
| layout| This is just kept as "docs" |
| title | The name of the new section. This is usually the feature being documented. |
| sample | An optional sample file to be linked to in the section's header. |

#### 3. Add new subsections in the right navigation sidebar.

To add new subsections to the right navigation sidebar, add a new `a` with `class="anchor-bookmark"` and an `id` attribute in the subsection's heading just before the text. Using the Shortcuts documentation as an example:

```yml
## ![]({{ site.baseurl }}/img/docs/misc-1.png) <a class="anchor-bookmark" id="edit-name"></a> Edit Name
```

#### 4. Write the doc

Write the document using Google Docs, and share it with project mentor for document review. When document review is passed, [this script](https://github.com/mangini/gdocs2md) can be used to generate the Markdown from Google Docs document.

Then use the generated Markdown to construct the web page. Modification of styles and image links may be required.

#### 5. Add new HTML dependencies utilizing inlining/concatenation of JS & CSS

1. Make sure that the dependencies themselves do not depend on some other dynamic dependency (if dynamic dependency, it is advised to link it with external link).
2. Download local copies of the JS/CSS file and store them anywhere in the project directory.
3. Link them in the HTML files as per normal (look at existing dependencies for example).

`rake inline` will automatically find and replace the script or link tag with the respective file contents.
