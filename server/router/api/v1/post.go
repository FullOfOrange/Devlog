package v1

import (
	"github.com/FullOfOrange/devlog/model"
	"github.com/gin-gonic/gin"
	"log"
	"strconv"

	"io/ioutil"
)

type Test struct {
	data string `json:"data"`
}

func GetPostTest(c *gin.Context) {
	dat, err := ioutil.ReadFile("./test/test.md")
	if err != nil {
		c.AbortWithStatus(500)
		return
	}
	var d = Test {string(dat)}
	log.Print(d.data)
	c.JSON(200, d)
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
