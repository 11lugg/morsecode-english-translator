let translate;

test("English to Morse code", () => {
  expect(translate("a")).toBe(".-");
  expect(translate("z")).toBe("--..");
  expect(translate("barry")).toBe("-... .- .-. .-. -.--");
});

test("Morse code to English", () => {
  expect(translate(".-")).toBe("a");
  expect(translate("--..")).toBe("z");
  expect(translate("-... .- .-. .-. -.-- / .-.. .- .-. .-. -.--")).toBe(
    "barry larry"
  );
});
