# REST API Client

A lightweight, pure JavaScript client for making REST API requests. This client supports all standard HTTP methods and provides a flexible way to set headers and query parameters.

## Features

- Support for GET, POST, PUT, PATCH, DELETE, and OPTIONS HTTP methods
- Configurable base URL
- Easy-to-use header management, including support for Bearer token authentication
- Query parameter management
- Promise-based for easy asynchronous operations
- No external dependencies

## Installation

1. Download the `rest-api-client.js` file.
2. Include it in your project directory.

## Usage

### Including in HTML

```html
<script src="path/to/rest-api-client.js"></script>
```

### Basic Usage

```javascript
// Create a new instance of the API client
const apiClient = new RestApiClient();

// Set up the client
apiClient.setBaseUrl('https://api.example.com');
apiClient.setHeader('Authorization', 'Bearer your-token-here');

// Make a GET request
apiClient.get('/users')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Make a POST request
apiClient.post('/users', { name: 'John Doe', email: 'john@example.com' })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Setting Headers

```javascript
// Set a single header
apiClient.setHeader('Custom-Header', 'Value');

// Set multiple headers
apiClient.setHeaders({
  'Authorization': 'Bearer your-token-here',
  'Custom-Header': 'Value'
});
```

### Managing Query Parameters

```javascript
// Set a single parameter
apiClient.setParam('page', '1');

// Set multiple parameters
apiClient.setParams({ page: '1', limit: '10' });

// Clear all parameters
apiClient.clearParams();
```

## API Reference

### Methods

- `setBaseUrl(url)`: Set the base URL for API requests
- `setHeader(key, value)`: Set a single header
- `setHeaders(headers)`: Set multiple headers
- `setParam(key, value)`: Set a single query parameter
- `setParams(params)`: Set multiple query parameters
- `clearParams()`: Clear all query parameters
- `get(endpoint)`: Make a GET request
- `post(endpoint, data)`: Make a POST request
- `put(endpoint, data)`: Make a PUT request
- `patch(endpoint, data)`: Make a PATCH request
- `delete(endpoint)`: Make a DELETE request
- `options(endpoint)`: Make an OPTIONS request

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

## Support

If you have any questions or need help using the library, please open an issue on the GitHub repository.
