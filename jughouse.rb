require 'sinatra'
require 'dm-core'

DataMapper.setup(:default, "appengine://auto")

helpers do
  include Rack::Utils
end

get '/' do
  erb :index
end
