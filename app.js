const LEVELS = [
  {
    id: "math3",
    label: "Math 3 readiness",
    source: "Math 3 placement test",
    directions: "Whole-number facts, place value, simple geometry, fractions, and story problems. No calculator.",
    passText: "Aim for at least 70% overall, with extra review on any missed topic.",
    generators: [
      () => numericQuestion("Subtract the whole numbers.", "10 - 3", 7, "Start at 10 and count back 3 steps: 9, 8, 7."),
      () => numericQuestion("Add the whole numbers.", "8 + 6", 14, "Make a ten: 8 needs 2, so split 6 into 2 + 4. 10 + 4 = 14."),
      () => textQuestion("Write 386 as hundreds, tens, and ones.", "3 hundreds, 8 tens, 6 ones", ["3 hundreds 8 tens 6 ones", "3 hundreds, 8 tens, and 6 ones"], "The digit 3 is in the hundreds place, 8 is in the tens place, and 6 is in the ones place."),
      () => textQuestion("List these numbers from smallest to largest: 41, 14, 34.", "14, 34, 41", ["14 34 41", "14,34,41"], "Compare tens first: 14 has 1 ten, 34 has 3 tens, and 41 has 4 tens."),
      () => choiceQuestion("Is 18 odd or even?", ["Odd", "Even"], "Even", "A number is even when it can be split into pairs with none left over. 18 ends in 8, so it is even."),
      () => numericQuestion("How many sides does a rectangle have?", "4", 4, "A rectangle is a four-sided polygon with four right angles."),
      () => numericQuestion("Find the missing number.", "___ + 7 = 12", 5, "Use subtraction to undo addition: 12 - 7 = 5."),
      () => numericQuestion("Multiply.", "4 × 3", 12, "4 × 3 means 4 groups of 3: 3 + 3 + 3 + 3 = 12."),
      () => textQuestion("What fraction is one shaded part out of four equal parts?", "1/4", ["one fourth", "one-fourth", "1 over 4"], "The denominator counts all equal parts (4), and the numerator counts shaded parts (1)."),
      () => numericQuestion("A student has 5 pencils and gets 6 more. How many pencils now?", "11", 11, "Add the starting amount and the new amount: 5 + 6 = 11."),
    ],
  },
  {
    id: "math4",
    label: "Math 4 readiness",
    source: "Math 4 placement test",
    directions: "Place value, long addition/subtraction, multiplication facts, fractions, comparisons, and patterns.",
    passText: "A solid score is about 70% or higher; review regrouping and multiplication facts if missed.",
    generators: [
      () => choiceQuestion("What does the 7 stand for in 7,482?", ["7", "70", "700", "7,000"], "7,000", "The 7 is in the thousands place, so its value is 7,000."),
      () => numericQuestion("Write six hundred forty-two using digits.", "642", 642, "Six hundred is 600, forty is 40, and two is 2. 600 + 40 + 2 = 642."),
      () => numericQuestion("Finish the expanded form: 500 + ___ + 9 = 579", "70", 70, "579 has 7 tens, and 7 tens are worth 70."),
      () => numericQuestion("Add using regrouping.", "248 + 376", 624, "Ones: 8 + 6 = 14, write 4 carry 1. Tens: 1 + 4 + 7 = 12, write 2 carry 1. Hundreds: 1 + 2 + 3 = 6."),
      () => numericQuestion("Subtract using regrouping.", "904 - 268", 636, "Regroup across the zero: 14 - 8 = 6 ones, 9 - 6 = 3 tens, and 8 - 2 = 6 hundreds."),
      () => numericQuestion("Multiply.", "7 × 8", 56, "Use a known fact: 7 × 8 = 56. You can also double 7 × 4 = 28 to get 56."),
      () => textQuestion("Order from greatest to least: 68, 82, 26.", "82, 68, 26", ["82 68 26", "82,68,26"], "Compare tens digits: 8 tens is greatest, then 6 tens, then 2 tens."),
      () => textQuestion("What fraction is 3 selected items out of 11 total items?", "3/11", ["3 over 11", "three elevenths"], "The selected amount is the numerator (3), and the total amount is the denominator (11)."),
      () => choiceQuestion("Which symbol makes this true? 967 ___ 679", ["<", ">", "="], ">", "Compare hundreds: 967 has 9 hundreds and 679 has 6 hundreds, so 967 is greater."),
      () => numericQuestion("Find the next number in the pattern: 9, 12, 15, 18, ___", "21", 21, "Each term increases by 3, so 18 + 3 = 21."),
    ],
  },
  {
    id: "math5",
    label: "Math 5 readiness",
    source: "Math 5 placement test",
    directions: "Multi-digit operations, fractions, decimals, measurement, and practical word problems.",
    passText: "Students should be comfortable with regrouping, multiplication, division, and basic fractions.",
    generators: [
      () => numericQuestion("Add.", "3,487 + 2,956", 6443, "Add by columns and regroup: ones 13, tens 13, hundreds 14, thousands 6, giving 6,443."),
      () => numericQuestion("Subtract.", "5,002 - 1,879", 3123, "Regroup through zeros: 12 - 9 = 3, 9 - 7 = 2, 9 - 8 = 1, and 4 - 1 = 3."),
      () => numericQuestion("Multiply.", "46 × 7", 322, "7 × 6 = 42, write 2 carry 4. 7 × 4 tens = 28 tens, plus 4 tens = 32 tens, so 322."),
      () => numericQuestion("Divide.", "72 ÷ 9", 8, "Division asks how many groups of 9 fit in 72. Since 9 × 8 = 72, the quotient is 8."),
      () => textQuestion("Simplify the fraction 6/8.", "3/4", ["3 over 4", "three fourths", "three-quarters"], "Divide numerator and denominator by their greatest common factor, 2: 6 ÷ 2 = 3 and 8 ÷ 2 = 4."),
      () => numericQuestion("Convert dollars to cents.", "$4.35 = ___ cents", 435, "Each dollar is 100 cents, so $4 is 400 cents. Add 35 cents for 435 cents."),
      () => textQuestion("Compare the decimals: 0.7 ___ 0.65", ">", ["greater", "is greater than"], "Write 0.7 as 0.70. Since 70 hundredths is greater than 65 hundredths, 0.7 > 0.65."),
      () => numericQuestion("Find the perimeter of a rectangle with sides 8 cm and 5 cm.", "26", 26, "Perimeter adds all sides: 8 + 5 + 8 + 5 = 26 cm."),
      () => numericQuestion("A box has 6 rows of 14 markers. How many markers are there?", "84", 84, "Rows of equal size call for multiplication: 6 × 14 = 84."),
      () => numericQuestion("Round 4,681 to the nearest hundred.", "4700", 4700, "Look at the tens digit. In 4,681 the tens digit is 8, so round 4,600 up to 4,700."),
    ],
  },
  {
    id: "math6",
    label: "Math 6 readiness",
    source: "Math 6 placement test",
    directions: "Fluency with whole numbers, fractions, decimals, percents, basic geometry, and word problems.",
    passText: "Review any weak arithmetic topic before moving into a sixth-grade course.",
    generators: [
      () => numericQuestion("Divide.", "4,536 ÷ 6", 756, "Divide each place from left to right: 45 hundreds ÷ 6 = 7 hundreds remainder 3, bring down 3 to make 33 tens, then bring down 6 to finish 756."),
      () => textQuestion("Add: 3/4 + 2/3", "17/12", ["1 5/12", "1 and 5/12"], "Use a common denominator of 12. 3/4 = 9/12 and 2/3 = 8/12, so the sum is 17/12 or 1 5/12."),
      () => textQuestion("Subtract: 5.2 - 3.78", "1.42", ["1.42"], "Line up decimal points and write 5.20 - 3.78. Regroup to get 1.42."),
      () => numericQuestion("Find 10% of 360.", "36", 36, "Ten percent is one tenth, so divide 360 by 10 to get 36."),
      () => numericQuestion("Find the mean of 8, 10, and 12.", "10", 10, "Add the values to get 30, then divide by 3 values: 30 ÷ 3 = 10."),
      () => numericQuestion("Find the area of a rectangle that is 12 ft by 9 ft.", "108", 108, "Rectangle area is length times width: 12 × 9 = 108 square feet."),
      () => textQuestion("Simplify: 18/24", "3/4", ["3 over 4", "three fourths"], "Divide numerator and denominator by their greatest common factor, 6: 18/24 = 3/4."),
      () => textQuestion("Write 0.08 as a fraction.", "2/25", ["8/100", "8 over 100", "2 over 25"], "0.08 means 8 hundredths, or 8/100. Simplify by dividing by 4 to get 2/25."),
      () => numericQuestion("A recipe uses 3 cups of flour per batch. How many cups for 7 batches?", "21", 21, "Multiply cups per batch by batches: 3 × 7 = 21."),
      () => choiceQuestion("Which number is prime?", ["21", "27", "29", "33"], "29", "A prime number has exactly two factors, 1 and itself. 29 is not divisible by 2, 3, or 5."),
    ],
  },
  {
    id: "math7",
    label: "Math 7 readiness",
    source: "Math 7 placement test",
    directions: "Ratios, percent, integers, rational numbers, expressions, equations, and geometry applications.",
    passText: "Students should be ready when arithmetic is accurate and multi-step word problems are manageable.",
    generators: [
      () => numericQuestion("Evaluate.", "-8 - 5", -13, "Subtracting 5 from -8 moves 5 more units left on the number line, landing at -13."),
      () => textQuestion("Multiply: 2/5 × 3/4", "3/10", ["3 over 10"], "Multiply numerators and denominators: 2 × 3 = 6 and 5 × 4 = 20. Simplify 6/20 to 3/10."),
      () => textQuestion("Divide: 1/2 ÷ 3/8", "4/3", ["1 1/3", "1 and 1/3"], "Keep 1/2, change division to multiplication, and flip 3/8 to 8/3. Then 1/2 × 8/3 = 8/6 = 4/3."),
      () => numericQuestion("A $45 item is discounted 20%. What is the discount amount?", "9", 9, "20% is 0.20. 0.20 × 45 = 9."),
      () => textQuestion("Solve: x - 14 = 31", "45", ["x = 45"], "Add 14 to both sides: x = 31 + 14 = 45."),
      () => textQuestion("Simplify: 6a - 2a + 9", "4a + 9", ["4a+9"], "Combine like terms 6a and -2a to get 4a. The constant 9 stays separate."),
      () => numericQuestion("Find the circumference of a circle with diameter 10 using π = 3.14.", "31.4", 31.4, "Circumference is π times diameter: 3.14 × 10 = 31.4."),
      () => numericQuestion("If 4 notebooks cost $12, what is the unit price?", "3", 3, "Divide total cost by number of notebooks: 12 ÷ 4 = 3 dollars each."),
      () => choiceQuestion("Which is the greatest?", ["0.6", "2/3", "58%", "0.61"], "2/3", "Convert to decimals: 2/3 is about 0.667, which is greater than 0.61, 0.60, and 0.58."),
      () => numericQuestion("Find the volume of a rectangular prism: 5 by 4 by 3.", "60", 60, "Volume is length × width × height: 5 × 4 × 3 = 60 cubic units."),
    ],
  },
  {
    id: "prealgebra",
    label: "Pre-Algebra readiness",
    source: "Pre-Algebra placement test",
    directions: "Integer operations, fractions, decimals, ratios, exponents, equations, and geometry basics.",
    passText: "Strong readiness means accurate arithmetic plus clear equation-solving steps.",
    generators: [
      () => numericQuestion("Evaluate.", "-7 + 12", 5, "Start at -7 and move 12 units right on the number line. You land at 5."),
      () => numericQuestion("Evaluate.", "3² + 4²", 25, "Square first: 3² = 9 and 4² = 16. Then add 9 + 16 = 25."),
      () => textQuestion("Simplify: 2/3 + 1/6", "5/6", ["5 over 6", "five sixths"], "Use a common denominator of 6. 2/3 = 4/6, and 4/6 + 1/6 = 5/6."),
      () => textQuestion("Solve for x: x + 9 = 23", "14", ["x = 14"], "Subtract 9 from both sides: x = 23 - 9 = 14."),
      () => textQuestion("Solve for y: 4y = 36", "9", ["y = 9"], "Divide both sides by 4: y = 36 ÷ 4 = 9."),
      () => textQuestion("Write 0.35 as a simplified fraction.", "7/20", ["7 over 20", "seven twentieths"], "0.35 = 35/100. Divide numerator and denominator by 5 to get 7/20."),
      () => numericQuestion("Find 25% of 80.", "20", 20, "25% is one fourth. One fourth of 80 is 80 ÷ 4 = 20."),
      () => textQuestion("A ratio is 3:5. If the first quantity is 12, what is the second?", "20", ["20"], "The scale factor from 3 to 12 is 4, so multiply 5 by 4 to get 20."),
      () => numericQuestion("Find the area of a triangle with base 10 and height 6.", "30", 30, "Triangle area is one half times base times height: (10 × 6) ÷ 2 = 30."),
      () => choiceQuestion("Which is equivalent to 5a + 2a?", ["7a", "10a", "7a²", "5a + 2"], "7a", "Like terms have the same variable part. Add the coefficients: 5 + 2 = 7, so 7a."),
    ],
  },
  {
    id: "algebra1",
    label: "Algebra 1 readiness",
    source: "Algebra 1 placement test",
    directions: "Signed numbers, proportional reasoning, expressions, equations, inequalities, graphing, and linear patterns.",
    passText: "Focus review on any missed equation, graphing, or fraction operations before starting Algebra 1.",
    generators: [
      () => textQuestion("Simplify: 3(x + 4) - 2x", "x + 12", ["1x+12", "x+12"], "Distribute first: 3x + 12 - 2x. Combine like terms: x + 12."),
      () => textQuestion("Solve: 2x - 5 = 17", "11", ["x = 11"], "Add 5 to both sides to get 2x = 22. Divide by 2, so x = 11."),
      () => textQuestion("Solve: x/3 + 4 = 10", "18", ["x = 18"], "Subtract 4 from both sides to get x/3 = 6. Multiply both sides by 3, so x = 18."),
      () => choiceQuestion("What is the slope of a line that rises 6 and runs 3?", ["2", "3", "6", "1/2"], "2", "Slope is rise divided by run: 6 ÷ 3 = 2."),
      () => textQuestion("Find the y-intercept of y = 4x - 7.", "-7", ["(0,-7)", "0,-7"], "Slope-intercept form is y = mx + b. The y-intercept is b, which is -7."),
      () => textQuestion("Solve the proportion: 5/8 = x/24", "15", ["x = 15"], "24 is 3 times 8, so multiply 5 by 3. x = 15."),
      () => textQuestion("Factor: x² + 7x + 12", "(x + 3)(x + 4)", ["(x+3)(x+4)", "(x + 4)(x + 3)", "(x+4)(x+3)"], "Find two numbers that multiply to 12 and add to 7: 3 and 4."),
      () => textQuestion("Evaluate 2a² when a = -3.", "18", ["18"], "Substitute -3 for a: 2(-3)². Square before multiplying: (-3)² = 9, and 2 × 9 = 18."),
      () => choiceQuestion("Which inequality matches 'at least 12'?", ["x > 12", "x ≥ 12", "x < 12", "x ≤ 12"], "x ≥ 12", "At least means the value can equal 12 or be greater than 12."),
      () => textQuestion("Find the next term: 4, 9, 14, 19, ___", "24", ["24"], "The pattern adds 5 each time. 19 + 5 = 24."),
    ],
  },
  {
    id: "geometry",
    label: "Geometry readiness",
    source: "Geometry placement test",
    directions: "Algebra review, angle relationships, perimeter, area, volume, coordinate geometry, and reasoning.",
    passText: "Geometry readiness requires accurate equation solving and comfort with formulas.",
    generators: [
      () => numericQuestion("Find the missing angle in a triangle with angles 42° and 68°.", "70", 70, "Triangle angles sum to 180°. 180 - 42 - 68 = 70."),
      () => choiceQuestion("Parallel lines cut by a transversal create equal ___ angles.", ["corresponding", "random", "supplementary only", "vertical only"], "corresponding", "Corresponding angles are congruent when the lines are parallel."),
      () => numericQuestion("Find the area of a trapezoid with bases 6 and 10 and height 5.", "40", 40, "Trapezoid area is one half the sum of the bases times height: (6 + 10) × 5 ÷ 2 = 40."),
      () => numericQuestion("Use the Pythagorean theorem: legs 6 and 8, hypotenuse?", "10", 10, "6² + 8² = 36 + 64 = 100, and the square root of 100 is 10."),
      () => textQuestion("Find the midpoint of (2, 4) and (8, 10).", "(5, 7)", ["5,7", "(5,7)"], "Average the x-values and y-values: (2 + 8)/2 = 5 and (4 + 10)/2 = 7."),
      () => textQuestion("Solve: 3x + 2 = 20", "6", ["x = 6"], "Subtract 2 to get 3x = 18, then divide by 3."),
      () => numericQuestion("Find the perimeter of a regular hexagon with side length 9.", "54", 54, "A hexagon has 6 sides. 6 × 9 = 54."),
      () => choiceQuestion("A 90° angle is called", ["acute", "right", "obtuse", "straight"], "right", "A right angle measures exactly 90°."),
      () => numericQuestion("Find the slope through (1, 2) and (5, 14).", "3", 3, "Slope is change in y over change in x: (14 - 2)/(5 - 1) = 12/4 = 3."),
      () => numericQuestion("Find the volume of a cylinder with r = 3, h = 5, using π = 3.14.", "141.3", 141.3, "Cylinder volume is πr²h: 3.14 × 3² × 5 = 3.14 × 45 = 141.3."),
    ],
  },
  {
    id: "algebra2",
    label: "Algebra 2 readiness",
    source: "Algebra 2 placement test",
    directions: "Linear equations, systems, factoring, radicals, quadratics, functions, and exponents.",
    passText: "Students should be confident with Algebra 1 skills before advancing.",
    generators: [
      () => textQuestion("Solve the system: x + y = 9 and x - y = 3. What is x?", "6", ["x = 6"], "Add the equations to eliminate y: 2x = 12, so x = 6."),
      () => textQuestion("Factor: x² - 9", "(x - 3)(x + 3)", ["(x+3)(x-3)", "(x - 3)(x + 3)"], "This is a difference of squares: a² - b² = (a - b)(a + b)."),
      () => textQuestion("Simplify: √50", "5√2", ["5 sqrt 2", "5√2"], "Factor 50 as 25 × 2. The square root of 25 is 5, so √50 = 5√2."),
      () => textQuestion("Solve: x² = 49", "±7", ["7 and -7", "+/-7", "-7, 7"], "Both 7² and (-7)² equal 49, so there are two solutions."),
      () => choiceQuestion("The vertex form of a quadratic is", ["y = mx + b", "y = a(x - h)² + k", "y = abˣ", "y = x/a + b"], "y = a(x - h)² + k", "Vertex form shows the vertex at (h, k)."),
      () => textQuestion("Simplify: a³ · a⁵", "a^8", ["a⁸", "a8"], "When multiplying powers with the same base, add exponents: 3 + 5 = 8."),
      () => textQuestion("Find f(4) when f(x) = 2x² - 1.", "31", ["31"], "Substitute 4: 2(4²) - 1 = 2(16) - 1 = 31."),
      () => textQuestion("Solve: |x| = 12", "±12", ["12 and -12", "+/-12", "-12, 12"], "Absolute value is distance from 0, so both 12 and -12 are 12 units away."),
      () => numericQuestion("What is the slope of 6x + 2y = 10?", "-3", -3, "Solve for y: 2y = -6x + 10, so y = -3x + 5. The slope is -3."),
      () => textQuestion("Simplify: (x²y)(3xy³)", "3x^3y^4", ["3x³y⁴", "3x^3 y^4"], "Multiply coefficients and add exponents for like bases: x²·x = x³ and y·y³ = y⁴."),
    ],
  },
  {
    id: "precalculus",
    label: "Pre-Calculus readiness",
    source: "Pre-Calculus placement test",
    directions: "Advanced algebra, functions, trigonometry, logarithms, exponentials, and analytic geometry.",
    passText: "Students should be fluent with Algebra 2 before beginning Pre-Calculus.",
    generators: [
      () => textQuestion("Find the inverse of f(x) = 2x + 5.", "(x - 5)/2", ["f^-1(x)=(x-5)/2", "(x-5)/2"], "Swap x and y, then solve: x = 2y + 5, so y = (x - 5)/2."),
      () => numericQuestion("Evaluate log₂(32).", "5", 5, "A logarithm asks for the exponent. 2⁵ = 32, so log₂(32) = 5."),
      () => textQuestion("Solve: e^(2x) = e^6", "3", ["x = 3"], "With the same positive base e, set exponents equal: 2x = 6, so x = 3."),
      () => choiceQuestion("sin(30°) equals", ["1/2", "√2/2", "√3/2", "1"], "1/2", "On the unit circle, the y-coordinate at 30° is 1/2."),
      () => textQuestion("Simplify: (x³)²", "x^6", ["x⁶", "x6"], "A power raised to a power multiplies exponents: 3 × 2 = 6."),
      () => textQuestion("Find the domain of f(x) = 1/(x - 4).", "x ≠ 4", ["x != 4", "all real numbers except 4"], "The denominator cannot be zero. x - 4 = 0 when x = 4, so exclude 4."),
      () => textQuestion("Complete the square: x² + 8x + ___", "16", ["16"], "Take half of 8, which is 4, then square it: 4² = 16."),
      () => textQuestion("If cos θ = adjacent/hypotenuse, find cos θ for adjacent 12 and hypotenuse 13.", "12/13", ["12 over 13"], "Cosine is adjacent divided by hypotenuse, so cos θ = 12/13."),
      () => textQuestion("Find the center of (x - 2)² + (y + 3)² = 25.", "(2, -3)", ["2,-3", "(2,-3)"], "Circle standard form is (x - h)² + (y - k)² = r². Here h = 2 and k = -3."),
      () => numericQuestion("Evaluate the arithmetic-series sum 2 + 4 + 6 + 8 + 10.", "30", 30, "Add directly or pair terms: 2 + 10 = 12, 4 + 8 = 12, plus 6 gives 30."),
    ],
  },

];

let currentWorksheet = [];
let lastResults = null;

const levelSelect = document.querySelector("#level-select");
const generatorForm = document.querySelector("#generator-form");
const worksheetForm = document.querySelector("#worksheet-form");
const emptyState = document.querySelector("#empty-state");
const questionsEl = document.querySelector("#questions");
const titleEl = document.querySelector("#worksheet-title");
const metaEl = document.querySelector("#worksheet-meta");
const directionsEl = document.querySelector("#worksheet-directions");
const scoreCard = document.querySelector("#score-card");
const resetButton = document.querySelector("#reset-answers");
const downloadButton = document.querySelector("#download-report");

LEVELS.forEach((level) => {
  const option = document.createElement("option");
  option.value = level.id;
  option.textContent = level.label;
  levelSelect.append(option);
});

generatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const level = LEVELS.find((item) => item.id === levelSelect.value);
  const count = Number(document.querySelector("#question-count").value);
  generateWorksheet(level, count);
});

worksheetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  gradeWorksheet();
});

resetButton.addEventListener("click", () => {
  worksheetForm.reset();
  lastResults = null;
  scoreCard.hidden = true;
  downloadButton.disabled = true;
  document.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "incorrect");
    const feedback = card.querySelector(".feedback");
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
  });
});

downloadButton.addEventListener("click", () => {
  if (!lastResults) return;
  const reportWindow = window.open("", "_blank");
  reportWindow.document.write(buildReportHtml(lastResults));
  reportWindow.document.close();
  reportWindow.focus();
  reportWindow.print();
});

function generateWorksheet(level, count) {
  const student = document.querySelector("#student-name").value.trim();
  const repeatedGenerators = Array.from({ length: count }, (_, index) => level.generators[index % level.generators.length]);
  currentWorksheet = repeatedGenerators.map((makeQuestion, index) => ({ ...makeQuestion(), number: index + 1 }));
  lastResults = null;

  titleEl.textContent = level.label;
  metaEl.textContent = `${level.source}${student ? ` · ${student}` : ""}`;
  directionsEl.textContent = `${level.directions} ${level.passText}`;
  scoreCard.hidden = true;
  downloadButton.disabled = true;
  emptyState.classList.add("hidden");
  worksheetForm.classList.remove("hidden");
  renderQuestions(currentWorksheet);
}

function renderQuestions(questions) {
  questionsEl.innerHTML = "";
  const template = document.querySelector("#question-template");

  questions.forEach((question) => {
    const node = template.content.cloneNode(true);
    const fieldset = node.querySelector("fieldset");
    fieldset.dataset.questionId = question.id;
    node.querySelector("legend").textContent = `Question ${question.number}`;
    node.querySelector(".question-card__prompt").textContent = question.prompt;
    const body = node.querySelector(".question-card__body");

    if (question.display) {
      const display = document.createElement("p");
      display.className = "problem-display";
      display.textContent = question.display;
      body.append(display);
    }

    if (question.type === "choice") {
      const choices = document.createElement("div");
      choices.className = "choice-list";
      question.choices.forEach((choice) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `answer-${question.id}`;
        radio.value = choice;
        label.append(radio, document.createTextNode(choice));
        choices.append(label);
      });
      body.append(choices);
    } else {
      const input = document.createElement("input");
      input.name = `answer-${question.id}`;
      input.type = "text";
      input.inputMode = question.type === "numeric" ? "decimal" : "text";
      input.placeholder = "Type your answer";
      body.append(input);
    }

    questionsEl.append(node);
  });
}

function gradeWorksheet() {
  let correct = 0;
  const results = currentWorksheet.map((question) => {
    const answer = getAnswer(question);
    const isCorrect = isAnswerCorrect(question, answer);
    if (isCorrect) correct += 1;
    updateFeedback(question, answer, isCorrect);
    return { ...question, studentAnswer: answer, correctAnswer: question.answer, isCorrect };
  });

  const percent = Math.round((correct / currentWorksheet.length) * 100);
  const level = LEVELS.find((item) => item.label === titleEl.textContent);
  lastResults = {
    student: document.querySelector("#student-name").value.trim() || "Student",
    title: titleEl.textContent,
    meta: metaEl.textContent,
    directions: directionsEl.textContent,
    correct,
    total: currentWorksheet.length,
    percent,
    level,
    questions: results,
  };

  scoreCard.hidden = false;
  scoreCard.innerHTML = `<span>Score</span><strong>${correct}/${currentWorksheet.length}</strong><span>${percent}%</span>`;
  downloadButton.disabled = false;
  scoreCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function updateFeedback(question, answer, isCorrect) {
  const card = document.querySelector(`[data-question-id="${question.id}"]`);
  const feedback = card.querySelector(".feedback");
  card.classList.toggle("correct", isCorrect);
  card.classList.toggle("incorrect", !isCorrect);
  feedback.hidden = false;
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = isCorrect
    ? `Correct. ${question.shortExplanation}`
    : `Not quite. Your answer: ${answer || "blank"}. Correct answer: ${question.answer}. How to get it: ${question.explanation}`;
}

function getAnswer(question) {
  const selected = worksheetForm.querySelector(`[name="answer-${question.id}"]:checked`);
  if (selected) return selected.value;
  const input = worksheetForm.querySelector(`[name="answer-${question.id}"]`);
  return input ? input.value.trim() : "";
}

function isAnswerCorrect(question, answer) {
  if (question.type === "numeric") {
    return normalizeNumber(answer) === normalizeNumber(String(question.answer));
  }

  const accepted = [question.answer, ...(question.accepted || [])];
  return accepted.map(normalizeText).includes(normalizeText(answer));
}

function normalizeNumber(value) {
  const cleaned = String(value).replace(/[$,\s]/g, "");
  const number = Number(cleaned);
  return Number.isFinite(number) ? String(number) : normalizeText(value);
}

function normalizeText(value) {
  return String(value)
    .toLowerCase()
    .replace(/[.]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ",")
    .trim();
}

function makeId() {
  return globalThis.crypto?.randomUUID?.() || `question-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function numericQuestion(prompt, display, answer, explanation) {
  return {
    id: makeId(),
    type: "numeric",
    prompt,
    display,
    answer: String(answer),
    explanation,
    shortExplanation: explanation,
  };
}

function textQuestion(prompt, answer, accepted, explanation) {
  return {
    id: makeId(),
    type: "text",
    prompt,
    answer,
    accepted,
    explanation,
    shortExplanation: explanation,
  };
}

function choiceQuestion(prompt, choices, answer, explanation) {
  return {
    id: makeId(),
    type: "choice",
    prompt,
    choices,
    answer,
    explanation,
    shortExplanation: explanation,
  };
}

function buildReportHtml(report) {
  const rows = report.questions
    .map(
      (question) => `
        <section class="report-question ${question.isCorrect ? "correct" : "incorrect"}">
          <h3>${question.number}. ${escapeHtml(question.prompt)}</h3>
          ${question.display ? `<p><strong>Problem:</strong> ${escapeHtml(question.display)}</p>` : ""}
          <p><strong>Your answer:</strong> ${escapeHtml(question.studentAnswer || "blank")}</p>
          <p><strong>Correct answer:</strong> ${escapeHtml(question.answer)}</p>
          <p><strong>${question.isCorrect ? "Why it works" : "How to get the correct answer"}:</strong> ${escapeHtml(question.explanation)}</p>
        </section>`,
    )
    .join("");

  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(report.title)} report</title>
        <style>
          body { color: #172033; font-family: Arial, sans-serif; line-height: 1.45; margin: 32px; }
          header { border-bottom: 2px solid #172033; margin-bottom: 20px; padding-bottom: 16px; }
          .score { background: #eaf1ff; border-radius: 12px; display: inline-block; font-size: 1.25rem; font-weight: 700; padding: 10px 14px; }
          .report-question { border: 1px solid #d9e1ef; border-left-width: 8px; border-radius: 10px; margin: 12px 0; padding: 12px; page-break-inside: avoid; }
          .correct { border-left-color: #177245; }
          .incorrect { border-left-color: #b42318; }
        </style>
      </head>
      <body>
        <header>
          <p>${escapeHtml(report.meta)}</p>
          <h1>${escapeHtml(report.title)}</h1>
          <p class="score">Score: ${report.correct}/${report.total} (${report.percent}%)</p>
          <p>${escapeHtml(report.directions)}</p>
        </header>
        ${rows}
      </body>
    </html>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}
