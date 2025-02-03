const sampleWines = [
	{	

		"title": "Levert Cremant de Bourgogne Rose Sparkling Wine",
		"ml": "750",
		"stock": "10",
		"price": "20.99",
		"rating": "4.4",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		],
		"availability": "true",
		"country": "France",
		"region": "Burgundy",
		"brand": "Levert Freres",
		"Varietal": "Sparkling Wine, Rose",
		"type": "Rose",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h2a/hb5/13188953374750.png",
		"description": "Cremant de Bourgogne, Burgundy, France - This is a fresh and elegant Cremant with subtle yet enticing notes of flowers and biscuits. It has a good acidity and can be enjoyed as an aperitif or with desserts."
	},
	{
		"title": "Louis Bouillot Perle d'Aurore Cremant de Bourgogne Sparkling Rose Wine",
		"ml": "750",
		"stock": "10",
		"price": "24.99",
		"rating": "4.6",
		"availability": "true",
		"country": "France",
		"region": "Burgundy",
		"brand": "Louis Bouillot",
		"Varietal": "Sparkling Wine, Rose",
		"type": "Rose",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h87/hfa/17066426236958.png",
		"description": "France - Burgundy - Crémant de Bourgogne - A sophisticated Rose made using the Champagne method. Pale rose in color with a medium-body and fine bubbles. The bouquet and palate feature cherry and strawberry notes with a dry creamy finish. Superb with salmon, shrimp and lobster.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Mailly L'Intemporelle Rose Grand Cru Champagne, 2018",
		"ml": "750",
		"stock": "10",
		"price": "149.99",
		"rating": "4.9",
		"availability": "true",
		"country": "France",
		"region": "Champagne",
		"brand": "Mailly",
		"Varietal": "Sparkling Wine, Rose",
		"type": "Rose",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h63/h05/9178504462366.png",
		"description": "Wine Enthusiast-France - Champagne - Champagne Grand Cru - ' Numbered bottles in a limited production, this still-fruity Champagne is full of life. The balance of red fruits and citrus is well judged, giving a wine that is both fresh and mature. Drink now. '",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Luc Belaire Rose",
		"ml": "750",
		"stock": "10",
		"price": "30.89",
		"rating": "4.6",
		"availability": "true",
		"country": "France",
		"region": "Provence",
		"brand": "Luc Belaire",
		"Varietal": "Sparkling Wine, Rose",
		"type": "Rose",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/hf1/hb2/9681098571806.png",
		"description": "Provence, France- Carefully aged before release, it has a great effervescence, resulting in a beautiful, deep red with aromas of strawberry and blackcurrant. There is a roundness and a toasty richness. Great on its own as an aperetif, or paired with any dish, or in a sparkling cocktail.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Mumm Napa Brut Rose",
		"ml": "750",
		"stock": "10",
		"price": "35.99",
		"rating": "4.6",
		"availability": "true",
		"country": "Domestics",
		"region": "Napa Valley",
		"brand": "Mumm",
		"Varietal": "Sparkling Wine, Rose",
		"type": "Rose",
		"abv": "11",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h3c/h4d/28940430508062.png",
		"description": "alifornia - Napa Valley - Eye catching pink-coral appearance with tiny tight bubbles. Nose ofb right strawberry and raspberry complemented by juicy orange, red apple and toasted bread notes. Beautiful palate of Strawberry and orange lead to a toasty, biscuity finish",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Levert Cremant de Bourgogne Brut Sparkling Wine",
		"ml": "750",
		"stock": "10",
		"price": "19.99",
		"rating": "4.6",
		"availability": "true",
		"country": "France",
		"region": "Burgundy",
		"brand": "Levert Freres",
		"Varietal": "Sparkling Wine, Brut",
		"type": "White",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x1000,sq/media/sys_master/twmmedia/h3c/ha8/13188943413278.png",
		"description": "Cremant de Bourgogne, Burgundy, France - This is a fresh and elegant Cremant with subtle yet enticing notes of flowers and biscuits. It has a good acidity and can be enjoyed as an aperitif or with desserts.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Armani Prosecco DOCG",
		"ml": "750",
		"stock": "10",
		"price": "21.99",
		"rating": "4.6",
		"availability": "true",
		"country": "Italy",
		"region": "Veneto",
		"brand": "Albino Armani",
		"Varietal": "Prosecco",
		"type": "White",
		"abv": "12.5",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h8b/h7c/17578200203294.png",
		"description": "This wine offers aromas of spring blossom, white stone-fruit flesh and a hint of wet stone. The creamy, refreshing palate brings white peach, Golden Delicious apple and candied tangerine before a white-almond close.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "La Marca Prosecco",
		"ml": "750",
		"stock": "10",
		"price": "14.99",
		"rating": "4.6",
		"availability": "true",
		"country": "Italy",
		"region": "Veneto",
		"brand": "La Marca",
		"Varietal": "Prosecco",
		"type": "White",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/hc5/h5f/16402473746462.png",
		"description": "Veneto, Italy- La Marca Prosecco is a fresh sparkling wine with a vibrant bouquet of apple, white peach and honeysuckle. The soft, harmonious fruity notes highlighted by pleasant acidity make this wine ideal for any occasion.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "La Marca Prosecco Luminore DOCG",
		"ml": "750",
		"stock": "10",
		"price": "21.99",
		"rating": "4.6",
		"availability": "true",
		"country": "Italy",
		"region": "Veneto",
		"brand": "La Marca",
		"Varietal": "Prosecco",
		"type": "White",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/he6/h50/28335652306974.png",
		"description": "Prosecco, Italy - Delicate aromas of white flowers and stone-fruits complement the soft, creamy-texture. Subtle hints of fresh citrus, pear and nectarine round out the exquisite palate. Clean, crisp acidity balances a touch of sweetness and offers a light, refreshing style.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Santa Margherita Prosecco DOCG",
		"ml": "750",
		"stock": "10",
		"price": "21.99",
		"rating": "4.6",
		"availability": "true",
		"country": "Italy",
		"region": "Veneto",
		"brand": "Santa Margherita",
		"Varietal": "Prosecco",
		"type": "White",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/hf1/hfc/28900639801374.png",
		"description": "Peach and apple aromas, this refreshing sparkler has a long finish.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Champagne Cattier Premier Cru Blanc de Blancs",
		"ml": "750",
		"stock": "10",
		"price": "89.99",
		"rating": "4.6",
		"availability": "true",
		"country": "France",
		"region": "Champagne",
		"brand": "Champagne Cattier",
		"Varietal": "Sparkling Wine, Blanc De Blanc",
		"type": "White",
		"abv": "12.5",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h92/ha3/15200379437086.png",
		"description": "A delicious blanc de blancs with aromas and flavors of ginger, dried lemon rind and sliced pear and apple. Full body with a round mouth-feel and a beautiful finish...Drink or hold.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Veuve Clicquot Yellow Label Brut Champagne",
		"ml": "750",
		"stock": "10",
		"price": "64.99",
		"rating": "4.6",
		"availability": "true",
		"country": "France",
		"region": "Champagne",
		"brand": "Veuve Clicquot",
		"Varietal": "Sparkling Wine, Brut",
		"type": "White",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h60/h74/14942221598750.png",
		"description": "Champagne, France - Complex aromas of bright and beautiful ripe fruit, poached pear, grated ginger, and light cream. Excellent depth and persistence. Medium bodied, active and layered on the palate; dry, medium acidity, and well balanced.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Ruinart Blanc de Blancs Champagne",
		"ml": "750",
		"stock": "10",
		"price": "119.99",
		"rating": "4.6",
		"availability": "true",
		"country": "France",
		"region": "Champagne",
		"brand": "Ruinart",
		"Varietal": "Sparkling Wine, Blanc De Blanc",
		"type": "White",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/hfa/h8d/26850031665182.png",
		"description": "Wine Spectator-France - Champagne - Champagne - Smoky mineral and spice accents meet creamy layers of poached white peach and lemon meringue pie in this bright and creamy blanc de blancs Champagne. Harmonious, with a long, aromatic finish of acacia blossom and honey.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Jacqueline Leonne Rose Sparkling Wine",
		"ml": "750",
		"stock": "10",
		"price": "17.99",
		"rating": "4.6",
		"availability": "true",
		"country": "Domestics",
		"region": "New Mexico",
		"brand": "Jacqueline Leonne",
		"Varietal": "Sparkling Wine, Rose",
		"type": "Rose",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/ha6/h5b/27143078477854.png",
		"description": "A sparkling wine with subtlety, minerality and power that exceed expectations. The rose character of this wine grows as richness and red fruit notes like raspberries flesh out the finish",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	},
	{
		"title": "Schramsberg Brut Rose",
		"ml": "750",
		"stock": "10",
		"price": "45.99",
		"rating": "4.6",
		"availability": "true",
		"country": "Domestics",
		"region": "North Coast, California",
		"brand": "Schramsberg",
		"Varietal": "Sparkling Wine, Rose",
		"type": "Rose",
		"abv": "12",
		"image": "https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h27/h2c/12292041015326.png",
		"description": "North Coast, CA - Generous aromas of candied orange, raspberry preserve and orange blossom complemented by notes of vanilla, honey and brioche. There are juicy flavors of peach, strawberry shortcake and lemon curd. A fresh, juicy acidity drives to a bright, clean finish.",
		"reviews": [
			{ "uuid": "id", "userName": "names", "reviews": "its good" }
		]
	}
]


export default sampleWines;