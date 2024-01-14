// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(mockUpStrand());

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let baseIndex = Math.floor(Math.random() * 14);
      //console.log(this.dna[baseIndex]);
      let newBase = returnRandBase();
      if (this.dna[baseIndex] !== newBase) {
        this.dna[baseIndex] = newBase;
        /*return `New base is ${newBase}. Index of the mutated base is ${baseIndex}. So new dna is ${this.dna}.`;*/
      }
      return this.dna;
    },
    compareDNA (pAeqor) {
      let count = 0;
      for (let i=0; i<this.dna.length; i++) {
          if (this.dna[i] === pAeqor.dna[i]) {
            count++;
          }
      }
      let percentage = (count / 15) * 100;
      return 'Specimen #1 and specimen #2 have ' + percentage.toFixed(2) + '% in common.';
    },
    willLikelySurvive() {
      let survivalCount = 0;
      for (i=0; i<this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          survivalCount++;
        }
      }
      //return survivalCount;
      if ((survivalCount / 15)*100 > 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand () {
      let newStrand = [];
      for (i=0; i<this.dna.length; i++) {
        if (this.dna[i] === 'A') {
          newStrand.push('T');
        } else if (this.dna[i] === 'T') {
          newStrand.push('A');
        } else if (this.dna[i] === 'C') {
          newStrand.push('G');
        } else {
          newStrand.push('C');
        }
      }
      return newStrand;
    }
  };
};

let organism1 = pAequorFactory(1, [
  "T",
  "C",
  "G",
  "A",
  "A",
  "C",
  "T",
  "C",
  "A",
  "C",
  "C",
  "C",
  "C",
  "C",
  "G",
]);
//console.log(organism1.complementStrand());

//console.log(organism1.mutate());
let organism2 = pAequorFactory(2, [
  "A",
  "A",
  "C",
  "A",
  "A",
  "A",
  "T",
  "A",
  "A",
  "C",
  "A",
  "A",
  "A",
  "T",
  "T",
]);
//console.log(organism2.willLikelySurvive());
//console.log(organism2.compareDNA(organism1));

let specimenSurvive = [];
let idCount = 1;

while (specimenSurvive.length < 30) {
  let newOrg = pAequorFactory(idCount, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    specimenSurvive.push(newOrg);
  }
  idCount++;
}

//console.log(specimenSurvive);
