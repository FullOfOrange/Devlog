package router

import(
	"github.com/gin-gonic/gin"
)

func InitRouter() *gin.Engine {
	route := gin.New()
	route.Use(gin.Recovery())

//	apiv1 := route.Group("/api/v1")

	return route
}