package api

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"net/url"

	"github.com/gomodule/oauth1/oauth"
	"github.com/kr/pretty"
)

// {"username": "colemanimhoff", "resource_url": "https://api.discogs.com/users/colemanimhoff", "consumer_name": "Your Band Sucks v2", "id": 5622529}

type oauthHandler struct {
	client      oauth.Client
	credentials *oauth.Credentials
	handler     func(w http.ResponseWriter, r *http.Request, cred *oauth.Credentials, res *oauthResponse)
}

func (h *oauthHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	var tmp url.Values
	var oauthResponse oauthResponse

	resp, err := h.client.Get(nil, h.credentials, "https://api.discogs.com/oauth/identity", tmp)
	if err != nil {
		http.Error(w, err.Error(), resp.StatusCode)
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, err.Error(), 500)
	}

	if err := json.Unmarshal(body, &oauthResponse); err != nil {
		http.Error(w, err.Error(), 500)
	}

	pretty.Println(oauthResponse)

	h.handler(w, r, h.credentials, &oauthResponse)
}
