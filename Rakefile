require 'rubygems'
require 'rake'

CONFIG = {
  # CSS
  'css_dir'     => 'css',
  'sass_dir'    => '_scss'
}

task :default => :build

desc "Build everything"
task :build => [:css] do
  puts "Build finished."
end


desc "Build css"
task :css do |t, args|

  puts "Watching #{CONFIG['sass_dir']} for changes..."
  puts "Hit Ctrl+C to stop" 
  # Replace rake process with sass
  exec("sass --watch #{CONFIG['sass_dir']}:#{CONFIG['css_dir']}")
end
