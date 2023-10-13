import { graphql, buildSchema } from 'graphql';
// 1: Побудова схеми з використанням GraphQL
let schema = buildSchema(`
type Query {
hello: String
}
`);
// 2: Визначення функції отримання значення поля
let root = {
    hello: () => {
        return 'Hello!';
    },
};
// 3: Формування GraphQL-запиту
graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});