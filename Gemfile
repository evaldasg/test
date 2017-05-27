source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.1'
gem 'pg', '~> 0.18'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
gem 'bcrypt', '~> 3.1.7' # ActiveModel has_secure_password
gem 'jwt'
gem 'devise'
gem 'rack-cors' # for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'puma', '~> 3.0' # the app server
  gem "capistrano", "~> 3.8"
  gem 'capistrano-npm', require: false
  gem 'capistrano-rbenv', '~> 2.0', require: false
  gem 'capistrano-rails',      '~> 1.2',   require: false
  gem 'capistrano-bundler',    '~> 1.2',   require: false
  gem 'capistrano-postgresql', '~> 4.2', require: false
  gem 'capistrano-passenger'

  gem 'listen', '~> 3.0.5'
  gem 'spring' # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
