package api

type oauthResponse struct {
	Id            int64
	Consumer_name string `json:"consumer_name"`
	Resource_url  string `json:"resourse_url"`
	Username      string `json:"username"`
}
