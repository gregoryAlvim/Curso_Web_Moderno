// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130



const identificarValorPlanoSaude = (idade) => {

    let valores = {
        valorFixo: 100,
    
        valorDoConvenio: {
            convenio1: 80, // Abaixo de 10 anos.
            convenio2: 50, // Entre 10 até 30 anos.
            convenio3: 95, // Entre 30 até 60 anos.
            convenio4: 130, // Acima de 60 anos.
    
        }
    };


    if ( idade > 0 && idade < 10 ) {

        console.log(`Valor total do plano de saúde com convenio conforme idade: ${(valores.valorFixo + valores.valorDoConvenio.convenio1).toFixed(2).toString().replace(".", ",")}`);

    } else if (idade >=10 && idade < 30 ) {

        console.log(`Valor total do plano de saúde com convenio conforme idade: ${(valores.valorFixo + valores.valorDoConvenio.convenio2).toFixed(2).toString().replace(".", ",")}`);

    } else if ( idade >= 30 && idade < 60 ) {

        console.log(`Valor total do plano de saúde com convenio conforme idade: ${(valores.valorFixo + valores.valorDoConvenio.convenio3).toFixed(2).toString().replace(".", ",")}`);

    } else if ( idade > 60 ) {

        console.log(`Valor total do plano de saúde com convenio conforme idade: ${(valores.valorFixo + valores.valorDoConvenio.convenio4).toFixed(2).toString().replace(".", ",")}`);

    } else {

        console.log('ERRo - Campo Inválido!')
    }
};
identificarValorPlanoSaude(0)
identificarValorPlanoSaude(9)
identificarValorPlanoSaude(10)
identificarValorPlanoSaude(31)
identificarValorPlanoSaude(61)
