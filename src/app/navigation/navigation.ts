import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'dashboard',
        title    : 'Dashboard',
        type     : 'item',
        icon     : 'home',
        url      : '/dashboard',
    },
    {
        id       : 'beneficiaries',
        title    : 'Beneficiaries',
        type     : 'item',
        icon     : 'local_parking',
        url      : 'beneficiary/list',

    },
    {
        id       : 'cardServices',
        title    : 'Card Services',
        type     : 'item',
        icon     : 'device_hub',
        url      : '/pages/card-services',

    },
       {
        id       : 'cardless',
        title    : 'Cardless',
        type     : 'item',
        icon     : 'home',
        url      : '/pages/cardless',

    },
    {
        id       : 'financeServices',
        title    : 'Finance Services',
        type     : 'item',
        icon     : 'device_hub',
        url      : '/pages/card-services',
        classes  : 'mt-48'

    },
    {
        id       : 'investmentServices',
        title    : 'Investment Services',
        type     : 'item',
        icon     : 'device_hub',
        url      : '/pages/card-services',

    },
    {
        id       : 'goldServices',
        title    : 'Gold Services',
        type     : 'item',
        icon     : 'device_hub',
        url      : '/pages/card-services',

    },
    {
        id       : 'cheque',
        title    : 'Cheques',
        type     : 'item',
        icon     : 'event_note',
        url      : '/pages/pricing-plan',

    },
    {
        id       : 'xpress',
        title    : 'KFH Xpress',
        type     : 'item',
        icon     : 'account_balance_wallet',
        url      : '/pages/sale',

    },
    {
        id       : 'other',
        title    : 'Other Services',
        type     : 'item',
        icon     : 'attach_money',
        url      : '/pages/transaction',
        classes  : 'mt-48'


    }

    // {
    //     id       : 'applications',
    //     translate: 'NAV.APPLICATIONS',
    //     type     : 'group',
    //     children : [
    //         {
    //             id       : 'sample',
    //             title    : 'Sample',
    //             translate: 'NAV.SAMPLE.TITLE',
    //             type     : 'item',
    //             icon     : 'email',
    //             url      : '/sample',
    //             badge    : {
    //                 title    : '25',
    //                 translate: 'NAV.SAMPLE.BADGE',
    //                 bg       : '#F44336',
    //                 fg       : '#FFFFFF'
    //             }
    //         }
    //     ]
    // }
];
