	function AdicionarFiltro(tabela, coluna) {
	    var cols = $("#" + tabela + " thead tr:first-child th").length;
	    if ($("#" + tabela + " thead tr").length == 1) {
	        var linhaFiltro = "<tr>";
	        for (var i = 0; i < cols; i++) {
	            linhaFiltro += "<th></th>";
	        }
	        linhaFiltro += "</tr>";
	 
	        $("#" + tabela + " thead").append(linhaFiltro);
	    }
	 
	    var colFiltrar = $("#" + tabela + " thead tr:nth-child(2) th:nth-child(" + coluna + ")");
	 
	    $(colFiltrar).html("<select id='filtroColuna_" + coluna.toString() + "'  class='filtroColuna'> </select>");
	 
	    var valores = new Array();
	 
	    $("#" + tabela + " tbody tr").each(function () {
	        var txt = $(this).children("td:nth-child(" + coluna + ")").text();
	        if (valores.indexOf(txt) < 0) {
	            valores.push(txt);
	        }
	    });
	    $("#filtroColuna_" + coluna.toString()).append("<option>TODOS</option>")
	    for (elemento in valores) {
	        $("#filtroColuna_" + coluna.toString()).append("<option>" + valores[elemento] + "</option>");
	    }
	 
	    $("#filtroColuna_" + coluna.toString()).change(function () {
	        var filtro = $(this).val();
	        $("#" + tabela + " tbody tr").show();
	        if (filtro != "TODOS") {
	            $("#" + tabela + " tbody tr").each(function () {
	                var txt = $(this).children("td:nth-child(" + coluna + ")").text();
	                if (txt != filtro) {
	                    $(this).hide();
	                }
	            });
	        }
	    });
	 
	};
	AdicionarFiltro("tab", 3);