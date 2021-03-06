require_relative 'boot'

require 'rails/all'

require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"
require 'sprockets/es6'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SheachTown
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    
    # Settings for the pool of renderers:
    config.react.server_renderer_pool_size  ||= 1  # ExecJS doesn't allow more than one on MRI
    config.react.server_renderer_timeout    ||= 20 # seconds
    config.react.server_renderer = React::ServerRendering::SprocketsRenderer
    config.react.server_renderer_options = {
      files: ["react-server.js", "components.js"], # files to load for prerendering
      replay_console: true,                 # if true, console.* will be replayed client-side
    }
  end
end
