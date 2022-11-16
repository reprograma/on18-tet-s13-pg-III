const app = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Get your kicks on route  ${PORT}`));
