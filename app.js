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
      () => numericQuestion("How many sides does a rectangle have?", "", 4, "A rectangle is a four-sided polygon with four right angles."),
      () => numericQuestion("Find the missing number.", "___ + 7 = 12", 5, "Use subtraction to undo addition: 12 - 7 = 5."),
      () => numericQuestion("Multiply.", "4 × 3", 12, "4 × 3 means 4 groups of 3: 3 + 3 + 3 + 3 = 12."),
      () => textQuestion("What fraction is one shaded part out of four equal parts?", "1/4", ["one fourth", "one-fourth", "1 over 4"], "The denominator counts all equal parts (4), and the numerator counts shaded parts (1)."),
      () => numericQuestion("A student has 5 pencils and gets 6 more. How many pencils now?", "", 11, "Add the starting amount and the new amount: 5 + 6 = 11."),
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
      () => numericQuestion("Write six hundred forty-two using digits.", "", 642, "Six hundred is 600, forty is 40, and two is 2. 600 + 40 + 2 = 642."),
      () => numericQuestion("Finish the expanded form: 500 + ___ + 9 = 579", "", 70, "579 has 7 tens, and 7 tens are worth 70."),
      () => numericQuestion("Add using regrouping.", "248 + 376", 624, "Ones: 8 + 6 = 14, write 4 carry 1. Tens: 1 + 4 + 7 = 12, write 2 carry 1. Hundreds: 1 + 2 + 3 = 6."),
      () => numericQuestion("Subtract using regrouping.", "904 - 268", 636, "Regroup across the zero: 14 - 8 = 6 ones, 9 - 6 = 3 tens, and 8 - 2 = 6 hundreds."),
      () => numericQuestion("Multiply.", "7 × 8", 56, "Use a known fact: 7 × 8 = 56. You can also double 7 × 4 = 28 to get 56."),
      () => textQuestion("Order from greatest to least: 68, 82, 26.", "82, 68, 26", ["82 68 26", "82,68,26"], "Compare tens digits: 8 tens is greatest, then 6 tens, then 2 tens."),
      () => textQuestion("What fraction is 3 selected items out of 11 total items?", "3/11", ["3 over 11", "three elevenths"], "The selected amount is the numerator (3), and the total amount is the denominator (11)."),
      () => choiceQuestion("Which symbol makes this true? 967 ___ 679", ["<", ">", "="], ">", "Compare hundreds: 967 has 9 hundreds and 679 has 6 hundreds, so 967 is greater."),
      () => numericQuestion("Find the next number in the pattern: 9, 12, 15, 18, ___", "", 21, "Each term increases by 3, so 18 + 3 = 21."),
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
      () => numericQuestion("Find the perimeter of a rectangle with sides 8 cm and 5 cm.", "", 26, "Perimeter adds all sides: 8 + 5 + 8 + 5 = 26 cm."),
      () => numericQuestion("A box has 6 rows of 14 markers. How many markers are there?", "", 84, "Rows of equal size call for multiplication: 6 × 14 = 84."),
      () => numericQuestion("Round 4,681 to the nearest hundred.", "", 4700, "Look at the tens digit. In 4,681 the tens digit is 8, so round 4,600 up to 4,700."),
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
      () => numericQuestion("Find 10% of 360.", "", 36, "Ten percent is one tenth, so divide 360 by 10 to get 36."),
      () => numericQuestion("Find the mean of 8, 10, and 12.", "", 10, "Add the values to get 30, then divide by 3 values: 30 ÷ 3 = 10."),
      () => numericQuestion("Find the area of a rectangle that is 12 ft by 9 ft.", "", 108, "Rectangle area is length times width: 12 × 9 = 108 square feet."),
      () => textQuestion("Simplify: 18/24", "3/4", ["3 over 4", "three fourths"], "Divide numerator and denominator by their greatest common factor, 6: 18/24 = 3/4."),
      () => textQuestion("Write 0.08 as a fraction.", "2/25", ["8/100", "8 over 100", "2 over 25"], "0.08 means 8 hundredths, or 8/100. Simplify by dividing by 4 to get 2/25."),
      () => numericQuestion("A recipe uses 3 cups of flour per batch. How many cups for 7 batches?", "", 21, "Multiply cups per batch by batches: 3 × 7 = 21."),
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
      () => numericQuestion("A $45 item is discounted 20%. What is the discount amount?", "", 9, "20% is 0.20. 0.20 × 45 = 9."),
      () => textQuestion("Solve: x - 14 = 31", "45", ["x = 45"], "Add 14 to both sides: x = 31 + 14 = 45."),
      () => textQuestion("Simplify: 6a - 2a + 9", "4a + 9", ["4a+9"], "Combine like terms 6a and -2a to get 4a. The constant 9 stays separate."),
      () => numericQuestion("Find the circumference of a circle with diameter 10 using π = 3.14.", "", 31.4, "Circumference is π times diameter: 3.14 × 10 = 31.4."),
      () => numericQuestion("If 4 notebooks cost $12, what is the unit price?", "", 3, "Divide total cost by number of notebooks: 12 ÷ 4 = 3 dollars each."),
      () => choiceQuestion("Which is the greatest?", ["0.6", "2/3", "58%", "0.61"], "2/3", "Convert to decimals: 2/3 is about 0.667, which is greater than 0.61, 0.60, and 0.58."),
      () => numericQuestion("Find the volume of a rectangular prism: 5 by 4 by 3.", "", 60, "Volume is length × width × height: 5 × 4 × 3 = 60 cubic units."),
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
      () => numericQuestion("Find 25% of 80.", "", 20, "25% is one fourth. One fourth of 80 is 80 ÷ 4 = 20."),
      () => textQuestion("A ratio is 3:5. If the first quantity is 12, what is the second?", "20", ["20"], "The scale factor from 3 to 12 is 4, so multiply 5 by 4 to get 20."),
      () => numericQuestion("Find the area of a triangle with base 10 and height 6.", "", 30, "Triangle area is one half times base times height: (10 × 6) ÷ 2 = 30."),
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
      () => numericQuestion("Find the missing angle in a triangle with angles 42° and 68°.", "", 70, "Triangle angles sum to 180°. 180 - 42 - 68 = 70."),
      () => choiceQuestion("Parallel lines cut by a transversal create equal ___ angles.", ["corresponding", "random", "supplementary only", "vertical only"], "corresponding", "Corresponding angles are congruent when the lines are parallel."),
      () => numericQuestion("Find the area of a trapezoid with bases 6 and 10 and height 5.", "", 40, "Trapezoid area is one half the sum of the bases times height: (6 + 10) × 5 ÷ 2 = 40."),
      () => numericQuestion("Use the Pythagorean theorem: legs 6 and 8, hypotenuse?", "", 10, "6² + 8² = 36 + 64 = 100, and the square root of 100 is 10."),
      () => textQuestion("Find the midpoint of (2, 4) and (8, 10).", "(5, 7)", ["5,7", "(5,7)"], "Average the x-values and y-values: (2 + 8)/2 = 5 and (4 + 10)/2 = 7."),
      () => textQuestion("Solve: 3x + 2 = 20", "6", ["x = 6"], "Subtract 2 to get 3x = 18, then divide by 3."),
      () => numericQuestion("Find the perimeter of a regular hexagon with side length 9.", "", 54, "A hexagon has 6 sides. 6 × 9 = 54."),
      () => choiceQuestion("A 90° angle is called", ["acute", "right", "obtuse", "straight"], "right", "A right angle measures exactly 90°."),
      () => numericQuestion("Find the slope through (1, 2) and (5, 14).", "", 3, "Slope is change in y over change in x: (14 - 2)/(5 - 1) = 12/4 = 3."),
      () => numericQuestion("Find the volume of a cylinder with r = 3, h = 5, using π = 3.14.", "", 141.3, "Cylinder volume is πr²h: 3.14 × 3² × 5 = 3.14 × 45 = 141.3."),
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
      () => numericQuestion("What is the slope of 6x + 2y = 10?", "", -3, "Solve for y: 2y = -6x + 10, so y = -3x + 5. The slope is -3."),
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
      () => numericQuestion("Evaluate log₂(32).", "", 5, "A logarithm asks for the exponent. 2⁵ = 32, so log₂(32) = 5."),
      () => textQuestion("Solve: e^(2x) = e^6", "3", ["x = 3"], "With the same positive base e, set exponents equal: 2x = 6, so x = 3."),
      () => choiceQuestion("sin(30°) equals", ["1/2", "√2/2", "√3/2", "1"], "1/2", "On the unit circle, the y-coordinate at 30° is 1/2."),
      () => textQuestion("Simplify: (x³)²", "x^6", ["x⁶", "x6"], "A power raised to a power multiplies exponents: 3 × 2 = 6."),
      () => textQuestion("Find the domain of f(x) = 1/(x - 4).", "x ≠ 4", ["x != 4", "all real numbers except 4"], "The denominator cannot be zero. x - 4 = 0 when x = 4, so exclude 4."),
      () => textQuestion("Complete the square: x² + 8x + ___", "16", ["16"], "Take half of 8, which is 4, then square it: 4² = 16."),
      () => textQuestion("If cos θ = adjacent/hypotenuse, find cos θ for adjacent 12 and hypotenuse 13.", "12/13", ["12 over 13"], "Cosine is adjacent divided by hypotenuse, so cos θ = 12/13."),
      () => textQuestion("Find the center of (x - 2)² + (y + 3)² = 25.", "(2, -3)", ["2,-3", "(2,-3)"], "Circle standard form is (x - h)² + (y - k)² = r². Here h = 2 and k = -3."),
      () => numericQuestion("Evaluate the arithmetic-series sum 2 + 4 + 6 + 8 + 10.", "", 30, "Add directly or pair terms: 2 + 10 = 12, 4 + 8 = 12, plus 6 gives 30."),
    ],
  },

];


const RANDOM_LEVEL_GENERATORS = {
  math3: [
    () => {
      const a = randomInt(6, 14);
      const b = randomInt(2, 8);
      return numericQuestion("Subtract the whole numbers.", `${a} - ${b}`, a - b, `Start at ${a} and count back ${b} steps to land on ${a - b}.`);
    },
    () => {
      const a = randomInt(4, 9);
      const b = randomInt(4, 9);
      return numericQuestion("Add the whole numbers.", `${a} + ${b}`, a + b, `Add ${a} and ${b}. If helpful, make a ten first, then add the leftover amount to get ${a + b}.`);
    },
    () => {
      const hundreds = randomInt(2, 8);
      const tens = randomInt(1, 9);
      const ones = randomInt(1, 9);
      const value = hundreds * 100 + tens * 10 + ones;
      return textQuestion(`Write ${value} as hundreds, tens, and ones.`, `${hundreds} hundreds, ${tens} tens, ${ones} ones`, [`${hundreds} hundreds ${tens} tens ${ones} ones`], `The ${hundreds} is in the hundreds place, ${tens} is in the tens place, and ${ones} is in the ones place.`);
    },
    () => {
      const values = uniqueRandomNumbers(3, 10, 79);
      const answer = [...values].sort((a, b) => a - b).join(", ");
      return textQuestion(`List these numbers from smallest to largest: ${values.join(", ")}.`, answer, [answer.replace(/, /g, " ")], "Compare tens first, then ones if the tens digits match.");
    },
    () => {
      const value = randomInt(11, 40);
      const answer = value % 2 === 0 ? "Even" : "Odd";
      return choiceQuestion(`Is ${value} odd or even?`, ["Odd", "Even"], answer, `${value} ${answer === "Even" ? "ends in an even digit and can be split into pairs" : "leaves one left over when split into pairs"}.`);
    },
    () => numericQuestion("How many sides does a rectangle have?", "", 4, "A rectangle is a four-sided polygon with four right angles."),
    () => {
      const missing = randomInt(3, 9);
      const addend = randomInt(4, 9);
      return numericQuestion("Find the missing number.", `___ + ${addend} = ${missing + addend}`, missing, `Use subtraction to undo addition: ${missing + addend} - ${addend} = ${missing}.`);
    },
    () => {
      const a = randomInt(2, 5);
      const b = randomInt(2, 5);
      return numericQuestion("Multiply.", `${a} × ${b}`, a * b, `${a} × ${b} means ${a} groups of ${b}, which totals ${a * b}.`);
    },
    () => {
      const denominator = randomInt(3, 8);
      return textQuestion(`What fraction is one shaded part out of ${denominator} equal parts?`, `1/${denominator}`, [`one ${ordinalWord(denominator)}`, `1 over ${denominator}`], `The denominator counts all equal parts (${denominator}), and the numerator counts the shaded part (1).`);
    },
    () => {
      const start = randomInt(3, 9);
      const more = randomInt(3, 9);
      return numericQuestion(`A student has ${start} pencils and gets ${more} more. How many pencils now?`, "", start + more, `Add the starting amount and the new amount: ${start} + ${more} = ${start + more}.`);
    },
  ],
  math4: [
    () => {
      const digit = randomInt(2, 9);
      const value = digit * 1000 + randomInt(100, 899);
      return choiceQuestion(`What does the ${digit} stand for in ${formatNumber(value)}?`, [String(digit), String(digit * 10), String(digit * 100), formatNumber(digit * 1000)], formatNumber(digit * 1000), `The ${digit} is in the thousands place, so its value is ${formatNumber(digit * 1000)}.`);
    },
    () => {
      const h = randomInt(2, 8), t = randomInt(1, 9), o = randomInt(1, 9);
      return numericQuestion(`Write the number shown by ${h} hundreds, ${t} tens, and ${o} ones.`, "", h * 100 + t * 10 + o, `${h} hundreds is ${h * 100}, ${t} tens is ${t * 10}, and ${o} ones is ${o}. Add them to get ${h * 100 + t * 10 + o}.`);
    },
    () => {
      const h = randomInt(2, 8), t = randomInt(2, 9), o = randomInt(1, 9);
      return numericQuestion(`Finish the expanded form: ${h * 100} + ___ + ${o} = ${h * 100 + t * 10 + o}`, "", t * 10, `The tens digit is ${t}, and ${t} tens are worth ${t * 10}.`);
    },
    () => {
      const a = randomInt(125, 699), b = randomInt(126, 699);
      return numericQuestion("Add using regrouping.", `${a} + ${b}`, a + b, `Add by columns and regroup as needed. The sum is ${formatNumber(a + b)}.`);
    },
    () => {
      const b = randomInt(125, 498), answer = randomInt(210, 599), a = b + answer;
      return numericQuestion("Subtract using regrouping.", `${a} - ${b}`, answer, `Subtract by columns and regroup as needed. ${a} - ${b} = ${answer}.`);
    },
    () => {
      const a = randomInt(4, 9), b = randomInt(4, 9);
      return numericQuestion("Multiply.", `${a} × ${b}`, a * b, `Use multiplication facts: ${a} × ${b} = ${a * b}.`);
    },
    () => {
      const values = uniqueRandomNumbers(3, 20, 99);
      const answer = [...values].sort((a, b) => b - a).join(", ");
      return textQuestion(`Order from greatest to least: ${values.join(", ")}.`, answer, [answer.replace(/, /g, " ")], "Compare tens digits first, then ones digits.");
    },
    () => {
      const total = randomInt(6, 12), selected = randomInt(2, total - 1);
      return textQuestion(`What fraction is ${selected} selected items out of ${total} total items?`, `${selected}/${total}`, [`${selected} over ${total}`], `The selected amount is the numerator (${selected}), and the total amount is the denominator (${total}).`);
    },
    () => {
      const a = randomInt(200, 999), b = randomInt(200, 999);
      const answer = a > b ? ">" : a < b ? "<" : "=";
      return choiceQuestion(`Which symbol makes this true? ${a} ___ ${b}`, ["<", ">", "="], answer, `Compare place values from left to right. ${a} ${answer} ${b}.`);
    },
    () => {
      const start = randomInt(3, 15), step = randomInt(2, 6);
      return numericQuestion(`Find the next number in the pattern: ${start}, ${start + step}, ${start + step * 2}, ${start + step * 3}, ___`, "", start + step * 4, `Each term increases by ${step}, so ${start + step * 3} + ${step} = ${start + step * 4}.`);
    },
  ],
  math5: [
    () => {
      const a = randomInt(1200, 4999), b = randomInt(1200, 4999);
      return numericQuestion("Add.", `${formatNumber(a)} + ${formatNumber(b)}`, a + b, `Add by columns and regroup as needed to get ${formatNumber(a + b)}.`);
    },
    () => {
      const b = randomInt(900, 2999), answer = randomInt(1500, 4999), a = b + answer;
      return numericQuestion("Subtract.", `${formatNumber(a)} - ${formatNumber(b)}`, answer, `Regroup as needed and subtract by place value to get ${formatNumber(answer)}.`);
    },
    () => {
      const a = randomInt(23, 79), b = randomInt(3, 9);
      return numericQuestion("Multiply.", `${a} × ${b}`, a * b, `Multiply ones first, then tens, carrying when needed. ${a} × ${b} = ${a * b}.`);
    },
    () => {
      const divisor = randomInt(3, 9), quotient = randomInt(4, 12);
      return numericQuestion("Divide.", `${divisor * quotient} ÷ ${divisor}`, quotient, `Division asks how many groups of ${divisor} fit in ${divisor * quotient}. Since ${divisor} × ${quotient} = ${divisor * quotient}, the quotient is ${quotient}.`);
    },
    () => {
      const base = randomInt(2, 5), numerator = base * randomInt(2, 4), denominator = base * randomInt(5, 8);
      const [n, d] = simplifyPair(numerator, denominator);
      return textQuestion(`Simplify the fraction ${numerator}/${denominator}.`, `${n}/${d}`, [`${n} over ${d}`], `Divide numerator and denominator by their greatest common factor, ${gcd(numerator, denominator)}, to get ${n}/${d}.`);
    },
    () => {
      const dollars = randomInt(2, 9), cents = randomInt(10, 99);
      return numericQuestion("Convert dollars to cents.", `$${dollars}.${String(cents).padStart(2, "0")} = ___ cents`, dollars * 100 + cents, `Each dollar is 100 cents, so ${dollars} dollars is ${dollars * 100} cents. Add ${cents} cents for ${dollars * 100 + cents}.`);
    },
    () => {
      const a = randomInt(3, 9) / 10, b = randomInt(31, 95) / 100;
      const answer = a > b ? ">" : "<";
      return textQuestion(`Compare the decimals: ${a.toFixed(1)} ___ ${b.toFixed(2)}`, answer, [answer === ">" ? "greater" : "less"], `Write ${a.toFixed(1)} in hundredths and compare it with ${b.toFixed(2)}.`);
    },
    () => {
      const l = randomInt(6, 15), w = randomInt(3, 9);
      return numericQuestion(`Find the perimeter of a rectangle with sides ${l} cm and ${w} cm.`, "", 2 * (l + w), `Perimeter adds all sides: ${l} + ${w} + ${l} + ${w} = ${2 * (l + w)} cm.`);
    },
    () => {
      const rows = randomInt(3, 9), each = randomInt(10, 18);
      return numericQuestion(`A box has ${rows} rows of ${each} markers. How many markers are there?`, "", rows * each, `Rows of equal size call for multiplication: ${rows} × ${each} = ${rows * each}.`);
    },
    () => {
      const value = randomInt(21, 89) * 100 + randomInt(50, 99);
      const rounded = Math.round(value / 100) * 100;
      return numericQuestion(`Round ${formatNumber(value)} to the nearest hundred.`, "", rounded, `Look at the tens digit. It is 5 or greater, so round to ${formatNumber(rounded)}.`);
    },
  ],

  math6: [
    () => {
      const divisor = randomInt(3, 9), quotient = randomInt(200, 900);
      return numericQuestion("Divide.", `${formatNumber(divisor * quotient)} ÷ ${divisor}`, quotient, `Divide from left to right and regroup remainders as needed. The quotient is ${quotient}.`);
    },
    () => {
      const a = randomInt(1, 5), b = randomInt(2, 8), c = randomInt(1, 5), d = randomInt(2, 8);
      const numerator = a * d + c * b, denominator = b * d;
      const [n, den] = simplifyPair(numerator, denominator);
      return textQuestion(`Add: ${a}/${b} + ${c}/${d}`, `${n}/${den}`, [`${n} over ${den}`], `Use a common denominator of ${denominator}: ${a}/${b} = ${a * d}/${denominator} and ${c}/${d} = ${c * b}/${denominator}. Add and simplify to ${n}/${den}.`);
    },
    () => {
      const a = randomInt(4, 9) + randomInt(10, 90) / 100, b = randomInt(1, 3) + randomInt(10, 90) / 100;
      return textQuestion(`Subtract: ${a.toFixed(2)} - ${b.toFixed(2)}`, (a - b).toFixed(2), [(a - b).toFixed(2)], `Line up decimal points, regroup if needed, and subtract to get ${(a - b).toFixed(2)}.`);
    },
    () => {
      const whole = randomInt(20, 90) * 10;
      return numericQuestion(`Find 10% of ${whole}.`, "", whole / 10, `Ten percent is one tenth, so divide ${whole} by 10 to get ${whole / 10}.`);
    },
    () => {
      const a = randomInt(5, 15), b = randomInt(5, 15), c = randomInt(5, 15);
      return numericQuestion(`Find the mean of ${a}, ${b}, and ${c}.`, "", (a + b + c) / 3, `Add the values to get ${a + b + c}, then divide by 3 values: ${a + b + c} ÷ 3 = ${(a + b + c) / 3}.`);
    },
    () => {
      const l = randomInt(8, 18), w = randomInt(5, 14);
      return numericQuestion(`Find the area of a rectangle that is ${l} ft by ${w} ft.`, "", l * w, `Rectangle area is length times width: ${l} × ${w} = ${l * w} square feet.`);
    },
    () => {
      const factor = randomInt(2, 8), n = randomInt(2, 5), d = randomInt(6, 10);
      const [sn, sd] = simplifyPair(n * factor, d * factor);
      return textQuestion(`Simplify: ${n * factor}/${d * factor}`, `${sn}/${sd}`, [`${sn} over ${sd}`], `Divide numerator and denominator by their greatest common factor, ${gcd(n * factor, d * factor)}, to get ${sn}/${sd}.`);
    },
    () => {
      const hundredths = randomInt(2, 89);
      const [n, d] = simplifyPair(hundredths, 100);
      return textQuestion(`Write ${(hundredths / 100).toFixed(2)} as a fraction.`, `${n}/${d}`, [`${hundredths}/100`, `${n} over ${d}`], `${(hundredths / 100).toFixed(2)} means ${hundredths} hundredths, or ${hundredths}/100. Simplify to ${n}/${d}.`);
    },
    () => {
      const cups = randomInt(2, 6), batches = randomInt(4, 9);
      return numericQuestion(`A recipe uses ${cups} cups of flour per batch. How many cups for ${batches} batches?`, "", cups * batches, `Multiply cups per batch by batches: ${cups} × ${batches} = ${cups * batches}.`);
    },
    () => choiceQuestion("Which number is prime?", ["21", "27", "29", "33"], "29", "A prime number has exactly two factors, 1 and itself. 29 is not divisible by 2, 3, or 5."),
  ],
  math7: [
    () => {
      const a = -randomInt(4, 12), b = randomInt(3, 8);
      return numericQuestion("Evaluate.", `${a} - ${b}`, a - b, `Subtracting ${b} from ${a} moves ${b} units left on the number line, landing at ${a - b}.`);
    },
    () => {
      const a = randomInt(1, 4), b = randomInt(3, 8), c = randomInt(1, 4), d = randomInt(3, 8);
      const [n, den] = simplifyPair(a * c, b * d);
      return textQuestion(`Multiply: ${a}/${b} × ${c}/${d}`, `${n}/${den}`, [`${n} over ${den}`], `Multiply numerators and denominators, then simplify: ${a * c}/${b * d} = ${n}/${den}.`);
    },
    () => {
      const a = randomInt(1, 4), b = randomInt(3, 8), c = randomInt(1, 4), d = randomInt(3, 8);
      const [n, den] = simplifyPair(a * d, b * c);
      return textQuestion(`Divide: ${a}/${b} ÷ ${c}/${d}`, `${n}/${den}`, [`${n} over ${den}`], `Keep ${a}/${b}, change division to multiplication, and flip ${c}/${d} to ${d}/${c}. Simplify to ${n}/${den}.`);
    },
    () => {
      const price = randomInt(20, 90), percent = pick([10, 20, 25, 50]);
      return numericQuestion(`A $${price} item is discounted ${percent}%. What is the discount amount?`, "", price * percent / 100, `${percent}% is ${percent / 100}. ${percent / 100} × ${price} = ${price * percent / 100}.`);
    },
    () => {
      const x = randomInt(5, 20), sub = randomInt(3, 15);
      return textQuestion(`Solve: x - ${sub} = ${x - sub}`, String(x), [`x = ${x}`], `Add ${sub} to both sides: x = ${x - sub} + ${sub} = ${x}.`);
    },
    () => {
      const a = randomInt(3, 9), b = randomInt(1, a - 1), c = randomInt(2, 12);
      return textQuestion(`Simplify: ${a}a - ${b}a + ${c}`, `${a - b}a + ${c}`, [`${a - b}a+${c}`], `Combine like terms ${a}a and -${b}a to get ${a - b}a. The constant ${c} stays separate.`);
    },
    () => {
      const d = randomInt(6, 14);
      return numericQuestion(`Find the circumference of a circle with diameter ${d} using π = 3.14.`, "", roundToTenth(3.14 * d), `Circumference is π times diameter: 3.14 × ${d} = ${roundToTenth(3.14 * d)}.`);
    },
    () => {
      const quantity = randomInt(3, 8), price = quantity * randomInt(2, 9);
      return numericQuestion(`If ${quantity} notebooks cost $${price}, what is the unit price?`, "", price / quantity, `Divide total cost by number of notebooks: ${price} ÷ ${quantity} = ${price / quantity} dollars each.`);
    },
    () => choiceQuestion("Which is the greatest?", ["0.6", "2/3", "58%", "0.61"], "2/3", "Convert to decimals: 2/3 is about 0.667, which is greater than 0.61, 0.60, and 0.58."),
    () => {
      const l = randomInt(3, 8), w = randomInt(3, 8), h = randomInt(3, 8);
      return numericQuestion(`Find the volume of a rectangular prism: ${l} by ${w} by ${h}.`, "", l * w * h, `Volume is length × width × height: ${l} × ${w} × ${h} = ${l * w * h} cubic units.`);
    },
  ],
  prealgebra: [
    () => {
      const a = -randomInt(4, 12), b = randomInt(5, 15);
      return numericQuestion("Evaluate.", `${a} + ${b}`, a + b, `Start at ${a} and move ${b} units right on the number line to get ${a + b}.`);
    },
    () => {
      const a = randomInt(2, 6), b = randomInt(2, 4), c = randomInt(2, 5), d = randomInt(2, 4);
      return numericQuestion("Evaluate.", `${a}² + ${c}²`, a * a + c * c, `Square first: ${a}² = ${a * a} and ${c}² = ${c * c}. Then add to get ${a * a + c * c}.`);
    },
    () => {
      const x = randomInt(3, 12), a = randomInt(2, 7), b = randomInt(1, 9);
      return textQuestion(`Solve: ${a}x + ${b} = ${a * x + b}`, String(x), [`x = ${x}`], `Subtract ${b}, then divide by ${a}: ${a}x = ${a * x}, so x = ${x}.`);
    },
    () => {
      const scale = randomInt(2, 5), a = randomInt(2, 7), b = randomInt(3, 8);
      return textQuestion(`Solve the proportion: ${a}/${b} = x/${b * scale}`, String(a * scale), [`x = ${a * scale}`], `${b * scale} is ${scale} times ${b}, so multiply ${a} by ${scale}. x = ${a * scale}.`);
    },
    () => {
      const a = randomInt(2, 5), x = randomInt(2, 6), b = randomInt(1, 9);
      return textQuestion(`Evaluate ${a}x² + ${b} when x = ${x}.`, String(a * x * x + b), [String(a * x * x + b)], `Substitute ${x}: ${a}(${x}²) + ${b} = ${a * x * x + b}.`);
    },
    () => {
      const value = randomInt(20, 80), percent = pick([10, 20, 25, 50]);
      return numericQuestion(`Find ${percent}% of ${value}.`, "", value * percent / 100, `${percent}% is ${percent / 100}; ${percent / 100} × ${value} = ${value * percent / 100}.`);
    },
    () => {
      const base = randomInt(6, 14), height = randomInt(4, 12);
      return numericQuestion(`Find the area of a triangle with base ${base} and height ${height}.`, "", (base * height) / 2, `Triangle area is one half times base times height: (${base} × ${height}) ÷ 2 = ${(base * height) / 2}.`);
    },
    () => {
      const selected = randomInt(1, 5), total = randomInt(6, 12);
      const [n, d] = simplifyPair(selected, total);
      return textQuestion(`A bag has ${selected} red marbles out of ${total} marbles. What is the probability of red?`, `${n}/${d}`, [`${n} over ${d}`], `Probability is favorable outcomes over total outcomes: ${selected}/${total}, which simplifies to ${n}/${d}.`);
    },
    () => {
      const decimal = randomInt(12, 89) / 100;
      return textQuestion(`Write ${decimal.toFixed(2)} as a percent.`, `${Math.round(decimal * 100)}%`, [String(Math.round(decimal * 100))], `Move the decimal two places right: ${decimal.toFixed(2)} = ${Math.round(decimal * 100)}%.`);
    },
    () => {
      const factors = [2, 3, 5, 7];
      const a = pick(factors), b = pick(factors), value = a * b;
      return textQuestion(`Write the prime factorization of ${value}.`, `${Math.min(a, b)} × ${Math.max(a, b)}`, [`${Math.min(a, b)}*${Math.max(a, b)}`], `Break ${value} into prime factors: ${Math.min(a, b)} × ${Math.max(a, b)}.`);
    },
  ],

  algebra1: [
    () => {
      const x = randomInt(2, 12), a = randomInt(2, 8), b = randomInt(1, 12);
      return textQuestion(`Solve: ${a}x + ${b} = ${a * x + b}`, String(x), [`x = ${x}`], `Subtract ${b} to get ${a}x = ${a * x}, then divide by ${a}.`);
    },
    () => {
      const x1 = randomInt(0, 5), y1 = randomInt(0, 8), slope = randomInt(2, 6), x2 = x1 + randomInt(2, 5), y2 = y1 + slope * (x2 - x1);
      return textQuestion(`Find the slope through (${x1}, ${y1}) and (${x2}, ${y2}).`, String(slope), [String(slope)], `Slope is change in y over change in x: (${y2} - ${y1})/(${x2} - ${x1}) = ${slope}.`);
    },
    () => {
      const m = randomInt(2, 6), b = -randomInt(2, 9);
      return textQuestion(`What is the y-intercept of y = ${m}x - ${Math.abs(b)}?`, String(b), [`b = ${b}`], `Slope-intercept form is y = mx + b. The y-intercept is ${b}.`);
    },
    () => {
      const scale = randomInt(2, 5), a = randomInt(2, 8), b = randomInt(3, 9);
      return textQuestion(`Solve the proportion: ${a}/${b} = x/${b * scale}`, String(a * scale), [`x = ${a * scale}`], `${b * scale} is ${scale} times ${b}, so multiply ${a} by ${scale}.`);
    },
    () => {
      const a = randomInt(2, 6), b = randomInt(2, 6), sum = a + b, product = a * b;
      return textQuestion(`Factor: x² + ${sum}x + ${product}`, `(x + ${a})(x + ${b})`, [`(x+${a})(x+${b})`, `(x + ${b})(x + ${a})`, `(x+${b})(x+${a})`], `Find two numbers that multiply to ${product} and add to ${sum}: ${a} and ${b}.`);
    },
    () => {
      const a = randomInt(2, 5), x = -randomInt(2, 5);
      return textQuestion(`Evaluate ${a}a² when a = ${x}.`, String(a * x * x), [String(a * x * x)], `Substitute ${x} for a and square before multiplying: ${a}(${x})² = ${a * x * x}.`);
    },
    () => choiceQuestion("Which inequality matches 'at least 12'?", ["x > 12", "x ≥ 12", "x < 12", "x ≤ 12"], "x ≥ 12", "At least means the value can equal 12 or be greater than 12."),
    () => {
      const start = randomInt(2, 8), step = randomInt(3, 7);
      return textQuestion(`Find the next term: ${start}, ${start + step}, ${start + step * 2}, ${start + step * 3}, ___`, String(start + step * 4), [String(start + step * 4)], `The pattern adds ${step} each time. ${start + step * 3} + ${step} = ${start + step * 4}.`);
    },
    () => {
      const a = randomInt(2, 6), b = randomInt(2, 9), c = randomInt(2, 9);
      return textQuestion(`Distribute: ${a}(${b}x + ${c})`, `${a * b}x + ${a * c}`, [`${a * b}x+${a * c}`], `Multiply ${a} by each term: ${a} × ${b}x = ${a * b}x and ${a} × ${c} = ${a * c}.`);
    },
    () => {
      const base = pick(["x", "a", "m"]), p = randomInt(2, 5), q = randomInt(2, 5);
      return textQuestion(`Simplify: ${base}^${p} · ${base}^${q}`, `${base}^${p + q}`, [`${base}${p + q}`], `When multiplying powers with the same base, add exponents: ${p} + ${q} = ${p + q}.`);
    },
  ],
  geometry: [
    () => {
      const a = randomInt(35, 75), b = randomInt(35, 75), missing = 180 - a - b;
      return numericQuestion(`Find the missing angle in a triangle with angles ${a}° and ${b}°.`, "", missing, `Triangle angles sum to 180°. 180 - ${a} - ${b} = ${missing}.`);
    },
    () => choiceQuestion("Parallel lines cut by a transversal create equal ___ angles.", ["corresponding", "random", "supplementary only", "vertical only"], "corresponding", "Corresponding angles are congruent when the lines are parallel."),
    () => {
      const b1 = randomInt(5, 12), b2 = randomInt(13, 20), h = randomInt(4, 10);
      return numericQuestion(`Find the area of a trapezoid with bases ${b1} and ${b2} and height ${h}.`, "", ((b1 + b2) * h) / 2, `Trapezoid area is one half the sum of the bases times height: (${b1} + ${b2}) × ${h} ÷ 2 = ${((b1 + b2) * h) / 2}.`);
    },
    () => {
      const triple = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]);
      return numericQuestion(`Use the Pythagorean theorem: legs ${triple[0]} and ${triple[1]}, hypotenuse?`, "", triple[2], `${triple[0]}² + ${triple[1]}² = ${triple[2] * triple[2]}, and the square root is ${triple[2]}.`);
    },
    () => {
      const x1 = randomInt(0, 6) * 2, y1 = randomInt(0, 6) * 2, x2 = x1 + randomInt(2, 6) * 2, y2 = y1 + randomInt(2, 6) * 2;
      const answer = `(${(x1 + x2) / 2}, ${(y1 + y2) / 2})`;
      return textQuestion(`Find the midpoint of (${x1}, ${y1}) and (${x2}, ${y2}).`, answer, [answer.replace(/\s/g, "")], `Average the x-values and y-values to get ${answer}.`);
    },
    () => {
      const x = randomInt(3, 10), a = randomInt(2, 6), b = randomInt(1, 8);
      return textQuestion(`Solve: ${a}x + ${b} = ${a * x + b}`, String(x), [`x = ${x}`], `Subtract ${b}, then divide by ${a}.`);
    },
    () => {
      const sides = pick([5, 6, 8]), length = randomInt(4, 12);
      return numericQuestion(`Find the perimeter of a regular ${sides}-sided polygon with side length ${length}.`, "", sides * length, `A regular polygon has equal side lengths, so multiply ${sides} × ${length} = ${sides * length}.`);
    },
    () => choiceQuestion("A 90° angle is called", ["acute", "right", "obtuse", "straight"], "right", "A right angle measures exactly 90°."),
    () => {
      const x1 = randomInt(0, 5), y1 = randomInt(0, 5), slope = randomInt(2, 5), x2 = x1 + randomInt(2, 5), y2 = y1 + slope * (x2 - x1);
      return numericQuestion(`Find the slope through (${x1}, ${y1}) and (${x2}, ${y2}).`, "", slope, `Slope is change in y over change in x: (${y2} - ${y1})/(${x2} - ${x1}) = ${slope}.`);
    },
    () => {
      const r = randomInt(2, 5), h = randomInt(4, 9);
      return numericQuestion(`Find the volume of a cylinder with r = ${r}, h = ${h}, using π = 3.14.`, "", roundToTenth(3.14 * r * r * h), `Cylinder volume is πr²h: 3.14 × ${r}² × ${h} = ${roundToTenth(3.14 * r * r * h)}.`);
    },
  ],
  algebra2: [
    () => {
      const x = randomInt(2, 9), y = randomInt(1, 6);
      return textQuestion(`Solve the system: x + y = ${x + y} and x - y = ${x - y}. What is x?`, String(x), [`x = ${x}`], `Add the equations to eliminate y: 2x = ${2 * x}, so x = ${x}.`);
    },
    () => {
      const a = randomInt(2, 9);
      return textQuestion(`Factor: x² - ${a * a}`, `(x - ${a})(x + ${a})`, [`(x+${a})(x-${a})`, `(x - ${a})(x + ${a})`], `This is a difference of squares: x² - ${a}² = (x - ${a})(x + ${a}).`);
    },
    () => {
      const outside = randomInt(2, 7), inside = pick([2, 3, 5, 6, 7]);
      return textQuestion(`Simplify: √${outside * outside * inside}`, `${outside}√${inside}`, [`${outside} sqrt ${inside}`], `Factor ${outside * outside * inside} as ${outside * outside} × ${inside}. The square root of ${outside * outside} is ${outside}.`);
    },
    () => {
      const a = randomInt(3, 10);
      return textQuestion(`Solve: x² = ${a * a}`, `±${a}`, [`${a} and -${a}`, `+/-${a}`, `-${a}, ${a}`], `Both ${a}² and (-${a})² equal ${a * a}, so there are two solutions.`);
    },
    () => choiceQuestion("The vertex form of a quadratic is", ["y = mx + b", "y = a(x - h)² + k", "y = abˣ", "y = x/a + b"], "y = a(x - h)² + k", "Vertex form shows the vertex at (h, k)."),
    () => {
      const p = randomInt(2, 5), q = randomInt(3, 6);
      return textQuestion(`Simplify: a^${p} · a^${q}`, `a^${p + q}`, [`a${p + q}`], `When multiplying powers with the same base, add exponents: ${p} + ${q} = ${p + q}.`);
    },
    () => {
      const x = randomInt(2, 6), a = randomInt(2, 5), b = randomInt(1, 9);
      return textQuestion(`Find f(${x}) when f(x) = ${a}x² - ${b}.`, String(a * x * x - b), [String(a * x * x - b)], `Substitute ${x}: ${a}(${x}²) - ${b} = ${a * x * x - b}.`);
    },
    () => {
      const a = randomInt(4, 15);
      return textQuestion(`Solve: |x| = ${a}`, `±${a}`, [`${a} and -${a}`, `+/-${a}`, `-${a}, ${a}`], `Absolute value is distance from 0, so both ${a} and -${a} work.`);
    },
    () => {
      const m = -randomInt(2, 6), b = randomInt(2, 10);
      return numericQuestion(`What is the slope of ${-m * 2}x + 2y = ${b * 2}?`, "", m, `Solve for y: 2y = ${m * 2}x + ${b * 2}, so y = ${m}x + ${b}. The slope is ${m}.`);
    },
    () => {
      const a = randomInt(2, 5), p = randomInt(1, 3), q = randomInt(1, 3);
      return textQuestion(`Simplify: (x^${p}y)(${a}xy^${q})`, `${a}x^${p + 1}y^${q + 1}`, [`${a}x${p + 1}y${q + 1}`], `Multiply coefficients and add exponents for like bases: x^${p}·x = x^${p + 1} and y·y^${q} = y^${q + 1}.`);
    },
  ],
  precalculus: [
    () => {
      const m = randomInt(2, 6), b = randomInt(2, 9);
      return textQuestion(`Find the inverse of f(x) = ${m}x + ${b}.`, `(x - ${b})/${m}`, [`f^-1(x)=(x-${b})/${m}`, `(x-${b})/${m}`], `Swap x and y, then solve: x = ${m}y + ${b}, so y = (x - ${b})/${m}.`);
    },
    () => {
      const base = pick([2, 3, 5]), exponent = randomInt(2, 5);
      return numericQuestion(`Evaluate log${base}(${base ** exponent}).`, "", exponent, `A logarithm asks for the exponent. ${base}^${exponent} = ${base ** exponent}.`);
    },
    () => {
      const x = randomInt(2, 6), coefficient = randomInt(2, 4);
      return textQuestion(`Solve: e^(${coefficient}x) = e^${coefficient * x}`, String(x), [`x = ${x}`], `With the same positive base e, set exponents equal: ${coefficient}x = ${coefficient * x}, so x = ${x}.`);
    },
    () => choiceQuestion("sin(30°) equals", ["1/2", "√2/2", "√3/2", "1"], "1/2", "On the unit circle, the y-coordinate at 30° is 1/2."),
    () => {
      const p = randomInt(2, 5), q = randomInt(2, 4);
      return textQuestion(`Simplify: (x^${p})^${q}`, `x^${p * q}`, [`x${p * q}`], `A power raised to a power multiplies exponents: ${p} × ${q} = ${p * q}.`);
    },
    () => {
      const excluded = randomInt(2, 9);
      return textQuestion(`Find the domain of f(x) = 1/(x - ${excluded}).`, `x ≠ ${excluded}`, [`x != ${excluded}`, `all real numbers except ${excluded}`], `The denominator cannot be zero. x - ${excluded} = 0 when x = ${excluded}, so exclude ${excluded}.`);
    },
    () => {
      const half = randomInt(2, 6), coefficient = half * 2;
      return textQuestion(`Complete the square: x² + ${coefficient}x + ___`, String(half * half), [String(half * half)], `Take half of ${coefficient}, which is ${half}, then square it: ${half}² = ${half * half}.`);
    },
    () => {
      const adjacent = randomInt(5, 12), hypotenuse = adjacent + randomInt(2, 6);
      return textQuestion(`If cos θ = adjacent/hypotenuse, find cos θ for adjacent ${adjacent} and hypotenuse ${hypotenuse}.`, `${adjacent}/${hypotenuse}`, [`${adjacent} over ${hypotenuse}`], `Cosine is adjacent divided by hypotenuse, so cos θ = ${adjacent}/${hypotenuse}.`);
    },
    () => {
      const h = randomInt(-6, 6), k = randomInt(-6, 6), r = randomInt(2, 9);
      const xPart = h >= 0 ? `(x - ${h})²` : `(x + ${Math.abs(h)})²`;
      const yPart = k >= 0 ? `(y - ${k})²` : `(y + ${Math.abs(k)})²`;
      return textQuestion(`Find the center of ${xPart} + ${yPart} = ${r * r}.`, `(${h}, ${k})`, [`${h},${k}`, `(${h},${k})`], `Circle standard form is (x - h)² + (y - k)² = r², so the center is (${h}, ${k}).`);
    },
    () => {
      const first = randomInt(2, 6), diff = randomInt(2, 5), terms = 5;
      const sequence = Array.from({ length: terms }, (_, index) => first + diff * index);
      const sum = sequence.reduce((total, value) => total + value, 0);
      return numericQuestion(`Evaluate the arithmetic-series sum ${sequence.join(" + ")}.`, "", sum, `Add the ${terms} terms or pair terms from the ends. The sum is ${sum}.`);
    },
  ],
};

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
const studyPlanEl = document.querySelector("#study-plan");
const resetButton = document.querySelector("#reset-answers");
const downloadButton = document.querySelector("#download-report");
const printButton = document.querySelector("#print-report");

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
  const mode = document.querySelector("#question-mode").value;
  generateWorksheet(level, count, mode);
});

worksheetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  gradeWorksheet();
});

resetButton.addEventListener("click", () => {
  worksheetForm.reset();
  lastResults = null;
  scoreCard.hidden = true;
  clearStudyPlan();
  downloadButton.disabled = true;
  printButton.disabled = true;
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
  downloadReport(lastResults);
});

printButton.addEventListener("click", () => {
  if (!lastResults) return;
  openPrintableReport(lastResults);
});

function generateWorksheet(level, count, mode = "ordered") {
  const student = document.querySelector("#student-name").value.trim();
  const generators = selectQuestionGenerators(level, count, mode);
  currentWorksheet = generators.map((makeQuestion, index) =>
    sanitizeQuestionForDisplay({ ...makeQuestion(), number: index + 1 }),
  );
  lastResults = null;

  titleEl.textContent = level.label;
  metaEl.textContent = `${level.source}${student ? ` · ${student}` : ""}${mode === "random" ? " · Unique random version" : ""}`;
  directionsEl.textContent = `${level.directions} ${level.passText}${
    mode === "random"
      ? ` This worksheet uses ${currentWorksheet.length} non-repeating questions randomly selected from the ${level.label} question bank.`
      : ""
  }`;
  scoreCard.hidden = true;
  clearStudyPlan();
  downloadButton.disabled = true;
  printButton.disabled = true;
  emptyState.classList.add("hidden");
  worksheetForm.classList.remove("hidden");
  renderQuestions(currentWorksheet);
}

function selectQuestionGenerators(level, count, mode) {
  if (mode === "random") {
    const randomBank = RANDOM_LEVEL_GENERATORS[level.id] || level.generators;
    return shuffleArray(randomBank).slice(0, Math.min(count, randomBank.length));
  }

  return Array.from({ length: count }, (_, index) => level.generators[index % level.generators.length]);
}

function shuffleArray(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
  return items[randomInt(0, items.length - 1)];
}

function uniqueRandomNumbers(count, min, max) {
  const values = new Set();
  while (values.size < count) values.add(randomInt(min, max));
  return [...values];
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-US");
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

function simplifyPair(numerator, denominator) {
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
}

function roundToTenth(value) {
  return Math.round(value * 10) / 10;
}

function ordinalWord(value) {
  const words = { 3: "third", 4: "fourth", 5: "fifth", 6: "sixth", 7: "seventh", 8: "eighth" };
  return words[value] || `${value}th`;
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
  const studyPlan = buildStudyPlan(results);
  lastResults = {
    student: document.querySelector("#student-name").value.trim() || "Student",
    title: titleEl.textContent,
    meta: metaEl.textContent,
    directions: directionsEl.textContent,
    correct,
    total: currentWorksheet.length,
    percent,
    level,
    studyPlan,
    questions: results,
  };

  scoreCard.hidden = false;
  scoreCard.innerHTML = `<span>Score</span><strong>${correct}/${currentWorksheet.length}</strong><span>${percent}%</span>`;
  renderStudyPlan(studyPlan);
  downloadButton.disabled = false;
  printButton.disabled = false;
  scoreCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function clearStudyPlan() {
  studyPlanEl.hidden = true;
  studyPlanEl.innerHTML = "";
}

function buildStudyPlan(results) {
  const missed = results.filter((question) => !question.isCorrect);
  if (!missed.length) {
    return {
      isPerfect: true,
      summary: "Great work — every answer was correct. Keep skills sharp with one mixed review worksheet later this week.",
      items: [],
    };
  }

  const groups = new Map();
  missed.forEach((question) => {
    const concept = identifyConcept(question);
    if (!groups.has(concept.title)) {
      groups.set(concept.title, { ...concept, questions: [] });
    }
    groups.get(concept.title).questions.push(question);
  });

  const items = [...groups.values()].map((group) => ({
    ...group,
    questionNumbers: group.questions.map((question) => question.number),
    practiceTarget: Math.max(3, group.questions.length * 2),
  }));

  return {
    isPerfect: false,
    summary: `Focus first on ${items.length} concept ${items.length === 1 ? "area" : "areas"} from the missed questions. Rework the missed items, then complete the targeted practice below.`,
    items,
  };
}

function identifyConcept(question) {
  const text = `${question.prompt} ${question.display || ""}`.toLowerCase();
  const conceptRules = [
    { match: ["solve", "equation", "proportion", "system", "inequality", "domain", "inverse"], title: "Equations and algebraic reasoning", focus: "undoing operations in order, balancing both sides, and checking solutions by substitution", practice: "Redo each equation step-by-step and substitute the answer back into the original problem." },
    { match: ["factor", "quadratic", "vertex", "radical", "sqrt", "√", "exponent", "log", "power", "sin", "cos"], title: "Advanced algebra patterns", focus: "recognizing factoring patterns, exponent rules, radicals, logarithm meanings, and trig ratios", practice: "Make a rule card for each missed pattern, then complete several short problems using that rule." },
    { match: ["perimeter", "area", "volume", "circumference", "triangle", "rectangle", "trapezoid", "cylinder", "angle", "pythagorean", "midpoint", "slope"], title: "Geometry and measurement", focus: "choosing the correct formula, substituting values, and labeling units", practice: "Write the formula first, substitute the numbers, and check that the unit matches the question." },
    { match: ["fraction", "/", "simplify"], title: "Fractions and simplification", focus: "finding common denominators, simplifying by greatest common factor, and interpreting numerator/denominator", practice: "Practice simplifying fractions and explaining which common factor you divided out." },
    { match: ["decimal", "percent", "%"], title: "Decimals and percents", focus: "place-value comparisons, decimal-to-percent conversion, and percent-of-a-number problems", practice: "Convert between decimals, fractions, and percents, then solve percent-of problems without a calculator." },
    { match: ["add", "subtract", "multiply", "divide", "regroup", "mean", "unit price"], title: "Arithmetic operations", focus: "accurate computation, regrouping, operation choice, and checking work with inverse operations", practice: "Complete computation drills slowly, showing each place-value or operation step before checking." },
    { match: ["place", "expanded", "hundreds", "tens", "ones", "round", "order", "greatest", "least", "compare", "pattern"], title: "Number sense and place value", focus: "reading place value, comparing numbers, rounding, and spotting patterns", practice: "Underline the place or pattern step first, then solve and explain the comparison or rounding rule." },
    { match: ["probability", "prime", "odd", "even"], title: "Number properties and probability", focus: "classifying numbers, using factors, and writing favorable outcomes over total outcomes", practice: "List factors or outcomes before choosing the answer." },
  ];

  return conceptRules.find((rule) => rule.match.some((keyword) => text.includes(keyword))) || {
    title: "Mixed problem solving",
    focus: "identifying what the question asks and selecting the right strategy",
    practice: "Restate the question in your own words, choose an operation or rule, solve, and check whether the answer is reasonable.",
  };
}

function renderStudyPlan(plan) {
  studyPlanEl.hidden = false;
  studyPlanEl.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = plan.isPerfect ? "Study plan: maintain mastery" : "Study plan based on missed concepts";
  const summary = document.createElement("p");
  summary.textContent = plan.summary;
  studyPlanEl.append(title, summary);

  if (plan.isPerfect) return;

  const list = document.createElement("ol");
  plan.items.forEach((item) => {
    const entry = document.createElement("li");
    entry.innerHTML = `<strong>${escapeHtml(item.title)}</strong><span>Missed question${item.questionNumbers.length === 1 ? "" : "s"}: ${item.questionNumbers.join(", ")}</span><span>Focus: ${escapeHtml(item.focus)}.</span><span>Practice plan: ${escapeHtml(item.practice)} Aim for ${item.practiceTarget} correct practice problems before trying a new worksheet.</span>`;
    list.append(entry);
  });
  studyPlanEl.append(list);
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
  if (question.type === "choice") return selected ? selected.value : "";
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
  if (!cleaned) return "";
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

function sanitizeQuestionForDisplay(question) {
  if (!question.display || !isDisplayAnswer(question.display, question)) return question;
  return { ...question, display: "" };
}

function isDisplayAnswer(display, question) {
  const normalizedDisplay = normalizeAnswerLikeValue(display);
  return getAnswerLikeValues(question).some((answer) => normalizeAnswerLikeValue(answer) === normalizedDisplay);
}

function getAnswerLikeValues(question) {
  return [question.answer, ...(question.accepted || [])].filter((answer) => answer !== undefined && answer !== null);
}

function normalizeAnswerLikeValue(value) {
  return questionDisplayNumber(value) || normalizeText(value);
}

function questionDisplayNumber(value) {
  const normalized = normalizeNumber(value);
  return normalized && /^-?\d+(\.\d+)?$/.test(normalized) ? normalized : "";
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

function downloadReport(report) {
  const blob = new Blob([buildReportHtml(report)], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${slugify(report.student)}-${slugify(report.title)}-graded-worksheet.html`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function openPrintableReport(report) {
  const reportWindow = window.open("", "_blank");
  if (!reportWindow) return;
  reportWindow.document.write(buildReportHtml(report));
  reportWindow.document.close();
  reportWindow.focus();
  reportWindow.print();
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || "worksheet";
}

function buildReportHtml(report) {
  const studyPlan = buildStudyPlanHtml(report.studyPlan);
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
          .study-plan-report, .report-question { border: 1px solid #d9e1ef; border-radius: 10px; margin: 12px 0; padding: 12px; page-break-inside: avoid; }
          .study-plan-report { background: #f8fbff; }
          .study-plan-report li { margin: 10px 0; }
          .report-question { border-left-width: 8px; }
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
        ${studyPlan}
        ${rows}
      </body>
    </html>`;
}

function buildStudyPlanHtml(plan) {
  if (!plan) return "";
  if (plan.isPerfect) {
    return `<section class="study-plan-report"><h2>Study plan</h2><p>${escapeHtml(plan.summary)}</p></section>`;
  }

  const items = plan.items
    .map(
      (item) => `<li><strong>${escapeHtml(item.title)}</strong><br />Missed questions: ${item.questionNumbers.join(", ")}<br />Focus: ${escapeHtml(item.focus)}.<br />Practice plan: ${escapeHtml(item.practice)} Aim for ${item.practiceTarget} correct practice problems before trying a new worksheet.</li>`,
    )
    .join("");
  return `<section class="study-plan-report"><h2>Study plan based on missed concepts</h2><p>${escapeHtml(plan.summary)}</p><ol>${items}</ol></section>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);
}
