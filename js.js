/*LOS CUATRO PERROS
tenemos cuatro perros: un galgo, un dogo, un alano y un podenco. Este ultimo come mas que el galgo, el alano come mas que el galgo y menos 
que el dogo pero este come mas que el podenco
¿Cual de los cuatro perros come menos?

Dogo:4
Alano:3
Podenco:2
Galgo:1

-----------------------------------------------------------------------------------------------------------*/

var a={
			dogo:0,
			alano:0,
			podenco:0,
			galgo:0,

			resultado: function(){
									if(a.dogo>a.alano&&
										a.alano>a.podenco&&
										a.podenco>a.galgo){
										return true
									}
									return false
								},

			intervalo:setInterval(function(){
				
											if(a.resultado()){
												clearInterval(a.intervalo)
												console.log("El dogo come "+a.dogo+" kilos de comida")
												console.log("El alano come "+a.alano+" kilos de comida")
												console.log("El podenco come "+a.podenco+" kilos de comida")
												console.log("El galgo come "+a.galgo+" kilos de comida")
											}
											a.dogo=Math.ceil(Math.random()*4),
											a.alano=Math.ceil(Math.random()*4),
											a.podenco=Math.ceil(Math.random()*4),
											a.galgo=Math.ceil(Math.random()*4)
				
											} ,10)



	}


/*>
<*/



/*Seis amigos de vacaciones
Seis amigos desean pasar sus vacaciones juntos y deciden, cada dos, utilizar diferentes medios de transporte
sabemos que Alenjandro no utiliza el coche ya que este acompaña a Benito que no va en avion.
Andres viaja en avion. Si carlos no va  acompañado de Dario ni hace uso del avion, podria ustd decirnos en que medio de transporte llega a su destino tomas

Alejandro -Tren 1
Benito-Tren 1
Andres-Avion 2
Carlos-Avion 2
Dario-Coche 3
Tomas-Coche 3


-----------------------------------------------------------------------------------------------------------*/

var c={

		Alejandro:0,
		Benito:0,
		Andres:0,
		Carlos:0,
		Dario:0,
		Tomas:0,

		resultado: function(){
			if(c.Alejandro==1&&
				c.Benito==1&&
				c.Andres==2&&
				c.Carlos==2&&
				c.Dario==3&&
				c.Tomas==3){
				return true
			}
			return false


		},

		intervalo:setInterval(function(){

			c.Alejandro=Math.ceil(Math.random()*4),
			c.Benito=Math.ceil(Math.random()*4),
			c.Andres=Math.ceil(Math.random()*4),
			c.Carlos=Math.ceil(Math.random()*4),
			c.Dario=Math.ceil(Math.random()*4),
			c.Tomas=Math.ceil(Math.random()*4)

			if(c.resultado()){
				clearInterval(c.intervalo)
				console.log("Alejandro va en el grupo "+c.Alejandro+" que va en tren")
				console.log("Benito va en el grupo "+c.Benito+" que va en tren")
				console.log("Andres va en el grupo "+c.Andres+" que va en Avion")
				console.log("Carlos va en el grupo "+c.Carlos+" que va en Avion")
				console.log("Dario va en el grupo "+c.Dario+" que va en Coche")
				console.log("Tomas va en el grupo "+c.Tomas+" que va en Coche")
			}else if(c.resultado==false){
				console.log(error)
			}





		},1)

}




/*Silencio
si Angela habla mas bajo que Rosa y celia habla mas alto que Rosa ¿Habla angela mas alto o mas bajo que cecilia?
angela1
rosa2
cicilia3
-----------------------------------------------------------------------------------------------------------*/


var d={
	angela:0,
	rosa:0,
	cecilia:0,

	
	resultado:function(){
	if(d.cecilia>d.rosa&&
		d.rosa>d.angela){
		return true
		console.log("hasta aca llego")
	}
	return false
	},


	

	intervalo:setInterval(function(){
		d.angela=Math.ceil(Math.random()*3),
		d.rosa=Math.ceil(Math.random()*3),
		d.cecilia=Math.ceil(Math.random()*3)
			if(d.resultado()){
			clearInterval(d.intervalo)
			console.log("Angela habla a un nivel de fuerza de "+d.angela)
			console.log("Rosa habla a un nivel de fuerza de "+d.rosa)
			console.log("Cecilia habla a un nivel de fuerza de "+d.cecilia)
		}

	},10)

}


