package main
import (
    "fmt"
    "strings"
)

func Accum(s string) string {
	var result string
	stringSplit := strings.Split(s,``)
	for index, value := range stringSplit {
		result += strings.ToUpper(value) + strings.Repeat(strings.ToLower(value), index) + "-"
	}
    return strings.Trim(result, "-")
}

func main(){
	// var s string = Accum("sanjay")
	fmt.Println(Accum("ZpglnRxqenU"))
}