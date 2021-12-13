import { IProject } from "./../Types/PortfolioDataTypes";
import {
  filterProjects,
  getFilterValues,
  sortProjects,
} from "./ProjectsService";

const projects = [
  {
    type: "Web App",
    technologies: {
      frontend: ["React", "JavaScript"],
      backend: [],
      devops: ["firebase"],
    },
    dateStarted: new Date("2020/05/01"),
  },
  {
    type: "Web App",
    technologies: {
      frontend: ["React", "JavaScript", "TypeScript"],
      backend: [],
      devops: ["firebase"],
    },
    dateStarted: new Date("2000/05/01"),
  },
  {
    type: "Bot",
    technologies: {
      frontend: [],
      backend: ["Python3", "PostgreSQL"],
      devops: [],
    },
    dateStarted: new Date("2030/05/01"),
  },
];

describe("Projects service", () => {
  describe("Filtration", () => {
    it("Filters extraction", () => {
      const resultFilters = getFilterValues(projects as IProject[]);
      const resultFiltersValues = resultFilters.map((filterValueGroup) =>
        filterValueGroup.values.map((value) => value.displayValue)
      );

      const expectedFilters = [
        ["Bot", "Web App"],
        ["JavaScript", "React", "TypeScript"],
        ["PostgreSQL", "Python3"],
        ["firebase"],
      ];

      expect(resultFiltersValues).toEqual(expectedFilters);
    });

    it("Projects type filtration", () => {
      const filterBy = "Web App";
      const filtratedProjects = filterProjects(
        projects as IProject[],
        filterBy
      );

      expect(filterProjects.length).toEqual(2);
      expect(filtratedProjects[0].type).toEqual(filterBy);
    });

    it("Projects front-end filtration", () => {
      const filterBy = "React";
      const filtratedProjects = filterProjects(
        projects as IProject[],
        filterBy
      );

      expect(filtratedProjects.length).toEqual(2);
      expect(filtratedProjects[0].technologies.frontend).toContain(filterBy);
    });

    it("Projects back-end filtration", () => {
      const filterBy = "Python3";
      const filtratedProjects = filterProjects(
        projects as IProject[],
        filterBy
      );

      expect(filtratedProjects.length).toEqual(1);
      expect(filtratedProjects[0].technologies.backend).toContain(filterBy);
    });

    it("Projects dev-ops filtration", () => {
      const filterBy = "firebase";
      const filtratedProjects = filterProjects(
        projects as IProject[],
        filterBy
      );

      expect(filtratedProjects.length).toEqual(2);
      expect(filtratedProjects[0].technologies.devops).toContain(filterBy);
    });
  });

  describe("Sorting", () => {
    it("Sorts by ascending order", () => {
      const sortedProjects = sortProjects(
        projects as IProject[],
        "dateStarted"
      );

      expect(sortedProjects[0]).toEqual(projects[1]);
    });

    it("Sorts by descending order", () => {
      const sortedProjects = sortProjects(
        projects as IProject[],
        "-dateStarted"
      );

      expect(sortedProjects[0]).toEqual(projects[2]);
    });
  });
});
