# Osa 0 

## 0.4: uusi muistiinpano
![alt text](https://i.postimg.cc/yWqCbFWb/0-4-Muistiinpano.png)

kayttaja->selain:
note left of selain
  kayttaja tekee haun selaimelle kirjoittamalla osoiteriville
  fullstack-exampleapp.herokuapp.com/notes

end note
selain->palvelin: HTTP GET fullstack-exampleapp.herokuapp.com/notes
note left of palvelin
  selain saa html-koodin
end note
palvelin->selain: status koodi 200, sivun HTML-koodi

selain->palvelin: HTTP GET fullstack-exampleapp.herokuapp.com/main.css
note left of palvelin
  HTML-koodin aikansaannoksena selain hakee tyylittelytiedoston main.css
end note
palvelin->selain: status koodi 200, main.css

selain->palvelin: HTTP GET fullstack-exampleapp.herokuapp.com/main.js
note left of palvelin
  selain hakee myös javascript tiedoston 
end note
palvelin->selain: status 200, main.js

selain->palvelin: HTTP GET fullstack-exampleapp.herokuapp.com/data.json
note right of selain
selain alkaa suorittamaan JavaScript-koodia 
ja tekee HTTP GET palautuspyynnön 
ositteeseeen https://fullstack-exampleapp.herokuapp.com/data.json, 
joka sisältää mustiinpanoja json-muotoisena raakadatana.  
end note 
note left of selain
selain palauttaa HTML sivun, joka on tyylittetty tyylitiedosto 
main.css mukaan
end note

palvelin->selain: status 200, muistiinpanot JSON-muodossa

note left of selain
HTML-sivu saa vielä lopuksi muistiinpanot, 
jotka saatiin tekemällä palautuspyyntö data.json sisältämälle sivulle.
end note
