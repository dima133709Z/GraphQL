import express from 'express';
import schema from './schema';  // Імпортуємо схему GraphQL
import { graphql } from 'graphql';
import bodyParser from 'body-parser';

let app = express();
let port = 4002;

// Використовуємо модуль 'body-parser' для обробки тіла POST-запиту як тексту з типом 'application/graphql'
app.use(bodyParser.text({ type: 'application/graphql' }));

// Створюємо POST-маршрут '/graphql' для обробки запитів GraphQL
app.post('/graphql', (req, res) => {
    // Виконуємо запит до схеми GraphQL з використанням тіла POST-запиту
    graphql(schema, req.body).then((result) => {
        // Відправляємо результат у форматі JSON
        res.send(JSON.stringify(result, null, 2));
    });
});

let server = app.listen(port, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log('No-GraphQL is listening at http://%s:%s', host, port);
});
