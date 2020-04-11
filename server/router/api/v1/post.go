package v1

import (
	"github.com/FullOfOrange/devlog/model"
	"github.com/gin-gonic/gin"
)

func GetPosts(c *gin.Context) {
	posts, err := model.GetPosts();

	if err != nil {
		c.AbortWithStatus(204)
	} else {
		c.JSON(200, posts)
	}
}
