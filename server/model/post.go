package model

import (
	"github.com/jinzhu/gorm"
)

type Post struct {
	gorm.Model
	Title string `gorm:"size:255;not null"`
	Author string `gorm:"size:255;not null"`
	Contents *string
}

func GetPosts() ([]*Post, error) {
	var posts []*Post

	err := database.Find(&posts).Error
	if err != nil || err != gorm.ErrRecordNotFound {
		return nil, err
	}
	return posts, nil
}

func GetPostById(postId int) (*Post, error) {
	var post Post

	err := database.Where("id = ?", postId).First(&post).Error
	if err != nil || err != gorm.ErrRecordNotFound {
		return nil, err
	}
	return &post, nil
}

func CreatePost(post interface{}) error{
	if err := database.Create(&post).Error; err != nil {
		return err
	}
	return nil
}