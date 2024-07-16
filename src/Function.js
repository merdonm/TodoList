try {
    let result = riskyOperation();  // This function might throw an error
    console.log("Result:", result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
  