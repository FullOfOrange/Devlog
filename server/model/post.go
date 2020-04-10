package model

import (
	"github.com/jinzhu/gorm"
	"log"
)

type Post struct {
	gorm.Model
	Title string `gorm:"size:255;not null"`
	Author string `gorm:"size:255;not null"`
	Contents *string
}

func GetPosts() *[]Post {
	var post []Post
	if err := database.Find(&post).Error; err != nil {
		log.Fatal(err)
	}
	log.Print(post)

	return &post
}