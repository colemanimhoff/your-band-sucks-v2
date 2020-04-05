package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/colemanimhoff/your-band-sucks-v3/api"
)

func main() {
	r := api.Routes()
	log.Println(fmt.Sprintf("we rockin' on http://localhost%s 🎸 🎹 🥁 🎤", ":4000"))
	if err := http.ListenAndServe(":4000", r); err != nil {
		log.Fatalf("EPIC FAIL %v", err)
		return
	}
}
