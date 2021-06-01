export default {
    amount: 'Aantal',
    categories: {
        allianceMission: {
            regex: /^\[Team]/,
            title: 'Teammeldingen',
            backgroundColor: '#ff2800',
            textColor: 'white',
        },
        mission: {
            regex: '^%missions%',
            title: 'Eigen meldingen',
            backgroundColor: '#ff2400',
            textColor: 'white',
        },
        buyVehicle: {
            regex: /Voertuig gekocht/,
            backgroundColor: '#007fff',
            textColor: 'white',
        },
        dailyLogin: {
            regex: /Dagelijkse loginbeloning/,
            backgroundColor: '#8db600',
            textColor: 'black',
        },
        buildings: {
            regex: /(Gebouw gebouwd|Terugbetaling gebouw|Gebouw gesloopt)/,
            title: 'Gebouw gebouwd/gesloopt',
            backgroundColor: '#ed872d',
            textColor: 'black',
        },
        upgradeBuilding: {
            regex: /((Kleine p|P)ost uitgebreid|Cancel:|Gebouw-upgrade terugbetalen)/,
            title: 'Gebouwuitbreidingen',
            backgroundColor: '#000080',
            textColor: 'white',
        },
        task: {
            regex: /Taak .*? voltooid/,
            title: 'Taken voltooid',
            backgroundColor: '#bb3385',
            textColor: 'white',
        },
        patients: {
            regex: /Patiënten behandeling/,
            title: 'Patiënten',
            backgroundColor: '#fff600',
            textColor: 'black',
        },
        alliancePatients: {
            regex: /Ziekenhuis - Teamopname/,
            title: 'Teamopnames',
            backgroundColor: '#ffff99',
            textColor: 'black',
        },
        alliancePrisoners: {
            regex: /Politie - Teamaanlevering/,
            backgroundColor: '#ffff99',
            textColor: 'black',
        },
        prisoners: {
            regex: /Arrestanten getransporteerd/,
            title: 'Arrestanten',
            backgroundColor: '#0bda51',
            textColor: 'black',
        },
        schoolings: {
            regex: /(Team|Opleiding van het) personeel/,
            title: 'Opleidingen',
            backgroundColor: '#ff00ff',
            textColor: 'white',
        },
        shitComplexes: {
            regex: /(Gebouw bevestigd aan|Uitgebreid tot|(Geü|Up)grade naar) Gebouwencomplex/,
            title: 'Gebouwencomplexen',
            backgroundColor: '#b5651d',
            textColor: 'white',
        },
        fireAlarmSystemCancel: {
            regex: /Loos alarm/,
            title: 'Melding via OMS/PAC - Loos alarm',
            backgroundColor: '#c80815',
            textColor: 'white',
        },
    },
    category: 'Categorie',
    title: 'Samenvatting',
    total: 'Totaal',
    others: 'Overige',
};
