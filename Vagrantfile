# -*- mode: ruby -*-
# vi: set ft=ruby :

# Provisioning script
$script = <<SCRIPT
sudo apt-get install ruby ruby-dev make gcc nodejs g++
sudo gem install jekyll --no-rdoc --no-ri
sudo gem install bundler
SCRIPT

Vagrant.configure(2) do |config|
	config.vm.network "forwarded_port", guest: 4000, host: 4000

	config.vm.box = "ubuntu/trusty64"
	config.vm.provision "shell", inline: $script

end