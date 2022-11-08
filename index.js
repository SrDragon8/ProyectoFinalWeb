const user = {
    client_id,
    name,
    lastname,
    card: {
        nip,              /* -este sería "el id" de la tarjeta */
        number,
        cvv,
        type,             /* -débito o crédito */
        money             /* -el saldo disponible */
    },
    phone,
    status                /* -el valor es bool (0=al dia con sus pagos, 1=atrasado de pagos) */
}