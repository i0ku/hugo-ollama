# hugo-ollama

Et veldig ENKELT brukergrensesnitt for ollama. Fyll inn dine ollama chattboter og start ved å bruke: 
    
    cd ollama-hugo ; hugo server --noHTTPCache

HUSK fyll in chattbotene med riktig navn! 

	ollama list 
 		codellama:34b
  		llama3:latest
  navn i value:
  
  	codellama:34b
	llama3

:)

Gå inn i data/models.json og fyll inn dine egne chattboter

	{"model":[
	    { "value":"phi3", "name":"phi3:4b" },
	    { "value":"codellama:34b", "name":"codellama:34b" },
	    { "value":"dolphin-mixtral", "name":"dolphin-mixtral:8x22b" },
	    { "value":"llama2:13b", "name":"llama2:13b" },
	    { "value":"llama2-uncensored", "name":"llama2-uncensored:13b" },
	    { "value":"llama3", "name":"llama3:8b" }
	  ]}

En siste ting. Sjekk om ollama kjører på

    http://localhost:11434
