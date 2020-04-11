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

func GetPosts() (*[]Post, error) {
	var post []Post
	err := database.Find(&post)
	if err != nil {
		return nil, err.Error
	}

	return &post, nil
}

func GetPost(postId int) (*Post, error) {
	var post Post
	err := database.Find(&post)

	if(err != nil || gorm.IsRecordNotFoundError(err.Error)){
		return nil, err.Error
	}

	return &post, nil
}

func CreatePost(post *Post) {
	database.Create(&post)
}