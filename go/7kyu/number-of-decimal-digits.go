// Number of Decimal Digits
// https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript

package main
import "strconv"

func Digits(n uint64) int {
	s2 := strconv.FormatUint(n, 10)
	return len(s2)
}

func main(){
	println(Digits(123))
}