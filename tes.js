// Soal dikerjakan disini.
const animals = [
    {
      name: "dolphin",
      group: "mammal",
    },
    {
      name: "snake",
      group: "reptile",
    },
    {
      name: "baracuda",
      group: "fish",
    },
    {
      name: "cat",
      group: "mammal",
    },
    {
      name: "elephant",
      group: "mammal",
    },
    {
      name: "kakatua",
      group: "bird",
    },
    {
      name: "komodo",
      group: "reptile",
    },
  ];

// soal 1
  function getMammals(group) {
    return animals.filter(animal => animal.group === group);
  }

  const group = "mammal";
  console.log(getMammals(group));

// soal 2
  function getSortedAnimals(priority) {
    return animals.sort((a, b) => priority.indexOf(a.group) - priority.indexOf(b.group));
  }

  const priority = ['reptile', 'fish', 'mammal', 'bird'];
  console.log(getSortedAnimals(priority));

// soal no 3
  function getGroupedAnimals() {
    const groupedAnimals = {};
  
    animals.forEach(animal => {
      if (!groupedAnimals[animal.group]) {
        groupedAnimals[animal.group] = [];
      }
      groupedAnimals[animal.group].push(animal.name);
    });
  
    return groupedAnimals;
  }
  
  console.log(getGroupedAnimals());

//   soal no 4

function getMergedAndGroupedAnimals(newAnimals) {
    const mergedAnimals = [...animals, ...newAnimals];
    const groupedAnimals = {};
  
    mergedAnimals.forEach(animal => {
      if (!groupedAnimals[animal.group]) {
        groupedAnimals[animal.group] = [];
      }
  
      if (!groupedAnimals[animal.group].includes(animal.name)) {
        groupedAnimals[animal.group].push(animal.name);
      }
    });
  
    return groupedAnimals;
  }
  
  const newAnimals = [
    { name: "crocodile", group: "reptile" },
    { name: "eagle", group: "bird" },
    { name: "cat", group: "mammal" },
  ];
  
  console.log(getMergedAndGroupedAnimals(newAnimals));

//   soal no 5

function closeTheDoor() {
    const numbers = [5, 4, 3, 2, 1];
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  
    (async function() {
      for (let number of numbers) {
        await delay(1000);
        console.log(number);
      }
      console.log("close the door");
    })();
  }
  
  closeTheDoor();