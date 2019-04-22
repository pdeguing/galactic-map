import React from 'react'

import Grid from "../Grid"

import './App.css'

var galaxyMap = new Array(20)

for (var i = 0; i < galaxyMap.length; i++) {
	galaxyMap[i] = new Array(20).fill().map(() => Math.round(Math.random() * 5))
}

console.log(galaxyMap)

export default () => {
	return <main className="main">
		<Grid galaxyMap={galaxyMap}/>
	</main>
}
