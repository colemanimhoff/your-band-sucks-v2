package api

import (
	"net/http"
	"os"

	"github.com/gomodule/oauth1/oauth"
)

func newOauthClient() oauth.Client {
	return oauth.Client{
		TemporaryCredentialRequestURI: os.Getenv("REQUEST_TOKEN_URL"),
		ResourceOwnerAuthorizationURI: os.Getenv("AUTHORIZE_URL"),
		TokenRequestURI:               os.Getenv("ACCESS_TOKEN_URL"),
		Header:                        http.Header{"User-Agent": {"YourBandSucks/2.0"}},
		Credentials: oauth.Credentials{
			Token:  os.Getenv("CONSUMER_KEY"),
			Secret: os.Getenv("CONSUMER_SECRET"),
		},
	}
}
