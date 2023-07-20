import {describe, expect, test} from '@jest/globals';
import { capitalize, isEven, multiply,fizzBuzz } from "./functions";

test("capitalize function capitalizes the first letter of a word", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("multiply function multiplies two numbers correctly", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("isEven function return true passing a even number", () => {
  expect(isEven(2)).toBeTruthy();
});

test("isEven function return false passing a odd number", () => {
  expect(isEven(5)).toBeFalsy();
});

test("fizzBuzz function return fizz passing a number multiple of 3", () => {
  expect(fizzBuzz(9)).toBe('fizz');
});

test("fizzBuzz function return buzz passing a number multiple of 5", () => {
  expect(fizzBuzz(20)).toBe('buzz');
});

test("fizzBuzz function return fizzbuzz passing a number multiple of 3 and 5", () => {
  expect(fizzBuzz(30)).toBe('fizzbuzz');
});

test("fizzBuzz function return the number passing a number that isnt multiple of 3 or 5", () => {
  expect(fizzBuzz(7)).toBe(7);
});