export const samplePrompts = [
  "Create a function that reverse a string",
  "Implement a todo list component in React",
  "Write a Python script to download files from URL",
  "Create a REST API endpoint for user authentication",
];

export const sampleCode = `
// Sample: Fibonacci function
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
`;

export const sampleBuggyCode = `
function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {
        total += items[i].price;
    }
    return total;
}
`;

export const sampleError = "TypeError: Cannot read properties of undefined.";

// examples.ts
export const samplePromptsWithLanguages = [
  {
    language: "Java",
    description: "Create a function that reverses a string efficiently.",
  },
  {
    language: "JavaScript",
    description: "Build a debounce utility function with configurable delay.",
  },
  {
    language: "Python",
    description:
      "Write a script to download files from a URL with error handling.",
  },
  {
    language: "TypeScript",
    description:
      "Implement a REST API endpoint for user authentication using JWT.",
  },
  {
    language: "C++",
    description:
      "Implement a function to find the longest palindromic substring.",
  },
  {
    language: "Auto (KernelAI intelligently selects the best language)",
    description:
      "Write a query to find the second highest salary from an employee table.",
  },
  {
    language: "Go",
    description: "Design a rate limiter using Redis.",
  },
];

export const languages = [
  "Auto (KernelAI intelligently selects the best language)",
  "Java",
  "Python",
  "C++",
  "TypeScript",
  "JavaScript",
  "C",
  "Kotlin",
  "C#",
  "SQL",
  "Go",
  "Rust",
  "Ruby",
  "Swift",
  "Bash",
  "PHP",
  "HTML",
  "CSS",
  "JSON",
  "YAML",
  "Markdown",
];
