class CreateCodePostals < ActiveRecord::Migration[5.0]
  def change
    create_table :code_postals do |t|
      t.integer :code_commune_insee
      t.string :nom_commune
      t.integer :code_postal
      t.string :libelle_acheminement
      t.string :ligne_5

      t.timestamps
    end
  end
end
