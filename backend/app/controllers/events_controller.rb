class EventsController < ApplicationController
  def index
    render json: Event.all.to_json(include: :calendar)
  end

  def show
    render json: Event.find(params[:id]).to_json(include: :calendar)
  end

  def create
    event = Event.new(event_params)
    if event.save
      render json: event.to_json(include: :calendar)
    else
      render json: event.errors, status: 422
    end
  end

  def update
    event = Event.find(params[:id])
    if event.update(event_params)
      render json: event.to_json(include: :calendar)
    else
      render json: event.errors, status: 422
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy!
    render json: event.to_json(include: :calendar)
  end

  private

  def event_params
    params.require(:event).permit(:name, :start, :end, :timed, :description, :color, :calendar_id)
  end
end
