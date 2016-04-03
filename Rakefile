require 'fileutils'

def write_out_file(filename, new_html)
  File.open(filename, "w") do |file|
    file.write(new_html)
    puts "\t#{filename} successfully created!\n"
  end
end

task default: %w[build]

desc "Run image optimizer"
task :imageOptimize do
  puts "\nCompressing images... Go grab a coffee!"
  Dir.chdir(Rake.original_dir)
  sh "image_optim -r --no-pngout --no-svgo ./_site"
end

desc "Merge all css and js into one app html file"
task :combine do |t, args|
  Dir.chdir(Rake.original_dir)
  Dir.chdir('_site')
  app_files = FileList['gallery.html']
  app_files.each do |app_file|
    new_html = ""
    local_file_link_found = false
    puts("\nProcessing #{app_file}...")
    IO.foreach(app_file) do |line|
      # If the line refers to script content contained in a local file, concatenate
      if !(line =~ /<script.*src="http*:/) && !(line =~ /<script.*src="\/\/*/) && line =~ /<script.*src="(.*)"/
        script_file = $1
	    puts "\tConcatenating #{script_file}..."
	    new_html << "<script>\n"
	    lines = IO.readlines(script_file)
	    first_js = lines.first
	    lines.each do |l|
	      new_html << '    ' << l.to_s.gsub(/\n/, "\n    ")
	    end
        new_html << "\n</script>\n"
        local_file_link_found = true
        # or if the line pulls in a CSS stylesheet from a local file, concatenate
      elsif (line !~ /<link.*href="http?:\/\//) && !(line =~ /<link.*href="\/\/*/) && (line =~ /<link.*href="(.*\.css)"/)
        stylesheet_name = $1
        puts "\tConcatenating #{stylesheet_name}..."
	    new_html << "<style>\n"
	    lines = IO.readlines(stylesheet_name)
	    lines.each do |l|
	      new_html << '    ' << l.to_s.gsub(/\n/, "\n    ")
	    end
        new_html << "\n</style>\n"
        local_file_link_found = true
      else
        new_html << line
      end
    end
    if local_file_link_found
	    output_filename = app_file.sub(/\.template\.html$/, '#{app_file}.html')
	    write_out_file(output_filename, new_html)
	else
	  puts "\tNo concatenation needed!"
	end
  end
end

task :build do
  Rake::Task['rake:combine'].invoke
  Rake::Task['rake:imageOptimize'].invoke
end