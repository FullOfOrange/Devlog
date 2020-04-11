package router

import(
	v1 "github.com/FullOfOrange/devlog/router/api/v1"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	route := gin.New()
	route.Use(gin.Recovery())

	apiv1 := route.Group("/api/v1")
	apiv1.GET("/posts", v1.GetPosts)

	return route
}