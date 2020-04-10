package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"

	"log"
)

type Post struct {
	gorm.Model
	Title string `gorm:"size:255;not null"`
	Author string `gorm:"size:255;not null"`
	Contents *string
}

var database *gorm.DB

func InitDB() {
	db, err := gorm.Open("mysql", "root:test@/devlog?charset=utf8mb4&parseTime=True&loc=Local")

	if(err != nil) {
		panic("db connection error");
	}
	database = db

	var post []Post
	if err := database.Find(&post).Error; err != nil {
		log.Fatal(err)
	}

	log.Print(post)

}