source 'https://rubygems.org'

gem 'rails', '3.2.11'

gem 'sqlite3'
gem 'jquery-rails'

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

gem "devise", ">= 2.2.3"
gem "figaro", ">= 0.5.3"

group :development do
  gem "quiet_assets", ">= 1.0.1"
  gem "better_errors", ">= 0.3.2"
  gem 'meta_request'
end

group :development, :test do
  gem "rspec-rails", ">= 2.12.2"
  gem "factory_girl_rails", ">= 4.2.0"
  gem 'jasminerice'
end

group :test do
  gem 'factory_girl'
  gem 'simplecov', require: false
  gem 'shoulda-matchers'
  gem 'jasmine'
  gem "database_cleaner", ">= 0.9.1"
  gem "launchy", ">= 2.1.2"
  gem "capybara", ">= 2.0.2"
end