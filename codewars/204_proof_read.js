function proofread(str) {
  str = str.toLowerCase();
  str = str.replace(/ie/g, "ei");

  str = str
    .split(". ")
    .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
    .join(". ");

  return str;
}

console.log(proofread("He haD iEght ShOTs of CAffIEne.")); //Output: "He had eight shots of caffeine."
console.log(
  proofread(
    "THe neIghBour's ceiLing FEll on His Head. The WiEght of It crusHed him To thE gROuNd."
  )
);
console.log(
  proofread(
    "MargArEt cAn’t eVen concIEve of foRegOing the pARty to finisH her paPEr."
  )
);
console.log(
  proofread(
    "PetEr Was Not Sure of WHAt he WAs sEIEng. HE had To RIEn in HIs SHock."
  )
);
console.log(proofread("She has wEiGht issues with hEiR."));
