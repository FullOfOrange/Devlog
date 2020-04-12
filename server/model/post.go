package model

import (
	"github.com/jinzhu/gorm"
)

type Post struct {
	Title string `gorm:"size:255;not null"`
	Author string `gorm:"size:255;not null"`
	Contents *string
}

type PostModel struct {
	gorm.Model
	Post
}

func GetPosts() ([]*Post, error) {
	var posts []*Post

	err := postTable.Find(&posts).Error
	if err != nil && err == gorm.ErrRecordNotFound {
		return nil, err
	}
	return posts, nil
}

func GetPostById(postId int) (*Post, error) {
	var post Post

	err := postTable.Where("id = ?", postId).First(&post).Error
	if err != nil && err != gorm.ErrRecordNotFound {
		return nil, err
	}
	return &post, nil
}

func CreatePost(post interface{}) error{
	if err := postTable.Create(&post).Error; err != nil {
		return err
	}
	return nil
}