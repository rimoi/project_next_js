export default (req, res) => {
    if (req.method === 'GET') {
        return res.json({
            'breadcrumb': [
                { key: 'my_company', content: 'Mon entreprise' },
                { key: 'about_me', content: 'À propos de moi' },
                { key: 'my_offer', content: 'Résumé de l\'offre' },
                { key: 'pay_sign', content: 'Paiement et signature' },
            ],
            about_me:     {
                'title':    `Date d'activation de vos garanties Easyblue`,
                'subtitle': 'Veuillez nous indiquer la date à laquelle vous souhaitez démarrer votre couverture'
            }
        });
    } else {
        return res.status(405).send('Invalid method');
    }
}
