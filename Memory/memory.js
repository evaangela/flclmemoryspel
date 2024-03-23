const spel = document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  kaartGenerator(event);
  randomize(event);
});

const section = document.querySelector("section");

const krijgData = () => [
  { imgSrc: "images/canti.png", name: "canti" },
  { imgSrc: "images/naota.png", name: "naota" },
  { imgSrc: "images/takkun.png", name: "takkun" },
  { imgSrc: "images/kamon.png", name: "kamon" },
  { imgSrc: "images/mamimi.png", name: "mamimi" },
  { imgSrc: "images/haruko.png", name: "haruko" },
  { imgSrc: "images/canti.png", name: "canti" },
  { imgSrc: "images/naota.png", name: "naota" },
  { imgSrc: "images/takkun.png", name: "takkun" },
  { imgSrc: "images/kamon.png", name: "kamon" },
  { imgSrc: "images/mamimi.png", name: "mamimi" },
  { imgSrc: "images/haruko.png", name: "haruko" },
]

const randomize = () => {
  const kaartData = krijgData();
  kaartData.sort(() => Math.random() - 0.2);
  console.log(kaartData);
  return kaartData;
};

const kaartGenerator = () => {
  const kaartData = randomize();
  kaartData.forEach(item => {
    console.log(kaartData);
  });

  kaartData.forEach((item) => {
    const kaart = document.createElement("div");
    const voor = document.createElement("img");
    const achter = document.createElement("img");
    kaart.classList = "kaart";
    voor.classList = "voor";
    achter.classList = "achter";

    section.appendChild(kaart);
    kaart.appendChild(voor);
    kaart.appendChild(achter);

    voor.src = item.imgSrc;
    achter.src = `images/achterkant.jpeg`;

    kaart.setAttribute("naam", item.name);

    kaart.addEventListener("click", (event) => {
      kaart.classList.toggle("toggleKaart");
      voor.classList.toggle("toggleKaart");
      checkKaarten(event);
    });
  });
};

const checkKaarten = (event) => {
  console.log(event);
  const geklikteKaart = event.target;
  const gedraaideKaarten = document.querySelectorAll(".gedraaide");
  console.log(geklikteKaart);
  geklikteKaart.classList.add("gedraaide");

  if (gedraaideKaarten.length === 2) {
    if (gedraaideKaarten[0].getAttribute("naam") ===
      gedraaideKaarten[1].getAttribute("naam")
    ) {
      console.log("juist");
      gedraaideKaarten.forEach((kaart) => {
        kaart.classList.remove("gedraaide");
        kaart.style.pointerEvents = "none";
      });
    } else {
      console.log("fout");
      gedraaideKaarten.forEach(kaart => {
        kaart.classList.remove("gedraaide");
        kaart.classList.remove("toggleKaart")
      });
    }
  }
};