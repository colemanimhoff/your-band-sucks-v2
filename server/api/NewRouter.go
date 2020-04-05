package api

import (
	"time"

	"github.com/gomodule/oauth1/oauth"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func Routes() *chi.Mux {
	oauthClient := newOauthClient()
	r := chi.NewRouter()

	credentials := oauth.Credentials{}
	tempCredentials := oauth.Credentials{} // TODO: store in context and use and middleware -> https://github.com/go-chi/chi

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Timeout(60 * time.Second))

	r.Get("/authorize", authorize(oauthClient, &tempCredentials))
	r.Get("/callback", callback(oauthClient, &credentials, &tempCredentials))
	r.Handle("/", &oauthHandler{client: oauthClient, credentials: &credentials, handler: home})

	return r
}
