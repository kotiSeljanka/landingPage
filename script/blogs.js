const blogs = [[{"value":"Tuplasti Rakkautta","type":"heading"},{"value":"Syksyisenä perjantai-iltana 14.10. pieneen perheeseemme on saapunut uusi pieni jäsen! Pitkään odotettu ja toivottu, se on vihdoin keskenämme. Pikkuveli, halinalle, söpö möhkäle, mutta ennen kaikkea - rakas vauva. Sen uusi perhe on suuri, mutta täynnä tilaa ja lempeä koko elämäksi eteenpäin. Saanko esitellä: Maastomakkaran Lenni, eli Pepsi!","type":"paragraph"},{"value":"pep1.jpeg","type":"image"},{"value":"Tänään kotimme on iloa täynnä! Iloitsemme yhteisesti Pepsin ja itsemme puolesta, perheemme kasvusta, mutta myös minä hiljaa ja itsekseni iloitsen omaa kantani. Pepsi on paitsi uusi suloisuuden ja naurujen lähde, myös uusi symboli minun ja Hannan rakkaudesta. Tämän ihanan tytön kanssa olen saanut kunnian jakaa elämäni kohta viitisen vuotta, ja toivottavasti myös niin pitkään kuin vuosia on olemassa. Kiitos sinulle, Pikkulumeni, tästä perheestä, elämästä, ja sinusta <3","type":"paragraph"},{"value":"Mutta riittä sokeria!! Tämän viikon sankari on pitkäkuonoinen, sileäkarvainen ja pallukkamasuinen!","type":"paragraph"},{"value":"Kun koitti Pepsin hakupäivä, monia tunteita pyöri sisällämme. Ennen kaikkea jännitimme Pepsin sopeutumisen puolesta. Halusimme, että sen ja Dion ensitapaaminen olisi täydellinen, jotta yhteinen elämä lähtisi helpommin käyntiin. Oma kokemattomuus kuitenkin ilmoitti itsestään koko hakumatkan ajan. Pelkäsimme tilanteen karkavan käsistä, esimerkiksi Dion innostuessa liikaa. Hannan mukaan pentukoirat voi herkästi ruveta huutamaan säikähtäessä, vaikkei tilanne olisi oikeasti vaarallinen. Sehän olisi täydellinen ensitapaaminen: huutoa ja villiä. Jäisi varmasti todella pitkäksi aikaa mieleen, eikä parhaalla tavalla. Pienempinä huolina oli myös Pepsin selviytyminen matkasta. Tulisko hänelle koti-ikävä? Rupeaisko hän itkemään kesken matkan? Kilometrejä Suonenjoelta Joensuuhun oli kuitenkin reilut puolitoistasataa, eikä hermot työviikon jälkeen jaksaisi kestää eikä sydän jaksaisi kuunnella kaikkea sitä surua. Pelkäsimme tätä vähemmän, koska aikanaan Dion kohdalla homma luisi kuin voideltu suksi. Dio oli koko matkan Hannan sylissä ja katsoi ikkunasta ulos kun tuli tylsää. ","type":"paragraph"},{"value":"Oli kuitenkin myös hyvää jännitystä, ja hyvähän koko päivästä lopulta tuli. Matka sujui hiljaa, ensitutustuminen kävi hyvin. Tutustumishetki oli ajateltu läpi etukäteen ja paperille kirjoitettuna muistutti erikoisjoukkojen laatimaa operaatiosuunnitelmaa. Hanna oli Pepsin turvapersoonana, minulle taas jäi Dion kesyttäjän rooli. Pidin alussa Dioa hihnassa kauempana Mama-Vauva parista. Aiemman kokemuksemme mukaan, Dion suhteet uusiin koiriin meni aina ensimmäisen nuuhkimisen jälkeen, jos toinen koirista sattuisi tekemään liian äkillisen liikkeen. Sitä seurasi vastareaktio, ja vastareaktio vastareaktioon, ja sitten olttiin jo haukkumassa toisilleen kurkkukipuun. Siksi halusimme antaa Dion lähestyä Pepsiä hiljattain. Operaatio oli onnistunut, kuten jo mainitsinkin, eikä tappelua syntynyt.","type":"paragraph"},{"value":"pep2.jpeg","type":"image"},{"value":"Tästä Se Alkaa","type":"heading"},{"value":"Ensimmäinen ilta meni toisiimme tutustumisessa. Kerron seuraavassa postauksessa enemmän, mutta nyt täytyy lopetella. Kello on kohta yhdeksän, ja olen käyttänyt tämän blogisivun suunnittelun melkein koko päivän. Tulossa on kuitenkin muutakin kuin \"kaikki oli hyvin elämän loppuun saakka\". Seuraavaksi kerron ensimmäisestä Dio vs. Pepsi tappelusta, Pepsin ihmestyttävistä ominaisuuksista ja mustasukkaisuudesta koiran tapaan.","type":"paragraph"},{"value":"Lopuksi vielä muutama kuva tasapainottamaan tätä seinää tekstiä.","type":"paragraph"},{"value":"pep3.jpeg","type":"image"},{"value":"pep4.jpeg","type":"image"},{"value":"Ja vielä kerran: Pepsi, tervetuloa kotiin! Täällä sinä tulet olemaan rakastettu. Tulet viettämään hyviä koiraelämän hetkiä kuten vanhempiesi, myös koko meidän suuren perheemme parissa. Vaikket sinä vielä tunnekkaan heistä ketään, he kaikki jo rakastavat sinua. Onnea matkaan, ja hyvää elämää! :)","type":"paragraph"},{"value":"- Aleksei, 16.10.2022","type":"paragraph"}]]
const blogContainer = document.getElementById('blogContainer');
let pageCurrent = 0;
const pageMax = Math.floor(blogs.length / 5);

function fillMaterial() {
  let material = []
  for (let i = pageCurrent * 4; i < pageCurrent * 4 + 5; i++) {
    if (blogs[i] === undefined) {
      break;
    }
    material.push(blogs[i])
  }
  return material;
}

function convert(data) {
  let stringFinal = '<div class="blogBlock">\n';
  data.forEach( (obj) => {
      const value = obj["value"];
      switch (obj["type"]) {
          case 'image':
              stringFinal += `\t<img src='../images/blog/${value}'>\n`
              break; 
          case 'heading':
              stringFinal += `\t<h3>${value}</h3>\n`
              break;
          case 'paragraph':
              stringFinal += `\t<p>${value}</p>\n`
              break;
      }
  })
  return stringFinal + "</div>\n";
}

function fetchBlogs() {
  let material = fillMaterial();
  let stringFinal = '';
  material.forEach( (blog) => {
    stringFinal += convert(blog);
  })
  const stringEnd = `</div>\n<div class="blogBlock" id="blogArrows">
  \t<button onClick="prevPage()" id="arrowLeft" class="arrowMain"><</button>
  \t<button onClick="nextPage()" id="arrowRight" class="arrowMain">></button>
  </div>
  `
  stringFinal += stringEnd;
  blogContainer.innerHTML = stringFinal;
}

function nextPage() {
  if (pageCurrent + 1 > pageMax) {
    console.log("No more pages!");
    return;
  }
  pageCurrent++;
  fetchBlogs();
}

function prevPage() {
  if (pageCurrent - 1 < 0) {
    console.log("No more pages!");
    return;
  }
  pageCurrent--;
  fetchBlogs();
}

fetchBlogs()