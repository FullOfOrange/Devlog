package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var database *gorm.DB

func InitDB() {
	db, err := gorm.Open("mysql", "root:test@/devlog?charset=utf8mb4&parseTime=True&loc=Local")

	if(err != nil) {
		panic("db connection error");
	}
	database = db

}