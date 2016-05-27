class HomeController < ApplicationController
  def index
    render  component: 'HomeIndex', props: { data: [{ zipCode: "75001", town: "Paris", id: 1 }, { zipCode: "93340", town: "Le Raincy", id: 2 }] }
  end
end
