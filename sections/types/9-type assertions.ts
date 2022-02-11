/*
* example
*/
const canvas = document.querySelector('canvas') as HTMLCanvasElement
//or
const canvas1 = <HTMLCanvasElement>document.querySelector('canvas')

//two assertions
const a = (canvas as any) as HTMLElement
