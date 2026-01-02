'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState('mars');
  const [budget, setBudget] = useState('moyen');

  const itinerary = {
    jours: [
      {
        num: 1,
        titre: "Vol Oran → Hanoi",
        description: "Départ d'Oran avec escale (généralement via Istanbul, Dubaï ou Paris). Durée totale: 15-18h",
        cout: "400-800 EUR"
      },
      {
        num: 2,
        titre: "Hanoi - Arrivée",
        description: "Installation à l'hôtel. Visite du Vieux Quartier et du Lac Hoan Kiem. Dîner de rue vietnamien.",
        cout: "30-60 EUR"
      },
      {
        num: 3,
        titre: "Hanoi - Culture",
        description: "Temple de la Littérature, Mausolée Ho Chi Minh, Pagode au Pilier Unique. Spectacle de marionnettes sur eau.",
        cout: "25-50 EUR"
      },
      {
        num: 4,
        titre: "Baie d'Halong",
        description: "Croisière 2j/1n dans la Baie d'Halong (UNESCO). Kayak, grottes, plages.",
        cout: "80-150 EUR"
      },
      {
        num: 5,
        titre: "Baie d'Halong → Hanoi",
        description: "Retour à Hanoi. Shopping au marché Dong Xuan. Massage traditionnel.",
        cout: "30-50 EUR"
      },
      {
        num: 6,
        titre: "Vol Hanoi → Da Nang",
        description: "Vol domestique vers Da Nang. Installation à Hoi An (30km). Exploration de la vieille ville.",
        cout: "50-100 EUR"
      },
      {
        num: 7,
        titre: "Hoi An",
        description: "Vieille ville (UNESCO), lanternes colorées, tailleurs sur mesure, plage An Bang.",
        cout: "25-50 EUR"
      },
      {
        num: 8,
        titre: "Hoi An → Hué",
        description: "Route vers Hué via Col des Nuages. Visite Cité Impériale et tombeau royal.",
        cout: "40-70 EUR"
      },
      {
        num: 9,
        titre: "Vol Hué → Ho Chi Minh",
        description: "Vol vers Saigon. Visite cathédrale Notre-Dame, Poste centrale, marché Ben Thanh.",
        cout: "50-90 EUR"
      },
      {
        num: 10,
        titre: "Delta du Mékong",
        description: "Excursion delta du Mékong: marchés flottants, jardins fruitiers, villages.",
        cout: "30-60 EUR"
      },
      {
        num: 11,
        titre: "Ho Chi Minh - Musées",
        description: "Palais de la Réunification, musée des Vestiges de guerre, quartier chinois Cholon.",
        cout: "20-40 EUR"
      },
      {
        num: 12,
        titre: "Retour Oran",
        description: "Vol Ho Chi Minh → Oran avec escale. Durée: 16-20h",
        cout: "400-800 EUR"
      }
    ]
  };

  const infos = {
    vol: {
      compagnies: ["Turkish Airlines (via Istanbul)", "Emirates (via Dubai)", "Air France (via Paris)"],
      duree: "15-20 heures avec escale",
      prix: "800-1500 EUR aller-retour"
    },
    visa: {
      requis: "Oui - e-Visa disponible",
      duree: "30 jours",
      prix: "25 USD",
      url: "evisa.xuatnhapcanh.gov.vn"
    },
    budget: {
      economique: "30-50 EUR/jour",
      moyen: "50-100 EUR/jour",
      confort: "100-200 EUR/jour"
    },
    sante: {
      vaccins: ["Hépatite A et B", "Typhoïde", "Encéphalite japonaise (zones rurales)"],
      paludisme: "Traitement recommandé pour zones rurales"
    },
    meilleurePeriode: {
      nord: "Septembre-Novembre, Mars-Mai (20-30°C)",
      centre: "Février-Mai (25-30°C)",
      sud: "Décembre-Avril (saison sèche)"
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    },
    header: {
      textAlign: 'center',
      color: 'white',
      padding: '40px 20px',
      marginBottom: '30px'
    },
    title: {
      fontSize: '3em',
      margin: '0 0 10px 0',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.5em',
      opacity: 0.9
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
    },
    section: {
      marginBottom: '40px'
    },
    sectionTitle: {
      fontSize: '2em',
      color: '#667eea',
      borderBottom: '3px solid #667eea',
      paddingBottom: '10px',
      marginBottom: '20px'
    },
    dayCard: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '20px',
      borderRadius: '15px',
      marginBottom: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    },
    dayNum: {
      display: 'inline-block',
      background: '#667eea',
      color: 'white',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.9em',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    dayTitle: {
      fontSize: '1.5em',
      color: '#333',
      margin: '10px 0'
    },
    dayDesc: {
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '10px'
    },
    cost: {
      color: '#764ba2',
      fontWeight: 'bold',
      fontSize: '1.1em'
    },
    infoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    },
    infoCard: {
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    infoTitle: {
      fontSize: '1.3em',
      color: '#c73e1d',
      marginBottom: '15px',
      fontWeight: 'bold'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      padding: '8px 0',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
      color: '#333'
    },
    alert: {
      background: '#fff3cd',
      border: '2px solid #ffc107',
      borderRadius: '10px',
      padding: '20px',
      marginTop: '30px'
    },
    alertTitle: {
      fontSize: '1.2em',
      color: '#856404',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    budgetTotal: {
      background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      color: 'white',
      padding: '30px',
      borderRadius: '15px',
      textAlign: 'center',
      fontSize: '1.5em',
      fontWeight: 'bold',
      marginTop: '30px'
    }
  };

  const calculateTotal = () => {
    const vols = 1200;
    const hebergement = 12 * (budget === 'economique' ? 25 : budget === 'moyen' ? 50 : 100);
    const repas = 12 * (budget === 'economique' ? 15 : budget === 'moyen' ? 30 : 60);
    const activites = 600;
    return vols + hebergement + repas + activites;
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🌏 Voyage Oran → Vietnam</h1>
        <p style={styles.subtitle}>Votre aventure de 12 jours au cœur de l'Asie du Sud-Est</p>
      </header>

      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>📋 Itinéraire Détaillé (12 jours)</h2>
          {itinerary.jours.map((jour) => (
            <div
              key={jour.num}
              style={styles.dayCard}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span style={styles.dayNum}>Jour {jour.num}</span>
              <h3 style={styles.dayTitle}>{jour.titre}</h3>
              <p style={styles.dayDesc}>{jour.description}</p>
              <p style={styles.cost}>💰 Budget: {jour.cout}</p>
            </div>
          ))}
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>ℹ️ Informations Pratiques</h2>

          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>✈️ Vols</h3>
              <ul style={styles.list}>
                {infos.vol.compagnies.map((c, i) => (
                  <li key={i} style={styles.listItem}>{c}</li>
                ))}
                <li style={styles.listItem}><strong>Durée:</strong> {infos.vol.duree}</li>
                <li style={styles.listItem}><strong>Prix:</strong> {infos.vol.prix}</li>
              </ul>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>📝 Visa</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Type:</strong> e-Visa obligatoire</li>
                <li style={styles.listItem}><strong>Durée:</strong> {infos.visa.duree}</li>
                <li style={styles.listItem}><strong>Prix:</strong> {infos.visa.prix}</li>
                <li style={styles.listItem}><strong>Site:</strong> {infos.visa.url}</li>
              </ul>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>💉 Santé</h3>
              <ul style={styles.list}>
                {infos.sante.vaccins.map((v, i) => (
                  <li key={i} style={styles.listItem}>✓ {v}</li>
                ))}
                <li style={styles.listItem}>⚠️ {infos.sante.paludisme}</li>
              </ul>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>🌤️ Meilleure Période</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Nord:</strong> {infos.meilleurePeriode.nord}</li>
                <li style={styles.listItem}><strong>Centre:</strong> {infos.meilleurePeriode.centre}</li>
                <li style={styles.listItem}><strong>Sud:</strong> {infos.meilleurePeriode.sud}</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>💰 Estimation Budget</h2>

          <div style={styles.alert}>
            <h3 style={styles.alertTitle}>📊 Budget par catégorie</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>Vols internationaux:</strong> 800-1500 EUR</li>
              <li style={styles.listItem}><strong>Vols domestiques:</strong> 150-250 EUR</li>
              <li style={styles.listItem}><strong>Hébergement (12 nuits):</strong> 300-1200 EUR</li>
              <li style={styles.listItem}><strong>Repas (12 jours):</strong> 180-720 EUR</li>
              <li style={styles.listItem}><strong>Activités & transports:</strong> 400-800 EUR</li>
              <li style={styles.listItem}><strong>Assurance voyage:</strong> 50-100 EUR</li>
            </ul>
          </div>

          <div style={styles.budgetTotal}>
            💵 BUDGET TOTAL ESTIMÉ: 1,900 - 4,600 EUR
            <br />
            <span style={{ fontSize: '0.7em', opacity: 0.9 }}>
              (selon confort et saison)
            </span>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.alert}>
            <h3 style={styles.alertTitle}>⚠️ Conseils Importants</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>✓ Réserver vols 2-3 mois à l'avance pour meilleurs prix</li>
              <li style={styles.listItem}>✓ Prévoir adaptateur électrique (220V, prises A/C/G)</li>
              <li style={styles.listItem}>✓ Télécharger app traduction (peu parlent français/anglais)</li>
              <li style={styles.listItem}>✓ Négocier prix taxis/marchés (normal au Vietnam)</li>
              <li style={styles.listItem}>✓ Boire uniquement eau en bouteille</li>
              <li style={styles.listItem}>✓ Prévoir espèces (VND) - cartes pas toujours acceptées</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
