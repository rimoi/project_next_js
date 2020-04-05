import React from 'react';
import Input from "./Input";
import Button from "./Button";

const formatDate = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const cancelContract = (element) => {
    if ('accept' ===  element){
        document.getElementById('accept-end-contract').className = 'btn btn-primary btn-lg';
        document.getElementById('undo-end-contract').className = 'btn btn-default btn-lg';

        document.getElementById('notice').classList.remove('d-none');
        document.getElementById('notice').className = 'alert alert-success';
        document.getElementById('notice').innerText = `Votre résiliation a bien été prise en compte !`;
    } else if ('undo' === element) {
        document.getElementById('accept-end-contract').className = 'btn btn-default btn-lg';
        document.getElementById('undo-end-contract').className = 'btn btn-primary btn-lg';

        document.getElementById('notice').classList.remove('d-none');
        document.getElementById('notice').className = 'alert alert-success';
        document.getElementById('notice').innerText = `Votre demande a bien été prise en compte !`;
    }
}

const handleChange = (element) => {
   if ('now' ===  element){
       document.getElementById('activation-date').value = formatDate();
   } else if ('later' === element) {
       document.getElementById('activation-date').value = 'yyyy-mm-jj';
   }
}

const Body = () => (
    <>
        <section className="date-activation">
            <p>Date d'activation de mes garanties EasyBlue</p>
            <div className="custom-control custom-radio my-3">
                <Input type='radio' classInput="custom-control-input" classLabel="custom-control-label" id='activation-now' name='radio-stacked' text="Je souhaite que ma protect soit active immédiatement à la fin de la souscription." onChange={handleChange} element="now" />
            </div>
            <div className="custom-control custom-radio my-3">
                <Input type='radio' classInput="custom-control-input" classLabel="custom-control-label" id='activation-later' name='radio-stacked' text="Je souhaite que ma protection soit activée à une date ultèrieure à la souscription." onChange={handleChange} element="later"/>
            </div>
            <div className="exploitation-date">
                <div className="text-muted mt-6">Date d'exploitation</div>
                <div className="d-inline">
                    <Input type='date' classInput="form-control my-1" classLabel="" id="activation-date" name='activation-date'  text="" onChange={handleChange} element="activation-date" />
                </div>
            </div>
            <div className="spacing">
                <h6 className="my-6">Résilier votre ancien contrat d'assurance</h6>
                <p>Le courier sera envoyé en AR par EasyBlue en votre nom. Vous recevez l'accusé de réception à votre adresse. Nous attirons votre attention sur le respect du délai de préavis, à défaut l'assureur pourrait refuser la résiliatio pour l'année en cours.</p>
            </div>
            <div className="spacing">
                <p className="text-muted my-4">Souhaitez-vous que EasyBlue procède la résilation de votre contrat d'assurance en cours ?</p>
                <div>
                    <Button classButton="btn btn-default btn-lg" id="accept-end-contract" text="Oui" onCancel={cancelContract} element="accept" />
                    &nbsp;
                    <Button classButton="btn btn-default btn-lg" id="undo-end-contract" text="Non" onCancel={cancelContract} element="undo" />
                    &nbsp;&nbsp;
                    <span className="d-none" id="notice"></span>
                </div>
            </div>
            <div className="spacing">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="text-muted mt-6">Nom de l'assureur</div>
                        <Input type='text' classInput="form-control" classLabel="" id="name-insurer" name='name-insurer'  text="" onChange={handleChange} element="name-insurer" />
                    </div>
                    <div className="col-lg-4">
                        <div className="text-muted mt-6">Nº de contrat</div>
                        <Input type='number' classInput="form-control" classLabel="" id="contrat" name='contrat'  text="" onChange={handleChange} element="contrat" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="text-muted mt-6">Date d'échéance</div>
                        <Input type="date" classInput="form-control" classLabel="" id="due-date" name='due-date'  text="" onChange={handleChange} element="due-date" />
                    </div>
                    <div className="col-lg-3">
                        <div className="text-muted mt-6">Durée de préavis(jours)</div>
                        <Input type="number" classInput="form-control" classLabel="" id="period-notice" name='period-notice'  text="" onChange={handleChange} element="period-notice" />
                    </div>
                </div>
            </div>
            <div className="spacing">
                <div className="row">
                    <div className="col-lg-6 text-left">
                        <Button classButton="btn btn-default btn-radious" id="previous-page" text="<" onCancel={cancelContract} element="previous-page" />
                    </div>
                    <div className="col-lg-6 text-right">
                        <Button classButton="btn btn-primary" id="next-page" text="CONTINUER &nbsp;&nbsp;&nbsp; >" onCancel={cancelContract} element="next-page" />
                    </div>
                </div>
            </div>
        </section>

        <style jsx>{`
            .date-activation {
                background-color: #fff;
            }
            .exploitation-date {
                margin: 30px 80% 50px 0;
            }
            .spacing {
                margin: 50px 0;
            }
            #previous-page {
                border: 1px solid black !important;
                border-radius: 43% !important;
            }
        `}</style>
    </>
);

export default Body;
