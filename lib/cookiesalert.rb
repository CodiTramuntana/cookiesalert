require "cookiesalert/version"

module Cookiesalert
  class Engine < ::Rails::Engine
    # Sprockets and Propshaft add the engine's app/assets to their load paths
    # automatically. Sprockets, however, only serves files through
    # javascript_include_tag / stylesheet_link_tag if they are precompiled.
    initializer "cookiesalert.assets.precompile" do |app|
      if defined?(::Sprockets::Railtie)
        app.config.assets.precompile += %w[cookiesalert/cookies_alert.js cookiesalert/cookies_alert.css]
      end
    end

    # With importmap-rails, makes `import "cookiesalert"` available.
    initializer "cookiesalert.importmap", before: "importmap" do |app|
      app.config.importmap.paths << root.join("config/importmap.rb") if app.config.respond_to?(:importmap)
    end
  end
end
