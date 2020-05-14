package v1

import (
	"github.com/FullOfOrange/devlog/model"
	"github.com/gin-gonic/gin"

	"strconv"
	"io/ioutil"
)

func GetPostTest(c *gin.Context) {
	dat, err := ioutil.ReadFile("./test/test3.md")
	if err != nil {
		c.AbortWithStatus(500)
		return
	}
	c.JSON(200, string(dat))
}

func GetPosts(c *gin.Context) {
	posts, err := model.GetPosts();

	if err != nil {
		c.AbortWithStatus(204)
		return
	}
	c.JSON(200, posts)
}

func GetPostById(c *gin.Context){
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.AbortWithStatus(400)
		return
	}

	post, err := model.GetPostById(id)
	if post == nil {
		c.AbortWithStatus(204)
		return
	} else if err != nil{
		c.AbortWithStatus(400)
		return
	}

	c.JSON(200, post);
}
