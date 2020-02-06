function plain(inputMass) {
	if (!Array.isArray(inputMass)) {
		return []
	}
    return inputMass.flat(Infinity)
}
