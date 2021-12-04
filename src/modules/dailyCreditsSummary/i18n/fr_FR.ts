export default {
    amount: 'Quantité',
    charts: {
        income: 'Revenu',
        expenses: 'Dépenses',
    },
    categories: {
        allianceMission: {
            regex: /^\[Alliance]/,
            title: "Missions d'Alliance",
            backgroundColor: '#ff2800',
            textColor: 'white',
        },
        mission: {
            regex: "^%missions%( \\(Système d'alarme\\))?( - Fausse alerte)?$",
            title: 'Missions personnel',
            backgroundColor: '#ff2400',
            textColor: 'white',
        },
        cancelledMissions: {
            regex: "^%missions%( \\(Système d'alarme\\))? - Annulée$",
            title: 'Missions annulées',
            backgroundColor: '#7C7978',
            textColor: 'white',
        },
        buyVehicle: {
            regex: /Véhicule acheté/,
            backgroundColor: '#007fff',
            textColor: 'white',
        },
        dailyLogin: {
            regex: /Récompense de connexion quotidienne/,
            backgroundColor: '#8db600',
            textColor: 'black',
        },
        buildings: {
            regex: /(Bâtiment construit|Rembourser le bâtiment$|Building demolished without refund)/,
            title: 'Bâtiment construit/démolis',
            backgroundColor: '#ed872d',
            textColor: 'black',
        },
        upgradeBuilding: {
            regex: /(Poste (upgraded( \(from small .*? station\))??|construit)|Garde prolongée|Cancel:|Refund Building upgrade)/,
            title: 'Poste construit/Extension',
            backgroundColor: '#000080',
            textColor: 'white',
        },
        task: {
            regex: /Tâche accomplie.*?/,
            title: 'Tâche accomplie',
            backgroundColor: '#bb3385',
            textColor: 'white',
        },
        patients: {
            regex: /Traitement de patient/,
            title: 'Patients',
            backgroundColor: '#fff600',
            textColor: 'black',
        },
        alliancePatients: {
            regex: /Hôpital - Alliance/,
            backgroundColor: '#ffff99',
            textColor: 'black',
        },
        alliancePrisoners: {
            regex: /Police - Alliance/,
            backgroundColor: '#ffff99',
            textColor: 'black',
        },
        prisoners: {
            regex: /Prisonnier transporté/,
            title: 'Prisonnier',
            backgroundColor: '#0bda51',
            textColor: 'black',
        },
        schoolings: {
            regex: /(Formation|Alliance Training Applicant)/,
            title: 'Éducation',
            backgroundColor: '#ff00ff',
            textColor: 'white',
        },
        shitComplexes: {
            regex: /(Attached building to Building Complex Base|Upgraded to Building Complex Base|Upgraded to Building Complex|Building Complex Base upgrade finished)/,
            title: 'Building Complex',
            backgroundColor: '#b5651d',
            textColor: 'white',
        },
        fireAlarmSystemCancel: {
            regex: /Fausse alerte/,
            title: 'Fausse alerte',
            backgroundColor: '#c80815',
            textColor: 'white',
        },
    },
    category: 'Catégorie',
    title: 'Sommaire',
    total: 'Total',
    others: 'Autre',
    export: {
        export: 'Exporter',
        json: {
            raw: 'JSON (brut)',
            prettified: 'JSON (simplifié)',
        },
    },
};
