package routers

import (
	"github.com/gin-gonic/gin"

	"github.com/FullOfOrange/devlog-server/routers/api/v1"
)

// SetupRouter 는 라우터 세팅용임.
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// API server health checking
	r.GET("/ping", v1.HealthCheck)

	r.GET("/posts", v1.GetPosts)


	return r
}
