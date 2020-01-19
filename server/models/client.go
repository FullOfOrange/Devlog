package models

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// 전역객체라 동일 패키지 내에서는 쓰일수 있음.
var dbName = "blog_db"
var db *mongo.Database
var collectionName = "posts"
var collectionPost *mongo.Collection

// Set client options
func config() *options.ClientOptions {
	auth := options.Credential{}
	auth.Username = "admin"
	auth.Password = "password"
	clinetURI := "mongodb://localhost:27017"
	clientOptions := options.Client().ApplyURI(clinetURI).SetAuth(auth)
	return clientOptions
}

// InitDB Initialize Database (Connection)
func InitDB() {
	client, err := mongo.Connect(context.Background(), config())
	if err != nil {
		log.Fatal(err)
		panic("mongoDB connection error")
	}
	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Fatal(err)
		panic("mongoDB connection error")
	}
	fmt.Println("Connected to MongoDB")

	db = client.Database(dbName)
	collectionPost = db.Collection(collectionName)
}
