package model

import (
	"log"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var database *gorm.DB
// DB 연결작업
func InitDB() {
	db, err := gorm.Open("mysql", "root:test@/devlog?charset=utf8mb4&parseTime=True&loc=Local")

	if(err != nil) {
		log.Fatal("db connection error")
	}
	// 전역변수에 DB내용을 담아
	database = db
}