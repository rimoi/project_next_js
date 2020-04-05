import React from 'react';

const Header = () => (
    <>
        <ul>
            <li><span className="badge badge-pill badge-primary">1</span> Mon entreprise</li>
            <li className="text-muted"><span className="badge badge-pill badge-dark">2</span> A propos de moi</li>
            <li className="text-muted"><span className="badge badge-pill badge-secondary">3</span> A propos de moi</li>
            <li className="text-muted"><span className="badge badge-pill badge-secondary">4</span> Résumé de l'offre</li>
        </ul>
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                 aria-valuemax="100">
            </div>
        </div>
        <div className="text-center under-header">
            Date d'activation de vos garanties EasyBlue
            <div className="text-muted">Veuillez nous indiquer la date à laquelle vous souhaitez démarrer votre couverture.</div>
        </div>

        <style jsx>{`
        ul {
        min-width: 696px;
        list-style: none;
        padding-top: 20px;
        }
        ul li {
            display: inline;
            padding: 4%;
        }
        .progress {
            height: 0.3rem;
        }
        .progress-bar {
            width: 40%;
        }
        .under-header {
            margin: 23px;
        }
    `}</style>
    </>
);

export default Header;
