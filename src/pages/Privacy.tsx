import { useTranslation } from "react-i18next";
import BackButton from "@/components/ui/back-button";

const Privacy = () => {
  const { i18n } = useTranslation();

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      intro: "Chez DUDU Sarl, nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons les informations que vous nous fournissez lorsque vous utilisez nos services.",
      sections: `1. Données Collectées
Nous collectons différents types de données personnelles, notamment :

Informations personnelles : nom, prénom, adresse électronique, numéro de téléphone.
Données techniques : adresse IP, type de navigateur, données de connexion.
Données relatives à l'utilisation : pages consultées, interactions avec nos services.

2. Utilisation des Données
Vos données sont utilisées pour :

Fournir, améliorer et personnaliser nos services.
Traiter vos commandes et répondre à vos demandes.
Envoyer des communications commerciales (avec votre consentement).
Garantir la sécurité de nos services.

3. Partage des Données
Nous partageons vos données uniquement dans les cas suivants :

Avec des prestataires de services tiers (paiements, livraison, support technique) dans le cadre de l'exécution des services.
Conformément à la loi, pour répondre à des obligations légales ou des demandes d'autorités compétentes.

4. Stockage et Sécurité des Données
Vos données sont stockées sur des serveurs sécurisés. Nous mettons en place des mesures techniques et organisationnelles pour prévenir tout accès non autorisé, perte ou divulgation de vos données.

5. Durée de Conservation
Vos données personnelles sont conservées aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique ou pour répondre à nos obligations légales.

6. Vos Droits
Vous disposez des droits suivants :

Accès à vos données personnelles.
Rectification ou suppression de vos données.
Opposition au traitement de vos données.
Retrait de votre consentement pour les communications commerciales.

Pour exercer vos droits, veuillez nous contacter à l'adresse suivante : gaston.effa@gmail.com.

7. Cookies
Nous utilisons des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.

8. Modifications de la Politique de Confidentialité
Nous nous réservons le droit de modifier cette politique à tout moment. Toute modification sera publiée sur notre site web.

Dernière mise à jour : 28 décembre 2024

Si vous avez des questions, n'hésitez pas à nous contacter. Merci de votre confiance !`,
    },
    en: {
      title: "Privacy Policy",
      intro: "At DUDU Sarl, we are committed to protecting your personal data. This privacy policy explains how we collect, use, share, and protect the information you provide when using our services.",
      sections: `1. Data Collected
We collect various types of personal data, including:

Personal Information: Name, surname, email address, phone number.
Technical Data: IP address, browser type, connection data.
Usage Data: Pages viewed, interactions with our services.

2. Use of Data
Your data is used for:

Providing, improving, and personalizing our services.
Processing your orders and responding to your requests.
Sending commercial communications (with your consent).
Ensuring the security of our services.

3. Data Sharing
We only share your data in the following cases:

With third-party service providers (payments, delivery, technical support) as part of service execution.
In compliance with the law, to fulfill legal obligations or respond to requests from competent authorities.

4. Data Storage and Security
Your data is stored on secure servers. We implement technical and organizational measures to prevent unauthorized access, loss, or disclosure of your data.

5. Retention Period
Your personal data is retained for as long as necessary to fulfill the purposes described in this policy or to comply with legal obligations.

6. Your Rights
You have the following rights:

Access to your personal data.
Rectification or Deletion of your data.
Objection to the processing of your data.
Withdrawal of consent for commercial communications.

To exercise your rights, please contact us at the following address: gaston.effa@gmail.com.

7. Cookies
We use cookies to enhance your user experience. You can configure your browser to refuse cookies.

8. Changes to the Privacy Policy
We reserve the right to modify this policy at any time. Any changes will be published on our website.

Last updated: December 28, 2024

If you have any questions, feel free to contact us. Thank you for your trust!`,
    },
  };

  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{content[i18n.language as keyof typeof content].title}</h1>
        <p>{content[i18n.language as keyof typeof content].intro}</p>
        <div className="whitespace-pre-line">
          {content[i18n.language as keyof typeof content].sections}
        </div>
      </div>
    </div>
  );
};

export default Privacy;