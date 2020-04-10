package main

import (
	"github.com/FullOfOrange/devlog/router"
	"github.com/FullOfOrange/devlog/model"
)

func main() {
	model.InitDB();
	r := router.InitRouter();

	r.Run(":8080");
}