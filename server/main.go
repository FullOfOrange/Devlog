package main

import (
	"github.com/FullOfOrange/devlog-server/models"
	"github.com/FullOfOrange/devlog-server/routers"
)

func main() {
	models.InitDB();
	
	r := routers.SetupRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run(":8080")

}
