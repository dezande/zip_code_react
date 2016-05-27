class HomeController < ApplicationController
  def index
    render  component: 'HomeTable', props: { data: [{ zipCode: "75001", town: "Paris", id: 1 }, { zipCode: "93340", town: "Le Raincy", id: 2 }] }
  end
end
