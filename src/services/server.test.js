import { makeServer } from './server';

describe('makeServer', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  test('fetches educations', async () => {
    const educations = await server.createList('education', 3);

    const response = await fetch('/api/educations');
    const data = await response.json();

    expect(response.ok).toBe(true);
    expect(data.educations).toEqual(educations.map((education) => education.attrs));
  });

  test('creates a skill', async () => {
    const skillData = { name: 'JavaScript', level: 'Intermediate' };
  
    const response = await fetch('/api/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(skillData),
    });
    const data = await response.json();
  
    expect(response.ok).toBe(true);
    expect(data.skill.name).toBe(skillData.name);
    expect(data.skill.level).toBe(skillData.level);
  });

  test("seeds education data", () => {
    server.db.loadData({
      educations: [
        {
          id: 1,
          date: 2001,
          title: "Title 0",
          text: "Elit voluptate ad nostrud laboris...",
        },
        {
          id: 2,
          date: 2000,
          title: "Title 1",
          text: "Et irure culpa ad proident labore...",
        },
      ],
    });

    const educations = server.db.educations;

    expect(educations.length).toBeGreaterThan(0);
  });

  
});
