function loneTeen(a, b) {
	if (a >= 13 && a <= 19 && b >= 13 && b <= 19) {
		return false
	}
	return (a >= 13 && a <= 19) || (b >= 13 && b <= 19)
}
