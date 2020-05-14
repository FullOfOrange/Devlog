package model

import (
	"github.com/jinzhu/gorm"
	"time"
)

type Post struct {
	ID        uint `gorm:"primary_key" json:"id"`
	CreatedAt time.Time `json:"createdAt"`
	Title string `gorm:"size:255;not null" json:"title"`
	Author string `gorm:"size:255;not null" json:"author"`
	Contents *string `json:"contents"`
}

type PostModel struct {
	Post
	UpdatedAt time.Time
	DeletedAt *time.Time `sql:"index"`
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
	} else if err == gorm.ErrRecordNotFound {
		return nil, nil
	}
	return &post, nil
}

func CreatePost(post interface{}) error{
	if err := postTable.Create(&post).Error; err != nil {
		return err
	}
	return nil
}