# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant::Config.run do |config|

  config.vm.forward_port 4000, 4000
  config.vm.provision :shell,
    :inline => "sudo apt-get update -y && sudo apt-get install python-software-properties -y && sudo apt-add-repository -y ppa:rael-gc/rvm && sudo apt-get update && sudo apt-get -y install build-essential git"
  config.vm.provision :shell,
    path: "install-rvm.sh", args: "stable", privileged: false
  config.vm.provision :shell,
    path: "install-ruby.sh", args: "2.4.1", privileged: false
  config.vm.provision :shell,
    :inline => "gem install bundler --pre --no-ri --no-rdoc", privileged: false
  config.vm.provision :shell,
    :inline => "cd /pptlabs-website && bundle install", privileged: false

  config.ssh.forward_agent = true
end

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_version = "20170818.0.0"
  config.vm.synced_folder ".", "/pptlabs-website"
end
