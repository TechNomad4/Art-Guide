let randomFact = "Sorry! No random fact for today!";

$.getJSON("https://uselessfacts.jsph.pl/random.json?language=en", function(
  randFact
) {
  randomFact = randFact.text;
  $("#backText").append(randomFact);
});
