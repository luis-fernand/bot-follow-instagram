/*
O objetivo não é abusar desse recurso, mas sim facilitar a vida do usuário...
Por esse motivo adicionei um limite (30) através do for (estou aprendendo a usar esse recurso)
Assim como a função setTimeout é para não ser penalisado pelo sistema.
*/
for (let contador = 0; contador < 2; contador++) {
    document.querySelectorAll('.sqdOP.L3NKy.y3zKF').forEach((item, index) => {
        setTimeout(() => {
            if(!item.classList.contains('._8A5w5')) {
                item.click();
                console.log(`Já seguiu ${contador} pessoas.`);
            }
        }, index * 10000);
    });
}