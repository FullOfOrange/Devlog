package v1

import (
	"net/http"

	"github.com/FullOfOrange/devlog-server/models"
	"github.com/gin-gonic/gin"
)

// GetPosts parse all blog posts
func GetPosts(c *gin.Context) {
	posts, err := models.FindAllPost()
	
	if err != nil {
		c.String(http.StatusInternalServerError, "database parse errror")
	}

	c.JSON(http.StatusOK, posts)
}
