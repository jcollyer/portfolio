class Api::V1::JobsController < ApplicationController
  # skip_before_filter :verify_authenticity_token
  respond_to :json

  def index
    respond_with(Job.all.order("position ASC").order("id DESC"))
  end

  def show
    respond_with(Job.find(params[:id]))
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      respond_to do |format|
        format.json { render :json => @job }
      end
    end
  end

  def update
    @job = Job.find(params[:id])
    binding.pry
    if @job.update(job_params)
      respond_to do |format|
        format.json { render :json => @job }
      end
    end
  end

  def destroy
    respond_with Job.destroy(params[:id])
  end

private
  def job_params
    params.require(:job).permit(:title, :show, :position, :url)
  end

  def default_serializer_options
    {root: false}
  end
end
