// tests/index.ts
import { glob } from 'glob';

glob.sync('./tests/*.ts').forEach((file) => {
    console.log(file);
    import(file);
});