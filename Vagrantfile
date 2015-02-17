# -*- mode: ruby -*-
# vi: set ft=ruby :

# Provisioning script
$script = <<SCRIPT
apt-get install ruby ruby-dev make gcc nodejs g++ -y
sudo gem install jekyll bundler
su vagrant -c "cd /vagrant; bundle install"
SCRIPT

Vagrant.configure(2) do |config|
	config.vm.network "forwarded_port", guest: 4000, host: 4000

	config.vm.box = "ubuntu/trusty64"
	config.vm.provision "shell", inline: $script

end