@pokemon.each do |pokemon| 
    json.set! pokemon.id do 
        json.extract! pokemon, :name, :image_url
    end 
end 