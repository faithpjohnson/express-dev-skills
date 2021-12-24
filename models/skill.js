const skills = [
    { 
        id: 1,
        name: 'problem solving', 
    },
    { 
        id: 2,
        name: 'teamwork', 
    },
    { 
        id: 3,
        name: 'attention to detail', 
    },
    { 
        id: 4,
        name: 'time management'
    }
];

module.exports = {
    getAll, 
    getOne, 
    create,
    deleteOne
};

function getAll() {
    console.log(skills);
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
  