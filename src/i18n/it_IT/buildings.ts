import type { InternalBuilding } from 'typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (
    extension: Extension | ((index: number) => Extension),
    amount: number
): Extension[] =>
    typeof extension === 'function'
        ? new Array(amount).fill('0').map((_, index) => extension(index))
        : new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Caserma dei vigili del fuoco',
        color: '#bb0000',
        coins: 30,
        credits: 100_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(22).fill(100_000)],
            coins: [10, 15, ...Array(22).fill(20)],
        },
        extensions: [
            {
                caption: 'Estensione ambulanze',
                credits: 100_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '7 Giorni',
                unlocksVehicleTypes: [4, 18, 19, 20],
            },
            {
                caption: 'Estensione soccorso acquatico VVF',
                credits: 100_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '7 Giorni',
                unlocksVehicleTypes: [23, 24, 25],
            },
            {
                caption: 'Anticendio Boschivo',
                credits: 50_000,
                coins: 15,
                isVehicleExtension: true,
                duration: '7 Giorni',
                unlocksVehicleTypes: [29, 30, 31, 32, 33],
            },
            {
                caption: 'Soccorso di Massa',
                credits: 150_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '5 Giorni',
                requiredExtensions: [0],
                unlocksVehicleTypes: [36],
                givesParkingLots: 2,
                parkingLotReservations: [[36], [36]],
            },
            {
                caption: 'Sistema schiumogeno',
                credits: 50_000,
                coins: 15,
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [37],
                giftsVehicles: [37],
                duration: '5 Giorni',
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
        maxBuildings: 'Nessun limite',
        maxLevel: 16,
        special:
            'Dalla 24° Caserma ,i costi aumentano con questa formula: <code>100.000+200.000*LOG<sub>2</sub>(Numero di caserme dei vigili del fuoco esistenti − 22)</code>. Il prezzo delle monete rimane costante!',
        startPersonnel: 10,
        startVehicles: ['ABP, APS'],
        schoolingTypes: ['Caserma dei vigili del fuoco'],
        schools: [1],
        startParkingLots: 1,
        icon: 'fire-flame-curved',
    },
    1: {
        caption: 'Scuola dei vigili del fuoco',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: multiplyExtension(
            {
                caption: 'Altre classi',
                credits: 400_000,
                coins: 40,
                duration: '7 Giorni',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 0,
        special:
            "L'amministratore Finanziario dell'alleanza può costruire ed espandere le accademie usando i fondi dell'Alleanza, L'educatore dell'alleanza può aprire i corsi all'interno dell'accademia",
        startClassrooms: 1,
        school: 'Caserma dei vigili del fuoco',
        icon: 'graduation-cap',
    },
    2: {
        caption: 'Stazione ambulanze',
        color: '#ffa500',
        coins: 35,
        credits: 200_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(14).fill(100_000)],
            coins: [10, 15, ...Array(14).fill(20)],
        },
        extensions: [
            {
                caption: 'MaxiEmergenza',
                credits: 150_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '5 Giorni',
                unlocksVehicleTypes: [36],
                givesParkingLots: 2,
                parkingLotReservations: [[36], [36]],
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: 'Nessun limite',
        maxLevel: 16,
        special: '',
        startPersonnel: 3,
        startParkingLots: 1,
        startVehicles: ['Ambulanza BLSD'],
        schoolingTypes: ['Soccorso'],
        schools: [3],
        icon: 'house-medical',
    },
    3: {
        caption: 'Scuola di formazione emergenza sanitaria (EMS)',
        color: '#ddc722',
        coins: 50,
        credits: 500_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: multiplyExtension(
            {
                caption: 'Altre classi',
                credits: 400_000,
                coins: 40,
                duration: '7 Giorni',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 0,
        special:
            "L'amministratore Finanziario dell'alleanza può costruire ed espandere le accademie usando i fondi dell'Alleanza, l'educatore dell'alleanza può aprire i corsi all'interno dell'accademia",
        startClassrooms: 1,
        school: 'Soccorso',
        icon: 'graduation-cap',
    },
    4: {
        caption: 'Ospedale',
        color: '#bbe944',
        coins: 25,
        credits: 200_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [
            {
                caption: 'Medicina interna generale',
                credits: 10_000,
                coins: 10,
                duration: '7 Giorni',
                cannotDisable: true,
            },
            {
                caption: 'Chirurgia generale',
                credits: 10_000,
                coins: 10,
                duration: '7 Giorni',
                cannotDisable: true,
            },
            {
                caption: 'Ginecologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Urologia',
                credits: 70_000,
                coins: 15,
                duration: '7 giorni',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Traumatologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Neurologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Neurochirurgia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Cardiologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Chirurgia Cardiaca',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [1],
                cannotDisable: true,
            },
            {
                caption: 'Psichiatria',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Oncologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Gastroenterologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Oculistica',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Otorinolaringoiatria',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Dermatologia',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
            {
                caption: 'Malattie infettive',
                credits: 70_000,
                coins: 15,
                duration: '7 Giorni',
                requiredExtensions: [0],
                cannotDisable: true,
            },
        ],
        levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
        maxBuildings: 'No limit',
        maxLevel: 20,
        special:
            "L'Amministratore finanziario ed l'Admin Alleanza ,possono espandere e costruire gli ospedali usando i fondi alleanza",
        startBeds: 10,
        icon: 'hospital',
    },
    5: {
        caption: 'Base elisoccorso',
        color: '#e7ad2f',
        coins: 50,
        credits: 1_000_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 'see specials',
        maxLevel: 0,
        special:
            'Fino al 125esimo edificio (di qualsiasi tipo) potranno essere solo 4, arrivati a questo numero sarà possibile aumentrali di uno ogni 25 edifici',
        startPersonnel: 0,
        startVehicles: [],
        schoolingTypes: ['Soccorso'],
        schools: [3],
        startParkingLots: 1,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        icon: 'circle-h',
    },
    6: {
        caption: 'Stazione di polizia',
        color: '#007700',
        coins: 35,
        credits: 100_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(14).fill(100_000)],
            coins: [10, 15, ...Array(14).fill(20)],
        },
        extensions: [
            {
                caption: 'Cella della prigione',
                credits: 25_000,
                coins: 5,
                duration: '7 giorni',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Altra cella',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
            {
                caption: 'Polizia Stradale',
                credits: 100_000,
                coins: 15,
                duration: '5 giorni',
                cannotDisable: true,
            },
            {
                caption: 'Forestale',
                credits: 75_000,
                coins: 15,
                duration: '5 giorni',
                cannotDisable: true,
            },
            {
                caption: 'Idrante Antisommossa',
                credits: 150_000,
                coins: 25,
                duration: '5 giorni',
                cannotDisable: true,
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
        maxBuildings: 'Nessun limite',
        maxLevel: 16,
        special:
            'Dalla 24° caserma i costi aumenteranno secondo la seguente formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Volante'],
        schoolingTypes: ['Polizia'],
        schools: [8],
        startParkingLots: 1,
        startCells: 0,
        icon: 'building-shield',
    },
    7: {
        caption: 'Centrale operativa',
        color: '#24c3ae',
        coins: 0,
        credits: 0,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 'Ogni 25 edifici una centrale operativa',
        maxLevel: 0,
        special: 'La Centrale operativa è il centro amministrativo.',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
        icon: 'tower-broadcast',
    },
    8: {
        caption: 'Accademia della Polizia',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: multiplyExtension(
            {
                caption: 'Altre classi',
                credits: 400_000,
                coins: 40,
                duration: '7 giorni',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'No limit',
        maxLevel: 0,
        special:
            "L'amministratore Finanziario dell'alleanza può costruire ed espandere le accademie usando i fondi dell'Alleanza, L'educatore dell'alleanza può aprire i corsi all'interno dell'accademia",
        startClassrooms: 1,
        school: 'Polizia',
        icon: 'graduation-cap',
    },
    13: {
        caption: 'Elibase polizia',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        levelPrices: {
            credits: [1_000_000],
            coins: [50],
        },
        extensions: [],
        levelcost: ['1. 1.000.000 Credits / 50 Coins'],
        maxBuildings: 'see specials',
        maxLevel: 1,
        special:
            '2 piste di atterraggio possono essere costruite per stazione . Fino al 125esimo edificio (di tutti i tipi) potranno essere solo 4, arrivati a questo numero sarà possibile aumentrali di uno ogni 25 edifici.',
        startPersonnel: 3,
        startVehicles: [],
        schoolingTypes: ['Polizia'],
        schools: [8],
        startParkingLots: 1,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        icon: 'helicopter',
    },
    14: {
        caption: 'Base temporanea',
        color: '#c259b5',
        coins: 0,
        credits: 0,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 1,
        maxLevel: 0,
        special:
            "Puoi far stazionare quanti veicoli vuoi all'interno della base temporanea. Tuoi o dei membri della tua alleanza. Avrà una durata massima di ventiquattro ore, dopo di che scadrà, rilasciando tutti i veicoli. Potrai rinnovarla per altre 24 ore prima che scada.",
        isStagingArea: true,
        maxBuildingsFunction: (): number => 1,
        icon: 'warehouse',
    },
    15: {
        caption: 'Caserma soccorso acquatico VVF',
        color: '#7fffd4',
        coins: 50,
        credits: 500_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(3).fill(100_000)],
            coins: [10, 15, ...Array(3).fill(20)],
        },
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Nessun limite',
        maxLevel: 5,
        special: 'Avrete 10 persone e un Pickup SAF gratis.',
        startPersonnel: 10,
        startVehicles: ['Pickup SAF'],
        schoolingTypes: ['Soccorso'],
        schools: [3],
        startParkingLots: 1,
        icon: 'person-swimming',
    },
    16: {
        caption: 'Carcere',
        color: '#00ff00',
        coins: -1,
        credits: 100_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [
            {
                caption: 'Cella della prigione',
                credits: 25_000,
                coins: 5,
                duration: '7 giorni',
                newCells: 1,
                cannotDisable: true,
            },
            ...multiplyExtension(
                {
                    caption: 'Altra cella',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 giorni',
                    newCells: 1,
                    cannotDisable: true,
                },
                9
            ),
            ...multiplyExtension(
                {
                    caption: 'Altra cella',
                    credits: 50_000,
                    coins: 5,
                    duration: '7 giorni',
                    newCells: 1,
                    cannotDisable: true,
                },
                10
            ),
        ],
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 0,
        special:
            "Questo edificio può essere costruito solo dagli amministratori dell'alleanza",
        startCells: 1,
        icon: 'border-all',
    },
    18: {
        caption: 'Caserma dei vigili del fuoco (piccola)',
        color: '#aa1111',
        coins: 25,
        credits: 50_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(3).fill(100_000)],
            coins: [10, 15, ...Array(3).fill(20)],
        },
        extensions: [
            {
                caption: 'Estensione ambulanze',
                credits: 100_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '7 Giorni',
                unlocksVehicleTypes: [4, 18, 19, 20],
            },
            {
                caption: 'Estensione soccorso acquatico VVF',
                credits: 100_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '7 Giorni',
                unlocksVehicleTypes: [23, 24, 25],
            },
            {
                caption: 'Anticendio Boschivo',
                credits: 50_000,
                coins: 15,
                isVehicleExtension: true,
                duration: '7 Giorni',
                unlocksVehicleTypes: [29, 30, 31, 32, 33],
            },
            {
                caption: 'Soccorso di Massa',
                credits: 150_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '5 Giorni',
                requiredExtensions: [0],
                unlocksVehicleTypes: [36],
                givesParkingLots: 2,
                parkingLotReservations: [[36], [36]],
            },
            {
                caption: 'Sistema schiumogeno',
                credits: 50_000,
                coins: 15,
                isVehicleExtension: true,
                givesParkingLots: 1,
                unlocksVehicleTypes: [37],
                giftsVehicles: [37],
                duration: '5 Giorni',
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Conversione a caserma grande: la differenza tra il costo della caserma piccola e quella grande',
        ],
        maxBuildings: 'Nessun limite',
        maxLevel: 5,
        special:
            'A partire dalla 24° caserma i costi aumenteranno secondo la seguente formula: <code>(50.000+100.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
        startPersonnel: 10,
        startVehicles: ['ABP', 'APS'],
        schoolingTypes: ['Caserma dei vigili del fuoco'],
        schools: [2],
        startParkingLots: 1,
        icon: 'fire-flame-curved',
    },
    19: {
        caption: 'Stazione di polizia (piccola)',
        color: '#116611',
        coins: 25,
        credits: 50_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(2).fill(100_000)],
            coins: [10, 15, ...Array(2).fill(20)],
        },
        extensions: [
            {
                caption: 'Cella della prigione',
                credits: 25_000,
                coins: 5,
                duration: '7 giorni',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Altra cella',
                credits: 25_000,
                coins: 5,
                duration: '7 giorni',
                newCells: 1,
                cannotDisable: true,
            },
            {
                caption: 'Polizia Stradale',
                credits: 100_000,
                coins: 15,
                duration: '5 giorni',
                cannotDisable: true,
            },
            {
                caption: 'Forestale',
                credits: 75_000,
                coins: 15,
                duration: '5 giorni',
                cannotDisable: true,
            },
            {
                caption: 'Idrante Antisommossa',
                credits: 150_000,
                coins: 25,
                duration: '5 giorni',
                cannotDisable: true,
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-4. 100.000',
            'Conversione a caserma grande: la differenza tra il costo della caserma piccola e quella grande',
        ],
        maxBuildings: 'Nessun limite',
        maxLevel: 4,
        special:
            'A partire dalla 24° caserma i costi aumenteranno secondo la seguente formula:<code>(50.000+100.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
        startPersonnel: 2,
        startVehicles: ['Volante'],
        schoolingTypes: ['Polizia'],
        schools: [8],
        startParkingLots: 1,
        icon: 'building-shield',
    },
    20: {
        caption: 'Stazione ambulanze (stazione piccola)',
        color: '#eeb611',
        coins: 25,
        credits: 100_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(3).fill(100_000)],
            coins: [10, 15, ...Array(3).fill(20)],
        },
        extensions: [
            {
                caption: 'MaxiEmergenza',
                credits: 150_000,
                coins: 20,
                isVehicleExtension: true,
                duration: '5 Giorni',
                unlocksVehicleTypes: [36],
                givesParkingLots: 2,
                parkingLotReservations: [[36], [36]],
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Conversione a caserma grande: la differenza tra il costo della caserma piccola e quella grande',
        ],
        maxBuildings: 'Nessun limite',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startVehicles: ['Ambulanza BLSD'],
        schoolingTypes: ['Soccorso'],
        schools: [3],
        startParkingLots: 1,
        icon: 'house-medical',
    },
    21: {
        caption: 'Caserma della Finanza',
        color: '#113a66',
        coins: 35,
        credits: 200_000,
        levelPrices: {
            credits: [10_000, 50_000, ...Array(3).fill(100_000)],
            coins: [10, 15, ...Array(3).fill(20)],
        },
        extensions: [],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: '',
        maxLevel: 5,
        startPersonnel: 4,
        startVehicles: ['Volante Finanza'],
        schoolingTypes: ['Polizia'],
        schools: [8],
        startParkingLots: 1,
        special: '',
        icon: 'circle-dollar-to-slot',
    },
    22: {
        caption: 'Grande complesso',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: ['Troppo costoso'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: 'TROPPO CARO, NON COMPRARLO, NON ESPANDERLO',
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
        schools: [],
        icon: 'poo',
    },
    23: {
        caption: 'Piccolo complesso',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: ['Troppo costoso'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: 'TROPPO CARO, NON COMPRARLO, NON ESPANDERLO',
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
        schools: [],
        icon: 'poo',
    },
    24: {
        caption: 'Base Aerea Antincendio',
        color: '#aa1112',
        coins: 50,
        credits: 1_000_000,
        levelPrices: {
            credits: [...Array(5).fill(1_000_000)],
            coins: [...Array(5).fill(50)],
        },
        extensions: [],
        levelcost: ['1.-5. 1.000.000'],
        maxBuildings: '',
        maxLevel: 5,
        startPersonnel: 2,
        startVehicles: ['Elicottero Antincendio'],
        schoolingTypes: ['Caserma dei vigili del fuoco'],
        schools: [2],
        startParkingLots: 1,
        special: '',
        icon: 'plane',
    },
    25: {
        caption: 'Ufficio Polizia Locale',
        color: '#007700',
        coins: 25,
        credits: 75_000,
        levelPrices: {
            credits: [10_000, 25_000, 50_000, ...Array(8).fill(100_000), 750_000, 875_000],
            coins: [5, 15, 25, ...Array(8).fill(20)],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 11,
        special: '',
        startPersonnel: 6,
        startVehicles: ['Auto della polizia locale'],
        schoolingTypes: ['Polizia'],
        schools: [8],
        startParkingLots: 1,
        startCells: 0,
        icon: 'building-shield',
    },
    26: {
        caption: 'Molo Guardia Costiera',
        color: '#007700',
        coins: 50,
        credits: 300_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 11,
        special: '',
        startPersonnel: 6,
        startVehicles: [],
        schoolingTypes: ['Accademia Navale'],
        schools: [27],
        startParkingLots: 1,
        startCells: 0,
        icon: 'building-shield',
    },
    27: {
        caption: 'Accademia Navale',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: multiplyExtension(
            {
                caption: 'Altre classi',
                credits: 400_000,
                coins: 40,
                duration: '7 Giorni',
                newClassrooms: 1,
                cannotDisable: true,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 0,
        special:
            "L'amministratore Finanziario dell'alleanza può costruire ed espandere le accademie usando i fondi dell'Alleanza, L'educatore dell'alleanza può aprire i corsi all'interno dell'accademia",
        startClassrooms: 1,
        icon: 'graduation-cap',
    },
    28: {
        caption: 'Base Aerea Guardia Costiera',
        color: '#007700',
        coins: 50,
        credits: 1_000_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 3,
        special: '',
        startPersonnel: 6,
        startVehicles: [],
        schoolingTypes: ['Polizia'],
        schools: [27],
        startParkingLots: 1,
        startCells: 0,
        icon: 'building-shield',
    },
    29: {
        caption: 'Ufficio Guardia Costiera',
        color: '#007700',
        coins: 35,
        credits: 50_000,
        levelPrices: {
            credits: [],
            coins: [],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 11,
        special: '',
        startPersonnel: 6,
        startVehicles: [],
        schoolingTypes: ['Polizia'],
        schools: [27],
        startParkingLots: 1,
        startCells: 0,
        icon: 'building-shield',
    },
    30: {
        caption: 'Sede Protezione Civile',
        color: '#007700',
        coins: 50,
        credits: 50_000,
        levelPrices: {
            credits: [10_000, 35_000, 85_000, 160_000, ...Array(6).fill(100_000)],
            coins: [5, 15, 25, 40, ...Array(5).fill(20)],
        },
        extensions: [],
        levelcost: [],
        maxBuildings: 'Nessun limite',
        maxLevel: 9,
        special: '',
        startPersonnel: 5,
        startVehicles: [],
        schoolingTypes: ['Polizia'],
        schools: [8],
        startParkingLots: 1,
        startCells: 0,
        icon: 'building-shield',
    },
} satisfies Record<number, InternalBuilding>;
