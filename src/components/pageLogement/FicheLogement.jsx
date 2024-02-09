import React from 'react';
import { useParams, Navigate } from "react-router-dom";
import DataLogements from "../../datas/logements.json";
import Tag from "./Tag";
import Collapse from "../collapse/Collapse";
import Carrousel from "./Carrousel";
import Rating from "./Rating";
import Host from "./Host";

function FicheLogement () {
    const { id } = useParams();
    const ficheLogement = DataLogements.find((logement) => logement.id === id);
    const tagsLogement = ficheLogement?.tags.map((tags, i) => {
        return <Tag key={i} name={tags} />;
    });
    const equipements = ficheLogement?.equipments.map((equipment, i) => {
        return (
            <ul key={i}>
                <li>{equipment}</li>
            </ul>
        )
    });
    return (
        <div>
            {ficheLogement ? (
                <div className='ficheContainer'>
                    <Carrousel slides={ficheLogement?.pictures} />
                    <section className='ficheLogement'>
                        <div className='description'>
                            <div className='description__titletags'>
                                <div className='description__titletags__title'>
                                    <span className='description__titletags__title__font'>{ficheLogement?.title}</span>
                                    <span className='description__titletags__title__place'>
                                        {ficheLogement?.location}
                                    </span>
                                </div>
                                <div className='description__titletags__tags'>
                                    {tagsLogement}
                                </div>
                            </div>
                            <div className='description__host'>
                                <div className='description__host__name'>
                                    <Host name={ficheLogement?.host.name} picture={ficheLogement?.host.picture} />
                                </div>
                                <div className='description__host__rating'>
                                    <Rating score={ficheLogement.rating} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='descriptionCollapse'>
                        <div className='descriptionCollapse__description'>
                            <Collapse title="Description" content={ficheLogement?.description} />
                        </div>
                        <div className='descriptionCollapse__equipments'>
                            <Collapse title="Équipements" content={equipements} />
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate replace to="/404" />
            )}
        </div>
    )
}

export default FicheLogement;