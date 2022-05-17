import { birthYear } from "./index.js";

describe("Birthyear tests", () => {
  it("should return the correct birthyear", () => {
    // given
    const age = 32;
    const year = 2035;

    // when
    const output = birthYear(age, year);

    // then
    expect(output).toEqual(year - age);
  });

  it.each([
    [24, 2022, 1998],
    [22, 2012, 1990],
    [14, 2023, 2009],
  ])("should return the correct birthyear", (age, year, expectedOutput) => {
    const output = birthYear(age, year);
    expect(output).toEqual(expectedOutput);
  });
});
