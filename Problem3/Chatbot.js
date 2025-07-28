function getResponse(message) {
    const msg = message.toLowerCase();

    if (msg.includes('node')) {
        return "Node.js is a JavaScript runtime built on Chrome's V8 engine. It’s used to build scalable network applications.";
    } else if (msg.includes('express')) {
        return "Express.js is a minimal and flexible Node.js web application framework that provides robust features for web and mobile apps.";
    } else if (msg.includes('mongodb')) {
        return "MongoDB is a NoSQL database that stores data in JSON-like documents. It’s flexible and scalable.";
    } else if (msg.includes('rest api')) {
        return "REST APIs are web services that follow the REST architecture, using HTTP methods to access resources.";
    } else if (msg.includes('authentication')) {
        return "Authentication verifies who a user is. You can use tools like JWT, OAuth, or sessions in Node.js.";
    } else if (msg.includes('middleware')) {
        return "Middleware in Express.js are functions that execute during the request-response cycle. They can modify request/response objects.";
    } else if (msg.includes('database')) {
        return "Databases store and retrieve application data. MongoDB, PostgreSQL, and MySQL are common choices.";
    } else if (msg.includes('bye')) {
        return "Goodbye! Keep learning backend tech.";
    } else {
        return "I'm a backend tech bot. Ask me about Node.js, Express, MongoDB, REST APIs, and more!";
    }
}

module.exports = { getResponse };
