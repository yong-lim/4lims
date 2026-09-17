module Jekyll
  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      # Extract unique categories from the 'notes' collection
      categories = site.collections['notes'].docs.flat_map { |note| note.data['categories'] || [] }.to_set

      categories.each do |category|
        site.pages << CategoryPage.new(site, site.source, category)
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, base, category)
      @site = site
      @base = base
      # Changes the output directory to /category/category-name/
      @dir  = File.join('category', category.to_s.downcase.strip.gsub(' ', '-'))
      @name = 'index.html'

      self.process(@name)
      # Looks for a '_layouts/category.html' template
      self.read_yaml(File.join(base, '_layouts'), 'category.html')
      self.data['category'] = category
      self.data['title'] = "#{category}"
    end
  end
end
