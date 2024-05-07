# hugo-ollama

En veldig ENKEL måte å snakke med KI på. Fyll inn dine ollama chattboter og start ved å bruke: 
    
    hugo server --noHTTPCache

HUSK fyll in chattbotene med riktig navn! 

    vim ollama-hugo/layouts/index.html

Her skal du skrive inn dine egne:

    <select id="model_type" name="model">
		<option value="phi3">phi3:4b</option>
		<option value="codellama:34b">codellama:34b</option>
		<option value="dolphin-mixtral">dolphin-mixtral:8x22b</option>
		<option value="llama2:13b">llama2:13b</option>
		<option value="llama2-uncensored">llama2-uncensored:13b</option>
		<option value="llama3">llama3:8b</option>
    </select>

En siste ting. Sjekk om ollama kjører på

    http://localhost:11434
