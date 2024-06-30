import React from "react";
import BmiChart from "./BmiChart";
import { useState } from "react";
import { Stack, Button } from "@mui/material";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [degree, setDegree] = useState(0);
  const [bmi, setBmi] = useState();
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [isNormal, setIsNormal] = useState("");

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  };

  const resetResults = () => {
    setBmi();
    setDegree(0);
    setHeight("");
    setWeight("");
    setResults(null);
  };

  const calculateResults = () => {
    if (!height || !weight) {
      setError("Please enter both height and weight.");
      return;
    }
    setError("");
    const bmi = calculateBMI(height, weight);
    const healthyBMILower = 18.5;
    const healthyBMIUpper = 24.9;
    const healthyWeightLower =
      healthyBMILower * (height / 100) * (height / 100);
    const healthyWeightUpper =
      healthyBMIUpper * (height / 100) * (height / 100);
    const bmiPrime = bmi / 25;
    const ponderalIndex =
      weight / ((height / 100) * (height / 100) * (height / 100));
    const weightAdjustment =
      bmi < healthyBMILower
        ? healthyWeightLower - weight
        : weight - healthyWeightUpper;
    let bmiMeter = (bmi - 13) * 6;
    // setDegree((prev) => (prev + 90) % 360);
    setDegree(bmiMeter.toFixed(2));
    setResults({
      bmi,
      healthyBMIRange: `${healthyBMILower} - ${healthyBMIUpper}`,
      healthyWeightRange: `${healthyWeightLower.toFixed(
        2
      )} kg - ${healthyWeightUpper.toFixed(2)} kg`,
      weightAdjustment:
        bmi < healthyBMILower
          ? `Gain ${weightAdjustment.toFixed(2)} kg`
          : bmi > healthyBMIUpper
          ? `Lose ${weightAdjustment.toFixed(2)} kg`
          : ` You are in the healthy range`,
      bmiPrime: bmiPrime.toFixed(2),
      ponderalIndex: ponderalIndex.toFixed(2),
    });
    setBmi(bmi);
    if (bmi < 16) {
      setIsNormal("Severe thinness");
    } else if (bmi < 17) {
      setIsNormal("Moderate thinness");
    } else if (bmi < healthyBMILower) {
      setIsNormal("Underweight");
    } else if (bmi > 40) {
      setIsNormal("Obese Class III");
    } else if (bmi > 35) {
      setIsNormal("Obese Class II");
    } else if (bmi > 30) {
      setIsNormal("Obese Class I");
    } else if (bmi > healthyBMIUpper) {
      setIsNormal("Overweight");
    } else {
      setIsNormal("Normal");
    }
  };
  return (
    <Stack
      className="bmiCalculator"
      flexDirection="column"
      gap="20px"
      alignItems="center"
    >
      <h1>BMI Calculator</h1>
      {degree < 180 && degree >= 0 && <BmiChart bmi={bmi} degree={degree} />}
      <Stack>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => {
              // setDegree(1);
              setHeight(e.target.value);
            }}
            required
          />
        </label>
      </Stack>
      <Stack>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => {
              // setDegree(1);
              setWeight(e.target.value);
            }}
            required
          />
        </label>
      </Stack>
      <Stack flexDirection="row" gap="20px">
        <Button
          variant="contained"
          sx={{
            width: "130px",
            backgroundColor: "rgb(35, 180, 98)",
            fontSize: "10px",
            letterSpacing: "2px",
            fontWeight: "700",
            // borderRadius: "20px",

            // wordBreak: 'break-word',
          }}
          onClick={calculateResults}
        >
          Calculate
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "130px",
            backgroundColor: "rgba(244,70,48, 0.8)",
            fontSize: "10px",
            letterSpacing: "2px",
            fontWeight: "700",
          }}
          onClick={resetResults}
        >
          reset
        </Button>
      </Stack>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {results && (
        <Stack className="results">
          <h2>Results</h2>
          <p>
            <strong>BMI:</strong> {results.bmi} (
            <strong
              style={{
                color:
                  isNormal === "Underweight" || isNormal === "Overweight"
                    ? "yellow"
                    : isNormal === "Obese Class I" ||
                      isNormal === "Moderate thinness"
                    ? "rgb(252, 107, 107)"
                    : isNormal === "Obese Class II" ||
                      isNormal === "Severe thinness"
                    ? "red"
                    : isNormal === "Obese Class III"
                    ? "darkred"
                    : "green",
              }}
            >
              {isNormal}
            </strong>
            )
          </p>
          <p>
            <strong>Healthy BMI Range:</strong> {results.healthyBMIRange}
          </p>
          <p>
            <strong>Healthy Weight Range:</strong> {results.healthyWeightRange}
          </p>
          <p>
            <strong>Weight Adjustment Needed:</strong>
            {results.weightAdjustment}
          </p>
          <p>
            <strong>BMI Prime:</strong> {results.bmiPrime}
          </p>
          <p>
            <strong>Ponderal Index:</strong> {results.ponderalIndex}
          </p>
          <h3 style={{ textAlign: "center" }}>
            <strong>BMI introduction</strong>
          </h3>
          <p style={{ textAlign: "justify" }}>
            BMI is a measurement of a person's leanness or corpulence based on
            their height and weight, and is intended to quantify tissue mass. It
            is widely used as a general indicator of whether a person has a
            healthy body weight for their height. Specifically, the value
            obtained from the calculation of BMI is used to categorize whether a
            person is underweight, normal weight, overweight, or obese depending
            on what range the value falls between. These ranges of BMI vary
            based on factors such as region and age, and are sometimes further
            divided into subcategories such as severely underweight or very
            severely obese. Being overweight or underweight can have significant
            health effects, so while BMI is an imperfect measure of healthy body
            weight, it is a useful indicator of whether any additional testing
            or action is required. Refer to the table below to see the different
            categories based on BMI that are used by the calculator.
          </p>
        </Stack>
      )}
    </Stack>
  );
};

export default BmiCalculator;
