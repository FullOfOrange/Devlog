package routers

import (
	"github.com/gin-gonic/gin"

	"github.com/FullOfOrange/devlog-server/routers/api/v1"
)

// SetupRouter 는 라우터 세팅용임.
func SetupRouter() *gin.Engine {
	r := gin.Default()
	apiv1 := r.Group("/api/v1")
	// API server health checking
	apiv1.GET("/ping", v1.HealthCheck)
	// get all post
	apiv1.GET("/posts", v1.GetPosts)
	// get one post
	apiv1.GET("/posts/:id", v1.GetPostByID)

	return r
}
