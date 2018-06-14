const fetchCurrentOpenings = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        name: 'Programmer Analyst',
        skills: 'Java, Angular, Spring, MongoDB, MySQL',
        experiance: '2 years'
      },
      {
        name: 'UI/UX Developer',
        skills: 'Photoshop, Illustrator, HTML, CSS',
        experiance: '3 years'
      },
      {
        name: 'Assistant Business Analyst',
        skills: 'Technical knowledge, Good communication skills',
        experiance: '1 year'
      },
    ]);
  }, 500);
});

export default {
  fetchCurrentOpenings,
};
