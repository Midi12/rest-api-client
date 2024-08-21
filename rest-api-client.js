const RestApiClient = (function () {
    function makeRequest(url, method = 'GET', data = null) {
        let fullUrl = url;
        if (this.params && Object.keys(this.params).length > 0) {
            const queryString = new URLSearchParams(this.params).toString();
            fullUrl = `${url}?${queryString}`;
        }

        const options = {
            method,
            headers: this.headers,
        };

        if (data && ['POST', 'PUT', 'PATCH'].includes(method)) {
            options.body = JSON.stringify(data);
        }
        return fetch(fullUrl, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            });
    }


    function ApiClient() {
        this.baseUrl = '';
        this.headers = {
            'Content-Type': 'application/json'
        };
        this.params = {};
    }

    ApiClient.prototype = {

        setBaseUrl: function (url) {
            this.baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
        },


        setHeader: function (key, value) {
            this.headers[key] = value;
        },


        setHeaders: function (headers) {
            this.headers = { ...this.headers, ...headers };
        },


        setParam: function (key, value) {
            this.params[key] = value;
        },


        setParams: function (params) {
            this.params = { ...this.params, ...params };
        },


        clearParams: function () {
            this.params = {};
        },


        get: function (endpoint) {
            return makeRequest.call(this, `${this.baseUrl}${endpoint}`, 'GET');
        },

        post: function (endpoint, data = {}) {
            return makeRequest.call(this, `${this.baseUrl}${endpoint}`, 'POST', data);
        },

        put: function (endpoint, data = {}) {
            return makeRequest.call(this, `${this.baseUrl}${endpoint}`, 'PUT', data);
        },

        patch: function (endpoint, data = {}) {
            return makeRequest.call(this, `${this.baseUrl}${endpoint}`, 'PATCH', data);
        },

        delete: function (endpoint) {
            return makeRequest.call(this, `${this.baseUrl}${endpoint}`, 'DELETE');
        },

        options: function (endpoint) {
            return makeRequest.call(this, `${this.baseUrl}${endpoint}`, 'OPTIONS');
        }
    };

    return ApiClient;
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = RestApiClient;
}