package routers

import (
	"github.com/gin-gonic/gin"

	v1 "github.com/FullOfOrange/devlog-server/routers/api/v1"
)

// 메소드 앞문자가 대문자면 export 된다.
func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Ping test
	r.GET("/ping", v1.HealthCheck)

	return r
}
