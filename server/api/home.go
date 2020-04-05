package api

import (
	"net/http"

	"github.com/gomodule/oauth1/oauth"
)

func home(w http.ResponseWriter, r *http.Request, credentials *oauth.Credentials, oauthResponse *oauthResponse) {
	if len(credentials.Token) == 0 || len(credentials.Secret) == 0 {
		w.Write([]byte("welcome page"))
		return
	}

	w.Write([]byte(oauthResponse.Username + " " + credentials.Token + " " + credentials.Secret))
}
