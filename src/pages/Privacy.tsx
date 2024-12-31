import BackButton from "@/components/ui/back-button";

const Privacy = () => {
  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <p>Chez <strong>DUDU Sarl</strong>, nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons les informations que vous nous fournissez lorsque vous utilisez nos services.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">1. Données Collectées</h2>
      <p>Nous collectons différents types de données personnelles, notamment :</p>
      <ul>
        <li><strong>Informations personnelles</strong> : nom, prénom, adresse électronique, numéro de téléphone.</li>
        <li><strong>Données techniques</strong> : adresse IP, type de navigateur, données de connexion.</li>
        <li><strong>Données relatives à l'utilisation</strong> : pages consultées, interactions avec nos services.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">2. Utilisation des Données</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul>
        <li>Fournir, améliorer et personnaliser nos services.</li>
        <li>Traiter vos commandes et répondre à vos demandes.</li>
        <li>Envoyer des communications commerciales (avec votre consentement).</li>
        <li>Garantir la sécurité de nos services.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">3. Partage des Données</h2>
      <p>Nous partageons vos données uniquement dans les cas suivants :</p>
      <ul>
        <li>Avec des prestataires de services tiers (paiements, livraison, support technique) dans le cadre de l'exécution des services.</li>
        <li>Conformément à la loi, pour répondre à des obligations légales ou des demandes d'autorités compétentes.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">4. Stockage et Sécurité des Données</h2>
      <p>Vos données sont stockées sur des serveurs sécurisés. Nous mettons en place des mesures techniques et organisationnelles pour prévenir tout accès non autorisé, perte ou divulgation de vos données.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">5. Durée de Conservation</h2>
      <p>Vos données personnelles sont conservées aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique ou pour répondre à nos obligations légales.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">6. Vos Droits</h2>
      <p>Vous disposez des droits suivants :</p>
      <ul>
        <li>Accès à vos données personnelles.</li>
        <li>Rectification ou suppression de vos données.</li>
        <li>Opposition au traitement de vos données.</li>
        <li>Retrait de votre consentement pour les communications commerciales.</li>
      </ul>

      <p>Pour exercer vos droits, veuillez nous contacter à l'adresse suivante : <strong>gaston.effa@gmail.com</strong>.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
      <p>Nous utilisons des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">8. Modifications de la Politique de Confidentialité</h2>
      <p>Nous nous réservons le droit de modifier cette politique à tout moment. Toute modification sera publiée sur notre site web.</p>

      <p className="mt-8"><strong>Dernière mise à jour : 28 décembre 2024</strong></p>

      <p className="mt-4">Si vous avez des questions, n'hésitez pas à nous contacter. Merci de votre confiance !</p>
      </div>
    </div>
  );
};

export default Privacy;
