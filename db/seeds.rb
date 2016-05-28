# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

csv_text = File.read('db/seed/laposte_hexasmal.csv')
csv = CSV.parse(csv_text, :headers => true, :col_sep => ';')

csv.each do |row|
  CodePostal.create(
    code_commune_insee: row['Code_commune_INSEE'],
    nom_commune: row['Nom_commune'],
    code_postal: row['Code_postal'],
    libelle_acheminement: row['Libelle_acheminement'],
    ligne_5: row['Ligne_5']
  )
end
