task default: %w[imageOptimize]

task :imageOptimize do
  puts "Compressing images... Go grab a coffee!"
  sh "image_optim -r --no-pngout --no-svgo ./_site"
end