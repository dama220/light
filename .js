function calculateFixtures() {
  const areaType = document.getElementById('area-type').value;
  const length = parseFloat(document.getElementById('length').value);
  const width = parseFloat(document.getElementById('width').value);
  const wattage = parseInt(document.getElementById('wattage').value);
  const luxTable = {
    "living-room": 150,
    "bedroom": 100,
    "office": 300,
    "kitchen": 300,
    "bathroom": 200
  };
  const requiredLux = luxTable[areaType];
  const area = length * width;
  const totalLumensRequired = requiredLux * area;
  const lumensPerFixture = wattage * 100;
  const fixturesNeeded = Math.ceil(totalLumensRequired / lumensPerFixture);
  document.getElementById('result').textContent =
    `You need ${fixturesNeeded} fixtures of ${wattage}W (${lumensPerFixture} lumens each) for proper lighting.`;
}
