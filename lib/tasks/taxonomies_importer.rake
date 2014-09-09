namespace :db do
  task :add_categories => :environment do
    Spree::Taxonomy.delete_all
    Spree::Taxon.delete_all

    categories = Spree::Taxonomy.create!(name: 'Categories')
    Spree::Taxon.create!(name: 'Categories', position: 0, taxonomy: categories)

    file_to_load  = Rails.root + "config/taxonomy.en-US.txt"
    taxonomies    = File.read( file_to_load )

    taxonomies.each_line do |line|
      cats = line.split('>')
      cats.each_with_index do |cat, i|
        parent = if i >= 1
          Spree::Taxon.find_by_name(cats[i-1])
        end

        Spree::Taxon.find_or_create_by!(name: cat, parent_id: parent ? parent.id : nil, taxonomy: categories)
      end
    end
  end
end
