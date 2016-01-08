# -*- mode: ruby -*-
# vi: set ft=ruby :

# Provisioning script
$script = <<SCRIPT
sudo apt-get install make gcc nodejs g++ -y
sudo apt-get install python-software-properties -y
sudo apt-add-repository ppa:brightbox/ruby-ng
sudo apt-get update -y
sudo apt-get install ruby2.1 ruby2.1-dev ruby-switch -y
sudo ruby-switch --set ruby2.1
sudo apt-get install zlib1g-dev -y
sudo gem install bundler
su vagrant -c "cd /vagrant; bundle install"
SCRIPT

Vagrant.configure(2) do |config|
	config.vm.network "forwarded_port", guest: 4000, host: 4000

	config.vm.box = "ubuntu/trusty64"
	config.vm.provision "shell", inline: $script

end