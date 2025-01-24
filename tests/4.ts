const faturamentoMensal = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

const valorTotalMensal = Object.values(faturamentoMensal).reduce((acc, valor) => acc + valor, 0);

const percentuais = {};
Object.keys(faturamentoMensal).forEach((estado) => {
    const percentual = (faturamentoMensal[estado] / valorTotalMensal) * 100;
    percentuais[estado] = percentual.toFixed(2);
});

console.log('Percentual de representação de cada estado:');
Object.keys(percentuais).forEach((estado) => {
    console.log(`${estado}: ${percentuais[estado]}%`);
});