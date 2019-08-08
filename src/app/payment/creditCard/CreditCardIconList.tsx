import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import CreditCardIcon from './CreditCardIcon';

export const SUPPORTED_CARD_TYPES = [
    'american-express',
    'diners-club',
    'discover',
    'jcb',
    'maestro',
    'mastercard',
    'unionpay',
    'visa',
];

export interface CreditCardIconListProps {
    selectedCardType?: string;
    cardTypes: string[];
}

const CreditCardIconList: FunctionComponent<CreditCardIconListProps> = ({
    selectedCardType,
    cardTypes,
}) => {
    const filteredCardTypes = cardTypes
        .filter(type => SUPPORTED_CARD_TYPES.indexOf(type) !== -1);

    if (!filteredCardTypes.length) {
        return null;
    }

    return (
        <ul className="creditCardTypes-list">
            { filteredCardTypes.map(type => (
                <li
                    key={ type }
                    className={ classNames(
                        'creditCardTypes-list-item',
                        { 'is-active': selectedCardType === type },
                        { 'not-active': selectedCardType && selectedCardType !== type}
                    )}
                >
                    <span className="cardIcon">
                        <CreditCardIcon cardType={ type } />
                    </span>
                </li>
            )) }
        </ul>
    );
};

export default CreditCardIconList;
