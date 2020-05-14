package router

import(
	v1 "github.com/FullOfOrange/devlog/router/api/v1"
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	route := gin.New()
	route.Use(gin.Recovery())

	apiv1 := route.Group("/api/v1")
	apiv1.GET("/test", v1.GetPostTest)
	apiv1.GET("/posts", v1.GetPosts)
	apiv1.GET("/post/:id", v1.GetPostById)

	return route
}