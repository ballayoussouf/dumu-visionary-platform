import BackButton from "@/components/ui/back-button";
import { useTranslation } from "react-i18next";

const CGV = () => {
  const { i18n } = useTranslation();

  return (
    <div className="relative">
      <BackButton />
      <div className="container mx-auto px-4 py-8 prose prose-invert max-w-4xl">
        {i18n.language === 'fr' ? (
          <div>
            <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente (CGV)</h1>
            <p>Les présentes Conditions Générales de Vente (CGV) définissent les droits et obligations de DULU Sarl et de ses clients dans le cadre de la vente en ligne de produits ou services via ce site internet et les plateformes associées, y compris Facebook. Toute commande passée implique l'acceptation pleine et entière des présentes CGV.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Informations légales sur l'entreprise</h2>
            <ul>
              <li>Nom de l'entreprise : DULU Sarl</li>
              <li>Adresse complète : Rue Mandessi Bell Bali-Douala</li>
              <li>Numéro d'enregistrement : RC/DLA/2018/B/3820</li>
              <li>Email de contact : gaston.effa@gmail.com</li>
              <li>Numéro de téléphone : 00237693997244</li>
              <li>Adresse pour les retours : Rue Mandessi Bell Bali-Douala</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Produits et services proposés</h2>
            <p>DULU Sarl propose :</p>
            <p><strong>Produits :</strong> Un service de publicité Meta ads et autres réseaux sociaux, et un service d'automatisation de la réponse aux clients pour les entrepreneurs, chefs d'entreprises ou dirigeants</p>
            <p><strong>Usage prévu :</strong> Ces services permettent à leur utilisateur d'améliorer ses ventes, et de se libérer des tâches répétitives.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Commande et achat</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">Processus de commande</h3>
            <ol>
              <li>Sélectionnez les produits souhaités et ajoutez-les au panier.</li>
              <li>Confirmez votre commande en suivant les étapes indiquées.</li>
              <li>Vous recevrez un email de confirmation une fois la commande validée.</li>
            </ol>

            <h3 className="text-xl font-bold mt-4 mb-2">Validation</h3>
            <p>Une commande est considérée comme définitive après :</p>
            <ul>
              <li>Validation du paiement.</li>
              <li>Envoi d'un email confirmant la prise en compte de votre commande.</li>
            </ul>

            <p>Attention : Les commandes passées via des plateformes tierces, comme Facebook ou Instagram, sont soumises aux politiques d'utilisation de ces plateformes en complément des présentes CGV.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Tarifs et facturation</h2>
            <ul>
              <li>Prix : Les prix affichés sont en Euro et seront additionnés aux taxes applicables.</li>
              <li>Frais supplémentaires : Les frais de livraison ou taxes spécifiques seront clairement indiqués avant validation de la commande.</li>
              <li>Facturation : Une facture sera envoyée à l'adresse mail fournie lors de la commande.</li>
            </ul>
            <p>Attention : Les tarifs sont susceptibles d'être modifiés, mais les changements n'affectent pas les commandes déjà confirmées.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Paiement sécurisé</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">Moyens de paiement acceptés</h3>
            <ul>
              <li>Carte bancaire (Visa, MasterCard, etc.)</li>
              <li>PayPal</li>
              <li>Autres plateformes de paiement intégrées (selon la disponibilité).</li>
            </ul>

            <h3 className="text-xl font-bold mt-4 mb-2">Sécurisation des paiements</h3>
            <p>Les transactions sont sécurisées via Paypal. Aucune donnée bancaire n'est conservée par DULU Sarl.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Livraison et frais associés</h2>
            <ul>
              <li>Délais : Le service est disponible immédiatement dès la confirmation de la commande.</li>
              <li>Zones couvertes : Afrique, Europe et Amérique du nord.</li>
              <li>Frais de livraison : Aucun frais de livraison car il s'agit de services.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Droit de rétractation et retours</h2>
            <p>Conformément à la législation en vigueur :</p>
            <ul>
              <li>Délai de rétractation : Vous disposez de 15 jours à compter du début d'exécution du service pour exercer votre droit de rétractation.</li>
              <li>Conditions : Le service doit être non démarré du fait de DULU Sarl.</li>
              <li>Procédure : Contactez-nous à gaston.effa@gmail.com pour formaliser votre désir de rétractation.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Garanties et responsabilité</h2>
            <ul>
              <li>Conformité : Les services sont conformes à la description fournie au moment de la commande.</li>
              <li>Limite de responsabilité : DULU Sarl ne pourra être tenue responsable des retards dus à des facteurs extérieurs ou d'un usage inapproprié de ses services.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Protection des données et cookies</h2>
            <ul>
              <li>Données personnelles : Vos données sont collectées et utilisées conformément à notre Politique de confidentialité pour le traitement des commandes.</li>
              <li>Cookies : Le site utilise des cookies pour optimiser l'expérience utilisateur.</li>
              <li>Conformité RGPD : Vous pouvez demander la modification ou la suppression de vos données à tout moment via gaston.effa@gmail.com</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Litiges et juridictions compétentes</h2>
            <p>En cas de litige, une solution amiable sera privilégiée. Si aucun accord n'est trouvé, le différend sera soumis aux juridictions compétentes de Douala au Cameroun.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Mentions spécifiques pour Facebook</h2>
            <p>DULU Sarl respecte les politiques commerciales de Facebook. Toute interaction via Facebook Shop est également soumise aux règles de la plateforme. En cas de conflit entre les CGV et les règles de Facebook, ces dernières prévalent pour les commandes effectuées sur la plateforme.</p>
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions of Sale (TCS)</h1>
            <p>These Terms and Conditions of Sale (TCS) define the rights and obligations of DULU Sarl and its clients in the context of online sales of products or services via this website and associated platforms, including Facebook. Any order placed implies full and unconditional acceptance of these TCS.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Legal Information about the Company</h2>
            <ul>
              <li>Company Name: DULU Sarl</li>
              <li>Full Address: Rue Mandessi Bell Bali-Douala</li>
              <li>Registration Number: RC/DLA/2018/B/3820</li>
              <li>Contact Email: gaston.effa@gmail.com</li>
              <li>Phone Number: +237 693 997 244</li>
              <li>Return Address: Rue Mandessi Bell Bali-Douala</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Offered Products and Services</h2>
            <p>DULU Sarl offers:</p>
            <p><strong>Products:</strong> A Meta ads service and other social media advertising services, as well as a client response automation service for entrepreneurs, business owners, or executives.</p>
            <p><strong>Intended Use:</strong> These services help users increase their sales and free themselves from repetitive tasks.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Ordering and Purchase</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">Ordering Process</h3>
            <ol>
              <li>Select the desired products and add them to your cart.</li>
              <li>Confirm your order by following the indicated steps.</li>
              <li>You will receive a confirmation email once the order is validated.</li>
            </ol>

            <h3 className="text-xl font-bold mt-4 mb-2">Validation</h3>
            <p>An order is considered final after:</p>
            <ul>
              <li>Payment confirmation.</li>
              <li>Receipt of an email confirming the order has been processed.</li>
            </ul>

            <p>Note: Orders placed through third-party platforms, such as Facebook or Instagram, are subject to the usage policies of those platforms in addition to these TCS.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Pricing and Billing</h2>
            <ul>
              <li>Prices: Prices are displayed in Euros and include applicable taxes.</li>
              <li>Additional Fees: Any delivery charges or specific taxes will be clearly indicated before confirming the order.</li>
              <li>Billing: An invoice will be sent to the email address provided during the order process.</li>
            </ul>
            <p>Note: Prices are subject to change, but changes will not affect orders already confirmed.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Secure Payment</h2>
            <h3 className="text-xl font-bold mt-4 mb-2">Accepted Payment Methods</h3>
            <ul>
              <li>Credit card (Visa, MasterCard, etc.)</li>
              <li>PayPal</li>
              <li>Other integrated payment platforms (depending on availability).</li>
            </ul>

            <h3 className="text-xl font-bold mt-4 mb-2">Payment Security</h3>
            <p>Transactions are secured through PayPal. No banking data is retained by DULU Sarl.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Delivery and Associated Fees</h2>
            <ul>
              <li>Timeframe: The service is available immediately upon order confirmation.</li>
              <li>Covered Regions: Africa, Europe, and North America.</li>
              <li>Delivery Fees: None, as these are services.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Right of Withdrawal and Returns</h2>
            <p>In compliance with applicable legislation:</p>
            <ul>
              <li>Withdrawal Period: You have 15 days from the start of service execution to exercise your right of withdrawal.</li>
              <li>Conditions: The service must not have been initiated by DULU Sarl.</li>
              <li>Procedure: Contact us at gaston.effa@gmail.com to formalize your withdrawal request.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Guarantees and Liability</h2>
            <ul>
              <li>Conformity: Services conform to the description provided at the time of ordering.</li>
              <li>Liability Limit: DULU Sarl cannot be held responsible for delays caused by external factors or improper use of its services.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Data Protection and Cookies</h2>
            <ul>
              <li>Personal Data: Your data is collected and used in accordance with our Privacy Policy for order processing.</li>
              <li>Cookies: The site uses cookies to optimize the user experience.</li>
              <li>GDPR Compliance: You may request the modification or deletion of your data at any time via gaston.effa@gmail.com.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Disputes and Competent Jurisdictions</h2>
            <p>In case of a dispute, an amicable solution will be prioritized. If no agreement is reached, the dispute will be submitted to the competent courts of Douala, Cameroon.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Specific Mentions for Facebook</h2>
            <p>DULU Sarl complies with Facebook's commercial policies. Any interaction via Facebook Shop is also subject to the platform's rules. In case of conflict between these TCS and Facebook's rules, the latter will prevail for orders placed on the platform.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CGV;