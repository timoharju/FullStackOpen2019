# Osa 0 

## 0.4: Muistiinpanojen sivu
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
## 0.5: Muistiinpanojen sivu



## 0.5: Single Page App


