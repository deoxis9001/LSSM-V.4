import type { InternalBuilding } from '../../../typings/Building';

type Extension = InternalBuilding['extensions'][0];

const multiplyExtension = (extension: Extension, amount: number): Extension[] =>
    new Array(amount).fill(extension);

export default {
    0: {
        caption: 'Brannstasjon',
        color: '#bb0000',
        coins: 30,
        credits: 100_000,
        extensions: [
            {
                caption: 'Ambulanseutvidelse',
                credits: 100_000,
                coins: 20,
                duration: '7 dager',
            },
            {
                caption: 'Flyplassutvidelse',
                credits: 100_000,
                coins: 20,
                duration: '7 dager',
            },
            {
                caption: 'Brann Støtte utvidelse',
                credits: 150_000,
                coins: 15,
                duration: '5 dager',
            },
            {
                caption: 'Vannredningsutvidelse',
                credits: 100_000,
                coins: 20,
                duration: '7 dager',
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
        maxBuildings: '6.000 sammen med små brannstasjoner',
        maxLevel: 24,
        special:
            'Fra og med den 24. brannstasjonen øker kostnadene for å bygge en ny brannstasjon i henhold til følgende formel: <code> 100.000 + 200.000 * LOG <sub> 2 </sub> (Antall eksisterende brannstasjoner - 22) </code>. Myntprisen forblir konstant!',
        startPersonnel: 10,
        startVehicles: ['Mannskapsbil', 'Lett mannskapsbil'],
        maxBuildingsFunction: (): number => 6000,
        startParkingLots: 1,
        schoolingTypes: ['Brannstasjon'],
    },
    1: {
        caption: 'Brannskole',
        color: '#992222',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Flere klasserom',
                credits: 400_000,
                coins: 40,
                duration: '7 dager',
                newClassrooms: 1,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'Ingen grense',
        maxLevel: 0,
        special:
            'Finansministre og admins kan (utvide) brannvesenskoler ved hjelp av kreditter fra foreningens statskasse. Kurs og mestere på kurs kan starte opplæringskurs på brannskolen.',
        startClassrooms: 1,
    },
    2: {
        caption: 'Ambulansestasjon',
        color: '#ffa500',
        coins: 35,
        credits: 200_000,
        extensions: [
            {
                caption: 'Intensivbehandling utvidelse',
                credits: 200_000,
                coins: 25,
                duration: '7 dager',
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
        maxBuildings: 'Ingen grense',
        maxLevel: 39,
        special: '',
        startPersonnel: 3,
        startVehicles: ['Ambulanse'],
        startParkingLots: 1,
        schoolingTypes: ['Redning'],
    },
    3: {
        caption: 'Helseskole',
        color: '#8c852c',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Flere klasserom',
                credits: 400_000,
                coins: 40,
                duration: '7 dager',
                newClassrooms: 1,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'Ingen grense',
        maxLevel: 0,
        special:
            'Finansministre og administratorer kan (utvide) alliansepoliti skoler ved hjelp av kreditter fra alliansekassen.',
        startClassrooms: 1,
    },
    4: {
        caption: 'Sykehus',
        color: '#bbe944',
        coins: 25,
        credits: 200_000,
        extensions: [
            {
                caption: 'Generell medisin',
                credits: 10_000,
                coins: 10,
                duration: '7 dager',
            },
            {
                caption: 'Generell kirurgi',
                credits: 10_000,
                coins: 10,
                duration: '7 dager',
            },
            {
                caption: 'Gynekologisk',
                credits: 70_000,
                coins: 15,
                duration: '7 dager',
            },
            {
                caption: 'Urologi',
                credits: 70_000,
                coins: 15,
                duration: '7 dager',
            },
            {
                caption: 'Traume',
                credits: 70_000,
                coins: 15,
                duration: '7 dager',
            },
            {
                caption: 'Nevrologi',
                credits: 70_000,
                coins: 15,
                duration: '7 dager',
            },
            {
                caption: 'Nevrokirurgi',
                credits: 70_000,
                coins: 15,
                duration: '7 dager',
            },
            {
                caption: 'Kardiologi',
                credits: 70_000,
                coins: 15,
                duration: '7 dager',
            },
            {
                caption: 'Karkirurgi',
                credits: 70_000,
                coins: 15,
                duration: '7 dager',
            },
        ],
        levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
        maxBuildings: 'Ingen grense',
        maxLevel: 20,
        special:
            'Finansministre og admins kan (utvide) alliansesykehus ved hjelp av kreditter fra alliansekassen.',
        startBeds: 10,
    },
    5: {
        caption: 'Helikopterstasjon',
        color: '#e7ad2f',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: [],
        maxBuildings: 'se spesiells',
        maxLevel: 0,
        special:
            'Opp til den 125. bygningen (av alle typer) totalt maks. Fire landingsplasser kan bygges. Etter det øker antallet med 1 hver 25. bygning (starter på 125.).',
        startPersonnel: 0,
        startVehicles: [],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        schoolingTypes: ['Redning'],
        startParkingLots: 1,
    },
    6: {
        caption: 'Politistasjon',
        color: '#007700',
        coins: 35,
        credits: 100_000,
        extensions: [
            {
                caption: 'Fengselscelle',
                credits: 25_000,
                coins: 5,
                duration: '7 Dager',
                newCells: 1,
            },
            ...multiplyExtension(
                {
                    caption: 'Flere celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                    newCells: 1,
                },
                9
            ),
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
        maxBuildings: '1.700 sammen med små politistasjoner',
        maxLevel: 39,
        special:
            'Fra og med den 24. politistasjonen øker kostnadene for nybygging av en politistasjon i henhold til følgende formel: <code> 100.000 + 200.000 * LOG <sub> 2 </sub> (Antall eksisterende politistasjoner - 22) </code>. Myntprisen forblir konstant!',
        startPersonnel: 2,
        startVehicles: ['Patruljebil'],
        maxBuildingsFunction: (): number => 1700,
        startParkingLots: 1,
        startCells: 0,
        schoolingTypes: ['Politi'],
    },
    7: {
        caption: 'Nødetatssenter',
        color: '#24c3ae',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 'Alle 25 bygningene ett kontrollsenter',
        maxLevel: 0,
        special: 'Kontrollsenteret er administrasjonssenteret.',
        isDispatchCenter: true,
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            Math.floor(buildingsAmountTotal / 25) + 1,
    },
    8: {
        caption: 'Politiskole',
        color: '#225522',
        coins: 50,
        credits: 500_000,
        extensions: multiplyExtension(
            {
                caption: 'Flere klasserom',
                credits: 400_000,
                coins: 40,
                duration: '7 dager',
                newClassrooms: 1,
            },
            3
        ),
        levelcost: [],
        maxBuildings: 'Ingen grense',
        maxLevel: 0,
        special:
            'Finansministre og administratorer kan (utvide) alliansepoliti skoler ved hjelp av kreditter fra alliansekassen.',
        startClassrooms: 1,
    },
    13: {
        caption: 'Politiheliport',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1. 1.000.000 kreditter / 50 mynter'],
        maxBuildings: 'se spesiells',
        maxLevel: 1,
        special:
            'Opptil 2 landingsplasser kan bygges per stasjon (utvidelsesetapper). Opp til den 125. bygningen (av alle typer) totalt maks. Fire landingsplasser kan bygges. Deretter øker antallet med 1 hver 25. bygning (begynner på 125).',
        startPersonnel: 3,
        startVehicles: [],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 4
                : Math.floor(buildingsAmountTotal / 25),
        schoolingTypes: ['Politi'],
        startParkingLots: 1,
    },
    14: {
        caption: 'Oppstillingsplass',
        color: '#c259b5',
        coins: 0,
        credits: 0,
        extensions: [],
        levelcost: [],
        maxBuildings: 4,
        maxLevel: 0,
        special:
            'Du kan stasjonere så mange av dine egne kjøretøy som du vil på et oppstillingsområde, medlemmer av alliansen kan bruke oppstillingsplassen. En oppstillingsplass forblir i 24 timer, men du kan når som helst tilbakestille det til 24 timer. Med Premium-konto kan du ha 8 oppstillingsplasser samtidig',
        isStagingArea: true,
        maxBuildingsFunction: (): number => 4,
    },
    16: {
        caption: 'Fengsel',
        color: '#00ff00',
        coins: -1,
        credits: 100_000,
        extensions: [
            {
                caption: 'Fengselscelle',
                credits: 25_000,
                coins: 5,
                duration: '7 Dager',
                newCells: 1,
            },
            ...multiplyExtension(
                {
                    caption: 'Flere celler',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dager',
                    newCells: 1,
                },
                9
            ),
        ],
        levelcost: [],
        maxBuildings: 'Ingen grense',
        maxLevel: 0,
        special:
            'Denne bygningen kan bare bygges og utvikles av administratorer og finansministre med kreditter fra alliansekassen. De bygde fengselscellene er tilgjengelige for alle medlemmer av alliansen.',
        startCells: 0,
    },
    18: {
        caption: 'Brannstasjon (liten)',
        color: '#aa1111',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Ambulanseutvidelse',
                credits: 100_000,
                coins: 20,
                duration: '7 dager',
            },
            {
                caption: 'Flyplassutvidelse',
                credits: 100_000,
                coins: 20,
                duration: '7 dager',
            },
            {
                caption: 'Brann Støtte utvidelse',
                credits: 150_000,
                coins: 15,
                duration: '5 dager',
            },
            {
                caption: 'Vannredningsutvidelse',
                credits: 100_000,
                coins: 20,
                duration: '7 dager',
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Konvertering til normal vakt: differansepris til normal vakt',
        ],
        maxBuildings: '6.000 sammen med brannstasjoner',
        maxLevel: 5,
        special:
            'Fra og med den 24. brannstasjonen øker kostnadene for å bygge en ny brannstasjon i henhold til følgende formel: <code> (50.000+100.000 * LOG <sub> 2 </sub> (Antall eksisterende brannstasjoner - 22)) / 2 </code>. maks. 1 million kreditter. Myntprisen forblir konstant!',
        startPersonnel: 10,
        startVehicles: ['Mannskapsbil', 'Lett mannskapsbil'],
        maxBuildingsFunction: (): number => 6000,
        startParkingLots: 1,
        schoolingTypes: ['Brannstasjon'],
    },
    19: {
        caption: 'Politistasjon (liten)',
        color: '#116611',
        coins: 25,
        credits: 50_000,
        extensions: [
            {
                caption: 'Fengselscelle',
                credits: 25_000,
                coins: 5,
                duration: '7 Dager',
                newCells: 1,
            },
            {
                caption: 'Flere celler',
                credits: 25_000,
                coins: 5,
                duration: '7 Dager',
                newCells: 1,
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-4. 100.000',
            'Konvertering til normal vakt: differansepris til normal vakt',
        ],
        maxBuildings: '1700 med politistasjoner',
        maxLevel: 4,
        special:
            'Fra og med den 24. politistasjonen beregnes kostnadene for nybygging av en politistasjon i henhold til følgende formel: <code> (50.000+100.000 * LOG <sub> 2 </sub> (Antall eksisterende politistasjoner - 22 )) / 2 </code>. Myntprisen forblir konstant!',
        startPersonnel: 2,
        startVehicles: ['Patruljebil'],
        maxBuildingsFunction: (): number => 1700,
        startParkingLots: 1,
        startCells: 0,
        schoolingTypes: ['Politi'],
    },
    20: {
        caption: 'Ambulansestasjon (liten)',
        color: '#eeb611',
        coins: 25,
        credits: 100_000,
        extensions: [
            {
                caption: 'Intensivbehandling utvidelse',
                credits: 200_000,
                coins: 25,
                duration: '7 dager',
            },
        ],
        levelcost: [
            '1. 10.000',
            '2. 50.000',
            '3.-5. 100.000',
            'Konvertering til normal vakt: differansepris til normal vakt',
        ],
        maxBuildings: 'Ingen grense',
        maxLevel: 5,
        special: '',
        startPersonnel: 3,
        startVehicles: ['Ambulanse'],
        startParkingLots: 1,
        schoolingTypes: ['Redning'],
    },
    21: {
        caption: 'Legevakt',
        color: '#e2e53b',
        coins: 25,
        credits: 100_000,
        extensions: [
            {
                caption: 'Generell medisin',
                credits: 10_000,
                coins: 10,
                duration: '7 dager',
            },
        ],
        levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
        maxBuildings: 'Ingen grense',
        maxLevel: 5,
        special: '',
        startPersonnel: 0,
        startVehicles: ['Ikke. Du kan kjøpe maks. 2 Kjøretøy'],
        startParkingLots: 2,
        startBeds: 5,
    },
    22: {
        caption: 'Stort kompleks',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['For dyrt'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: 'FOR DYRT, IKKE KJØP DEN, IKKE UTVIDD DEN',
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
    },
    23: {
        caption: 'Lite kompleks',
        color: '#8B4513',
        coins: -1,
        credits: -1,
        extensions: [],
        levelcost: ['For dyrt'],
        maxBuildings: 'Keine Grenze',
        maxLevel: 5,
        special: 'FOR DYRT, IKKE KJØP DEN, IKKE UTVIDD DEN',
        startPersonnel: 0,
        startVehicles: [''],
        startParkingLots: 0,
        schoolingTypes: [],
    },
    25: {
        caption: 'Brannheliport',
        color: '#148423',
        coins: 50,
        credits: 1_000_000,
        extensions: [],
        levelcost: ['1. 1.000.000 kreditter / 50 mynter'],
        maxBuildings: 'se spesiells',
        maxLevel: 1,
        special:
            'Opptil 3 landingsplasser kan bygges per stasjon (utvidelsesetapper). Opp til den 125. bygningen (av alle typer) totalt maks. Fire landingsplasser kan bygges. Deretter øker antallet med 1 hver 25. bygning (begynner på 125).',
        startPersonnel: 2,
        startVehicles: ['Skogbrannhelikopter'],
        maxBuildingsFunction: (buildingsAmountTotal: number): number =>
            buildingsAmountTotal < 125
                ? 3
                : Math.floor(buildingsAmountTotal / 25),
        startParkingLots: 1,
        schoolingTypes: ['Brannstasjon'],
    },
} as Record<number, InternalBuilding>;
