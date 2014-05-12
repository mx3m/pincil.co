$(document).ready(function(){

	var imgDir = "img/",
	designers = [
		{
			firstName: 'Jonny',
			lastName: 'Ashcroft',
			avatar: 'ashcroft.jpg',
			twitterUrl: 'https://twitter.com/jonny_ashcroft',
			dribbbleUrl: 'http://dribbble.com/jonnyashcroft'
		},
		{
			firstName: 'Ian',
			lastName: 'Collins',
			avatar: 'collins.jpg',
			twitterUrl: 'https://twitter.com/3n',
			dribbbleUrl: 'http://dribbble.com/iannn'
		},
		{
			firstName: 'Ryan',
			lastName: 'Sims',
			avatar: 'sims.jpg',
			twitterUrl: 'https://twitter.com/simmy',
			dribbbleUrl: 'http://dribbble.com/simmy'
		},
		{
			firstName: 'Lotta',
			lastName: 'Nieminen',
			avatar: 'nieminen.jpg',
			twitterUrl: 'https://twitter.com/lottanieminen',
			dribbbleUrl: 'http://dribbble.com/lottanieminen'
		},
		{
			firstName: 'Jessica',
			lastName: 'Hische',
			avatar: 'hische.jpg',
			twitterUrl: 'https://twitter.com/Jessicahische',
			dribbbleUrl: 'http://dribbble.com/jessicahische'
		},
		{
			firstName: 'Meagan',
			lastName: 'Fischer',
			avatar: 'fischer.jpg',
			twitterUrl: 'https://twitter.com/owltastic',
			dribbbleUrl: 'http://dribbble.com/owltastic'
		},
		{
			firstName: 'Aaron',
			lastName: 'Sananes',
			avatar: 'sananes.jpg',
			twitterUrl: 'https://twitter.com/aasananes',
			dribbbleUrl: 'http://dribbble.com/sananes'
		},
		{
			firstName: 'Jeremy',
			lastName: 'Booth',
			avatar: 'booth.jpg',
			twitterUrl: 'https://twitter.com/@jeremybooth',
			dribbbleUrl: 'http://dribbble.com/jeremybooth'
		},
		{
			firstName: 'Michelle',
			lastName: 'Vandy',
			avatar: 'vandy.jpg',
			twitterUrl: 'https://twitter.com/Michelle_Vandy',
			dribbbleUrl: 'http://dribbble.com/michellevandy'
		},
		{
			firstName: 'Geri',
			lastName: 'Coady',
			avatar: 'coady.jpg',
			twitterUrl: 'https://twitter.com/hellogeri',
			dribbbleUrl: 'http://dribbble.com/hellogeri'
		},
		{
			firstName: 'Karli',
			lastName: 'Ingersoll',
			avatar: 'ingersoll.jpg',
			twitterUrl: 'https://twitter.com/karliingersoll',
			dribbbleUrl: 'http://dribbble.com/karliingersoll'
		},
		{
			firstName: 'Justin',
			lastName: 'Pervorse',
			avatar: 'pervorse.jpg',
			twitterUrl: 'https://twitter.com/justinpervorse',
			dribbbleUrl: 'http://dribbble.com/justinpervorse'
		},
		{
			firstName: 'Alice',
			lastName: 'Lee',
			avatar: 'lee.jpg',
			twitterUrl: 'https://twitter.com/byalicelee',
			dribbbleUrl: 'http://dribbble.com/byalicelee'
		},
		{
			firstName: 'Wouter de',
			lastName: 'Bres',
			avatar: 'bres.jpg',
			twitterUrl: 'http://twitter.com/wdeb',
			dribbbleUrl: 'http://dribbble.com/wdeb'
		},
		{
			firstName: 'Louis',
			lastName: 'Currie',
			avatar: 'currie.jpg',
			twitterUrl: 'http://twitter.com/louis_currie',
			dribbbleUrl: 'http://dribbble.com/louis_currie'
		},
		{
			firstName: 'Ryan',
			lastName: 'Bales',
			avatar: 'bales.jpg',
			twitterUrl: 'https://twitter.com/ByncHQ',
			dribbbleUrl: 'http://dribbble.com/ryanbales'
		},
		{
			firstName: 'Jared',
			lastName: 'Erondu',
			avatar: 'erondu.jpg',
			twitterUrl: 'http://twitter.com/erondu',
			dribbbleUrl: 'http://dribbble.com/erondu'
		},
		{
			firstName: 'Patrick',
			lastName: 'Rogan',
			avatar: 'rogan.jpg',
			twitterUrl: 'http://twitter.com/patricktrogan',
			dribbbleUrl: 'http://dribbble.com/patrickrogan'
		},
		{
			firstName: 'Sam',
			lastName: 'Stratton',
			avatar: 'stratton.jpg',
			twitterUrl: 'http://twitter.com/strattonsam',
			dribbbleUrl: 'http://dribbble.com/strattonsam'
		},
		{
			firstName: 'Daniel',
			lastName: 'Eden',
			avatar: 'eden.jpg',
			twitterUrl: 'http://twitter.com/_dte',
			dribbbleUrl: 'http://dribbble.com/dte'
		},
		{
			firstName: 'Tunghsiao',
			lastName: 'Liu',
			avatar: 'liu.jpg',
			twitterUrl: 'http://twitter.com/tunghsiao',
			dribbbleUrl: 'http://dribbble.com/sparanoid'
		},
		{
			firstName: 'Dana',
			lastName: 'Tanamachi',
			avatar: 'tanamachi.jpg',
			twitterUrl: 'http://twitter.com/dana_tanamachi',
			dribbbleUrl: 'http://dribbble.com/dana_tanamachi'
		},
		{
			firstName: 'Julian',
			lastName: 'Burford',
			avatar: 'burford.jpg',
			twitterUrl: 'http://twitter.com/JulianBurford',
			dribbbleUrl: 'http://dribbble.com/JulianBurford'
		},
		{
			firstName: 'Greg',
			lastName: 'Christian',
			avatar: 'christian.jpg',
			twitterUrl: 'http://twitter.com/gregchristian',
			dribbbleUrl: 'http://dribbble.com/gregchristian'
		},
		{
			firstName: 'Mariusz',
			lastName: 'Ciesla',
			avatar: 'ciesla.jpg',
			twitterUrl: 'http://twitter.com/dotmariusz',
			dribbbleUrl: 'http://dribbble.com/mariusz'
		},
		{
			firstName: 'Bart',
			lastName: 'Zimny',
			avatar: 'zimmy.jpg',
			twitterUrl: 'http://twitter.com/@BZimny',
			dribbbleUrl: 'http://dribbble.com/Zimny'
		},
		{
			firstName: 'Mat',
			lastName: 'MacQuarrie',
			avatar: 'macquarrie.jpg',
			twitterUrl: 'http://twitter.com/MatMacQuarrie',
			dribbbleUrl: 'http://dribbble.com/MatMacQuarrie'
		},
		{
			firstName: 'Andy',
			lastName: 'Hayes',
			avatar: 'hayes.jpg',
			twitterUrl: 'http://twitter.com/hucklebuck',
			dribbbleUrl: 'http://dribbble.com/hucklebuck'
		},
		{
			firstName: 'Charlie',
			lastName: 'Wagers',
			avatar: 'wagers.jpg',
			twitterUrl: 'http://twitter.com/charliewagers',
			dribbbleUrl: 'http://dribbble.com/charliewagers'
		},
		{
			firstName: 'Victoria',
			lastName: 'Pater',
			avatar: 'pater.jpg',
			twitterUrl: 'http://twitter.com/typeis4lovers',
			dribbbleUrl: 'http://dribbble.com/typeis4lovers'
		},
		{
			firstName: 'Roy',
			lastName: 'Barber',
			avatar: 'barber.jpg',
			twitterUrl: 'https://twitter.com/roybarberuk',
			dribbbleUrl: 'http://dribbble.com/roybarberuk'
		},
		{
			firstName: 'Kevin',
			lastName: 'Anderson',
			avatar: 'anderson.jpg',
			twitterUrl: 'http://twitter.com/kevandrsn',
			dribbbleUrl: 'http://dribbble.com/kevandrsn'
		},
		{
			firstName: 'Patrick',
			lastName: 'Algrim',
			avatar: 'algrim.jpg',
			twitterUrl: 'http://twitter.com/hellyeahdude',
			dribbbleUrl: 'http://dribbble.com/hellyeahdude'
		},
		{
			firstName: 'Matt',
			lastName: 'Bango',
			avatar: 'bango.jpg',
			twitterUrl: 'http://twitter.com/mattbango',
			dribbbleUrl: 'http://dribbble.com/mattbango'
		},
		{
			firstName: 'Kerem',
			lastName: 'Suer',
			avatar: 'suer.jpg',
			twitterUrl: 'http://twitter.com/kerem',
			dribbbleUrl: 'http://dribbble.com/kerem'
		},
		{
			firstName: 'Bobby',
			lastName: 'McKenna',
			avatar: 'mckenna.jpg',
			twitterUrl: 'http://twitter.com/bobby',
			dribbbleUrl: 'http://dribbble.com/bobbymckenna'
		},
		{
			firstName: 'Tim',
			lastName: 'Boelaars',
			avatar: 'boelaars.jpg',
			twitterUrl: 'http://twitter.com/timboelaars',
			dribbbleUrl: 'http://dribbble.com/timboelaars'
		},
		{
			firstName: 'Chris',
			lastName: 'Meeks',
			avatar: 'meeks.jpg',
			twitterUrl: 'http://twitter.com/chrismeeks',
			dribbbleUrl: 'http://dribbble.com/ChrisMeeks'
		},
		{
			firstName: 'Jing',
			lastName: 'Zhang',
			avatar: 'zhang.jpg',
			twitterUrl: 'http://twitter.com/mazakiiz',
			dribbbleUrl: 'http://dribbble.com/mazakii'
		},
		{
			firstName: 'Brendan',
			lastName: 'Pittman',
			avatar: 'pittman.jpg',
			twitterUrl: 'http://twitter.com/brendanpittman',
			dribbbleUrl: 'http://dribbble.com/brendanpittman'
		},
		{
			firstName: 'Samantha',
			lastName: 'Warren',
			avatar: 'warren.jpg',
			twitterUrl: 'http://twitter.com/samanthatoy',
			dribbbleUrl: 'http://dribbble.com/Samantha'
		},
		{
			firstName: 'George',
			lastName: 'Otsubo',
			avatar: 'otsubo.jpg',
			twitterUrl: 'http://twitter.com/georgeotsubo',
			dribbbleUrl: 'http://dribbble.com/georgeotsubo'
		},
		{
			firstName: 'Joel',
			lastName: 'Beukelman',
			avatar: 'beukelman.jpg',
			twitterUrl: 'http://twitter.com/_bklmn',
			dribbbleUrl: 'http://dribbble.com/bklmn'
		},
		{
			firstName: 'Meng',
			lastName: 'To',
			avatar: 'to.jpg',
			twitterUrl: 'http://twitter.com/MengTo',
			dribbbleUrl: 'http://dribbble.com/MengTo'
		},
		{
			firstName: 'Linn',
			lastName: 'Fritz',
			avatar: 'fritz.jpg',
			twitterUrl: 'http://twitter.com/linnfritz',
			dribbbleUrl: 'http://dribbble.com/linnfritz'
		},
		{
			firstName: 'Paresh',
			lastName: 'Khatri',
			avatar: 'khatri.jpg',
			twitterUrl: 'http://twitter.com/KPdesigns',
			dribbbleUrl: 'http://dribbble.com/KPdesigns'
		},
		{
			firstName: 'Keiran',
			lastName: 'Flanigan',
			avatar: 'flanigan.jpg',
			twitterUrl: 'http://twitter.com/aeliox',
			dribbbleUrl: 'http://dribbble.com/aeliox'
		},
		{
			firstName: 'Anthony',
			lastName: 'Aubertin',
			avatar: 'aubertin.jpg',
			twitterUrl: 'http://twitter.com/Noxdzine',
			dribbbleUrl: 'http://dribbble.com/Noxdzine'
		},
		{
			firstName: 'Tommy',
			lastName: 'Roussel',
			avatar: 'roussel.jpg',
			twitterUrl: 'http://twitter.com/TommyRoussel',
			dribbbleUrl: 'http://dribbble.com/TommyRoussel'
		},
		{
			firstName: 'Julien',
			lastName: 'Renvoye',
			avatar: 'renvoye.jpg',
			twitterUrl: 'http://twitter.com/JulienRenvoye',
			dribbbleUrl: 'http://dribbble.com/JulienRenvoye'
		},
		{
			firstName: 'Victor',
			lastName: 'Erixon',
			avatar: 'erixon.jpg',
			twitterUrl: 'http://twitter.com/victorerixon',
			dribbbleUrl: 'http://dribbble.com/victorerixon'
		},
		{
			firstName: 'Danny',
			lastName: 'Jones',
			avatar: 'jones.jpg',
			twitterUrl: 'http://twitter.com/yasly',
			dribbbleUrl: 'http://dribbble.com/yasly'
		},
		{
			firstName: 'Rachel',
			lastName: 'Groves',
			avatar: 'groves.jpg',
			twitterUrl: 'http://twitter.com/rachel_groves',
			dribbbleUrl: 'http://dribbble.com/rachel_groves'
		},
		{
			firstName: 'Andres',
			lastName: 'Jasso',
			avatar: 'jasso.jpg',
			twitterUrl: 'http://twitter.com/andresdjasso',
			dribbbleUrl: 'http://dribbble.com/andresjasso'
		},
		{
			firstName: 'Ines',
			lastName: 'Gamler',
			avatar: 'gamler.jpg',
			twitterUrl: 'http://twitter.com/ppd',
			dribbbleUrl: 'http://dribbble.com/ines.gamler'
		},
	];

	function createContent () {
		
		var designerTpl = _.template($('#designer-template').html()),
			letterTpl = _.template($('#letter-template').html()),
			$parent = $('main'),
			sortedDesigners,
			currentLetter;

		sortedDesignersList	= _.sortBy(designers, function(designer) {			
			return designer.lastName;
		});
		
		_.each(sortedDesignersList, function(sortedDesigner){
			
			var letter = sortedDesigner.lastName.substr(0,1);			
			if (currentLetter !== letter) {
				$parent.append(letterTpl({letter:letter}));
				currentLetter = letter;
			}

			var data = _.extend(sortedDesigner, {
				avatarSrc : imgDir + sortedDesigner.avatar
			});
			$parent.append(designerTpl(data));
		});
	}

	createContent();

	// All anchor links to open in a new window
	$('a').each(function() {
	   var a = new RegExp('/' + window.location.host + '/');
	   if(!a.test(this.href)) {
	       $(this).click(function(event) {
	           event.preventDefault();
	           event.stopPropagation();
	           window.open(this.href, '_blank');
	       });
	   }
	});

	// Fittext.js loader
	$('.name').fitText(1.1);

	// rotate3D() animations triggered on touch screens
	$('.front').click(function(){
		$(this).find('.back').addClass('flip');
	});

});

