package api

import (
	"net/http"

	"github.com/gomodule/oauth1/oauth"
)

func callback(oauthClient oauth.Client, credentials *oauth.Credentials, tempCredentials *oauth.Credentials) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		tokenCred, _, err := oauthClient.RequestToken(nil, tempCredentials, r.FormValue("oauth_verifier"))
		if err != nil {
			http.Error(w, "Error getting request token, "+err.Error(), 500)
			return
		}

		credentials.Token = tokenCred.Token
		credentials.Secret = tokenCred.Secret

		http.Redirect(w, r, "/", 302)
	}
}
