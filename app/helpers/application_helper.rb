module ApplicationHelper
  def taxons_tree_with_selector(root_taxon, current_taxon)
    max_level = 1

    return '' if root_taxon.children.empty?
    content_tag :ul, class: 'taxons-list' do
      root_taxon.children.map do |taxon|
        content_tag :li do
         check_box_tag(taxon.name, 1, false, :class => 'css-checkbox', :id => "taxon_#{taxon.id}") +
         label_tag("taxon_#{taxon.id}", "#{taxon.name} (#{taxon.products.count})", :class => "css-label")
        end
      end.join("\n").html_safe
    end
  end

  def taxonomy_name(name)
    case name
    when 'Brand'
       'MERKEN'
    when 'Categories'
       'CATEGORIE'
    else
      name
    end
  end
end
