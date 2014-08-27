json.array!(@jobs) do |job|
  json.extract! job, :title, :show, :position, :url
  json.url job_url(job, format: :json)
end