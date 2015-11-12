require 'sinatra'
require 'sinatra/reloader'


get "/" do
  erb :randomize, layout: :app_layout
end

post "/" do
  @number_of_teams = params[:number_of_teams].to_i
  @names = params[:names].split(",").shuffle
  names_length = @names.length

  if @number_of_teams > names_length
    @error = "Error"
  else
    @all_teams = Array.new(@number_of_teams) {|x| [] }

    team_split_iterator = 0
    while team_split_iterator < names_length
      team_array_position = team_split_iterator % @number_of_teams
      @all_teams[team_array_position].push(@names).shift
      team_split_iterator += 1
    end
  end

erb :randomize, layout: :app_layout

end
