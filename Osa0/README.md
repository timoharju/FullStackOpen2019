# Osa 0 

## 0.4: uusi muistiinpano
![alt text](https://i.postimg.cc/BnFx8zkK/Untitled.png)

```
kayttaja->selain:
note left of selain
  kayttaja toteuttaa haun selaimelle kirjoittamalla osoiteriville
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
HTML-sivu vastaanottaa vielä lopuksi muistiinpanot. 
musitiinpanot saatiin tekemällä palautuspyyntö data.json sisältämälle sivulle.
end note

kayttaja->selain:
note left of selain
  Käyttäjä täydentää lomake kentän omalla vapaa 
  valintaisella tekstillä ja painaa Tallenna-painiketta
end note
selain->palvelin: HTTP POST fullstack-exampleapp.herokuapp.com/notes
note left of palvelin
 
  Palvelin vastaanottaa pyynnön, sekä käyttäjän lähettämän tekstin.
  Tiedot tallentuvat json-muotoisena raakadatana data.json sisältävälle html sivulle
end note
palvelin->selain: status 302, location: fullstack-exampleapp.herokuapp.com/notes

note left of selain
Käyttäjän syöttämä teksti näkyy nyt html-sivulla. Tapahtumaketju alkaa alusta. 
end note
```
## 0.5: Single Page App
![alt text](https://i.postimg.cc/kMF8d88x/Untitled-1.png)

```
kayttaja->selain:
note left of selain
  kayttaja toteuttaa haun selaimelle kirjoittamalla osoiteriville
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

selain->palvelin: HTTP GET fullstack-exampleapp.herokuapp.com/spa.js
note left of palvelin
  selain hakee myös javascript tiedoston 
end note
palvelin->selain: status 200, spa.js

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
HTML-sivu vastaanottaa vielä lopuksi muistiinpanot. 
musitiinpanot saatiin tekemällä palautuspyyntö data.json sisältämälle sivulle.
end note

kayttaja->selain:
note left of selain
  Käyttäjä täydentää lomake kentän omalla vapaa 
  valintaisella tekstillä ja painaa Tallenna-painiketta
end note
selain->palvelin: HTTP POST fullstack-exampleapp.herokuapp.com/notes
note left of palvelin
 
  Palvelin vastaanottaa pyynnön, sekä käyttäjän lähettämän tekstin.
  Tiedot tallentuvat json-muotoisena raakadatana data.json sisältävälle html sivulle
end note
palvelin->selain: status 302, location: fullstack-exampleapp.herokuapp.com/notes

note left of selain
Käyttäjän syöttämä teksti näkyy nyt html-sivulla. Tapahtumaketju alkaa alusta. 
end note
```
Lähes identtinen aikaisemman sekvenssikaavion kanssa, mutta eroina ovat toteutuvat javascriptit. Edellisessä sekvenssiokaaviossa käyetettiin main.js javascript tiedostoa. Single page Api:ssa javascriptinä käytettiin spa.js tiedostoa. 
## 0.6: Uusi muistiinpano

![alt text](https://i.postimg.cc/4NGCFKR7/Untitled-2.png)

```
kayttaja->selain:
note left of selain
  kayttaja toteuttaa haun selaimelle kirjoittamalla osoiteriville
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

selain->palvelin: HTTP GET fullstack-exampleapp.herokuapp.com/spa.js
note left of palvelin
  selain hakee myös javascript tiedoston 
end note
palvelin->selain: status 200, spa.js

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
HTML-sivu vastaanottaa lopuksi muistiinpanot. 
musitiinpanot saatiin tekemällä palautuspyyntö data.json sisältämälle sivulle.
end note

kayttaja->selain:
note left of selain
  Käyttäjä täydentää lomake-kentän omalla mustiinpanolla ja painaa Tallenna-painiketta

  Selain päivittyy käyttäjän lisäämällä muistiinpanolla. 
  Palvelin ei ole vielä tässä vaiheessa vastaanottanut muistiinpanoa
  
end note

selain->palvelin: POST fullstack-exampleapp.herokuapp.com/new_note_spa
note left of palvelin
  Palvelin vastaanottaa pyynnön, sekä käyttäjän lähettämän mustiinpanon.
  tiedot tallentuvat json-muotoisena raakadatana data.json sisältävälle html sivulle
end note
palvelin->selain: status 201, Created
```
