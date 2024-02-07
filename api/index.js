const prism = require('@stoplight/prism-cli');

exports.handler = async (event, context) => {
  // Parse request body (if applicable)
  const requestBody = JSON.parse(event.body);

  // Generate mock response using Yamlinc and Prism
  const response = await prism.mock(
    '../prism.yaml', // Replace with your YAML file path
    { requestBody } // Optional: Pass request body data
  );

  // Return the mock response as JSON
  return {
    statusCode: response.statusCode,
    headers: response.headers,
    body: JSON.stringify(response.body),
  };
};
