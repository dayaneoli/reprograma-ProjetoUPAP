const app = require("./src/app");
const PORT = process.env.PORT || 9000;


app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));