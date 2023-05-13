const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'Questo modulo non funziona con il tipo di mappa "Mapkit" dovuto ad alcune limitazioni di Mapkit ',
        dev: "Questo modulo è attualmente ancora in fase di sviluppo. L'attivazione può portare a funzioni incomplete e difettose!",
        closeWarning: {
            title: 'Cambiamenti non salvati',
            text: "Hai apportato modifiche nell'AppStore che non sono state ancora salvate. Resettali o salvali per chiudere l'AppStore.",
            abort: 'Cancella',
            saveAndExit: 'Salvare e uscire',
            exit: 'Chiudi il messaggio',
        },
    },
    settings: {
        name: 'Impostazioni',
        save: 'Salva',
        discard: 'Annulla i Cambiamenti',
        reset: 'Resetta',
        export: 'Esporta',
        import: 'Importa',
        donate: 'donate voluntarily',
        resetWarning: {
            title: 'Resetta i cambiamenti',
            text: 'Vuoi davvero ripristinare le impostazioni ai valori predefiniti? Questo non può essere annullato!',
            close: 'Annulla',
            total: 'Tutte le impostazioni',
            module: 'Solo per questo modulo',
        },
        resetWarningSetting: {
            title: 'Reset impostazioni',
            text: 'Volete davvero ripristinare questa impostazione <b>{setting}</b> del modulo <b>{modul}</b> al suo valore di default?',
            close: 'Annulla',
            reset: 'Resetta',
        },
        closeWarning: {
            title: 'Cambiamenti non salvati',
            text: 'Hai apportato modifiche alle impostazioni che non sono ancora state salvate. Ripristinarli, eliminarli o salvarli per chiudere le impostazioni.',
            abort: 'Cancella',
            saveAndExit: 'Salvare e uscire',
            exit: 'Uscire senza salvare',
        },
        changeList: {
            true: 'Su',
            false: 'Off',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        'Vigili del Fuoco': {
            buildings: [0, 1, 15, 18, 24],
            color: '#ff2d2d',
        },
        'Soccorso': {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        'Polizia': {
            buildings: [6, 8, 19, 13, 21],
            color: '#00ac00',
        },
        'Altro': {
            buildings: [7, 14, 22, 23],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Vigili del Fuoco': {
            vehicles: {
                'Autopompa': [0, 9],
                'Kilolitrica': [5],
                'Veicoli speciali': [1, 2, 3, 6, 10, 11, 12, 26, 37],
                'Soccorso in acqua': [23, 24, 25],
                'Mezzi AIB': [28, 29, 30, 31, 32, 33, 34, 35],
            },
            color: '#ff2d2d',
        },
        'Soccorso': {
            vehicles: {
                Ambulanza: [4, 20, 27],
                Elisoccorso: [8],
                Medica: [18, 19, 36],
            },
            color: '#ffa500',
        },
        'Polizia': {
            vehicles: {
                'Volante': [7],
                'UOPI': [14, 17, 22],
                'Moto Polizia': [16],
                'Elicottero': [13],
                'Antidroga': [15],
                'Finanza': [21],
                'New': [38, 39, 40, 41],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    amount: 'Quantità',
    search: 'Cerca',
    alliance: 'Alleanza',
    premiumNotice: "Quest'opzione è permessa solo ad utenti premium",
    credits: 'Crediti',
    coins: 'Monete',
    close: 'Chiudi',
    fullscreen: {
        expand: 'Attiva modalità schermo intero',
        compress: 'Disabilita modalità schermo intero',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Edifici',
    station: 'stazioni | Stazione | Stazioni',
    distance: 'Distanza | Distanze',
    vehicleType: 'Tipo di veicolo',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Parco',
        'Lago',
        'Ospedale',
        'Bosco',
        "Fermata dell'autobus",
        'Fermata del tram',
        'Stazione ferroviaria (traffico regionale)',
        'Stazione ferroviaria (traffico regionale e viaggi a lunga distanza)',
        'Stazione merci',
        'Supermercato (piccolo)',
        'Supermercato (grande)',
        'Stazione di servizio',
        'Scuola',
        'Museo',
        'Centro commerciale',
        'Officina meccanica',
        'Uscita autostradale',
        'Mercatino di Natale',
        'Discoteca',
        'Stadio',
        'Azienda agricola',
        'Edificio adibito a uffici',
        'Piscina',
        'Passaggio a livello',
        'Teatro',
        'Luna park',
        'Fiume',
        'Piccolo aeroporto (pista)',
        'Grande aeroporto (pista)',
        'Terminal aeroporto',
        'Banca',
        'Magazzino',
        'Ponte',
        'Tavola calda',
        'Porto mercantile',
        'Piattaforma ecologica',
        'Grattacielo',
        'Molo navi da crociera',
        'Porticciolo',
        'Passaggio a livello pedonale',
        'Galleria',
        'Magazzino a celle frigorifere',
        'Centrale elettrica',
        'Fabbrica',
        'Deposito rottami',
        'Stazione metropolitana',
        'Piccolo serbatoio di accumulo sostanze chimiche',
        'Grande serbatoio di accumulo sostanze chimiche',
        'Hotel',
        'Bar',
        'Discarica',
        'Parcheggio coperto',
        'Silos',
        'Centro della città',
        'Laboratorio di Ricerca',
        'Campo sportivo',
        'Collina',
        'Campo',
        'Brughiera',
        'Gariga',
        'Cascina',
        'Campeggio',
        'Autogrill',
        'Piazzola di Sosta',
        'Chiesa',
        'Scogliera',
        'Spiaggia',
        'Ufficio Postale',
        'Raffineria di Petrolio',
        'Impianto Chimico',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [214],
    ranks: {
        missionchief: {
            0: 'Vigile del fuoco',
            200: 'Vigile del fuoco esperto',
            10_000: 'Vigile del fuoco coordinatore',
            100_000: 'Caposquadra',
            1_000_000: 'Caposquadra esperto',
            5_000_000: 'Caporeparto',
            20_000_000: 'Caporeparto esperto',
            50_000_000: 'Ispettore antincendi',
            1_000_000_000: 'Direttore antincendi capo esperto',
            2_000_000_000: 'Dirigente generale',
            5_000_000_000: 'Dirigente generale Capo del Corpo',
        },
        policechief: {
            0: 'Agente',
            200: 'Agente scelto',
            10_000: 'Assistente',
            100_000: 'Assistente capo',
            1_000_000: 'Sovrintendente',
            5_000_000: 'Ispettore',
            20_000_000: 'Ispettore capo',
            50_000_000: 'Commissario',
            1_000_000_000: 'Commissario capo',
            2_000_000_000: 'Vice questore',
            5_000_000_000: 'Questore',
        },
    },
};
