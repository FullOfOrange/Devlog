package main

import (
	"github.com/FullOfOrange/devlog-server/models"
	"github.com/FullOfOrange/devlog-server/routers"
)

func main() {
	models.InitDB()

	r := routers.SetupRouter()
	r.Run(":8080")
}
