# PowerPointLabs' Website

This is the website and documentation for the [PowerPointLabs](http://www.powerpointlabs.info) project.  
![travis-ci](https://travis-ci.org/PowerPointLabs/PowerPointLabs-Website.svg?branch=master)

## Contributing To PowerPointLabs-Website

Interested to contribute? Please take a moment to review the [guidelines for contributing](https://github.com/PowerPointLabs/PowerPointLabs-Website/blob/master/CONTRIBUTING.md).

## Setup

The website is generated using [Jekyll](http://www.jekyllrb.com). An easy way to get up and running is to just use [Vagrant](http://www.vagrantup.com) (which requires [VirtualBox](https://www.virtualbox.org)).

> This README assumes no existing knowledge of how Vagrant (or Jekyll) works. In a nutshell, Vagrant is a nifty wrapper for a virtual machine (the "guest", running Ubuntu 14.04 in our case) which can be automatically setup with our project's dependencies, while letting us use our own familiar editors/tools on the "host".

> Isn't it overkill to use Vagrant just for a simple Jekyll site? Maybe. It's been tricky to get running on Windows in the past, though, so this is perhaps in a strange way easier.

With Vagrant installed, `cd` into the project's root directory and run:

```shell
$ vagrant up
```

This starts up the virtual machine, installs Jekyll, and also installs the site's dependencies.

## Development (with local previewing)

To work on the site in the future (assuming the Vagrant box is still running - if not, run `vagrant up`):

```shell
$ vagrant ssh
$ cd /vagrant
$ jekyll s --host 0.0.0.0 --force_polling
```

> `vagrant ssh` gives us an `ssh` session on the guest machine. `/vagrant` is a shared folder which maps to the project root on the host: this lets us modify the website's files in our editor of choice, and still have them accessible within the guest.

The site should now be accessible on `localhost:4000` on the host, and can be modified with any changes automatically propagating to the guest (and visible after a quick refresh of the browser).

> We need to force polling since Jekyll's normal method of checking for changes doesn't work with VirtualBox's shared folders. We also need to specify the host or the site will be served on the _guest_'s localhost instead, and won't be accessible from the host.

## Building for Deployment

Nothing special here: `jekyll build` will output the site's files to `_site`.

```shell
$ vagrant ssh
$ cd /vagrant
$ jekyll build
```

# How to...

## Add a new Team Member

Adding a new team member to the About Us page is fairly simple: save their picture to `img/team`, open `_data/developers.yml`, and add a new object there containing their name, the relative path to the picture, and an optional URL.

## Add a new Shape

Similar to adding team members, add the shape's picture and file to `shapes`, open `_data/shapes.yml`, and add a new object containing the shape's details. An optional license (`licenseTerms`) and submitter (`submitter`) field can be included as well.

## Adding Documentation Sections

There are two steps to add a new documentation section.

### 1. Modify the Table of Contents Sidebar.

This is in `docs.html` - add a new `li` containing an `a` to link to the new section.

### 2. Add the new section.

We're (ab)using Jekyll's blog generation to do this - create a new Markdown file in `_posts\documentation`, and add the following fields to its front-matter at the top (using the Spotlight documentation as an example):

```yml
---
title: Spotlight
category: documentation
date: 2014-03-31 13:45:01
sample: "./samples/spotlight%20sample.pptx"
bookmark: spotlight
---
```

| Field | Purpose |
| ----- | ------- |
| title | The name of the new section. This is usually the feature being documented. |
| category | This is just kept as "documentation" |
| date | We use this to determine the ordering of each section - they appear "chronologically" on the rendered `docs.html` page. |
| sample | An optional sample file to be linked to in the section's header. |
| bookmark | This should correspond to the `#` link added in the previous step. |
