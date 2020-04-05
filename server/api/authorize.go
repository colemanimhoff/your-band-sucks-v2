package api

import (
	"net/http"

	"github.com/gomodule/oauth1/oauth"
)

func authorize(oauthClient oauth.Client, tempCredentials *oauth.Credentials) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		callback := "http://" + r.Host + "/callback"
		tempCred, err := oauthClient.RequestTemporaryCredentials(nil, callback, nil)
		if err != nil {
			http.Error(w, "Error getting temp cred, "+err.Error(), 500)
			return
		}

		tempCredentials.Token = tempCred.Token
		tempCredentials.Secret = tempCred.Secret

		http.Redirect(w, r, oauthClient.AuthorizationURL(tempCred, nil), 302)
	}
}
