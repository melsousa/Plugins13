
$(document).ready(init);

function init() {
	/* ========== DESENHANDO O CAMINHO E INICIANDO O PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Mover para o elemento 'start'
		.moveTo(400, 50, {name: "start"})
		// Linha para o elemento 'description'
		.lineTo(400, 800, {name: "description"})
		// Arco abaixo e linha para 'sintaxe'
		.arc(200, 1200, 400, -Math.PI/2, Math.PI/2, true)
		.lineTo(600, 1600, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "syntax"
		})
		// Continue a linha para 'barra de rolagem'
		.lineTo(1750, 1600, {
			callback: function() {
				highlight($(".sp-scroll-handle"));
			},
			name: "scrollbar"
		})
		// Arco para cima enquanto gira
		.arc(1800, 1000, 600, Math.PI/2, 0, true, {rotate: Math.PI/2 })
		// Linha para 'rotações'
		.lineTo(2400, 750, {
			name: "rotations"
		})
		// Rodar no lugar
		.rotate(3*Math.PI/2, {
			name: "rotations-rotated"
		})
		//Continue para cima para 'source'
		.lineTo(2400, -700, {
			name: "source"
		})
		// Pequeno arco para baixo
		.arc(2250, -700, 150, 0, -Math.PI/2, true)

		//Linha para 'seguir'
		.lineTo(1350, -850, {
			name: "follow"
		})
		
		// Arqueie e gire de volta ao começo.
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// Terminamos o caminho, vamos iniciar o plugin no nosso elemento wrapper
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});

	// Adicione scrollTo ao clicar nas âncoras de navegação
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Inclua o plugin de facilitação do jQuery (http://gsgd.co.uk/sandbox/jquery/easing/)
			// para funções de alívio extra como a abaixo
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=550");
		e.preventDefault();
	});

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 20000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
