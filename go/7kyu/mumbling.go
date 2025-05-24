// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/go

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


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